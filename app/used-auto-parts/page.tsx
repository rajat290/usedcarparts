import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used OEM Auto Parts for Sale | Parts Central",
  description:
    "Find reliable used OEM auto parts with warranty coverage, fast delivery, expert support, and transparent pricing from Parts Central of Georgia.",
};

const features = [
  {
    title: "Inspected OEM Reliability",
    body: "Every listed component undergoes detailed inspection and fitment verification before reaching your quote request.",
  },
  {
    title: "Affordable Alternative To Dealership Pricing",
    body: "Save significantly compared to expensive dealership replacements while still getting dependable OEM quality.",
  },
  {
    title: "Nationwide Inventory Access",
    body: "Our extensive sourcing network helps locate rare, discontinued, and hard-to-find OEM parts quickly.",
  },
  {
    title: "Expert Compatibility Assistance",
    body: "Our specialists verify year, make, model, and trim compatibility before finalizing your order.",
  },
  {
    title: "Fast Nationwide Shipping",
    body: "We process and ship parts quickly so your repair project experiences minimal downtime.",
  },
  {
    title: "Warranty Backed Confidence",
    body: "Most parts include warranty coverage for added confidence and peace of mind.",
  },
];

export default function UsedAutoPartsPage() {
  return (
    <ProductLandingTemplate
      eyebrow="Used OEM Auto Parts"
      title="Premium Used OEM Auto Parts For Every Major Vehicle Brand"
      subtitle="Quality-tested OEM replacement parts with expert support, warranty-backed confidence, and fast nationwide shipping — helping drivers and repair shops save money without compromising reliability."
      heroImage="/websiteImages/bg-1.jpg"
      heroImageAlt="Used OEM auto parts inventory"
      heroTintClass="bg-[linear-gradient(120deg,rgba(2,6,23,0.96),rgba(15,23,42,0.9),rgba(14,165,233,0.18))]"
      sectionTitle="Reliable Used Auto Parts Without The Dealership Markup"
      sectionLead="Whether you're replacing damaged components, repairing collision damage, or restoring vehicle performance, Parts Central helps you source dependable OEM auto parts with confidence and transparent pricing."
      features={features}
      partLabel="used auto parts"
      showBrandImages
    />
  );
}