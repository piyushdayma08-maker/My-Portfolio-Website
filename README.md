# Piyush Dayma — Premium Portfolio (Frontend-only, Light Mode)

Tech:
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Fully static (no backend)
- Vercel-ready

## Layout (sections)
1) Hero (`components/sections/Hero.tsx`)
2) About (`components/sections/About.tsx`)
3) Projects (`components/sections/Projects.tsx`) — strict order + button logic
4) Skills (`components/sections/Skills.tsx`)
5) Terminal (`components/sections/Terminal.tsx`)
6) Contact (`components/sections/Contact.tsx`) — mailto/static UI only

## Run locally
```bash
# Use Node 22 LTS (Node 24+ can fail on Windows with `spawn EPERM`)
# If PowerShell blocks `npm`, use `npm.cmd`
npm.cmd install
npm.cmd run dev
```

## Deploy (Vercel)
- Import the repo
- Framework: Next.js
- Build: `npm run build`
- Output: default

## Content edits
- Projects (exact order): `content/projects.ts`
- Skills: `content/skills.ts`
- Profile links/email: `content/profile.ts`
