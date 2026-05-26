import type { Metadata } from "next";

import PolicyPage from "@/components/sections/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Shipping Policy | Parts Central of Georgia",
  description:
    "Review Parts Central of Georgia shipping, delivery, freight, lift gate, and secure payment information.",
};

const sections = [
  {
    title: "Shipping Information",
    body: [
      "Parts Central of Georgia ships used OEM auto parts across the United States. Shipping options depend on part size, weight, destination, carrier availability, and the delivery details confirmed during your quote.",
    ],
  },
  {
    title: "Continental United States",
    body: [
      "Orders within the 48 contiguous United States may qualify for included shipping when confirmed in your quote or invoice. Residential and commercial deliveries may have different carrier requirements.",
    ],
  },
  {
    title: "Freight, Core, And Lift Gate",
    body: [
      "Large parts such as engines and transmissions may ship by freight. We do not require a core deposit unless your order documentation states otherwise.",
      "If a lift gate is needed for unloading, request it before checkout so our team can confirm the best delivery option.",
    ],
  },
  {
    title: "Delivery Timing",
    body: [
      "Estimated delivery is typically shared during quoting. Many orders arrive within seven to nine business days after processing, but timing may vary because of freight scheduling, carrier delays, distance, or special handling.",
    ],
  },
  {
    title: "Special Shipping Considerations",
    body: [
      "Some parts require special packaging or carrier handling because of size, weight, fragile materials, or delivery location. We will communicate important shipping details before processing your order.",
    ],
  },
  {
    title: "Secure Payment Options",
    bullets: [
      "Transactions are processed through trusted payment providers.",
      "Payment details are transmitted through secure checkout flows where available.",
      "Major credit and debit card options may be accepted through certified payment gateways.",
      "Additional verification may be required for customer protection and fraud prevention.",
    ],
  },
  {
    title: "Need Help With Shipping Or Payment?",
    body: [
      "For shipping, freight, tracking, or payment questions, contact delpaenterprise@gmail.com or call (770) 598-4665.",
    ],
  },
];

export default function ShippingPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Shipping"
      title="Shipping Policy"
      description="Delivery guidance for used OEM parts, freight items, secure payment, and order support."
      sections={sections}
    />
  );
}
