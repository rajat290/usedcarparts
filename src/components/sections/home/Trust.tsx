import { ShieldCheck, Truck, Wrench, Headset } from "lucide-react";

import Container from "@/components/ui/Container";
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
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Drivers Choose Us"
          title="Trusted Source for Reliable Used OEM Auto Parts"
          description="Built for value, quality, and peace of mind every step of your repair journey."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="animate-rise rounded-lg border border-border bg-surface p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-md"
              >
                <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-secondary">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

