import Hero from "@/components/sections/home/Hero";
import QualityParts from "@/components/sections/home/QualityParts";
import Trust from "@/components/sections/home/Trust";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Brands from "@/components/sections/home/Brands";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <QualityParts />
      <Trust />
      <HowItWorks />
      <Brands />
      <CTA />
    </>
  );
}