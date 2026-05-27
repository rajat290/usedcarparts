"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const parent: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: "50K+", label: "Parts Sourced" },
  { value: "60 Day", label: "Warranty" },
  { value: "Free", label: "Nationwide Shipping" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-slate-950 text-white">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/websiteImages/bg-4.jpg"
          alt="Car parts background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
      </div>

      {/* Dark overlays + gradient orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/80" />
      <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-600/8 blur-[120px] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT — copy */}
          <motion.div variants={parent} initial="hidden" animate="show" className="max-w-xl">
            <motion.div variants={child}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Premium OEM Quality
              </span>
            </motion.div>

            <motion.h1
              variants={child}
              className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Used OEM Car Parts{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                You Can Trust
              </span>
            </motion.h1>

            <motion.p
              variants={child}
              className="mt-6 text-base leading-8 text-slate-300 sm:text-lg"
            >
              Affordable, tested OEM replacements for every make and model — shipped free nationwide with a 60-day warranty.
            </motion.p>

            <motion.div variants={child} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="#vehicle-selector"
                size="lg"
                className="rounded-xl px-8 tracking-wide uppercase text-sm"
              >
                Find a Part Now
              </Button>
              <Button
                href="tel:7705984665"
                variant="outline"
                size="lg"
                className="rounded-xl px-8 tracking-wide uppercase text-sm"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (770) 598-4665
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={child} className="mt-10 flex flex-wrap gap-6 border-t border-white/8 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            id="vehicle-selector"
            variants={child}
            initial="hidden"
            animate="show"
            className="flex justify-center lg:justify-end"
          >
            <VehicleSelectorForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
