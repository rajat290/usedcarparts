import { FileText, Mail, PhoneCall } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type PolicySection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated?: string;
  sections: PolicySection[];
};

export default function PolicyPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: PolicyPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-white text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_40%)]" />
        <div className="absolute bottom-0 right-0 h-44 w-44 border-l border-t border-slate-200 sm:h-72 sm:w-72" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 text-red-600">
              <FileText size={24} />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {description}
            </p>
            {lastUpdated ? (
              <p className="mt-5 text-sm font-semibold text-slate-500">Last updated: {lastUpdated}</p>
            ) : null}
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <Reveal>
              <article className="rounded-lg border border-border bg-white p-6 shadow-sm sm:p-8">
                <div className="space-y-10">
                  {sections.map((section) => (
                    <section key={section.title}>
                      <h2 className="text-2xl font-bold leading-tight text-secondary">
                        {section.title}
                      </h2>
                      {section.body?.map((paragraph) => (
                        <p key={paragraph} className="mt-4 text-sm leading-7 text-muted sm:text-base">
                          {paragraph}
                        </p>
                      ))}
                      {section.bullets ? (
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-muted sm:text-base">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.04}>
              <aside className="rounded-lg border border-border bg-white p-6 shadow-sm lg:sticky lg:top-28">
                <h2 className="text-lg font-bold text-secondary">Need help?</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Contact Parts Central of Georgia for questions about orders, shipping, warranty,
                  returns, or account information.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href="tel:7705984665"
                    className="flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                  >
                    <PhoneCall size={17} />
                    Call Support
                  </a>
                  <a
                    href="mailto:delpaenterprise@gmail.com"
                    className="flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-semibold text-secondary shadow-sm transition hover:bg-slate-50"
                  >
                    <Mail size={17} />
                    Email Us
                  </a>
                </div>
                <div className="mt-6 border-t border-border pt-5 text-sm leading-7 text-muted">
                  <p className="font-semibold text-secondary">Parts Central of Georgia LLC</p>
                  <p className="mt-2">8735 Dunwoody Pl Ste R Atlanta, GA 30350, USA</p>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

