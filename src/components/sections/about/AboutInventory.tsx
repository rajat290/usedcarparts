import Image from "next/image";
import { ClipboardCheck, PackageSearch, Warehouse } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryItems = [
  {
    title: "Engine Assemblies",
    image: "/parts/engine-assembly.svg",
  },
  {
    title: "Transmissions",
    image: "/parts/transmission.svg",
  },
  {
    title: "ABS Modules",
    image: "/parts/abs-module.svg",
  },
  {
    title: "Lighting",
    image: "/parts/head-light-assembly.svg",
  },
];

const proofPoints = [
  {
    title: "Inventory Search",
    description: "We compare your vehicle details against available used OEM part options.",
    icon: PackageSearch,
  },
  {
    title: "Condition Review",
    description: "Parts are checked for fit, condition, and practical repair value before quote approval.",
    icon: ClipboardCheck,
  },
  {
    title: "Shipping Ready",
    description: "Orders are prepared for nationwide delivery with clear timelines and support.",
    icon: Warehouse,
  },
];

export default function AboutInventory() {
  return (
    <section className="bg-surface py-18 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Quality Parts In Focus"
              title="Related parts, real categories, and a process built around fitment"
              description="The reference pages use warehouse and team imagery to show reliability. This section brings that same visual idea into your site using your project’s existing part assets."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-lg border border-border bg-white p-5 shadow-sm">
                    <div className="inline-flex rounded-md bg-primary/15 p-3 text-primary">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-secondary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-lg border border-border bg-white p-4 shadow-xl shadow-slate-900/8">
              <div className="grid grid-cols-2 gap-4">
                {galleryItems.map((item, index) => (
                  <article
                    key={item.title}
                    className={[
                      "rounded-md border border-border bg-surface p-5",
                      index === 0 ? "sm:row-span-2" : "",
                    ].join(" ")}
                  >
                    <div className="flex min-h-28 items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={150}
                        height={150}
                        className={index === 0 ? "h-32 w-32" : "h-24 w-24"}
                      />
                    </div>
                    <p className="mt-4 text-center text-sm font-bold text-secondary">{item.title}</p>
                  </article>
                ))}
              </div>
              <div className="mt-4 rounded-md bg-secondary p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
                  Used OEM Auto Parts
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Engines, transmissions, modules, lighting, and more sourced with compatibility and
                  clear customer support in mind.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
