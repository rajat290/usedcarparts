"use client";

import { useEffect } from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";

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
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden" onClick={onClose}>
      <div
        className="ml-auto flex h-full w-[82%] max-w-sm flex-col bg-white p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-secondary">Menu</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-secondary hover:bg-slate-100"
            aria-label="Close navigation menu"
          >
            ?
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-md px-3 py-3 text-base font-medium text-secondary hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-border pt-6">
          <p className="mb-3 text-sm text-muted">Need help finding a part?</p>
          <Button href="tel:7705984665" className="w-full">
            Call (770) 598-4665
          </Button>
        </div>
      </div>
    </div>
  );
}

