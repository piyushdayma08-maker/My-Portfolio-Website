import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Terminal from "@/components/sections/Terminal";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import TopNav from "@/components/ui/TopNav";

export default function Page() {
  return (
    <>
      <TopNav />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-accent-radials" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.40] [background-size:56px_56px] bg-grid-lines [mask-image:radial-gradient(600px_circle_at_50%_0%,black,transparent_70%)]" />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
