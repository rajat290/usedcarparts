import { ShieldCheck, Truck, Wrench, Headset } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const trustItems = [
  {
    title: "Quality Tested Parts",
    description: "Every OEM part is inspected for fit, function, and durability before shipping.",
    icon: ShieldCheck,
  },
  {
    title: "Warranty Coverage",
    description: "Drive with confidence knowing your replacement part includes warranty support.",
    icon: Wrench,
  },
  {
    title: "Fast Nationwide Shipping",
    description: "Quick dispatch and trusted carriers help get your part to your doorstep fast.",
    icon: Truck,
  },
  {
    title: "Expert Support Team",
    description: "Our parts specialists guide you to the exact match for your vehicle.",
    icon: Headset,
  },
];

export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/websiteImages/bg-2.jpg')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Drivers Choose Us"
            title="Trusted Source for Reliable Used OEM Auto Parts"
            description="Built for value, quality, and peace of mind every step of your repair journey."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.03}>
                <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg">
                  <div className="inline-flex rounded-xl bg-primary/15 p-3 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-secondary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

