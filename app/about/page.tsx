import type { Metadata } from "next";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutInventory from "@/components/sections/about/AboutInventory";
import AboutJourney from "@/components/sections/about/AboutJourney";
import AboutPromise from "@/components/sections/about/AboutPromise";
import AboutService from "@/components/sections/about/AboutService";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Parts Central of Georgia | Quality Used OEM Auto Parts",
  description:
    "Learn about Parts Central of Georgia, a trusted source for quality used OEM auto parts, verified fitment, warranty support, and nationwide delivery.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutInventory />
      <AboutPromise />
      <AboutService />
      <AboutJourney />
      <AboutCTA />
    </>
  );
}
