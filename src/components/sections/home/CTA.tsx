import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="bg-secondary py-16 text-white sm:py-20">
      <Container>
        <div className="animate-rise rounded-lg border border-white/15 bg-white/5 p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Need Help Fast?</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Find the Right OEM Part Without the Guesswork
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Talk to our team for quick compatibility checks, fair quotes, and delivery timelines you can trust.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="tel:7705984665" size="lg">
              Call (770) 598-4665
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              Request a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

