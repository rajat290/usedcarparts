import Image from "next/image";
import { CheckCircle2, PackageCheck, ShieldCheck } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  {
    label: "OEM Fitment",
    icon: CheckCircle2,
  },
  {
    label: "Inspected Parts",
    icon: ShieldCheck,
  },
  {
    label: "Nationwide Shipping",
    icon: PackageCheck,
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.98),rgba(31,41,55,0.9),rgba(215,50,45,0.48))]" />
      <div className="absolute bottom-0 right-0 h-44 w-44 border-l border-t border-white/10 sm:h-72 sm:w-72" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              About Parts Central
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Quality used OEM auto parts with support you can count on.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Parts Central of Georgia helps drivers, repair shops, and vehicle owners find dependable used
              engines, transmissions, and auto parts without the guesswork.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Request A Quote
              </Button>
              <Button
                href="tel:7705984665"
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/5 text-white hover:bg-white/10"
              >
                Call (770) 598-4665
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-lg border border-white/15 bg-white/8 p-4 shadow-2xl shadow-black/25 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-white p-5 text-secondary">
                  <Image
                    src="/parts/engine-assembly.svg"
                    alt="Used engine assembly"
                    width={150}
                    height={150}
                    className="mx-auto h-28 w-28"
                    priority
                  />
                  <h2 className="mt-4 text-xl font-bold">Used OEM Engines</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Sourced for fit, condition, and dependable performance.
                  </p>
                </div>
                <div className="rounded-md bg-white p-5 text-secondary">
                  <Image
                    src="/parts/transmission.svg"
                    alt="Used transmission"
                    width={150}
                    height={150}
                    className="mx-auto h-28 w-28"
                    priority
                  />
                  <h2 className="mt-4 text-xl font-bold">Used Transmissions</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Matched to your vehicle and backed by clear support.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-3 text-sm font-semibold text-white"
                    >
                      <Icon size={17} className="text-amber-300" />
                      {item.label}
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
