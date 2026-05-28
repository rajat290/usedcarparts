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
    image: "/parts/Engine_Assembly (2).jpg",
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

const cardStyles = [
  {
    grid: "md:col-span-2 md:row-span-2",
    image: "h-64 sm:h-72 lg:h-86",
    title: "text-2xl sm:text-3xl",
    label: "Powertrain Core",
    stat: "Complete OEM assemblies",
    glow: "bg-[radial-gradient(circle,rgba(0,209,255,0.28),rgba(59,130,246,0.08),transparent_62%)]",
  },
  {
    grid: "md:col-span-1 md:row-span-2",
    image: "h-56 lg:h-72",
    title: "text-2xl",
    label: "Precision Match",
    stat: "Smooth shifting",
    glow: "bg-[radial-gradient(circle,rgba(56,189,248,0.24),rgba(6,182,212,0.08),transparent_62%)]",
  },
  {
    grid: "md:col-span-1",
    image: "h-44",
    title: "text-xl",
    label: "Control Module",
    stat: "Compatibility checked",
    glow: "bg-[radial-gradient(circle,rgba(129,140,248,0.24),rgba(6,182,212,0.08),transparent_62%)]",
  },
  {
    grid: "md:col-span-1",
    image: "h-44",
    title: "text-xl",
    label: "Safety Systems",
    stat: "Dependable braking",
    glow: "bg-[radial-gradient(circle,rgba(125,249,255,0.22),rgba(59,130,246,0.08),transparent_62%)]",
  },
  {
    grid: "md:col-span-1",
    image: "h-44",
    title: "text-xl",
    label: "Suspension Geometry",
    stat: "Stable fitment",
    glow: "bg-[radial-gradient(circle,rgba(203,213,225,0.18),rgba(6,182,212,0.08),transparent_62%)]",
  },
  {
    grid: "md:col-span-2",
    image: "h-52 sm:h-60",
    title: "text-2xl",
    label: "Lighting Upgrade",
    stat: "Road-ready visibility",
    glow: "bg-[radial-gradient(circle,rgba(0,209,255,0.26),rgba(251,191,36,0.1),transparent_62%)]",
  },
];

export default function QualityParts() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(0,209,255,0.22),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(125,249,255,0.12),transparent_30%),linear-gradient(135deg,#050816_0%,#0B1220_48%,#020617_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(125,249,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,249,255,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.05)_36%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 shadow-lg shadow-cyan-500/10 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(125,249,255,0.9)]" />
              Premium Used OEM Parts
            </div>
            <SectionHeading
              title={
                <>
                  Quality Used Auto Parts,{" "}
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-transparent">
                    engineered for confidence.
                  </span>
                </>
              }
              description="Professionally sourced and inspected OEM components with fast shipping, warranty-backed confidence, and transparent pricing."
              align="center"
              theme="dark"
              className="max-w-4xl [&_h2]:text-4xl [&_h2]:font-black [&_h2]:tracking-tight sm:[&_h2]:text-5xl md:[&_h2]:text-6xl [&_p]:mx-auto [&_p]:max-w-2xl [&_p]:text-slate-300"
            />
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(290px,auto)] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {parts.map((part, index) => {
            const style = cardStyles[index];

            return (
              <Reveal key={part.title} delay={index * 0.04} className={style.grid}>
                <Link
                  href={part.href}
                  className="group relative block h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-[1px] shadow-2xl shadow-black/35 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-cyan-200/45 hover:shadow-cyan-500/20"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(120deg,transparent,rgba(125,249,255,0.24),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className={`pointer-events-none absolute -inset-20 opacity-80 blur-3xl transition-transform duration-700 group-hover:scale-110 ${style.glow}`} />

                  <article className="relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-1px)] bg-[#0B1220]/72 p-5 ring-1 ring-white/10 sm:p-6">
                    <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-cyan-200/90">
                          {style.label}
                        </p>
                        <div className="mt-3 inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
                          OEM Verified
                        </div>
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-cyan-100 shadow-lg shadow-cyan-500/10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-cyan-300/20">
                        <span aria-hidden="true">-&gt;</span>
                      </span>
                    </div>

                    <div className={`relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 via-white/5 to-transparent ${style.image}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(125,249,255,0.26),transparent_42%),radial-gradient(circle_at_50%_74%,rgba(0,0,0,0.45),transparent_45%)]" />
                      <div className="absolute bottom-6 left-1/2 h-5 w-2/3 -translate-x-1/2 rounded-full bg-black/55 blur-xl transition-all duration-500 group-hover:w-3/4 group-hover:bg-cyan-950/70" />
                      <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      <div className="animate-premium-float relative h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                        <Image
                          src={part.image}
                          alt={part.title}
                          fill
                          className="object-contain p-5 drop-shadow-[0_28px_38px_rgba(0,0,0,0.55)] transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-200/15">
                          {style.stat}
                        </span>
                        <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
                          Fast Shipping
                        </span>
                      </div>
                      <h3 className={`${style.title} font-black leading-tight tracking-tight text-white`}>
                        {part.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{part.description}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-cyan-200 transition-colors group-hover:text-white">
                        View Details
                        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                          -&gt;
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/used-auto-parts" variant="primary" size="xl" className="rounded-full px-9 py-4 uppercase tracking-[0.12em] shadow-cyan-500/30">
            View More Parts
          </Button>
        </Reveal>

        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-2/3 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </Container>
    </section>
  );
}
