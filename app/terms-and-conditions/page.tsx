import type { Metadata } from "next";

import PolicyPage from "@/components/sections/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | Parts Central of Georgia",
  description:
    "Read the website, order, fitment, payment, shipping, warranty, and liability terms for Parts Central of Georgia.",
};

const sections = [
  {
    title: "Agreement To Terms",
    body: [
      "By accessing this website, requesting a quote, placing an order, or purchasing from Parts Central of Georgia, you agree to these Terms and Conditions. If you do not agree, please do not use the site or submit an order.",
    ],
  },
  {
    title: "Use Of Website",
    body: [
      "You must be at least 18 years old to use this site or purchase parts. You agree not to misuse the site, interfere with site operations, attempt unauthorized access, or use the site in violation of applicable laws.",
    ],
  },
  {
    title: "Products And Fitment Accuracy",
    body: [
      "We sell used OEM auto parts that may vary by mileage, condition, compatibility, and availability. Our team helps review fitment, but customers are responsible for providing accurate vehicle information and confirming compatibility before purchase.",
    ],
  },
  {
    title: "Orders And Payments",
    bullets: [
      "Prices are listed in U.S. dollars and may change without notice.",
      "Orders must be paid in full before shipment unless otherwise stated in writing.",
      "An invoice or quote may be provided for review before processing.",
      "Additional verification may be requested before accepting or shipping an order.",
    ],
  },
  {
    title: "Shipping And Delivery",
    body: [
      "Delivery estimates are provided in good faith and may vary because of carrier timing, freight scheduling, weather, location, or special handling requirements. Parts Central of Georgia is not responsible for carrier delays outside our control.",
    ],
  },
  {
    title: "Returns, Refunds, And Warranty",
    body: [
      "Returns and refunds are handled according to our Refund/Return Policy and the terms listed on your order documents. Warranty support applies to eligible parts only and does not include labor, installation, diagnostics, vehicle damage, or loss of use.",
    ],
  },
  {
    title: "Limitation Of Liability",
    body: [
      "To the fullest extent permitted by law, Parts Central of Georgia is not liable for indirect, incidental, consequential, or labor-related costs arising from the purchase, installation, or use of any part.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Text, images, layout, logos, and other site materials belong to Parts Central of Georgia or its licensors and may not be copied, reproduced, or distributed without permission.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "For questions about these terms, email delpaenterprise@gmail.com or call (770) 598-4665.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <PolicyPage
      eyebrow="Terms"
      title="Terms and Conditions"
      description="The terms that apply when you use this website, request a quote, place an order, or buy used OEM auto parts."
      sections={sections}
    />
  );
}
