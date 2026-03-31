"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/components/ui/cn";
import { useReducedMotion } from "framer-motion";

export default function Tilt({
  children,
  className,
  max = 10
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const canTilt =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // On touch devices (or coarse pointers) tilt feels broken and interferes with scrolling.
    if (!canTilt) return;

    let rect = el.getBoundingClientRect();
    let raf = 0;
    let latestX = 0;
    let latestY = 0;

    const apply = () => {
      raf = 0;
      const px = (latestX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const py = (latestY - (rect.top + rect.height / 2)) / (rect.height / 2);
      const rx = (-py * max).toFixed(2);
      const ry = (px * max).toFixed(2);
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(0,-2px,0)`;
    };

    const onEnter = () => {
      rect = el.getBoundingClientRect();
    };

    const onMove = (e: PointerEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;
      if (raf) return;
      raf = window.requestAnimationFrame(apply);
    };

    const onLeave = () => {
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
    };

    el.addEventListener("pointerenter", onEnter, { passive: true });
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max, reduced]);

  return (
    <div
      ref={ref}
      className={cn(
        "inline-block will-change-transform transition-transform duration-200 ease-out [transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
}
