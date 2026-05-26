import net from "node:net";
import tls from "node:tls";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type InquiryRequest = {
  year?: string;
  make?: string;
  model?: string;
  part?: string;
  engineSize?: string;
  transmission?: string;
  fullName?: string;
  email?: string;
  zipCode?: string;
  phone?: string;
};

type InquiryData = Required<InquiryRequest>;

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

const placeholderValues = new Set([
  "Select Year",
  "Select Make",
  "Select make first",
  "Select Model",
  "Select Part",
  "Select Engine Size",
  "Select Transmission",
]);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function extractEmailAddress(value: string) {
  const match = value.match(/<([^>]+)>/);
  return match?.[1] ?? value;
}

function formatRequest(data: InquiryData) {
  return [
    ["Year", data.year],
    ["Make", data.make],
    ["Model", data.model],
    ["Part", data.part],
    ["Engine Size", data.engineSize],
    ["Transmission", data.transmission],
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Zip Code", data.zipCode],
    ["Phone", data.phone],
  ];
}

function buildHtml(data: InquiryData, heading: string) {
  const rows = formatRequest(data)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #dbeafe;font-weight:700;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #dbeafe;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;">
      <h2>${escapeHtml(heading)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${rows}
      </table>
    </div>
  `;
}

function buildText(data: InquiryData, heading: string) {
  return [
    heading,
    "",
    ...formatRequest(data).map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

function dotStuff(value: string) {
  return value.replace(/\r?\n\./g, "\r\n..").replace(/\r?\n/g, "\r\n");
}

function encodeHeader(value: string) {
  return value.replace(/\r|\n/g, "");
}

function buildMessage({
  from,
  html,
  replyTo,
  subject,
  text,
  to,
}: {
  from: string;
  html: string;
  replyTo: string;
  subject: string;
  text: string;
  to: string;
}) {
  const boundary = `parts-central-${Date.now()}`;

  return dotStuff(
    [
      `From: ${encodeHeader(from)}`,
      `To: ${encodeHeader(to)}`,
      `Reply-To: ${encodeHeader(replyTo)}`,
      `Subject: ${encodeHeader(subject)}`,
      "MIME-Version: 1.0",
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      'Content-Type: text/plain; charset="UTF-8"',
      "Content-Transfer-Encoding: 7bit",
      "",
      text,
      "",
      `--${boundary}`,
      'Content-Type: text/html; charset="UTF-8"',
      "Content-Transfer-Encoding: 7bit",
      "",
      html,
      "",
      `--${boundary}--`,
      "",
    ].join("\r\n"),
  );
}

function readResponse(socket: net.Socket | tls.TLSSocket) {
  return new Promise<string>((resolve, reject) => {
    let response = "";
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("SMTP response timed out"));
    }, 15000);

    function cleanup() {
      clearTimeout(timeout);
      socket.off("data", onData);
      socket.off("error", onError);
    }

    function onError(error: Error) {
      cleanup();
      reject(error);
    }

    function onData(chunk: Buffer) {
      response += chunk.toString("utf8");
      if (/(^|\r?\n)\d{3} /.test(response)) {
        cleanup();
        resolve(response);
      }
    }

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function expectResponse(
  socket: net.Socket | tls.TLSSocket,
  acceptedCodes: number[],
) {
  const response = await readResponse(socket);
  const code = Number(response.slice(0, 3));

  if (!acceptedCodes.includes(code)) {
    throw new Error(`Unexpected SMTP response: ${code}`);
  }
}

async function sendCommand(
  socket: net.Socket | tls.TLSSocket,
  command: string,
  acceptedCodes: number[],
) {
  socket.write(`${command}\r\n`);
  await expectResponse(socket, acceptedCodes);
}

function connect(config: SmtpConfig) {
  return new Promise<net.Socket | tls.TLSSocket>((resolve, reject) => {
    const socket =
      config.port === 465
        ? tls.connect(config.port, config.host, { servername: config.host })
        : net.connect(config.port, config.host);

    socket.once("connect", () => resolve(socket));
    socket.once("error", reject);
    socket.setTimeout(20000, () => {
      socket.destroy();
      reject(new Error("SMTP connection timed out"));
    });
  });
}

function upgradeToTls(socket: net.Socket, host: string) {
  return new Promise<tls.TLSSocket>((resolve, reject) => {
    const secureSocket = tls.connect({ socket, servername: host }, () => {
      resolve(secureSocket);
    });

    secureSocket.once("error", reject);
  });
}

async function sendMail({
  config,
  html,
  replyTo,
  subject,
  text,
  to,
}: {
  config: SmtpConfig;
  html: string;
  replyTo: string;
  subject: string;
  text: string;
  to: string;
}) {
  let socket = await connect(config);
  const fromAddress = extractEmailAddress(config.from);

  await expectResponse(socket, [220]);
  await sendCommand(socket, "EHLO localhost", [250]);

  if (config.port !== 465) {
    await sendCommand(socket, "STARTTLS", [220]);
    socket = await upgradeToTls(socket as net.Socket, config.host);
    await sendCommand(socket, "EHLO localhost", [250]);
  }

  await sendCommand(socket, "AUTH LOGIN", [334]);
  await sendCommand(socket, Buffer.from(config.user).toString("base64"), [334]);
  await sendCommand(socket, Buffer.from(config.pass).toString("base64"), [235]);
  await sendCommand(socket, `MAIL FROM:<${fromAddress}>`, [250]);
  await sendCommand(socket, `RCPT TO:<${to}>`, [250, 251]);
  await sendCommand(socket, "DATA", [354]);

  socket.write(
    `${buildMessage({
      from: config.from,
      html,
      replyTo,
      subject,
      text,
      to,
    })}\r\n.\r\n`,
  );
  await expectResponse(socket, [250]);
  socket.write("QUIT\r\n");
  socket.end();
}

export async function POST(request: Request) {
  const payload = (await request.json()) as InquiryRequest;
  const data = {
    year: clean(payload.year),
    make: clean(payload.make),
    model: clean(payload.model),
    part: clean(payload.part),
    engineSize: clean(payload.engineSize),
    transmission: clean(payload.transmission),
    fullName: clean(payload.fullName),
    email: clean(payload.email),
    zipCode: clean(payload.zipCode),
    phone: clean(payload.phone),
  };

  const missingField = Object.values(data).some(
    (value) => !value || placeholderValues.has(value),
  );

  if (missingField) {
    return NextResponse.json(
      { message: "Please complete all fields before submitting." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS?.replace(/\s/g, "");
  const mailFrom = process.env.MAIL_FROM ?? smtpUser;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass || !mailFrom || !adminEmail) {
    return NextResponse.json(
      { message: "Email is not configured on the server yet." },
      { status: 500 },
    );
  }

  const config = {
    from: mailFrom,
    host: smtpHost,
    pass: smtpPass,
    port: smtpPort,
    user: smtpUser,
  };

  try {
    await Promise.all([
      sendMail({
        config,
        html: buildHtml(data, "We received your parts request"),
        replyTo: adminEmail,
        subject: "Your parts request was received",
        text: buildText(data, "We received your parts request"),
        to: data.email,
      }),
      sendMail({
        config,
        html: buildHtml(data, "New vehicle parts request"),
        replyTo: data.email,
        subject: `New parts request: ${data.year} ${data.make} ${data.model}`,
        text: buildText(data, "New vehicle parts request"),
        to: adminEmail,
      }),
    ]);
  } catch (error) {
    console.error("Inquiry email failed:", error);
    return NextResponse.json(
      { message: "Email could not be sent. Please check SMTP settings." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message: "Request sent. Please check your email for confirmation.",
  });
}
