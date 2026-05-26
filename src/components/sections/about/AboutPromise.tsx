import { BadgeCheck, FileText, Gauge, MapPin, ShieldCheck, Truck } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const promises = [
  {
    title: "Exact Match OEM Parts",
    description: "We help confirm the right replacement based on year, make, model, part type, and fitment details.",
    icon: BadgeCheck,
  },
  {
    title: "Verified Condition",
    description: "Parts are checked for quality and condition before they move forward for customer approval.",
    icon: ShieldCheck,
  },
  {
    title: "Nationwide Delivery",
    description: "We support customers across the country with shipping guidance and delivery updates.",
    icon: Truck,
  },
  {
    title: "Clear Warranty Coverage",
    description: "Warranty terms are explained before purchase so you know what support comes with your part.",
    icon: FileText,
  },
  {
    title: "Fast Quote Support",
    description: "Our team keeps the process moving quickly when a repair timeline is tight.",
    icon: Gauge,
  },
  {
    title: "Atlanta-Based Service",
    description: "Parts Central of Georgia serves customers from our Atlanta office with nationwide reach.",
    icon: MapPin,
  },
];

export default function AboutPromise() {
  return (
    <section className="bg-white py-18 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Promise"
            title="Reliable parts, clear communication, and a simpler buying process"
            description="Buying used auto parts should feel straightforward. We focus on fitment, transparency, and dependable support from first quote to final delivery."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.03}>
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
      </Container>
    </section>
  );
}
