import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Engines for Sale | Parts Central",
  description:
    "Shop quality used OEM engines with nationwide shipping, inspection, and reliable performance from Parts Central of Georgia.",
};

export default function UsedEnginesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.95),rgba(31,41,55,0.85),rgba(249,115,22,0.2))]" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="relative z-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Used Engines
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Trusted Used Engines for Sale
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Save big on inspected OEM engines built for power and durability.
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
              <h2 className="text-3xl font-bold">Reliable Used Engines for Sale</h2>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                Discover high-quality OEM engines that deliver both power and savings. Our used engines for sale are thoroughly inspected, tested, and ready to perform.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Revive Your Vehicle's Performance</h3>
                <p className="text-slate-300 leading-7">
                  Bring new life to your engine with a dependable, well-matched unit. Our inventory includes affordable used engines and remanufactured car engines, all sourced and tested to restore performance quickly.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Thoroughly Inspected and Tested Engines</h3>
                <p className="text-slate-300 leading-7">
                  Every engine in our inventory undergoes detailed inspection and testing to ensure operational integrity. Only reputable units meeting strict standards are listed.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Save Big on OEM Engine Assemblies</h3>
                <p className="text-slate-300 leading-7">
                  Get the exact OEM fit and system compatibility at a fraction of the cost. Used engines typically cost 50-70% less than new units, making them a smart, budget-friendly choice.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Nationwide Shipping on Used Engines</h3>
                <p className="text-slate-300 leading-7">
                  Wherever you are in the U.S., we deliver your engine quickly, safely, and reliably.
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">Why Choose Our Used Engines</h3>
              <div className="space-y-4 text-slate-300 leading-7">
                <div>
                  <h4 className="text-xl font-semibold">OEM Quality & Compatibility</h4>
                  <p>Exact fit and performance as the original engine.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Rigorous Testing for Performance</h4>
                  <p>Each engine is certified for functionality and durability.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Cost Efficiency</h4>
                  <p>Save up to 50% compared to new engines without sacrificing quality.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Environmentally Responsible</h4>
                  <p>Choosing recycled engines conserves resources and reduces waste.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">How It Works – Quick and Transparent</h3>
              <ol className="space-y-3 pl-6 text-slate-300 marker:text-amber-300">
                <li>1. Enter your vehicle details and engine preference.</li>
                <li>2. We find your match from our inventory.</li>
                <li>3. Receive your quote quickly.</li>
                <li>4. Confirm your quote, and we ship your engine directly to you.</li>
              </ol>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">Get Your Engine and Get Going</h3>
              <p className="text-slate-300 leading-7">
                Ready to restore your vehicle's power? Submit your vehicle details using our quick form. Our team will find the best used engines, provide a fast quote, and deliver it straight to your door.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
