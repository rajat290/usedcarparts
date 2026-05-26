import { CreditCard, PackageCheck, RotateCcw, SearchCheck, ShieldCheck, Truck } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    title: "Finding Parts",
    description: "Compatibility, VIN checks, OEM part matching, and sourcing support.",
    icon: SearchCheck,
  },
  {
    title: "Ordering",
    description: "Quotes, approvals, payment timing, and order changes.",
    icon: CreditCard,
  },
  {
    title: "Delivery",
    description: "Nationwide shipping, timelines, tracking, and freight details.",
    icon: Truck,
  },
  {
    title: "Protection",
    description: "Warranty coverage, returns, replacements, and part condition.",
    icon: ShieldCheck,
  },
];

const faqGroups = [
  {
    title: "Parts And Fitment",
    icon: SearchCheck,
    questions: [
      {
        question: "How can I find the right part for my vehicle?",
        answer:
          "Share your vehicle year, make, model, engine size, trim, and VIN when available. We use those details to help verify the OEM replacement before you approve the quote.",
      },
      {
        question: "Do you offer parts for all makes and models?",
        answer:
          "We source used OEM parts for many domestic and imported cars, trucks, and SUVs. If a part is not immediately available, our team can check supplier options and follow up with the closest match.",
      },
      {
        question: "Why buy used OEM parts instead of aftermarket parts?",
        answer:
          "OEM parts were built for the vehicle by the original manufacturer. A quality used OEM part can offer proper fit, factory specifications, and strong value compared with many new or aftermarket options.",
      },
      {
        question: "Are engines and transmissions new or refurbished?",
        answer:
          "Our engines and transmissions are used OEM units. Availability, mileage, condition notes, and warranty details are reviewed with you before purchase.",
      },
    ],
  },
  {
    title: "Ordering And Payment",
    icon: PackageCheck,
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "Submit a request online or call our parts team. Once we confirm availability and fitment details, you receive a quote for review before the order is processed.",
      },
      {
        question: "Can I change or cancel an order after approval?",
        answer:
          "Contact us as quickly as possible. If the order has not entered processing or shipping, we will review available options. Once freight or fulfillment begins, changes may be limited.",
      },
      {
        question: "Do I need my VIN to order?",
        answer:
          "A VIN is strongly recommended because it helps confirm compatibility and reduce fitment issues. We can still begin a search with year, make, model, trim, and part details.",
      },
    ],
  },
  {
    title: "Shipping And Delivery",
    icon: Truck,
    questions: [
      {
        question: "Do you ship nationwide?",
        answer:
          "Yes. Parts Central of Georgia supports nationwide delivery across the United States, with shipping options depending on part size, weight, destination, and carrier availability.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Most delivery estimates are shared during quoting. Timelines vary by part type and destination, and larger freight items such as engines or transmissions can require additional handling time.",
      },
      {
        question: "Will I receive tracking information?",
        answer:
          "Yes. Once your order ships, our team provides the available carrier and tracking details so you can follow the delivery progress.",
      },
    ],
  },
  {
    title: "Warranty And Returns",
    icon: RotateCcw,
    questions: [
      {
        question: "Do your used parts include warranty support?",
        answer:
          "Warranty terms depend on the part and quote. We review warranty coverage before purchase so you know what is covered and how support works if an issue appears.",
      },
      {
        question: "What should I do if a part arrives damaged?",
        answer:
          "Keep the packaging, take clear photos, and contact our team right away. Quick documentation helps us review the shipment and work toward the right resolution.",
      },
      {
        question: "Can I return a part if it does not fit?",
        answer:
          "Return options depend on the order details and fitment information provided before purchase. Contact support promptly so we can review your specific case.",
      },
    ],
  },
];

export default function FaqContent() {
  return (
    <section className="bg-white py-18 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Help Center"
            title="Answers organized around the way customers shop"
            description="Start with the topic that matches your question, then contact us if you need part-specific guidance."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg">
                  <div className="inline-flex rounded-md bg-primary/15 p-3 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-secondary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {faqGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={groupIndex * 0.04}>
                <section className="h-full rounded-lg border border-border bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-white">
                      <Icon size={21} />
                    </span>
                    <h2 className="text-xl font-bold text-secondary">{group.title}</h2>
                  </div>

                  <div className="divide-y divide-border">
                    {group.questions.map((item) => (
                      <details key={item.question} className="group py-4">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-secondary">
                          <span>{item.question}</span>
                          <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-primary transition group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
