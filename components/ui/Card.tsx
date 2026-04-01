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
        "group relative rounded-3xl border border-gray-200 bg-white shadow-sm",
        "transition-shadow duration-300 hover:shadow-md",
        className
      )}
    >
      <div className="relative">
        {children}
      </div>
    </div>
  );
}