import type { Metadata } from "next";

import ContactForm from "@/components/sections/contact/ContactForm";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Parts Central | Used OEM Auto Parts Support",
  description:
    "Contact Parts Central of Georgia for used OEM auto parts quotes, compatibility help, warranty questions, and nationwide shipping support.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
