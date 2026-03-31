import React from "react";
import Container from "@/components/ui/Container";
import { Github, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="text-sm text-muted">
          <div className="font-semibold text-fg">PD</div>
          <div>© {new Date().getFullYear()} {profile.name}</div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-2xl border border-border bg-white/70 px-4 text-sm text-muted backdrop-blur-md transition hover:bg-white/90 hover:text-fg"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 items-center gap-2 rounded-2xl border border-border bg-white/70 px-4 text-sm text-muted backdrop-blur-md transition hover:bg-white/90 hover:text-fg"
          >
            <Mail size={16} /> Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
