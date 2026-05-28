import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used OEM Auto Parts for Sale | Parts Central",
  description:
    "Find reliable used OEM auto parts with warranty coverage, fast delivery, and transparent pricing from Parts Central of Georgia.",
};

const features = [
  {
    title: "Inspected OEM Reliability",
    body: "Every listed component is quality-checked for fitment and functional integrity before it reaches your quote.",
  },
  {
    title: "Transparent Value",
    body: "Get clear pricing, warranty details, and delivery timelines without guesswork or hidden surprises.",
  },
  {
    title: "Nationwide Sourcing",
    body: "We source from a broad inventory network so you can find uncommon parts faster and with better match confidence.",
  },
  {
    title: "Support That Knows Parts",
    body: "Our specialists help verify compatibility with your year, make, and model before you finalize the order.",
  },
];

export default function UsedAutoPartsPage() {
  return (
    <ProductLandingTemplate
      eyebrow="Used Auto Parts"
      title="Used OEM Auto Parts You Can Rely On"
      subtitle="Quality-tested replacements with warranty-backed confidence and fast nationwide shipping."
      heroImage="/websiteImages/bg-1.jpg"
      heroImageAlt="Used auto parts hero background"
      heroTintClass="bg-[linear-gradient(120deg,rgba(2,6,23,0.95),rgba(15,23,42,0.88),rgba(14,165,233,0.16))]"
      sectionTitle="Used OEM Auto Parts Built for Confidence"
      sectionLead="From daily-driver repairs to hard-to-find replacements, we help you source dependable OEM parts without the dealer markup."
      features={features}
      partLabel="used auto parts"
      showBrandImages
    />
  );
}
