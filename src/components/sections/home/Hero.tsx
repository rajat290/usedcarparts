import Button from "@/components/ui/Button";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.98),rgba(31,41,55,0.88),rgba(215,50,45,0.48))]" />
      <div className="absolute bottom-0 right-0 h-48 w-48 border-l border-t border-white/10 sm:h-72 sm:w-72" />
      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-rise">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Premium Quality</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Used OEM Car Parts You Can Trust
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Affordable, tested replacements for every make and model. Find the part you need with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#vehicle-selector" size="lg">
                Find A Part Now
              </Button>
              <Button href="tel:7705984665" variant="outline" size="lg" className="border-white/40 bg-white/5 text-white hover:bg-white/10">
                Call (770) 598-4665
              </Button>
            </div>
          </div>

          <div
            id="vehicle-selector"
            className="animate-rise-delay-1"
          >
            <VehicleSelectorForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

