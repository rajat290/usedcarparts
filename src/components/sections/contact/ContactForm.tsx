"use client";

import { useState } from "react";
import { Mail, PhoneCall, Send } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Status = "idle" | "ready";

const inputClass =
  "h-12 w-full rounded-md border border-border bg-white px-4 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-red-100";

const textareaClass =
  "min-h-36 w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-red-100";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const vehicle = String(formData.get("vehicle") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Contact request from ${name || "Parts Central customer"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Vehicle / Part: ${vehicle}`,
        "",
        message,
      ].join("\n"),
    );

    setStatus("ready");
    window.location.href = `mailto:delpaenterprise@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact-form" className="bg-surface py-18 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Send A Message"
              title="Tell us what you need and we will help confirm the right part"
              description="Include your vehicle year, make, model, part name, and the best way to reach you. A parts specialist will follow up with next steps."
            />

            <div className="mt-8 space-y-4">
              <a
                href="tel:7705984665"
                className="flex items-center gap-4 rounded-lg border border-border bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <PhoneCall size={20} />
                </span>
                <span>
                  <span className="block text-sm text-muted">Call now</span>
                  <span className="block text-base font-bold text-secondary">(770) 598-4665</span>
                </span>
              </a>
              <a
                href="mailto:delpaenterprise@gmail.com"
                className="flex items-center gap-4 rounded-lg border border-border bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/20 text-secondary">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-sm text-muted">Email us</span>
                  <span className="block break-all text-base font-bold text-secondary">
                    delpaenterprise@gmail.com
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-white p-5 shadow-lg shadow-slate-900/5 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Full Name</span>
                  <input className={inputClass} name="name" placeholder="John Smith" required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Email</span>
                  <input className={inputClass} name="email" placeholder="john@example.com" required type="email" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Phone</span>
                  <input className={inputClass} name="phone" placeholder="(123) 456-7890" type="tel" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Vehicle / Part</span>
                  <input className={inputClass} name="vehicle" placeholder="2018 Honda Accord engine" />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-semibold text-secondary">Message</span>
                <textarea
                  className={textareaClass}
                  name="message"
                  placeholder="Tell us the part you need, your vehicle details, and any shipping questions."
                  required
                />
              </label>

              <button
                type="submit"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-white shadow-sm transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
              >
                <Send size={18} />
                Send Message
              </button>

              {status === "ready" ? (
                <p className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                  Your email app is opening with the message ready to send.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
