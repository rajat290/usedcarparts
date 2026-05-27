import { Mail, MapPin, PhoneCall } from "lucide-react";

import Button from "@/components/ui/Button";
import SubHero from "@/components/ui/SubHero";

const quickActions = [
  { label: "Call our parts team", value: "(770) 598-4665", href: "tel:7705984665", icon: PhoneCall },
  { label: "Email support", value: "delpaenterprise@gmail.com", href: "mailto:delpaenterprise@gmail.com", icon: Mail },
  { label: "Visit our office", value: "8735 Dunwoody Pl Ste R Atlanta, GA 30350, USA", href: "https://www.google.com/maps/search/?api=1&query=8735+Dunwoody+Pl+Ste+R+Atlanta+GA+30350", icon: MapPin },
];

export default function ContactHero() {
  return (
    <SubHero
      eyebrow="Contact Parts Central"
      title="Need the right used OEM part? Talk to our team."
      description="Send your vehicle details, call for fast help, or email us for compatibility checks, pricing, warranty support, and shipping timelines."
      actions={
        <>
          <Button href="tel:7705984665" size="lg">Call Now</Button>
          <Button href="#contact-form" variant="outline" size="lg" className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100">Send A Message</Button>
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
