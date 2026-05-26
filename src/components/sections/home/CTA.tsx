import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_10%,rgba(245,158,11,0.22),transparent_55%),radial-gradient(900px_circle_at_82%_30%,rgba(215,50,45,0.25),transparent_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.15),rgba(15,23,42,0.65))]" />
      <Container>
        <Reveal className="relative">
          <div className="rounded-xl border border-white/15 bg-white/6 p-7 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Need Help Fast?</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Find the Right OEM Part Without the Guesswork
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Talk to our team for quick compatibility checks, fair quotes, and delivery timelines you can trust.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="tel:7705984665"
                size="xl"
                className="rounded-full bg-primary text-white shadow-2xl shadow-black/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:bg-primary-dark active:scale-[0.99] px-8 py-4 uppercase tracking-[0.08em]"
              >
                Call (770) 598-4665
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="xl"
                className="rounded-full border-white/30 bg-white/15 text-white shadow-2xl shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/25 active:scale-[0.99] px-8 py-4 uppercase tracking-[0.08em]"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

