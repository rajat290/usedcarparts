import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const parts = [
  {
    title: "Engine Assembly",
    description: "Quality used engine & transmission parts sold as complete assemblies.",
    image: "/parts/Engine_Assembly (2).png",
    href: "/used-engines",
  },
  {
    title: "Transmission",
    description: "Reliable used transmissions matched to your vehicle for smooth performance.",
    image: "/parts/Transmission.png",
    href: "/used-transmissions",
  },
  {
    title: "ABS Module",
    description: "OEM ABS modules inspected for compatibility and dependable braking control.",
    image: "/parts/ABS Module.png",
    href: "/used-auto-parts",
  },
  {
    title: "ABS System",
    description: "Quality used mechanical parts that get you back on the road for less money.",
    image: "/parts/ABS System.png",
    href: "/used-auto-parts",
  },
  {
    title: "Spindle Knuckle - Front",
    description: "Connects suspension components and supports stable steering alignment.",
    image: "/parts/spindle.png",
    href: "/used-auto-parts",
  },
  {
    title: "Head Light Assembly",
    description: "Important component of the car used for safer night visibility.",
    image: "/parts/head_light_assembly.png",
    href: "/used-auto-parts",
  },
];

export default function QualityParts() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Premium Used OEM Parts"
            title="Quality Used Auto Parts"
            description="High-quality used parts with verified fitment, fast sourcing, and nationwide support."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 auto-rows-fr">
          {parts.map((part, index) => (
            <Reveal key={part.title} delay={index * 0.03}>
              <article className="group h-full overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-xl">
                <div className="grid h-full gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                      {part.title}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-secondary sm:text-3xl">
                      {part.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-muted">{part.description}</p>
                    <Link
                      href={part.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-dark"
                    >
                      Know More
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </Link>
                  </div>

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                    <Image src={part.image} alt={part.title} fill className="object-contain" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button
            href="/used-auto-parts"
            variant="primary"
            size="xl"
            className="rounded-full shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:bg-primary-dark active:scale-[0.99] px-8 py-4 uppercase tracking-[0.08em]"
          >
            View More
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

