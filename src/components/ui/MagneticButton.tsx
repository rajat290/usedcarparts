"use client";

import Link from "next/link";
import { useRef } from "react";

type MagneticButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline";
};

export default function MagneticButton({ href, label, variant = "primary" }: MagneticButtonProps) {
  const inner = useRef<HTMLSpanElement | null>(null);

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const el = event.currentTarget;
    const bounds = el.getBoundingClientRect();
    const dx = event.clientX - (bounds.left + bounds.width / 2);
    const dy = event.clientY - (bounds.top + bounds.height / 2);
    el.style.transform = `translate(${dx * 0.1}px, ${dy * 0.1}px)`;
    if (inner.current) inner.current.style.transform = `translate(${dx * 0.14}px, ${dy * 0.14}px)`;
  };

  const onLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = "";
    if (inner.current) inner.current.style.transform = "";
  };

  const classes =
    variant === "primary"
      ? "inline-flex h-14 items-center justify-center rounded-xl bg-primary px-9 text-base font-semibold uppercase tracking-[0.08em] text-white shadow-xl shadow-primary/25 transition-transform duration-150 hover:bg-primary-dark"
      : "inline-flex h-14 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-9 text-base font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-transform duration-150";

  return (
    <Link href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={classes}>
      <span ref={inner}>{label}</span>
    </Link>
  );
}
