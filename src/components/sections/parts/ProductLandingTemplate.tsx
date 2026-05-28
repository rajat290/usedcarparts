"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  PhoneCall,
  Wrench,
  Clock3,
} from "lucide-react";

import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import VehicleSelectorForm from "@/components/forms/VehicleSelectorForm";
import MakeGrid from "@/components/sections/home/MakeGrid";

type FeatureBlock = {
  title: string;
  body: string;
};

type ProductLandingTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  heroTintClass: string;
  sectionTitle: string;
  sectionLead: string;
  features: FeatureBlock[];
  partLabel: string;
  showBrandImages?: boolean;
};

const highlights = [
  {
    icon: ShieldCheck,
    title: "Warranty Protected",
    text: "All parts are quality tested and backed with warranty support.",
  },
  {
    icon: Truck,
    title: "Fast Nationwide Shipping",
    text: "Quick and reliable delivery anywhere in the United States.",
  },
  {
    icon: BadgeCheck,
    title: "OEM Quality",
    text: "Original OEM parts for trusted performance and compatibility.",
  },
];

const whyChooseUs = [
  {
    icon: Wrench,
    title: "Expert Fitment Help",
    text: "Our specialists help you match the exact part for your vehicle.",
  },
  {
    icon: Clock3,
    title: "Quick Response",
    text: "Get pricing and availability updates within minutes.",
  },
  {
    icon: PhoneCall,
    title: "Dedicated Support",
    text: "Real humans helping you throughout the process.",
  },
];

export default function ProductLandingTemplate({
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  heroTintClass,
  sectionTitle,
  sectionLead,
  features,
  partLabel,
  showBrandImages = false,
}: ProductLandingTemplateProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        {/* Background Image */}
        <div className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-35">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${heroTintClass} opacity-70 dark:opacity-100`}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.15),transparent_45%)]" />

        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-500">
                {eyebrow}
              </p>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <MagneticButton
                  href="#vehicle-selector"
                  label="Find A Part Now"
                />

                <MagneticButton
                  href="tel:7705984665"
                  label="Call (770) 598-4665"
                  variant="outline"
                />
              </div>

              {/* Highlights */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
                    >
                      <Icon className="h-8 w-8 text-cyan-500" />

                      <h3 className="mt-4 text-lg font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              id="vehicle-selector"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <VehicleSelectorForm theme="dark" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              {sectionTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {sectionLead}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-950"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {feature.body}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Why Customers Trust Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              We focus on quality, reliability, and customer satisfaction with
              every order.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-lg dark:border-white/10 dark:bg-slate-900"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-8 w-8 text-cyan-500" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* BRANDS */}
      <MakeGrid
        partLabel={partLabel}
        showBrandImages={showBrandImages}
      />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.2),transparent_50%)]" />

        <Container className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold">
              Ready To Find Your Perfect Part?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Get started today with our expert support team and premium OEM
              inventory.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <MagneticButton
                href="#vehicle-selector"
                label="Request A Quote"
              />

              <MagneticButton
                href="tel:7705984665"
                label="Call Now"
                variant="outline"
              />
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}