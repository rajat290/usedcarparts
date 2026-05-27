"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a,button,[role='button']");
      ring.style.width = interactive ? "56px" : "34px";
      ring.style.height = interactive ? "56px" : "34px";
      ring.style.borderColor = interactive ? "rgba(239,68,68,0.9)" : "rgba(255,255,255,0.55)";
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onHover, { passive: true });
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onHover);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 mix-blend-difference md:block" />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[81] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block" />
    </>
  );
}
