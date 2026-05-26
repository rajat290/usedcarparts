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
    image: "/parts/engine-assembly.svg",
    href: "/used-engines",
  },
  {
    title: "Transmission",
    description: "Reliable used transmissions matched to your vehicle for smooth performance.",
    image: "/parts/transmission.svg",
    href: "/used-transmissions",
  },
  {
    title: "ABS Module",
    description: "OEM ABS modules inspected for compatibility and dependable braking control.",
    image: "/parts/abs-module.svg",
    href: "/used-auto-parts",
  },
  {
    title: "ABS System",
    description: "Quality used mechanical parts that get you back on the road for less money.",
    image: "/parts/abs-system.svg",
    href: "/used-auto-parts",
  },
  {
    title: "Spindle Knuckle - Front",
    description: "Connects suspension components and supports stable steering alignment.",
    image: "/parts/spindle-knuckle-front.svg",
    href: "/used-auto-parts",
  },
  {
    title: "Head Light Assembly",
    description: "Important component of the car used for safer night visibility.",
    image: "/parts/head-light-assembly.svg",
    href: "/used-auto-parts",
  },
];

export default function QualityParts() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Quality Used Auto Parts"
            title="Popular Parts We Source Every Day"
            description="Fast matching, verified fit, and warranty-backed support across major makes and models."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((part, index) => (
            <Reveal key={part.title} delay={index * 0.03}>
              <article className="group rounded-xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-white shadow-sm transition-all duration-300 group-hover:border-primary/30">
                    <Image
                      src={part.image}
                      alt={part.title}
                      width={56}
                      height={56}
                      className="h-12 w-12"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-secondary">{part.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted">{part.description}</p>

                <Link
                  href={part.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-dark"
                >
                  Know More
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
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

