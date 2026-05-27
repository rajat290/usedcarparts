import { Mail, PhoneCall } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function FaqCTA() {
  return (
    <section className="bg-white py-18 sm:py-20">
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-lg border border-border bg-slate-900 p-7 text-white shadow-xl shadow-slate-900/15 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                Still Need Help?
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Send us your vehicle details and part request.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Our team can help confirm fitment, quote available inventory, and explain shipping
                or warranty details before you order.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="tel:7705984665" size="lg" className="gap-2">
                <PhoneCall size={18} />
                Call Now
              </Button>
              <Button
                href="mailto:delpaenterprise@gmail.com"
                variant="outline"
                size="lg"
                className="gap-2 border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              >
                <Mail size={18} />
                Email Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

