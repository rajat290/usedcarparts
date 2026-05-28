import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const brands = [
  { name: "Acura", file: "acura.png" },
  { name: "Audi", file: "audi.png" },
  { name: "BMW", file: "bmw.png" },
  { name: "Buick", file: "buick.png" },
  { name: "Cadillac", file: "cadillac.png" },
  { name: "Chevrolet", file: "chevrolet.png" },
  { name: "Chrysler", file: "chrysler.png" },
  { name: "Dodge", file: "dodge.png" },
  { name: "Ford", file: "ford.png" },
  { name: "Honda", file: "honda.png" },
  { name: "Hyundai", file: "hyundai.png" },
  { name: "Jeep", file: "jeep.png" },
  { name: "Kia", file: "kia.png" },
  { name: "Lexus", file: "lexus.png" },
  { name: "Mazda", file: "mazda.png" },
  { name: "Mercedes", file: "mercedes.png" },
  { name: "Nissan", file: "nissan.png" },
  { name: "Subaru", file: "subaru.png" },
  { name: "Toyota", file: "toyota.png" },
  { name: "Volkswagen", file: "volkswagen.png" },
];

export default function Brands() {
  const topRow = brands.slice(0, 10);
  const middleRow = brands.slice(10, 20);
  const bottomRow = brands.slice(10);

  function MarqueeRow({ items, reverse = false }: { items: typeof brands; reverse?: boolean }) {
    const loopItems = [...items, ...items];
    return (
      <div className="relative overflow-hidden">
        <div className={reverse ? "marquee-track marquee-reverse" : "marquee-track"}>
          {loopItems.map((brand, index) => (
            <Link
              key={`${brand.name}-${index}`}
              href={`/used-auto-parts?make=${encodeURIComponent(brand.name)}#vehicle-selector`}
              className="group mx-2 flex min-w-[180px] items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/85 px-4 py-3 transition-all duration-300 hover:border-cyan-300/60 hover:bg-slate-800"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
                <Image
                  src={`/brands/${brand.file}`}
                  alt={`${brand.name} logo`}
                  width={30}
                  height={30}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-white">{brand.name}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-slate-950 py-20 border-t border-white/5">
      {/* Subtle top glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-16" />

      <Container>
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
              Search by Brand
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              OEM Parts for Every Major Make
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">
              Domestic and foreign vehicles covered. Click any brand to find parts instantly.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <MarqueeRow items={topRow} />
            <MarqueeRow items={bottomRow} reverse />
            <MarqueeRow items={middleRow} />
          </div>
        </Reveal>

        {/* View all CTA */}
        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/used-auto-parts"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
            >
              Browse all makes & models
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
