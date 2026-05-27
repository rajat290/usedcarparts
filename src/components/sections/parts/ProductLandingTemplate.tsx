import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import MakeGrid from "@/components/sections/home/MakeGrid";

type FeatureBlock = {
  title: string;
  body: string;
};

type ProductLandingTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  heroTintClass: string;
  sectionTitle: string;
  sectionLead: string;
  features: FeatureBlock[];
  partLabel: string;
};

export default function ProductLandingTemplate({
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  heroTintClass,
  sectionTitle,
  sectionLead,
  features,
  partLabel,
}: ProductLandingTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className={`absolute inset-0 ${heroTintClass}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.22),transparent_55%)]" />

        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{subtitle}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#vehicle-selector" size="lg" className="rounded-xl px-8 py-4 uppercase tracking-wider">
                  Find A Part Now
                </Button>
                <Button href="tel:7705984665" variant="outline" size="lg" className="rounded-xl px-8 py-4 uppercase tracking-wider">
                  Call (770) 598-4665
                </Button>
              </div>
            </div>

            <div id="vehicle-selector" className="rounded-3xl border border-white/10 bg-slate-950/85 p-6 shadow-2xl shadow-black/40 sm:p-8">
              <VehicleSelectorForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-slate-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.92))]" />
        <Container className="relative py-16 sm:py-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{sectionTitle}</h2>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">{sectionLead}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-3xl border border-white/10 bg-slate-900/75 p-8 shadow-lg shadow-black/10">
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <MakeGrid partLabel={partLabel} />
    </>
  );
}
