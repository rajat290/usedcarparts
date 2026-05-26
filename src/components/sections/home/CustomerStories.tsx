import { MessageCircle } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Quality Auto Parts exceeded my expectations! They sourced a rare part for my vintage BMW that I couldn't find anywhere else. Their attention to detail and commitment to finding the precise OEM match was impressive.",
    name: "Alex",
    location: "Portland, OR",
  },
  {
    quote:
      "I had an outstanding experience with Quality Auto Parts! They managed to find a rare part for my BMW that no other supplier could source. Fast shipping and excellent customer service sealed the deal.",
    name: "Jack",
    location: "Orlando, FL",
  },
];

export default function CustomerStories() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Customer Stories"
            title="Discover why thousands of car enthusiasts trust Quality Auto Parts"
            description="Real feedback from customers who found the exact OEM replacement they needed with confidence."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.04}>
              <article className="group rounded-3xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircle size={24} />
                </div>
                <blockquote className="mt-6 text-sm leading-8 text-muted">“{testimonial.quote}”</blockquote>
                <div className="mt-8 rounded-3xl bg-primary px-5 py-4 text-white">
                  <p className="text-base font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-200">{testimonial.location}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
