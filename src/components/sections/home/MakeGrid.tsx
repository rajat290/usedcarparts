import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const brands = [
  "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevy", "Chrysler", "Dodge", "Ford", "GMC",
  "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Lexus", "Mazda", "Mercedes", "Nissan", "Toyota",
];

type MakeGridProps = {
  partLabel?: string;
};

export default function MakeGrid({ partLabel = "parts" }: MakeGridProps) {
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
            <Reveal key={brand} delay={index * 0.02}>
              <Link
                href={`/used-auto-parts?make=${encodeURIComponent(brand)}#vehicle-selector`}
                className="group flex h-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-3 text-center text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:text-primary hover:shadow-lg"
              >
                {brand}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
