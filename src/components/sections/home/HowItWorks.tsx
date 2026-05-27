import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Share Vehicle Details",
    description: "Tell us your year, make, model, and the part you need.",
  },
  {
    title: "Get Exact Match",
    description: "We verify inventory and source the right OEM replacement.",
  },
  {
    title: "Approve Quote",
    description: "Receive transparent pricing and delivery estimate before checkout.",
  },
  {
    title: "Fast Delivery",
    description: "Your part ships quickly with nationwide coverage and support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-surface py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/websiteImages/bg-4.jpg')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/30 via-white/5 to-white/50" />
      <Container className="relative z-10">
        <Reveal>
          <div className="max-w-3xl text-center text-white">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              How It Works
            </p>
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              A Simple 4-Step Process
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-100 sm:text-base">
              From request to delivery, we keep everything clear and hassle-free.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <article className="group relative rounded-xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
                {index !== steps.length - 1 ? (
                  <span className="pointer-events-none absolute right-6 top-7 hidden h-px w-16 bg-border lg:block" />
                ) : null}
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary ring-1 ring-primary/15 transition-colors duration-300 group-hover:bg-primary/15">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-muted">Step</p>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-secondary">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

