import Image from "next/image";
import { CheckCircle2, PackageCheck, ShieldCheck } from "lucide-react";

import Button from "@/components/ui/Button";
import SubHero from "@/components/ui/SubHero";

const highlights = [
  { label: "OEM Fitment", icon: CheckCircle2 },
  { label: "Inspected Parts", icon: ShieldCheck },
  { label: "Nationwide Shipping", icon: PackageCheck },
];

const primaryCtaClass =
  "h-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 px-9 text-center text-base font-semibold leading-none uppercase tracking-[0.08em] text-white shadow-xl shadow-cyan-500/35 transition-transform duration-150 after:rounded-xl";

const secondaryCtaClass =
  "h-14 items-center justify-center rounded-xl border border-primary bg-primary px-9 text-center text-base font-semibold leading-none uppercase tracking-[0.08em] text-white shadow-lg shadow-primary/20 transition-transform duration-150 hover:border-primary-dark hover:bg-primary-dark";

export default function AboutHero() {
  return (
    <SubHero
      eyebrow="About Parts Central"
      title="Quality used OEM auto parts with support you can count on."
      description="Parts Central of Georgia helps drivers, repair shops, and vehicle owners find dependable used engines, transmissions, and auto parts without the guesswork."
      actions={
        <>
          <Button href="/contact" variant="secondary" size="lg" className={secondaryCtaClass}>
            <span className="flex h-full items-center justify-center leading-none">Request A Quote</span>
          </Button>
          <Button href="tel:7705984665" size="lg" className={primaryCtaClass}>
            <span className="flex h-full items-center justify-center leading-none">Call (770) 598-4665</span>
          </Button>
        </>
      }
      rightSlot={
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-300/25">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-5 text-slate-900">
              <Image src="/parts/engine-assembly.svg" alt="Used engine assembly" width={150} height={150} className="mx-auto h-28 w-28" priority />
              <h2 className="mt-4 text-xl font-bold">Used OEM Engines</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Sourced for fit, condition, and dependable performance.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-5 text-slate-900">
              <Image src="/parts/transmission.svg" alt="Used transmission" width={150} height={150} className="mx-auto h-28 w-28" priority />
              <h2 className="mt-4 text-xl font-bold">Used Transmissions</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Matched to your vehicle and backed by clear support.</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-800">
                  <Icon size={17} className="text-red-600" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}
