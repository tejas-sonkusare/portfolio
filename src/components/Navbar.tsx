"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hidden md:block">
          <nav
            className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 ${
              scrolled ? "glass" : "bg-transparent"
            } rounded-full px-3 py-2`}
          >
            <ul className="flex items-center gap-1 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="px-3 py-1 rounded-full hover:text-neon-blue focus-neon transition-colors whitespace-nowrap"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>

      {/* Mobile Hamburger Menu - Only on mobile */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full ${
              scrolled || mobileMenuOpen ? "glass" : "bg-white/10 backdrop-blur-sm"
            } border border-white/10 flex items-center justify-center`}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              >
                <span className="block w-5 h-0.5 bg-white rounded-full" />
              </motion.span>
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              >
                <span className="block w-5 h-0.5 bg-white rounded-full" />
              </motion.span>
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              >
                <span className="block w-5 h-0.5 bg-white rounded-full" />
              </motion.span>
            </div>
          </button>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div 
                    onClick={() => setMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                  />
                </motion.div>
                
                {/* Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <nav className="fixed top-20 right-4 z-50 glass rounded-2xl p-4 border border-white/20 shadow-2xl min-w-[200px]">
                    <ul className="flex flex-col gap-2">
                      {sections.map((s, idx) => (
                        <motion.li
                          key={s.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <a
                            href={`#${s.id}`}
                            onClick={handleLinkClick}
                            className="block px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-neon-cyan transition-all text-white"
                          >
                            {s.label}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}


