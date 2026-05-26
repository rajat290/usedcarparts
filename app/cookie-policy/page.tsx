import type { Metadata } from "next";

import PolicyPage from "@/components/sections/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Parts Central of Georgia",
  description:
    "Learn how Parts Central of Georgia uses cookies, pixels, analytics, advertising tools, and browser preferences.",
};

const sections = [
  {
    title: "Cookie Policy",
    body: [
      "Parts Central of Georgia uses cookies and similar technologies to operate the website, understand visitor activity, improve performance, and support a more useful shopping experience.",
    ],
  },
  {
    title: "What Are Cookies?",
    body: [
      "Cookies are small text files stored on your device when you visit a website. They help a site remember settings, keep features working, and understand how visitors use pages.",
    ],
  },
  {
    title: "How We Use Cookies",
    bullets: [
      "Keep core website features working properly.",
      "Remember preferences and saved settings.",
      "Improve speed, security, and performance.",
      "Analyze visitor behavior and site traffic.",
      "Support relevant offers, promotions, and advertising.",
    ],
  },
  {
    title: "Types Of Cookies We Use",
    bullets: [
      "Essential cookies are needed for important website functions.",
      "Performance cookies help us understand how visitors use the site.",
      "Functional cookies remember preferences and improve browsing.",
      "Advertising cookies may help deliver more relevant promotions.",
    ],
  },
  {
    title: "Pixels And Analytics",
    body: [
      "Pixels are small tracking technologies that can help measure online activity. We may also use analytics providers, such as Google Analytics, to understand traffic patterns, pages viewed, device details, and general location data.",
    ],
  },
  {
    title: "Online Advertising",
    body: [
      "Third-party advertising tools may use cookies or similar technologies to show relevant ads. You can manage many advertising preferences through your browser, device settings, or industry opt-out tools.",
    ],
  },
  {
    title: "Third-Party Cookies",
    body: [
      "Some cookies may be placed by trusted third-party providers, including analytics, payment, security, or advertising partners. Their use of data is governed by their own policies.",
    ],
  },
  {
    title: "Managing Your Cookie Preferences",
    body: [
      "You can block or delete cookies through your browser settings. Some website features may not work as expected if certain cookies are disabled.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "For questions about cookies or tracking technologies, email delpaenterprise@gmail.com or call (770) 598-4665.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      eyebrow="Cookies"
      title="Cookie Policy"
      description="How cookies, pixels, analytics, and preference controls may be used on this website."
      sections={sections}
    />
  );
}
