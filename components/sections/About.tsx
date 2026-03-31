"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Glass from "@/components/ui/Glass";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="ABOUT"
            title="I’m a React-first frontend developer."
            description="I build UI for dashboards, tools, and product sites—mostly the kind with real state and real edge cases."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <Reveal delay={0.04} className="lg:col-span-7">
            <Glass className="p-7 sm:p-8">
              <div className="text-sm font-semibold">What I’m good at</div>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {[
                  "Building reusable components that don’t fight you later.",
                  "Making UI state predictable (loading, error, empty, success).",
                  "Keeping spacing and typography consistent across the whole app.",
                  "Shipping UI that feels responsive—not just “responsive”."
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accentA" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Glass>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5 lg:translate-y-4">
            <Glass className="relative overflow-hidden p-7 sm:p-8">
              <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accentB/14 blur-3xl" />
              <div className="text-sm font-semibold">What I’m focusing on</div>
              <div className="mt-2 text-sm leading-relaxed text-muted">
                Next.js App Router, solid React patterns, and UI polish that stays light.
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "React", d: "Hooks + composition" },
                  { t: "Next.js", d: "Static-first pages" },
                  { t: "Tailwind", d: "Tokens + consistency" },
                  { t: "Motion", d: "Small cues" }
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-border bg-white/60 p-4 backdrop-blur-md">
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-xs text-muted">{x.d}</div>
                  </div>
                ))}
              </div>
            </Glass>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
