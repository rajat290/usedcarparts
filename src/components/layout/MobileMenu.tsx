"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Used Auto Parts", href: "/used-auto-parts" },
  { label: "Used Transmissions", href: "/used-transmissions" },
  { label: "Used Engines", href: "/used-engines" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={[
          "fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-slate-950 border-l border-white/8 shadow-2xl shadow-black/60 lg:hidden transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-modal={isOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <span className="text-sm font-semibold tracking-widest uppercase text-slate-400">Navigation</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-all duration-200 hover:bg-white/12 hover:border-white/20"
            aria-label="Close navigation menu"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={[
                    "flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200",
                    isActive
                      ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20"
                      : "text-slate-300 hover:bg-white/6 hover:text-white border border-transparent",
                  ].join(" ")}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* CTA Footer */}
        <div className="border-t border-white/8 px-4 pb-8 pt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-1">Need a part?</p>
          <a
            href="tel:7705984665"
            className="flex items-center justify-center gap-2.5 h-12 w-full rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (770) 598-4665
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center h-11 w-full rounded-xl border border-white/12 bg-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
