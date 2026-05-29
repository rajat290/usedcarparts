"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";

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
      setIsScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/5"
          : "bg-slate-950 border-b border-white/8",
      ].join(" ")}
    >
      <Container className="flex h-[72px] items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/navlogo%20(1).png"
            alt="Parts Central logo"
            width={200}
            height={44}
            className="object-contain transition-opacity duration-200 group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  "hover:text-white hover:bg-white/10",
                  isActive
                    ? "text-white bg-white/10"
                    : "text-white",
                ].join(" ")}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-white" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          <a
            href="tel:7705984665"
            className="hidden lg:inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-white text-slate-950 text-sm font-semibold shadow-lg shadow-black/20 hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (770) 598-4665
          </a>

          <div className="lg:hidden">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-200 hover:bg-white/12 hover:border-white/20 lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
