"use client";

import Button from "@/components/ui/Button";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const parent: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <img
        src="/websiteImages/bg-4.jpg"
        alt="Car parts background"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-400"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.98),rgba(31,41,55,0.88),rgba(215,50,45,0.48))]" />
      <div className="absolute bottom-0 right-0 h-48 w-48 border-l border-t border-white/10 sm:h-72 sm:w-72" />
      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div variants={parent} initial="hidden" animate="show">
            <motion.p
              variants={child}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300"
            >
              Premium Quality
            </motion.p>
            <motion.h1
              variants={child}
              className="max-w-xl text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:max-w-2xl lg:text-6xl"
            >
              Used OEM Car Parts You Can Trust
            </motion.h1>
            <motion.p
              variants={child}
              className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg"
            >
              Affordable, tested replacements for every make and model. Find the part you need with confidence.
            </motion.p>
            <motion.div variants={child} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href="#vehicle-selector"
                size="lg"
                className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 uppercase tracking-[0.08em] text-white shadow-xl shadow-black/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-2xl active:scale-[0.99]"
              >
                <span className="relative z-10">Find A Part Now</span>
                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0" />
              </Button>
              <Button
                href="tel:7705984665"
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 bg-white/15 px-8 py-4 uppercase tracking-[0.08em] text-white shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/25 active:scale-[0.99]"
              >
                Call (770) 598-4665
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            id="vehicle-selector"
            variants={child}
            initial="hidden"
            animate="show"
            className="relative -top-4 lg:-right-4 lg:-top-8"
          >
            <VehicleSelectorForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

