"use client";

import React, { useEffect, useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import Glass from "@/components/ui/Glass";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

function useTypewriter(text: string, speed = 22) {
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(0);
    const id = window.setInterval(() => setI((v) => Math.min(text.length, v + 1)), speed);
    return () => window.clearInterval(id);
  }, [speed, text]);
  return text.slice(0, i);
}

export default function Terminal() {
  const reduced = useReducedMotion() ?? false;
  const script = useMemo(
    () => `> whoami\n> Piyush — Frontend Developer (React)\n> stack\n> React • Next.js • Tailwind • Framer Motion`,
    []
  );
  const typed = useTypewriter(script, reduced ? 9999 : 18);

  return (
    <section id="terminal" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="TERMINAL"
            title="A tiny signature."
            description="A small interactive detail. Lightweight on purpose."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <Glass className="mt-10 overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-white/50 px-5 py-3">
              <div className="flex items-center gap-2">
                {[
                  { c: "bg-[#ff5f57]", a: "Close" },
                  { c: "bg-[#febc2e]", a: "Minimize" },
                  { c: "bg-[#28c840]", a: "Maximize" }
                ].map((x) => (
                  <span key={x.a} className={`size-2.5 rounded-full ${x.c}`} aria-label={x.a} />
                ))}
              </div>
              <div className="text-xs text-muted">pd-terminal</div>
              <div className="w-10" />
            </div>

            <div className="relative p-6 sm:p-7">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accentA/8 via-transparent to-accentB/8 opacity-70" />
              <div className="relative rounded-2xl border border-border bg-slate-950 p-5 text-slate-100 shadow-[0_18px_60px_rgb(2_6_23_/_0.16)]">
                <motion.pre
                  className="m-0 whitespace-pre-wrap font-mono text-[13px] leading-relaxed"
                  initial={reduced ? false : { opacity: 0.92 }}
                  animate={reduced ? undefined : { opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  {typed}
                  <span className="inline-block w-2 animate-pulse text-blue-300">▍</span>
                </motion.pre>
              </div>
            </div>
          </Glass>
        </Reveal>
      </Container>
    </section>
  );
}
