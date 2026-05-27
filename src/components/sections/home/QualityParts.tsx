import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const parts = [
  {
    title: "Engine Assembly",
    description: "Quality used engine and transmission parts sold as complete assemblies.",
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
    description: "Quality used braking components ready for dependable daily driving.",
    image: "/parts/ABS System.png",
    href: "/used-auto-parts",
  },
  {
    title: "Spindle Knuckle - Front",
    description: "Supports stable steering geometry and suspension alignment integrity.",
    image: "/parts/spindle.png",
    href: "/used-auto-parts",
  },
  {
    title: "Head Light Assembly",
    description: "Improves nighttime visibility with tested OEM fit and durability.",
    image: "/parts/head_light_assembly.png",
    href: "/used-auto-parts",
  },
];

export default function QualityParts() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Popular Parts"
            title="Quality Used Auto Parts"
            description="Hand-picked, inspected OEM components with fast shipping and transparent pricing."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {parts.map((part, index) => (
            <Reveal key={part.title} delay={index * 0.03}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_60%)]" />
                <div className="relative flex h-full flex-col">
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white">
                    <Image src={part.image} alt={part.title} fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{part.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{part.description}</p>
                  <Link href={part.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-300 transition-colors hover:text-red-200">
                    Learn More
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/used-auto-parts" variant="primary" size="xl" className="rounded-full px-9 py-4 uppercase tracking-[0.08em]">
            View More Parts
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
