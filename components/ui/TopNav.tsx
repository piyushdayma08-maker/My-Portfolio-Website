"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import { cn } from "./cn";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#terminal", label: "Terminal" },
  { href: "#contact", label: "Contact" }
] as const;

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:backdrop-blur transition",
          scrolled ? "border-b border-border" : "border-b border-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a href="#" className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl border border-border bg-white/70 shadow-[0_10px_28px_rgb(2_6_23_/_0.08)]">
              <span className="text-sm font-semibold tracking-tight">PD</span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{profile.name}</div>
              <div className="text-xs text-muted">{profile.role}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted hover:text-fg transition">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#projects"
            className="hidden h-10 items-center gap-2 rounded-2xl border border-border bg-white/60 px-4 text-sm text-fg transition hover:bg-white/80 sm:inline-flex"
          >
            View work <ArrowUpRight size={16} />
          </a>
        </Container>
      </div>
    </header>
  );
}
