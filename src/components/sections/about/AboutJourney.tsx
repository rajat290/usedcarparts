import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    year: "2010",
    title: "Local Parts Experience",
    description: "Built on hands-on experience helping customers find practical replacement parts.",
  },
  {
    year: "2015",
    title: "Expanded Customer Reach",
    description: "Started supporting more drivers and repair needs beyond the local market.",
  },
  {
    year: "2018",
    title: "Supplier Network Growth",
    description: "Strengthened sourcing relationships for used engines, transmissions, and OEM components.",
  },
  {
    year: "2026",
    title: "Parts Central of Georgia",
    description: "Continuing to serve customers with verified parts, clear quotes, and nationwide support.",
  },
];

export default function AboutJourney() {
  return (
    <section className="bg-white py-18 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Journey"
            title="Built around trust, quality, and practical support"
            description="Our work is simple at its core: help customers find the right part, understand the details, and get back on the road with confidence."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.04}>
              <article className="relative h-full rounded-lg border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg">
                <div className="text-3xl font-extrabold text-primary">{item.year}</div>
                <h3 className="mt-4 text-lg font-bold text-secondary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
