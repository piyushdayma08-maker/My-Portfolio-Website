import React from "react";
import { cn } from "./cn";

type Props = React.ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost";
};

export default function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-medium transition will-change-transform",
        variant === "primary"
          ? "text-white bg-gradient-to-r from-accentA to-accentB shadow-[0_12px_34px_rgb(59_130_246_/_0.18)] hover:scale-[1.01] hover:shadow-[0_16px_46px_rgb(59_130_246_/_0.22)]"
          : "border border-border bg-white/60 text-fg hover:bg-white/80 hover:shadow-[0_10px_34px_rgb(2_6_23_/_0.08)]",
        className
      )}
    />
  );
}
