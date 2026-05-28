import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Transmissions for Sale | Parts Central",
  description:
    "Find affordable used transmissions with OEM fit, warranty options, and nationwide shipping from Parts Central of Georgia.",
};

const features = [
  {
    title: "Performance-Tested Units",
    body: "Each transmission is screened for operational quality so you can restore smooth shifting with confidence.",
  },
  {
    title: "OEM Fitment Focus",
    body: "We match transmission specs to your vehicle details to reduce install issues and compatibility risk.",
  },
  {
    title: "Lower Total Repair Cost",
    body: "Used OEM transmissions deliver strong value compared with new replacements while preserving reliability.",
  },
  {
    title: "Fast Quote and Delivery",
    body: "Share your vehicle details and get a clear quote quickly, backed by rapid shipping support.",
  },
];

export default function UsedTransmissionsPage() {
  return (
    <ProductLandingTemplate
      eyebrow="Used Transmissions"
      title="Quality Used Transmissions for Sale"
      subtitle="OEM-fit transmission replacements tested for performance and backed by warranty-ready support."
      heroImage="/websiteImages/bg-2.jpg"
      heroImageAlt="Used transmission hero background"
      heroTintClass="bg-[linear-gradient(120deg,rgba(2,6,23,0.95),rgba(15,23,42,0.88),rgba(16,185,129,0.2))]"
      sectionTitle="Transmission Replacements Without Guesswork"
      sectionLead="We combine fitment guidance, tested inventory, and transparent pricing so you can get back on the road faster."
      features={features}
      partLabel="used transmissions"
      showBrandImages
    />
  );
}
