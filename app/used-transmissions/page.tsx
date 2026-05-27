import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Transmissions for Sale | Parts Central",
  description:
    "Find affordable used transmissions with OEM fit, warranty options, and nationwide shipping from Parts Central of Georgia.",
};

export default function UsedTransmissionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.95),rgba(31,41,55,0.85),rgba(16,185,129,0.25))]" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="relative z-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Used Transmissions
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Quality Used Transmissions for Sale
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Affordable OEM-fit replacements, tested for performance and backed by warranty.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#vehicle-selector" size="lg" className="rounded-full px-8 py-4 uppercase tracking-[0.1em]">
                  Find A Part Now
                </Button>
                <Button href="tel:7705984665" variant="outline" size="lg" className="rounded-full px-8 py-4 uppercase tracking-[0.1em]">
                  Call (770) 598-4665
                </Button>
              </div>
            </div>

            <div id="vehicle-selector" className="relative z-10 rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/40 sm:p-8">
              <VehicleSelectorForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 text-slate-100">
        <Container className="py-16 sm:py-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Trusted Used Transmissions for Sale</h2>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                Find reliable, high-performance used transmissions for sale that perfectly match your vehicle's needs. Each unit is thoroughly tested to ensure quality while being priced to save you money.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Affordable OEM Replacements, Tested for Performance</h3>
                <p className="text-slate-300 leading-7">
                  Our used transmissions provide the same OEM-level fit and function as new units but at a fraction of the cost. Every transmission is tested for performance before sale, giving you peace of mind.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Smooth Shifting Reliability</h3>
                <p className="text-slate-300 leading-7">
                  Restore smooth gear changes and consistent performance with carefully chosen units. Each transmission meets strict quality standards for dependable operation on every drive.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Save on OEM Used Transmissions</h3>
                <p className="text-slate-300 leading-7">
                  Choosing a used transmission can save 50-70% compared to new ones without sacrificing fit or performance. It's the smart choice for drivers seeking both quality and value.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Warranty and Quality Guarantee</h3>
                <p className="text-slate-300 leading-7">
                  We back our transmissions with clear warranty options and simple return policies for extra confidence in your purchase.
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">Why Choose Our Transmissions</h3>
              <div className="space-y-4 text-slate-300 leading-7">
                <div>
                  <h4 className="text-xl font-semibold">Cost Savings</h4>
                  <p>Major savings make repairs more affordable.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">OEM Fit and Reliability</h4>
                  <p>Same precision and performance as factory units.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Tested Quality</h4>
                  <p>Every transmission is evaluated to deliver lasting performance.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Eco-Friendly Choice</h4>
                  <p>Reusing transmissions reduces manufacturing waste.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">How It Works – Fast, Clear, Efficient</h3>
              <ol className="space-y-3 pl-6 text-slate-300 marker:text-amber-300">
                <li>1. Enter your vehicle's make, model, year, and transmission type.</li>
                <li>2. We locate the exact match from our inventory.</li>
                <li>3. You receive a quick, personalized price and availability estimate.</li>
                <li>4. Once confirmed, we ship the transmission promptly and securely.</li>
              </ol>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">Get Back on the Road with Confidence</h3>
              <p className="text-slate-300 leading-7">
                Bring your vehicle back to peak performance with a quality used transmission. Fill out the quick form with your details, and we'll match you to the ideal unit and send your quote fast.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
