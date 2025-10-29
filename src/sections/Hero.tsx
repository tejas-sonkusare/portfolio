"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const mainSkills = [
  "DevOps Engineer",
  "Cloud Architect", 
  "Full-Stack Developer",
  "Cybersecurity Specialist",
  "AI/ML Enthusiast",
  "Digital Marketing Expert",
  "Content Creator",
  "Music Producer"
];

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayAfterComplete = 2000;

  useEffect(() => {
    const currentSkill = mainSkills[skillIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentSkill.length) {
          setDisplayedText(currentSkill.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), delayAfterComplete);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setDisplayedText(currentSkill.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setSkillIndex((prev) => (prev + 1) % mainSkills.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, skillIndex]);

  return (
    <section id="home" className="section relative overflow-hidden pt-28 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-neon-blue/10" />
      <div className="absolute inset-0 opacity-30">
        <Particles
          init={loadFull}
          options={{
            background: { color: { value: "transparent" } },
            particles: {
              color: { value: "#22d3ee" },
              links: { enable: true, color: "#00e5ff", opacity: 0.2 },
              move: { enable: true, speed: 0.8 },
              number: { value: 80 },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
            },
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block glass px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
                <span className="inline-block w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-white/90">Hi, I am </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan">
                  Tejas Sonkusare
                </span>
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <div className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl h-10 sm:h-12 text-neon-cyan font-semibold">
                <span>{displayedText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <span className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed block">
                I build scalable, secure, and automated cloud systems and deliver seamless full‑stack experiences that drive business impact.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="relative glass px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-glow transition-all duration-300 group overflow-hidden text-center"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <Link
                href="/Tejas_Sonkusare_Resume.pdf"
                className="relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-neon-cyan text-neon-cyan font-semibold text-sm sm:text-base hover:bg-neon-cyan/10 transition-all duration-300 group overflow-hidden text-center"
                download
              >
                <span className="relative z-10">Download Resume</span>
              </Link>
              <a
                href="#contact"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/15 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 font-semibold text-sm sm:text-base text-center"
              >
                Contact Me
              </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-full blur-3xl bg-neon-cyan/30" />
              {/* Rotating border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  WebkitMaskComposite: "xor",
                  padding: "3px",
                }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan opacity-50" />
              </motion.div>
              <div className="relative glass rounded-full p-2 aspect-square overflow-hidden group border-2 border-neon-cyan/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 via-transparent to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/profile.jpg"
                  alt="Tejas Sonkusare"
                  width={500}
                  height={500}
                  className="rounded-full object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
              {/* Main Skill Categories in Circular Layout - Hidden on mobile */}
              
              {/* Top Center */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-xs">
                  <span className="text-neon-cyan font-semibold">DevOps</span>
                </div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, delay: 0.3 }}
              >
                <div className="hidden lg:block absolute top-8 -right-8 glass px-3 py-1.5 rounded-full text-xs">
                  <span className="text-neon-blue">Cloud</span>
                </div>
              </motion.div>

              {/* Right Center */}
              <motion.div
                animate={{ x: [0, 12, 0], rotate: [0, 4, -4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, delay: 0.6 }}
              >
                <div className="hidden lg:block absolute top-1/2 -right-20 glass px-3 py-1.5 rounded-full text-xs">
                  <span className="text-neon-cyan">Full-Stack</span>
                </div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                animate={{ x: [0, 8, 0], y: [0, 10, 0], rotate: [0, -3, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.9 }}
              >
                <div className="hidden lg:block absolute bottom-8 -right-8 glass px-3 py-1.5 rounded-full text-xs">
                  <span className="text-neon-blue">Cybersecurity</span>
                </div>
              </motion.div>

              {/* Bottom Center */}
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4.3, repeat: Infinity, delay: 1.2 }}
              >
                <div className="hidden lg:block absolute -bottom-6 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-xs">
                  <span className="text-neon-cyan font-semibold">AI/ML</span>
                </div>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                animate={{ x: [0, -8, 0], y: [0, 10, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 3.7, repeat: Infinity, delay: 1.5 }}
              >
                <div className="hidden lg:block absolute bottom-8 -left-12 glass px-3 py-1.5 rounded-full text-xs">
                  <span className="text-neon-blue">Digital Marketing</span>
                </div>
              </motion.div>

              {/* Left Center */}
              <motion.div
                animate={{ x: [0, -12, 0], rotate: [0, -4, 4, 0] }}
                transition={{ duration: 4.1, repeat: Infinity, delay: 1.8 }}
              >
                <div className="hidden lg:block absolute top-1/2 -left-20 glass px-3 py-1.5 rounded-full text-xs">
                  <span className="text-neon-cyan">Content</span>
                </div>
              </motion.div>

              {/* Top Left */}
              <motion.div
                animate={{ x: [0, -10, 0], y: [0, -10, 0], rotate: [0, -3, 3, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, delay: 2.1 }}
              >
                <div className="hidden lg:block absolute top-8 -left-16 glass px-3 py-1.5 rounded-full text-xs">
                  <span className="text-neon-blue">Music</span>
                </div>
              </motion.div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
