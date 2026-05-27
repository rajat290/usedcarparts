"use client";

import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Quality Auto Parts exceeded my expectations! They sourced a rare part for my vintage BMW that I couldn't find anywhere else.",
    name: "Alex",
    location: "Portland, OR",
  },
  {
    quote:
      "The team found the exact OEM replacement I needed quickly, and the communication was outstanding. I’ll use them again for every future repair.",
    name: "Mia",
    location: "Austin, TX",
  },
  {
    quote:
      "I ordered a hard-to-find transmission and it arrived fast with a quality warranty. The fit was perfect and the price was far better than local shops.",
    name: "Carlos",
    location: "Jacksonville, FL",
  },
  {
    quote:
      "Their service made our repair project easy. We got a great part, a fair quote, and the exact support we needed from start to finish.",
    name: "Sophie",
    location: "Nashville, TN",
  },
  {
    quote:
      "Amazing experience from quote to delivery. The used OEM engine I purchased arrived quickly and worked exactly as promised.",
    name: "Derek",
    location: "Phoenix, AZ",
  },
];

export default function CustomerStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const total = testimonials.length;
  const canScroll = useMemo(() => total > 1, [total]);

  useEffect(() => {
    if (!canScroll || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % total);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [canScroll, isPaused, total]);

  useEffect(() => {
    const slider = sliderRef.current;
    const card = slider?.children[currentIndex] as HTMLElement | undefined;
    if (!slider || !card) {
      return;
    }

    slider.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, [currentIndex]);

  function handlePrev() {
    setCurrentIndex((index) => (index - 1 + total) % total);
  }

  function handleNext() {
    setCurrentIndex((index) => (index + 1) % total);
  }

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

        <div className="mt-10 rounded-4xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Testimonials
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-100"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-100"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth"
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="min-w-[320px] max-w-105 snap-center rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircle size={24} />
                </div>
                <blockquote className="mt-6 text-base leading-8 text-slate-700">“{testimonial.quote}”</blockquote>
                <div className="mt-8 rounded-3xl bg-primary px-5 py-4 text-white">
                  <p className="text-base font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-200">{testimonial.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
