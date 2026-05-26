import Image from "next/image";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
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
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Search By Brand"
            title="OEM Parts for Major Car Makes"
            description="We help you find quality replacements for domestic and foreign vehicles."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((brand) => (
            <Reveal key={brand.name} delay={0.02}>
              <div className="group cursor-pointer rounded-3xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 group-hover:border-primary/30">
                  <Image
                    src={`/brands/${brand.file}`}
                    alt={`${brand.name} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-secondary sm:text-base">{brand.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

