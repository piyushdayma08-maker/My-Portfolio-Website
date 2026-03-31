"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/components/ui/cn";
import { useReducedMotion } from "framer-motion";

export default function Magnetic({
  children,
  className,
  strength = 14
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.transform = `translate3d(${px * strength}px, ${py * strength}px, 0)`;
    };
    const onLeave = () => {
      el.style.transform = "translate3d(0,0,0)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced, strength]);

  return (
    <div ref={ref} className={cn("inline-block transition-transform duration-200 ease-out", className)}>
      {children}
    </div>
  );
}

