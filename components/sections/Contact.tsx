"use client";

import React, { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import Glass from "@/components/ui/Glass";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio — ${name || "Hello"}`);
    const body = encodeURIComponent(message || "Hi Piyush,\n\n");
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [message, name]);

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="CONTACT"
            title="Want to reach out?"
            description="No backend form. Just email—simple and reliable."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal delay={0.04}>
            <Glass className="p-7 sm:p-8">
              <div className="text-sm font-semibold">Email</div>
              <div className="mt-2 text-sm text-muted">If you’ve got a role, a project, or just a question—send it.</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`} className="gap-2">
                  <Mail size={16} /> Email me
                </Button>
                <Button href="#projects" variant="ghost" className="gap-2">
                  View work <ArrowUpRight size={16} />
                </Button>
              </div>
            </Glass>
          </Reveal>

          <Reveal delay={0.08}>
            <Glass className="relative overflow-hidden p-7 sm:p-8">
              <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accentB/12 blur-3xl" />
              <div className="text-sm font-semibold">Draft a message</div>
              <div className="mt-2 text-sm text-muted">This doesn’t submit anywhere. It just opens your mail client.</div>

              <div className="mt-6 grid gap-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="h-11 rounded-2xl border border-border bg-white/70 px-4 text-sm text-fg outline-none transition placeholder:text-muted/70 focus:border-slate-300"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows={5}
                  className="resize-none rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/70 focus:border-slate-300"
                />

                <Button href={mailto} className="gap-2">
                  Open email <ArrowUpRight size={16} />
                </Button>
              </div>
            </Glass>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
