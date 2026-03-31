import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Dayma — Frontend Developer (React)",
  description: "Frontend-only portfolio built with Next.js, Tailwind, and Framer Motion.",
  icons: [{ rel: "icon", url: "/favicon.svg" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
