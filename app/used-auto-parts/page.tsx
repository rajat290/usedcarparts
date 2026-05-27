import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used OEM Auto Parts for Sale | Parts Central",
  description:
    "Find reliable used OEM auto parts with warranty coverage, fast delivery, and transparent pricing from Parts Central of Georgia.",
};

export default function UsedAutoPartsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Image
            src="/websiteImages/bg-1.jpg"
            alt="Background used auto parts"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.95),rgba(31,41,55,0.85),rgba(99,102,241,0.2))]" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="relative z-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Used Auto Parts
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Used OEM Auto Parts You Can Rely On
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Shop with confidence—quality-tested parts, warranty included, and fast delivery.
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

      <section className="relative overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <Image
            src="/websiteImages/bg-5.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/85" />
        <Container className="relative py-16 sm:py-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Used OEM Auto Parts You Can Trust</h2>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                When your car needs a replacement, you should not have to guess about quality or overpay. At PartsCentral of Georgia, we make buying used OEM auto parts simple, safe, and affordable. Whether you are a car enthusiast or just need your vehicle running again, you will know exactly where to turn.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Your Go-To Source for Reliable Used Auto Parts</h3>
                <p className="text-slate-300 leading-7">
                  From seasoned mechanics and weekend restorers to busy parents and first-time car owners, thousands trust PartsCentral of Georgia for fast access to OEM used auto parts and foreign used auto parts. Even if you are not sure what a part looks like or how it works, we guide you step by step.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
                <h3 className="text-2xl font-semibold">Why PartsCentral of Georgia Makes Sense</h3>
                <div className="space-y-3 text-slate-300 leading-7">
                  <p>1. Reliable Quality Every Time — Every part is inspected and tested before listing.</p>
                  <p>2. Simple Online Shopping — Search by make, model, and year and order parts in minutes.</p>
                  <p>3. Fair and Transparent Pricing — Used parts often cost 50-70% less than new ones.</p>
                  <p>4. Friendly Help When You Need It — Our support team helps you get the right part the first time.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">How It Works</h3>
              <ol className="space-y-3 pl-6 text-slate-300 marker:text-amber-300">
                <li>1. Tell us what you need by providing your vehicle details and the part you want.</li>
                <li>2. We pick the exact match from our inventory.</li>
                <li>3. You receive a clear price and delivery estimate.</li>
                <li>4. We send the part directly to your door with fast and free shipping.</li>
              </ol>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">Buying Used Parts is a Smart Move</h3>
              <ul className="space-y-3 pl-6 text-slate-300 marker:text-amber-300">
                <li>Save money while maintaining quality with affordable used auto parts.</li>
                <li>Get an exact factory fit with many parts being original equipment manufacturer.</li>
                <li>Help the environment by reusing materials and reducing waste.</li>
                <li>Avoid long wait times — most parts are already in stock and ready to ship.</li>
              </ul>
            </div>

            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold">Your Repair, Your Control</h3>
              <p className="text-slate-300 leading-7">
                With PartsCentral, you stay in control. Know where your part comes from, what it costs, and that it meets our quality guarantee.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
