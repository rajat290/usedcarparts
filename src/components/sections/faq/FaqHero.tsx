import { CircleHelp, Headset, ShieldCheck, Truck } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  {
    label: "Fitment Help",
    icon: ShieldCheck,
  },
  {
    label: "Shipping Updates",
    icon: Truck,
  },
  {
    label: "Fast Support",
    icon: Headset,
  },
];

export default function FaqHero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.98),rgba(31,41,55,0.9),rgba(215,50,45,0.48))]" />
      <div className="absolute left-0 top-0 h-40 w-40 border-b border-r border-white/10 sm:h-56 sm:w-56" />
      <div className="absolute bottom-0 right-0 h-44 w-44 border-l border-t border-white/10 sm:h-72 sm:w-72" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Frequently Asked Questions
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Clear answers before you order used OEM parts.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Find quick guidance on fitment, part condition, ordering, nationwide shipping,
              warranty support, and returns from Parts Central of Georgia.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Ask A Question
              </Button>
              <Button
                href="tel:7705984665"
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/5 text-white hover:bg-white/10"
              >
                Call Support
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-lg border border-white/15 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white text-primary">
                <CircleHelp size={24} />
              </span>
              <h2 className="mt-5 text-2xl font-bold">Need a part matched?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Have your year, make, model, VIN, and part name ready. Our team can help verify
                compatibility before you approve a quote.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-md border border-white/10 bg-white/8 p-4">
                      <Icon className="text-amber-300" size={20} />
                      <p className="mt-3 text-sm font-semibold text-white">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
