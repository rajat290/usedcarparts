import ProductLandingTemplate from "@/components/sections/parts/ProductLandingTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Engines for Sale | Parts Central",
  description:
    "Shop quality used OEM engines with nationwide shipping, inspection, and reliable performance from Parts Central of Georgia.",
};

const features = [
  {
    title: "Inspected Engine Assemblies",
    body: "Our team evaluates engine condition and key performance criteria before listing options for your vehicle.",
  },
  {
    title: "OEM Compatibility",
    body: "Get the fit and integration your vehicle needs with engine choices aligned to factory specifications.",
  },
  {
    title: "Smart Savings",
    body: "Reduce replacement cost significantly versus new engines while maintaining dependable power output.",
  },
  {
    title: "Nationwide Fulfillment",
    body: "From sourcing to shipment, we streamline delivery across the U.S. with responsive support throughout.",
  },
];

export default function UsedEnginesPage() {
  return (
    <ProductLandingTemplate
      eyebrow="Used Engines"
      title="Trusted Used Engines for Sale"
      subtitle="Power your repair with tested OEM engines, clear pricing, and dependable shipping timelines."
      heroImage="/websiteImages/bg-3.jpg"
      heroImageAlt="Used engines hero background"
      heroTintClass="bg-[linear-gradient(120deg,rgba(2,6,23,0.95),rgba(15,23,42,0.88),rgba(249,115,22,0.18))]"
      sectionTitle="Reliable Engine Solutions for Real-World Repairs"
      sectionLead="Whether you need a direct OEM replacement or budget-conscious recovery option, we help you choose confidently."
      features={features}
      partLabel="used engines"
    />
  );
}
