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

type MakeGridProps = {
  partLabel?: string;
  showBrandImages?: boolean;
};

export default function MakeGrid({ partLabel = "parts", showBrandImages = false }: MakeGridProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Shop By Brand</p>
            <h2 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl">Find {partLabel} For Major Makes</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Select your brand and jump straight into a prefilled search for faster fitment matching.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Reveal key={brand.name} delay={index * 0.02}>
              <Link
                href={`/used-auto-parts?make=${encodeURIComponent(brand.name)}#vehicle-selector`}
                className={[
                  "group flex rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:text-primary hover:shadow-lg",
                  showBrandImages ? "h-20 items-center gap-3" : "h-14 items-center justify-center text-center",
                ].join(" ")}
              >
                {showBrandImages && (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                    <Image
                      src={`/brands/${brand.file}`}
                      alt={`${brand.name} logo`}
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                  </span>
                )}
                <span className={showBrandImages ? "min-w-0 truncate" : undefined}>{brand.name}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
