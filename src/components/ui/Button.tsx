import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps & ComponentPropsWithoutRef<"button"> & { href?: never };
type ButtonAsLink = BaseProps & Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-60 will-change-transform select-none overflow-hidden rounded-xl";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-cyan-500 to-cyan-700 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] after:absolute after:inset-0 after:rounded-xl after:ring-1 after:ring-inset after:ring-white/20",
  secondary:
    "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600 shadow-md shadow-slate-900/40 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  outline:
    "border border-white/25 bg-white/8 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost:
    "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-7 text-base gap-2",
  xl: "h-14 px-9 text-base md:text-lg gap-2.5",
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classNames = cx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, ...linkProps } = props;
    return (
      <Link href={href} className={classNames} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, ...buttonProps } = props as ButtonAsButton;

  return (
    <button type="button" className={classNames} {...buttonProps}>
      {children}
    </button>
  );
}
