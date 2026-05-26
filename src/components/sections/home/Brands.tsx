import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

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
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Search By Brand"
          title="OEM Parts for Major Car Makes"
          description="We help you find quality replacements for domestic and foreign vehicles."
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="animate-rise rounded-lg border border-border bg-white p-4 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white">
                <Image
                  src={`/brands/${brand.file}`}
                  alt={`${brand.name} logo`}
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-secondary">{brand.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

