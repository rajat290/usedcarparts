import { CircleHelp, Headset, ShieldCheck, Truck } from "lucide-react";

import Button from "@/components/ui/Button";
import SubHero from "@/components/ui/SubHero";

const highlights = [
  { label: "Fitment Help", icon: ShieldCheck },
  { label: "Shipping Updates", icon: Truck },
  { label: "Fast Support", icon: Headset },
];

export default function FaqHero() {
  return (
    <SubHero
      eyebrow="Frequently Asked Questions"
      title="Clear answers before you order used OEM parts."
      description="Find quick guidance on fitment, part condition, ordering, nationwide shipping, warranty support, and returns from Parts Central of Georgia."
      actions={
        <>
          <Button href="/contact" size="lg">Ask A Question</Button>
          <Button href="tel:7705984665" variant="outline" size="lg" className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100">Call Support</Button>
        </>
      }
      rightSlot={
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-300/20">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 text-red-600"><CircleHelp size={24} /></span>
          <h2 className="mt-5 text-2xl font-bold text-slate-900">Need a part matched?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Have your year, make, model, VIN, and part name ready. Our team can help verify compatibility before you approve a quote.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                  <Icon className="text-red-600" size={20} />
                  <p className="mt-3 text-sm font-semibold text-slate-900">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}
