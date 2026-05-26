import { Mail, MapPin, PhoneCall } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const quickActions = [
  {
    label: "Call our parts team",
    value: "(770) 598-4665",
    href: "tel:7705984665",
    icon: PhoneCall,
  },
  {
    label: "Email support",
    value: "delpaenterprise@gmail.com",
    href: "mailto:delpaenterprise@gmail.com",
    icon: Mail,
  },
  {
    label: "Visit our office",
    value: "8735 Dunwoody Pl Ste R Atlanta, GA 30350, USA",
    href: "https://www.google.com/maps/search/?api=1&query=8735+Dunwoody+Pl+Ste+R+Atlanta+GA+30350",
    icon: MapPin,
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.98),rgba(31,41,55,0.88),rgba(215,50,45,0.5))]" />
      <div className="absolute bottom-0 right-0 h-40 w-40 border-l border-t border-white/10 sm:h-64 sm:w-64" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            Contact Parts Central
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Need the right used OEM part? Talk to our team.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Send your vehicle details, call for fast help, or email us for compatibility checks,
            pricing, warranty support, and shipping timelines.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="tel:7705984665" size="lg">
              Call Now
            </Button>
            <Button
              href="#contact-form"
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/5 text-white hover:bg-white/10"
            >
              Send A Message
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {quickActions.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 0.04}>
                <a
                  href={item.href}
                  className="group flex h-full gap-4 rounded-lg border border-white/15 bg-white/8 p-5 shadow-lg shadow-black/15 backdrop-blur transition hover:-translate-y-1 hover:bg-white/12"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-primary">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-300">{item.label}</span>
                    <span className="mt-1 block break-words text-base font-bold text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
