import type { Metadata } from "next";

import FaqContent from "@/components/sections/faq/FaqContent";
import FaqCTA from "@/components/sections/faq/FaqCTA";
import FaqHero from "@/components/sections/faq/FaqHero";

export const metadata: Metadata = {
  title: "FAQ | Parts Central of Georgia Used OEM Auto Parts",
  description:
    "Answers to common questions about used OEM auto parts, fitment, ordering, nationwide shipping, warranty support, and returns from Parts Central of Georgia.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqContent />
      <FaqCTA />
    </>
  );
}
