import type { Metadata } from "next";

import PolicyPage from "@/components/sections/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Refund and Return Policy | Parts Central of Georgia",
  description:
    "Review Parts Central of Georgia return, refund, warranty, damaged shipment, and fitment support guidelines.",
};

const sections = [
  {
    title: "Return And Refund Overview",
    body: [
      "Returns and refunds are reviewed according to the part purchased, order documentation, warranty terms, and the information provided before checkout. Please contact support before returning any item.",
    ],
  },
  {
    title: "Before You Order",
    body: [
      "Used OEM parts must be matched carefully. Customers are responsible for providing accurate vehicle details, including year, make, model, trim, engine size, and VIN when available.",
    ],
  },
  {
    title: "Return Eligibility",
    bullets: [
      "Return requests should be submitted promptly after delivery.",
      "The part must match the condition required by the order or warranty terms.",
      "The item should not be installed, altered, disassembled, or damaged after delivery unless support instructs otherwise.",
      "Original packaging, labels, photos, and order information may be required for review.",
    ],
  },
  {
    title: "Damaged Or Incorrect Items",
    body: [
      "If an item arrives damaged or appears incorrect, keep the packaging and take clear photos of the part, labels, and shipment condition. Contact us right away so we can review the carrier record and order details.",
    ],
  },
  {
    title: "Warranty Support",
    body: [
      "Standard warranty coverage may apply for eligible parts and begins from delivery unless your invoice states otherwise. Warranty support applies to the part itself and does not cover labor, installation costs, vehicle downtime, or related repairs.",
    ],
  },
  {
    title: "Refund Processing",
    body: [
      "Approved refunds are issued using the original payment method when possible. Timing depends on review, return transit, inspection, and payment processor timelines.",
    ],
  },
  {
    title: "Contact Support First",
    body: [
      "Do not ship a part back without contacting support. For return or refund help, email delpaenterprise@gmail.com or call (770) 598-4665 with your order details.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Returns"
      title="Refund/Return Policy"
      description="How return requests, damaged shipments, fitment issues, refunds, and warranty support are reviewed."
      sections={sections}
    />
  );
}
