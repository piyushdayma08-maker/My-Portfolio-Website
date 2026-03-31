"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Glass from "@/components/ui/Glass";
import Magnetic from "@/components/motion/Magnetic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="relative pt-10 sm:pt-14">
      <Container>
        <div className="grid min-h-[calc(100dvh-64px)] items-center gap-10 pb-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs text-muted backdrop-blur-md"
            >
              <span className="inline-flex size-2 rounded-full bg-accentA" />
              Frontend Developer focused on React
            </motion.div>

            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              I build React interfaces that{" "}
              <span className="bg-gradient-to-r from-accentA to-accentB bg-clip-text text-transparent">
                feel smooth and fast
              </span>
              .
            </motion.h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base"
            >
              I’m Piyush. I enjoy building UI that’s simple, clear, and actually feels good to use. 
              I focus on clean components, predictable state, and small details that make the experience better.
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Magnetic>
                <Button href="#projects" className="gap-2">
                  View my work <ArrowUpRight size={16} />
                </Button>
              </Magnetic>
              <Button href="#contact" variant="ghost" className="gap-2">
                Get in touch <ArrowDown size={16} />
              </Button>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted">
              {["React", "Hooks", "Component Design", "API Integration"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-white/70 px-3 py-1 backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <Glass className="relative overflow-hidden p-0">
            <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accentB/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-28 h-72 w-72 rounded-full bg-accentA/14 blur-3xl" />

            <div className="p-7 sm:p-9">
              <div className="text-sm font-semibold">How I approach UI</div>

              <div className="mt-2 text-sm leading-relaxed text-muted">
                I focus on getting the basics right — layout, spacing, and how the UI behaves when real data comes in.
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  {
                    k: "01",
                    t: "Structure",
                    d: "Keeping components clean and reusable"
                  },
                  {
                    k: "02",
                    t: "State",
                    d: "Handling loading, errors, and edge cases properly"
                  },
                  {
                    k: "03",
                    t: "Details",
                    d: "Small interactions that make things feel better"
                  }
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-border bg-white/60 p-4 backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted">{x.k}</div>
                      <div className="h-px w-10 bg-gradient-to-r from-accentA/0 via-accentA/70 to-accentB/0 opacity-80" />
                    </div>

                    <div className="mt-2 text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-xs text-muted">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Glass>
        </div>
      </Container>
    </section>
  );
}