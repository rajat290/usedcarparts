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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 0.02}>
              <Link
                href={`/used-auto-parts?make=${encodeURIComponent(brand.name)}#vehicle-selector`}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-slate-900/60 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/8 bg-slate-800 transition-all duration-300 group-hover:border-cyan-500/25 group-hover:bg-slate-700/80">
                  <Image
                    src={`/brands/${brand.file}`}
                    alt={`${brand.name} logo`}
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <p className="text-xs font-semibold text-slate-300 transition-colors duration-200 group-hover:text-cyan-400 sm:text-sm">
                  {brand.name}
                </p>

                {/* Arrow indicator */}
                <svg
                  className="absolute right-3 top-3 h-3.5 w-3.5 text-slate-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-cyan-500"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </div>

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
