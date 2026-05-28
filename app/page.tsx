import Hero from "@/components/sections/home/Hero";
import QualityParts from "@/components/sections/home/QualityParts";
import Trust from "@/components/sections/home/Trust";
import Services from "@/components/sections/home/Services";
import CustomerStories from "@/components/sections/home/CustomerStories";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Brands from "@/components/sections/home/Brands";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <QualityParts />
      <Brands />
      <Trust />
      <Services />
      <CustomerStories />
      <HowItWorks />
      <CTA />
    </>
  );
}