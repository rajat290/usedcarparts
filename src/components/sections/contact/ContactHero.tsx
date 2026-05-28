import { Mail, MapPin, PhoneCall } from "lucide-react";

import Button from "@/components/ui/Button";
import SubHero from "@/components/ui/SubHero";

const quickActions = [
  { label: "Call our parts team", value: "(770) 598-4665", href: "tel:7705984665", icon: PhoneCall },
  { label: "Email support", value: "delpaenterprise@gmail.com", href: "mailto:delpaenterprise@gmail.com", icon: Mail },
  { label: "Visit our office", value: "8735 Dunwoody Pl Ste R Atlanta, GA 30350, USA", href: "https://www.google.com/maps/search/?api=1&query=8735+Dunwoody+Pl+Ste+R+Atlanta+GA+30350", icon: MapPin },
];

const primaryCtaClass =
  "h-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 px-9 text-center text-base font-semibold leading-none uppercase tracking-[0.08em] text-white shadow-xl shadow-cyan-500/35 transition-transform duration-150 after:rounded-xl";

const secondaryCtaClass =
  "h-14 items-center justify-center rounded-xl border border-primary bg-primary px-9 text-center text-base font-semibold leading-none uppercase tracking-[0.08em] text-white shadow-lg shadow-primary/20 transition-transform duration-150 hover:border-primary-dark hover:bg-primary-dark";

export default function ContactHero() {
  return (
    <SubHero
      eyebrow="Contact Parts Central"
      title="Need the right used OEM part? Talk to our team."
      description="Send your vehicle details, call for fast help, or email us for compatibility checks, pricing, warranty support, and shipping timelines."
      actions={
        <>
          <Button href="tel:7705984665" size="lg" className={primaryCtaClass}>
            <span className="flex h-full items-center justify-center leading-none">Call Now</span>
          </Button>
          <Button href="#contact-form" variant="secondary" size="lg" className={secondaryCtaClass}>
            <span className="flex h-full items-center justify-center leading-none">Send A Message</span>
          </Button>
        </>
      }
      rightSlot={
        <div className="grid gap-4 md:grid-cols-1">
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} className="group flex h-full gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-300/20 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-slate-100 text-red-600"><Icon size={20} /></span>
                <span>
                  <span className="block text-sm text-slate-500">{item.label}</span>
                  <span className="mt-1 block break-words text-base font-bold text-slate-900">{item.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      }
    />
  );
}
