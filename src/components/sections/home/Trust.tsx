import { ShieldCheck, Truck, Wrench, Headset } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const trustItems = [
  {
    title: "Quality Tested Parts",
    description: "Every OEM part is inspected for fit, function, and durability before shipping.",
    icon: ShieldCheck,
    color: "cyan",
  },
  {
    title: "Warranty Coverage",
    description: "Drive with confidence — your replacement part includes 60-day warranty support.",
    icon: Wrench,
    color: "amber",
  },
  {
    title: "Fast Nationwide Shipping",
    description: "Quick dispatch and trusted carriers get your part to your doorstep fast, free.",
    icon: Truck,
    color: "emerald",
  },
  {
    title: "Expert Support Team",
    description: "Our parts specialists guide you to the exact OEM match for your vehicle.",
    icon: Headset,
    color: "violet",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    icon: "text-cyan-400",
    glow: "hover:shadow-cyan-500/10",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    icon: "text-amber-400",
    glow: "hover:shadow-amber-500/10",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
    glow: "hover:shadow-emerald-500/10",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    icon: "text-violet-400",
    glow: "hover:shadow-violet-500/10",
  },
};

export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24">
      {/* Background image subtle overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/websiteImages/bg-5.jpg')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/60" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
              Why Drivers Choose Us
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Trusted Source for Reliable Used OEM Parts
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-7">
              Built for value, quality, and peace of mind every step of your repair journey.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            const c = colorMap[item.color];
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article
                  className={`group relative flex flex-col h-full rounded-2xl border border-white/8 bg-slate-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-slate-800/80 hover:shadow-2xl ${c.glow}`}
                >
                  {/* Icon */}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${c.bg} ${c.border} mb-5 transition-all duration-300`}>
                    <Icon size={22} className={c.icon} />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-400">{item.description}</p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-6 right-6 h-px ${c.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full`} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
