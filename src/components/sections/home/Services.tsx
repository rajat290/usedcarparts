import { ShieldCheck, Truck, Search } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    title: "60-Day Warranty",
    description:
      "We stand behind every part we ship. Most Parts Central products include a 60-day warranty, with extended coverage available.",
    bullets: [
      "Warranty on most Parts Central type parts",
      "Extended coverage available at competitive prices",
    ],
    icon: ShieldCheck,
    badge: "Peace of Mind",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Free Shipping",
    description:
      "Quick, reliable shipping across the continental U.S. so your replacement part arrives right when you need it.",
    bullets: [
      "Ships to all 50 US states",
      "Free within the contiguous 48 states",
    ],
    icon: Truck,
    badge: "Free USA",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    title: "Search All Brands",
    description:
      "Find OEM parts for domestic and foreign vehicles. Our catalog covers hundreds of makes, models, and years.",
    bullets: [
      "Domestic & foreign vehicle coverage",
      "Aftermarket and OEM options available",
    ],
    icon: Search,
    badge: "All Makes",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-950 py-24 border-t border-white/5">
      <Container>
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
              Our Services
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Millions of Quality Used OEM Parts
            </h2>
            <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto">
              Source the right part quickly with benefits designed for confidence and convenience.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <article className="group relative flex flex-col h-full rounded-2xl border border-white/8 bg-slate-900/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-slate-900 hover:shadow-2xl hover:shadow-black/40">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-white/10 bg-slate-800 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-slate-700">
                      <Icon size={22} className="text-slate-300" />
                    </div>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm leading-7 text-slate-400 mb-5">{service.description}</p>

                  <ul className="mt-auto space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {bullet}
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
