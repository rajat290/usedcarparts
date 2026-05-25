import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const brands = [
  { name: "Acura", mark: "A" },
  { name: "Audi", mark: "AU" },
  { name: "BMW", mark: "BM" },
  { name: "Buick", mark: "BK" },
  { name: "Cadillac", mark: "CD" },
  { name: "Chevrolet", mark: "CH" },
  { name: "Chrysler", mark: "CR" },
  { name: "Dodge", mark: "DG" },
  { name: "Ford", mark: "FD" },
  { name: "GMC", mark: "GM" },
  { name: "Honda", mark: "HN" },
  { name: "Hyundai", mark: "HY" },
  { name: "Infiniti", mark: "IN" },
  { name: "Jeep", mark: "JP" },
  { name: "Kia", mark: "KA" },
  { name: "Lexus", mark: "LX" },
  { name: "Mazda", mark: "MZ" },
  { name: "Mercedes", mark: "MB" },
  { name: "Nissan", mark: "NS" },
  { name: "Subaru", mark: "SB" },
  { name: "Toyota", mark: "TY" },
  { name: "Volkswagen", mark: "VW" },
];

export default function Brands() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Search By Brand"
          title="OEM Parts for Major Car Makes"
          description="We help you find quality replacements for domestic and foreign vehicles."
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="animate-rise rounded-lg border border-border bg-white p-4 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-xs font-bold text-secondary">
                {brand.mark}
              </div>
              <p className="mt-3 text-sm font-semibold text-secondary">{brand.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

