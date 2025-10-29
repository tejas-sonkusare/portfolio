import Link from "next/link";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Skills } from "@/sections/Skills";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/components/Navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
      <footer className="py-6 sm:py-8 md:py-10 text-center text-xs sm:text-sm text-white/60 px-4">© {new Date().getFullYear()} Tejas Sonkusare</footer>
    </main>
  );
}


