import Image from "next/image";
import { CheckCircle2, PackageCheck, ShieldCheck } from "lucide-react";

import Button from "@/components/ui/Button";
import SubHero from "@/components/ui/SubHero";

const highlights = [
  { label: "OEM Fitment", icon: CheckCircle2 },
  { label: "Inspected Parts", icon: ShieldCheck },
  { label: "Nationwide Shipping", icon: PackageCheck },
];

export default function AboutHero() {
  return (
    <SubHero
      eyebrow="About Parts Central"
      title="Quality used OEM auto parts with support you can count on."
      description="Parts Central of Georgia helps drivers, repair shops, and vehicle owners find dependable used engines, transmissions, and auto parts without the guesswork."
      actions={
        <>
          <Button href="/contact" size="lg">Request A Quote</Button>
          <Button href="tel:7705984665" variant="outline" size="lg" className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100">
            Call (770) 598-4665
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
