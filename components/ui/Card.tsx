import React from "react";
import { cn } from "./cn";

export default function Card({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-3xl p-px",
        "bg-gradient-to-br from-accentA/25 via-white/10 to-accentB/25",
        "shadow-[0_1px_0_0_rgb(15_23_42_/_0.04),0_16px_50px_rgb(2_6_23_/_0.08)]",
        "transition hover:shadow-[0_1px_0_0_rgb(15_23_42_/_0.05),0_22px_70px_rgb(2_6_23_/_0.10)]",
        className
      )}
    >
      <div className="relative rounded-3xl border border-border bg-white/70 backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-accentA/10 via-transparent to-accentB/10 opacity-0 transition group-hover:opacity-100" />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

