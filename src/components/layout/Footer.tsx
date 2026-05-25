import Link from "next/link";

import Container from "@/components/ui/Container";

const infoLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refund/Return Policy", href: "/refund-policy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-secondary text-slate-200">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Parts Central of Georgia LLC</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              8735 Dunwoody Pl Ste R Atlanta, GA 30350, USA
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Your trusted source for high-quality used OEM auto parts with warranty-backed support and nationwide shipping.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Information</h3>
            <ul className="mt-4 space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Have Questions?</h3>
            <p className="mt-4 text-sm text-slate-300">Call Now:</p>
            <a href="tel:7705984665" className="mt-1 block text-xl font-bold text-white">
              (770) 598-4665
            </a>
            <p className="mt-5 text-sm text-slate-300">Email Us:</p>
            <a href="mailto:delpaenterprise@gmail.com" className="mt-1 block text-sm text-white hover:underline">
              delpaenterprise@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400">
          Copyright 2026 Parts Central of Georgia. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}