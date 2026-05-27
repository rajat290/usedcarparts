import type { ReactNode } from "react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type SubHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  rightSlot?: ReactNode;
};

export default function SubHero({ eyebrow, title, description, actions, rightSlot }: SubHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_40%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">{eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] text-slate-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
            {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
          </Reveal>

          {rightSlot ? <Reveal delay={0.06}>{rightSlot}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
