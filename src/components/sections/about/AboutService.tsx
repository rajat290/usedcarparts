import Image from "next/image";
import { ClipboardCheck, Headset, PackageCheck } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Before You Buy",
    description: "We review vehicle details, confirm fitment, and provide clear part information before payment.",
    icon: ClipboardCheck,
  },
  {
    title: "During Delivery",
    description: "Your order is handled with shipping updates and practical timelines for nationwide delivery.",
    icon: PackageCheck,
  },
  {
    title: "After Purchase",
    description: "Our team remains available for warranty questions, support needs, and follow-up help.",
    icon: Headset,
  },
];

export default function AboutService() {
  return (
    <section className="bg-surface py-18 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-border bg-white p-6 shadow-lg shadow-slate-900/5">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md border border-border bg-surface p-5">
                  <Image
                    src="/parts/abs-module.svg"
                    alt="Used ABS module"
                    width={140}
                    height={140}
                    className="mx-auto h-24 w-24"
                  />
                  <p className="mt-4 text-sm font-bold text-secondary">Electronic Modules</p>
                </div>
                <div className="rounded-md border border-border bg-surface p-5">
                  <Image
                    src="/parts/head-light-assembly.svg"
                    alt="Used headlight assembly"
                    width={140}
                    height={140}
                    className="mx-auto h-24 w-24"
                  />
                  <p className="mt-4 text-sm font-bold text-secondary">Body Components</p>
                </div>
                <div className="col-span-2 rounded-md border border-primary/20 bg-primary/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Why customers rely on us
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-secondary">
                    Savings without sacrificing confidence.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    We help customers avoid mismatched parts, unclear terms, and slow communication.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <SectionHeading
              eyebrow="Service You Can Count On"
              title="A customer-focused process from quote to delivery"
              description="The reference sites emphasize trust, precision, and care. We carry that same expectation through every step of your parts request."
            />

            <div className="mt-8 space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.title}
                    className="flex gap-4 rounded-lg border border-border bg-white p-5 shadow-sm"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-white">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-secondary">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
