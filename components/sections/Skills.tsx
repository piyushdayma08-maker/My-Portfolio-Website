"use client";

import React, { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import Glass from "@/components/ui/Glass";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { skills as groups } from "@/content/skills";
import { motion } from "framer-motion";

type Filter =
  | "All"
  | "React Ecosystem"
  | "Frontend Core"
  | "State & Data"
  | "UI/UX"
  | "Backend Basics";

const filters: Filter[] = [
  "All",
  "React Ecosystem",
  "Frontend Core",
  "State & Data",
  "UI/UX",
  "Backend Basics"
];

export default function Skills() {
  const [active, setActive] = useState<Filter>("All");

  const react = useMemo(
    () => groups.find((g) => g.title === "React Ecosystem"),
    []
  );
  const rest = useMemo(
    () => groups.filter((g) => g.title !== "React Ecosystem"),
    []
  );

  const flat = useMemo(() => {
    return groups.flatMap((g) =>
      g.items.map((i) => ({ group: g.title, ...i }))
    );
  }, []);

  const shown = useMemo(() => {
    if (active === "All") return flat;
    return flat.filter((s) => s.group === active);
  }, [active, flat]);

  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="SKILLS"
              title="Mostly React, and the tools I use around it."
              description="I spend most of my time in React. The rest helps me build faster and keep things clean."
            />

            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={[
                    "h-9 rounded-full border px-4 text-xs backdrop-blur-md transition",
                    active === f
                      ? "border-border bg-gradient-to-r from-accentA to-accentB text-white shadow-[0_10px_28px_rgb(59_130_246_/_0.18)]"
                      : "border-border bg-white/70 text-muted hover:bg-white/90"
                  ].join(" ")}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {react ? (
          <div className="mt-10">
            <Reveal delay={0.04}>
              <Glass className="relative overflow-hidden p-7 sm:p-8">
                <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accentA/12 blur-3xl" />
                <div className="pointer-events-none absolute -left-24 -bottom-28 h-72 w-72 rounded-full bg-accentB/12 blur-3xl" />

                <div className="grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <div className="text-xs font-medium tracking-[0.22em] text-muted">
                      REACT ECOSYSTEM
                    </div>

                    <div className="mt-3 text-2xl font-semibold tracking-tight">
                      Where I spend most of my time.
                    </div>

                    <div className="mt-3 text-sm leading-relaxed text-muted">
                      Mostly working with components, hooks, and handling UI
                      state. I like React because it keeps things simple, but
                      still lets you build really clean interfaces.
                    </div>

                    <div className="mt-5 rounded-2xl border border-border bg-surface/70 p-4 font-mono text-[12px] leading-relaxed text-fg">
                      <div className="text-muted">
                        something I use a lot
                      </div>
                      <div>{"> const [open, setOpen] = useState(false)"}</div>
                      <div>{"> useEffect(() => sync(), [deps])"}</div>
                      <div className="text-transparent bg-gradient-to-r from-accentA to-accentB bg-clip-text">
                        {"> clean, reusable components"}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 lg:translate-y-2">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {react.items.map((s) => (
                        <motion.div
                          key={s.name}
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.22 }}
                          className="h-full"
                        >
                          <Card className="h-full">
                            <div className="p-4">
                              <div className="text-sm font-semibold">
                                {s.name}
                              </div>
                              <div className="mt-1 text-xs text-muted">
                                {s.meta}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Glass>
            </Reveal>
          </div>
        ) : null}

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <Reveal delay={0.06} className="lg:col-span-7">
            <Glass className="p-7 sm:p-8">
              <div className="text-sm font-semibold">
                What I work with
              </div>
              <div className="mt-2 text-sm text-muted">
                These are the tools I actually use while building projects.
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {shown.map((s) => (
                  <motion.div
                    key={`${s.group}-${s.name}`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.22 }}
                    className="h-full"
                  >
                    <Card className="h-full">
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold">
                              {s.name}
                            </div>
                            <div className="mt-1 text-xs text-muted">
                              {s.meta}
                            </div>
                          </div>
                          <span className="rounded-full border border-border bg-white/70 px-3 py-1 text-[10px] text-muted backdrop-blur-md">
                            {s.group}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Glass>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:translate-y-5">
            <Glass className="relative overflow-hidden p-7 sm:p-8">
              <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-accentB/14 blur-3xl" />

              <div className="text-sm font-semibold">
                How I approach things
              </div>

              <div className="mt-2 text-sm leading-relaxed text-muted">
                I don’t try to learn everything. I focus on a few tools, get
                comfortable with them, and use them to build clean and usable UI.
              </div>

              <div className="mt-6 space-y-3">
                {rest.map((g) => (
                  <Card key={g.title}>
                    <div className="p-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <div className="text-sm font-semibold">
                          {g.title}
                        </div>
                        <div className="text-xs text-muted">
                          {g.subtitle}
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {g.items.map((i) => (
                          <span
                            key={i.name}
                            className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs text-muted shadow-[0_10px_30px_rgb(2_6_23_/_0.06)] backdrop-blur-md"
                          >
                            {i.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Glass>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}