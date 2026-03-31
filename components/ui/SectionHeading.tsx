import React from "react";
import { cn } from "./cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="text-xs font-medium tracking-[0.22em] text-muted">{eyebrow}</div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
