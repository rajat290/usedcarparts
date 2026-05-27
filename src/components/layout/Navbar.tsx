"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

import Container from "@/components/ui/Container";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 6);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 bg-primary text-white shadow-sm transition-shadow duration-200",
        isScrolled ? "shadow-xl" : "shadow-sm",
      ].join(" ")}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/navlogo%20(1).png"
            alt="Parts Central logo"
            width={220}
            height={48}
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative text-sm font-medium text-white transition-colors duration-200 hover:text-amber-300",
                "after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-amber-300 after:transition-transform after:duration-200 hover:after:scale-x-100",
                pathname === item.href ? "text-amber-300 after:scale-x-100" : "",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block" />

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-secondary transition-colors duration-200 hover:border-primary hover:text-primary lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="sr-only">Open navigation menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </Container>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}

