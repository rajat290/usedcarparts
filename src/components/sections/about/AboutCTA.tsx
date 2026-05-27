import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-18 text-slate-900 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_40%)]" />
      <Container>
        <Reveal className="relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Ready To Find Your Part?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Get help matching the right used OEM part for your vehicle.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Call our team or send your vehicle details and part request. We will help with fitment,
              pricing, warranty information, and shipping expectations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Contact Us
              </Button>
              <Button
                href="tel:7705984665"
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/5 text-slate-900 hover:bg-white/10"
              >
                Call (770) 598-4665
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

