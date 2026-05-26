import { ShieldCheck, Truck, Search } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "60 Days Warranty",
    description: "We provide a warranty on most Parts Central type products, with extensions available for extra peace of mind.",
    bullets: [
      "Warranty available on most Parts Central type parts.",
      "Extended coverage offered on many products at competitive prices.",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Free Shipping",
    description: "Quick, reliable shipping across the continental U.S. so your replacement part arrives when you need it.",
    bullets: [
      "We ship used auto and truck parts anywhere in the U.S.",
      "Free shipping within the contiguous 48 US states.",
    ],
    icon: Truck,
  },
  {
    title: "Search All Brands",
    description: "Find the right OEM part for domestic and foreign vehicles with a wide brand catalog and fast sourcing.",
    bullets: [
      "From aftermarket or replacement parts, we help you find the best.",
      "Find offers for all brands and models in one place.",
    ],
    icon: Search,
  },
];

export default function Services() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Millions of Quality Used OEM Parts"
            description="We help you source the right part quickly with service benefits designed for confidence and convenience."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="group rounded-3xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-secondary">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                  <ul className="mt-5 space-y-3 text-sm text-muted">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
