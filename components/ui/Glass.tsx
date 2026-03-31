import React from "react";
import { cn } from "./cn";

export default function Glass({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("glass", className)}>{children}</div>
  );
}
