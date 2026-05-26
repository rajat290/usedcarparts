import type { Metadata } from "next";

import PolicyPage from "@/components/sections/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Parts Central of Georgia",
  description:
    "Learn how Parts Central of Georgia collects, uses, protects, and shares customer information for used OEM auto parts orders and support.",
};

const sections = [
  {
    title: "Overview",
    body: [
      "Parts Central of Georgia is committed to protecting your privacy. This policy explains how information may be collected, used, and shared when you use our website, request a quote, place an order, or contact our team.",
      "Our services may include third-party support for payment processing, shipping, analytics, warranty programs, and customer communication. By using this site, you agree to the practices described here.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "We collect information that helps us process orders, confirm compatibility, provide customer support, and improve the website experience.",
    ],
    bullets: [
      "Name, mailing address, email address, phone number, vehicle details, and order information.",
      "Payment information handled through trusted third-party payment providers.",
      "Website activity such as IP address, browser type, pages visited, referring URLs, and search terms.",
    ],
  },
  {
    title: "How We Use Information",
    bullets: [
      "Process and deliver orders for used OEM auto parts.",
      "Confirm fitment, send quotes, and communicate order updates.",
      "Respond to customer service, warranty, shipping, and return questions.",
      "Improve website content, performance, security, and customer experience.",
      "Send promotions or updates when permitted or with your consent.",
    ],
  },
  {
    title: "Sharing Your Information",
    body: [
      "We do not sell customer personal information. Information may be shared only as needed to operate the business, fulfill orders, protect our rights, or comply with law.",
    ],
    bullets: [
      "Payment processors and banking partners.",
      "Shipping carriers and logistics providers.",
      "Warranty or support providers connected to your order.",
      "Legal authorities when required by law.",
    ],
  },
  {
    title: "Security Measures",
    body: [
      "We use reasonable safeguards to protect customer information. Sensitive payment data is processed through secure third-party providers and encrypted checkout flows where available.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our site may use cookies and similar tools to remember preferences, analyze traffic, improve functionality, and support relevant advertising. You can manage cookies through browser settings.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "This website is intended for users who are at least 18 years old. We do not knowingly collect personal information from children. If you believe a minor has submitted information, contact us.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions, email delpaenterprise@gmail.com or call (770) 598-4665.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="How we handle customer information while helping you find, order, and receive used OEM auto parts."
      lastUpdated="August 2025"
      sections={sections}
    />
  );
}
