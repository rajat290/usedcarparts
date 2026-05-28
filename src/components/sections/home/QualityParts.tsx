import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const parts = [
  {
    title: "Engine Assembly",
    description:
      "Complete OEM engine assemblies professionally inspected, tested, and ready for long-term performance.",
    image: "/parts/Engine_Assembly (2).jpg",
    href: "/used-engines",
    specs: ["OEM Certified", "Warranty Included", "Performance Tested"],
    badge: "Featured",
  },
  {
    title: "Transmission",
    description:
      "Precision matched used transmissions engineered for seamless shifting and reliability.",
    image: "/parts/Transmission.png",
    href: "/used-transmissions",
    specs: ["Smooth Shifting", "Low Mileage", "Road Tested"],
    badge: "Top Rated",
  },
  {
    title: "ABS Module",
    description:
      "OEM ABS modules verified for compatibility and dependable braking performance.",
    image: "/parts/ABS Module.png",
    href: "/used-auto-parts",
    specs: ["Compatibility Checked", "OEM Verified"],
    badge: "OEM",
  },
  {
    title: "ABS System",
    description:
      "Reliable braking systems inspected for safety, fitment, and everyday durability.",
    image: "/parts/ABS System.png",
    href: "/used-auto-parts",
    specs: ["Dependable Braking", "Fast Shipping"],
    badge: "Safety",
  },
  {
    title: "Spindle Knuckle - Front",
    description:
      "Stable suspension and steering geometry components engineered for perfect alignment.",
    image: "/parts/spindle.png",
    href: "/used-auto-parts",
    specs: ["Stable Fitment", "OEM Geometry"],
    badge: "Precision",
  },
  {
    title: "Head Light Assembly",
    description:
      "Premium OEM lighting assemblies designed for durability and maximum visibility.",
    image: "/parts/head_light_assembly.png",
    href: "/used-auto-parts",
    specs: ["Road Ready", "Crystal Visibility"],
    badge: "Lighting",
  },
];

const cardStyles = [
  {
    // FEATURED
    grid: "md:col-span-2",
    image: "h-[260px] sm:h-[300px] lg:h-[340px]",
    title: "text-3xl sm:text-4xl",
    glow: "from-cyan-400/30 via-sky-400/10 to-transparent",
  },
  {
    // TRANSMISSION
    grid: "",
    image: "h-[220px] lg:h-[260px]",
    title: "text-2xl sm:text-3xl",
    glow: "from-sky-400/30 via-cyan-400/10 to-transparent",
  },
  {
    // ABS MODULE
    grid: "",
    image: "h-[170px]",
    title: "text-xl",
    glow: "from-indigo-400/20 via-cyan-400/10 to-transparent",
  },
  {
    // ABS SYSTEM
    grid: "",
    image: "h-[170px]",
    title: "text-xl",
    glow: "from-cyan-300/20 via-sky-400/10 to-transparent",
  },
  {
    // SPINDLE
    grid: "",
    image: "h-[170px]",
    title: "text-xl",
    glow: "from-slate-300/10 via-cyan-400/10 to-transparent",
  },
  {
    // HEADLIGHT WIDE CARD
    grid: "md:col-span-2",
    image: "h-[190px] sm:h-[220px]",
    title: "text-2xl sm:text-3xl",
    glow: "from-cyan-400/30 via-blue-400/10 to-transparent",
  },
];

export default function QualityParts() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

        {/* GRID TEXTURE */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,209,255,0.08),transparent_35%)]" />
      </div>

      <Container className="relative z-10">
        
        {/* HEADER */}
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            
            {/* TOP BADGE */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-red-600 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_25px_rgba(125,249,255,1)]" />
              Premium OEM Components
            </div>

            <SectionHeading
              title={
                <>
                  Reliable Used Auto Parts,
                  <br />
                  <span className="bg-gradient-to-r from-cyan-200 via-green-400 to-red-700 bg-clip-text text-transparent">
                    engineered for performance.
                  </span>
                </>
              }
              description="Professionally sourced and inspected OEM components with fast nationwide shipping, warranty-backed confidence, and premium reliability."
              align="center"
              theme="dark"
              className="max-w-5xl [&_h2]:text-5xl [&_h2]:font-black [&_h2]:leading-[0.95] [&_h2]:tracking-[-0.04em] sm:[&_h2]:text-6xl lg:[&_h2]:text-7xl [&_p]:mx-auto [&_p]:mt-8 [&_p]:max-w-3xl [&_p]:text-lg [&_p]:leading-8 [&_p]:text-slate-300"
            />
          </div>
        </Reveal>

        {/* GRID */}
        <div className="mt-20 grid auto-rows-[minmax(220px,auto)] gap-6 md:grid-cols-2 xl:grid-cols-4">
          
          {parts.map((part, index) => {
            const style = cardStyles[index];

            return (
              <Reveal
                key={part.title}
                delay={index * 0.05}
                className={style.grid}
              >
                <Link
                  href={part.href}
                  className="group relative block h-full overflow-hidden rounded-[34px]"
                >
                  
                  {/* OUTER GLOW */}
                  <div className="absolute -inset-[1px] rounded-[34px] bg-gradient-to-br from-cyan-400/30 via-white/5 to-transparent opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />

                  {/* CARD */}
                  <article className="relative flex h-full flex-col overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-3 group-hover:border-cyan-300/30 group-hover:bg-white/[0.08]">
                    
                    {/* LIGHT SWEEP */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      <div className="absolute inset-y-0 left-[-120%] w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
                    </div>

                    {/* CARD GLOW */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${style.glow} opacity-70`}
                    />

                    {/* TOP BAR */}
                    <div className="relative z-10 flex items-start justify-between">
                      
                      <div className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-100">
                        {part.badge}
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/10">
                        →
                      </div>
                    </div>

                    {/* IMAGE CONTAINER */}
                    <div
                      className={`relative mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 ${style.image}`}
                    >
                      
                      {/* IMAGE LIGHTING */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(125,249,255,0.22),transparent_40%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.55),transparent_50%)]" />

                      {/* SHADOW */}
                      <div className="absolute bottom-5 left-1/2 h-6 w-[70%] -translate-x-1/2 rounded-full bg-black/70 blur-2xl transition-all duration-700 group-hover:w-[78%] group-hover:bg-cyan-950/70" />

                      {/* IMAGE */}
                      <div className="animate-premium-float relative h-full transition-transform duration-700 group-hover:scale-105">
                        <Image
                          src={part.image}
                          alt={part.title}
                          fill
                          className="object-contain p-6 drop-shadow-[0_35px_45px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 mt-6 flex flex-1 flex-col">
                      
                      {/* TAGS */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {part.specs.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-200 backdrop-blur-xl"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* TITLE */}
                      <h3
                        className={`${style.title} font-black leading-[1] tracking-[-0.03em] text-white`}
                      >
                        {part.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-4 max-w-[90%] text-sm leading-7 text-slate-300">
                        {part.description}
                      </p>

                      {/* FOOTER */}
                      <div className="mt-auto pt-8">
                        <div className="flex items-center justify-between">
                          
                          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200 transition-all duration-300 group-hover:gap-4 group-hover:text-white">
                            View Details
                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                              →
                            </span>
                          </div>

                          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent sm:block" />
                        </div>
                      </div>
                    </div>

                    {/* NOISE */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light [background-image:url('/noise.png')]" />
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal className="mt-16 flex justify-center">
          <Button
            href="/used-auto-parts"
            variant="primary"
            size="xl"
            className="group relative overflow-hidden rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-500 to-sky-500 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_60px_rgba(0,209,255,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_80px_rgba(0,209,255,0.45)]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)] opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100" />
            <span className="relative z-10">Explore More Parts</span>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
