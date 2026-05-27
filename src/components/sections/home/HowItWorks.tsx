import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Share Vehicle Details",
    description: "Tell us your year, make, model, and the exact part you need using our quick form.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get an Exact Match",
    description: "We verify our inventory and source the right OEM replacement for your vehicle.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Approve Your Quote",
    description: "Receive transparent pricing and a delivery estimate before you commit to anything.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Fast Delivery",
    description: "Your part ships quickly with nationwide coverage and expert support along the way.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 border-t border-white/5">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/websiteImages/bg-6.jpg')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50" />

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
              How It Works
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A Simple 4-Step Process
            </h2>
            <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto">
              From request to delivery — we keep everything transparent and hassle-free.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <article className="group relative flex flex-col h-full rounded-2xl border border-white/8 bg-slate-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/25 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-cyan-500/8">

                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-2.5 top-10 hidden h-px w-5 bg-gradient-to-r from-white/20 to-transparent lg:block z-10" />
                )}

                {/* Number badge */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 text-sm font-extrabold text-white shadow-lg shadow-cyan-500/25">
                    {step.number}
                  </div>
                  <div className="h-px flex-1 bg-white/8" />
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-slate-700/50 text-slate-300 transition-colors duration-300 group-hover:border-cyan-500/25 group-hover:text-cyan-400">
                  {step.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
