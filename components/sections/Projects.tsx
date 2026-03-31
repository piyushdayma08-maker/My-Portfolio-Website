"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { projects } from "@/content/projects";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function TechBadges({ tech }: { tech: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs text-muted shadow-[0_8px_24px_rgb(2_6_23_/_0.06)] backdrop-blur-md"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function PersonalLinks({ liveUrl, githubUrl, featured }: { liveUrl?: string; githubUrl?: string; featured?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {liveUrl ? (
        <Button href={liveUrl} target="_blank" rel="noreferrer" className="gap-2">
          {featured ? "✨ Try Live AI Tool" : "Live Preview"} <ArrowUpRight size={16} />
        </Button>
      ) : null}
      {githubUrl ? (
        <Button href={githubUrl} target="_blank" rel="noreferrer" variant="ghost" className="gap-2">
          GitHub <Github size={16} />
        </Button>
      ) : null}
    </div>
  );
}

function ClientLinks({ liveUrl }: { liveUrl?: string }) {
  return liveUrl ? (
    <Button href={liveUrl} target="_blank" rel="noreferrer" className="gap-2">
      Live Site <ArrowUpRight size={16} />
    </Button>
  ) : null;
}

function Featured() {
  const p = projects[0]!;
  return (
    <Card className="overflow-hidden">
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs text-muted backdrop-blur-md">
            <Sparkles size={14} className="text-accentA" />
            Featured project
          </div>
          <div className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</div>
          <div className="mt-3 text-sm leading-relaxed text-muted">{p.description}</div>

          {p.highlights?.length ? (
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accentA" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <TechBadges tech={p.tech} />
          <div className="mt-7">
            <PersonalLinks liveUrl={p.liveUrl} githubUrl={p.githubUrl} featured />
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-accentA/12 via-transparent to-accentB/14" />
            <Image
              src={p.image}
              alt={`${p.title} preview`}
              fill
              priority
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/45 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </Card>
  );
}

function PersonalCard({
  idx,
  className
}: {
  idx: number;
  className?: string;
}) {
  const p = projects[idx]!;
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.article
      whileHover={reduced ? undefined : { y: -3 }}
      transition={{ duration: 0.22 }}
      className={className}
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={p.image}
            alt={`${p.title} preview`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.05]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-border bg-white/80 px-3 py-1 text-[10px] text-muted backdrop-blur-md">
            Personal Project
          </div>
        </div>

        <div className="p-6">
          <div className="text-sm font-semibold">{p.title}</div>
          <div className="mt-2 text-sm leading-relaxed text-muted">{p.description}</div>
          <TechBadges tech={p.tech} />
          <div className="mt-6">
            <PersonalLinks liveUrl={p.liveUrl} githubUrl={p.githubUrl} />
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

function ClientRow({ idx }: { idx: number }) {
  const p = projects[idx]!;
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.article whileHover={reduced ? undefined : { y: -3 }} transition={{ duration: 0.22 }}>
      <Card className="overflow-hidden">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={p.image}
            alt={`${p.title} preview`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-7">
          <div className="text-xs font-medium tracking-[0.20em] text-muted">CLIENT WORK</div>
          <div className="mt-2 text-lg font-semibold">{p.title}</div>
          <div className="mt-2 text-sm leading-relaxed text-muted">{p.description}</div>
          <TechBadges tech={p.tech} />
          <div className="mt-6">
            <ClientLinks liveUrl={p.liveUrl} />
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

export default function Projects() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Projects"
            description="Featured AI build first, then the rest. Client work is separated at the bottom."
          />
        </Reveal>

        <div className="mt-10">
          <Reveal delay={0.04}>
            <Featured />
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          <Reveal delay={0.06} className="lg:col-span-4">
            <PersonalCard idx={1} />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4">
            <PersonalCard idx={2} />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <PersonalCard idx={3} />
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-medium tracking-[0.22em] text-muted">Onsite Projects</div>
                <div className="mt-2 text-xl font-semibold tracking-tight">Onsite Work</div>
              </div>
              <div className="text-sm text-muted">Live Site only</div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Reveal delay={0.06}>
              <ClientRow idx={4} />
            </Reveal>
            <Reveal delay={0.08}>
              <ClientRow idx={5} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
