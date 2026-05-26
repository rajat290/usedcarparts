import { Clock, Headset, MapPinned, ShieldCheck, Truck } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const supportItems = [
  {
    title: "Parts Quotes",
    description: "Share your year, make, model, and part need for a clear quote from our team.",
    icon: Headset,
  },
  {
    title: "Shipping Support",
    description: "Get help with delivery options, tracking questions, and nationwide shipping timelines.",
    icon: Truck,
  },
  {
    title: "Warranty Questions",
    description: "Ask about warranty coverage, part condition, and what to expect after delivery.",
    icon: ShieldCheck,
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-18 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How We Can Help"
            title="Fast answers for used auto parts, shipping, and fitment"
            description="Our support team helps customers confirm compatibility, compare options, and move quickly when a repair cannot wait."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {supportItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg">
                  <div className="inline-flex rounded-md bg-primary/15 p-3 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-secondary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-secondary text-white">
                  <MapPinned size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-secondary">Parts Central of Georgia LLC</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    8735 Dunwoody Pl Ste R Atlanta, GA 30350, USA
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=8735+Dunwoody+Pl+Ste+R+Atlanta+GA+30350"
                    className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    Open address in maps
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="h-full rounded-lg border border-border bg-secondary p-6 text-white shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent text-secondary">
                  <Clock size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold">Support Hours</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Monday to Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 3:00 PM
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    For urgent part requests, calling is the fastest way to reach us.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
