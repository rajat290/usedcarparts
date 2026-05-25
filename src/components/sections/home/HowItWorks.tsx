import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Share Vehicle Details",
    description: "Tell us your year, make, model, and the part you need.",
  },
  {
    title: "Get Exact Match",
    description: "We verify inventory and source the right OEM replacement.",
  },
  {
    title: "Approve Quote",
    description: "Receive transparent pricing and delivery estimate before checkout.",
  },
  {
    title: "Fast Delivery",
    description: "Your part ships quickly with nationwide coverage and support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple 4-Step Process"
          description="From request to delivery, we keep everything clear and hassle-free."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-border bg-white p-5">
              <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

