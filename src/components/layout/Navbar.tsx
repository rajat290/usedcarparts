"use client";

import Link from "next/link";
import { useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Used Auto Parts", href: "/used-auto-parts" },
  { label: "Used Transmissions", href: "/used-transmissions" },
  { label: "Used Engines", href: "/used-engines" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            PC
          </span>
          <div>
            <p className="text-base font-bold leading-none text-secondary">Parts Central</p>
            <p className="text-xs text-muted">Quality OEM Used Parts</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="tel:7705984665" size="sm">
            Call Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-border px-3 py-2 text-secondary lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="text-sm font-semibold">Menu</span>
        </button>
      </Container>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
