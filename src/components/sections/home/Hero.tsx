"use client";

import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import Container from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const heading = "Reliable OEM Parts. Real Value. Real Fast.";

function SplitChars({ text }: { text: string }) {
  return (
    <span aria-label={text} role="text" className="inline-block">
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          initial={{ opacity: 0, y: 18, rotateX: -70 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: i * 0.018, duration: 0.45, ease: [0.2, 1, 0.3, 1] }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
      <motion.div style={{ y: yImage }} className="pointer-events-none absolute inset-0">
        <Image src="/websiteImages/bg-4.jpg" alt="Premium used auto parts" fill className="object-cover opacity-30" sizes="100vw" priority />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.95),rgba(2,6,23,0.85),rgba(239,68,68,0.2))]" />

      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div style={{ y: yCopy }} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">Premium Used OEM Parts</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              <SplitChars text={heading} />
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-200 sm:text-lg">
              Quality-tested, perfectly matched used parts for every major make and model, with fast shipping and a dedicated support team.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="#vehicle-selector" label="Find A Part Now" />
              <MagneticButton href="tel:7705984665" label="Call (770) 598-4665" variant="outline" />
            </div>
          </motion.div>

          <motion.div id="vehicle-selector" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.2, 1, 0.3, 1], delay: 0.25 }}>
            <VehicleSelectorForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
