import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cx("max-w-3xl", alignClass, className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-bold leading-tight text-secondary sm:text-3xl md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
