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
                className="shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
              >
                Find A Part Now
              </Button>
              <Button
                href="tel:7705984665"
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/5 text-white shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-[1.02] hover:bg-white/10 active:scale-[0.99]"
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
            className="rounded-lg border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur-md"
          >
            <div className="rounded-md border border-white/10 bg-white/5 p-4 sm:p-5">
              <VehicleSelectorForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

