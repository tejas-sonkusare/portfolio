"use client";

import { motion, AnimatePresence } from "framer-motion";
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

const socialLinks = [
  { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", url: "https://github.com/tejas-sonkusare", color: "#00e5ff" },
  { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", url: "https://www.linkedin.com/in/tejas-sonkusare-273581230/", color: "#22d3ee" },
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
    <section id="home" className="section relative overflow-hidden pt-28 pb-16 min-h-[calc(100vh-4rem)] flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-neon-blue/10" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl">
        <motion.div
          style={{ width: '100%', height: '100%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl">
        <motion.div
          style={{ width: '100%', height: '100%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl">
        <motion.div
          style={{ width: '100%', height: '100%' }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>
      
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
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#projects"
                  className="relative glass px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 group overflow-hidden text-center flex items-center gap-2 justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    View My Work
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/Tejas_Sonkusare_Resume.pdf"
                  className="relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-neon-cyan text-neon-cyan font-semibold text-sm sm:text-base hover:bg-neon-cyan/10 transition-all duration-300 group overflow-hidden text-center flex items-center gap-2 justify-center shadow-lg hover:shadow-neon-cyan/50"
                  download
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="relative z-10">Download Resume</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#contact"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/15 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 font-semibold text-sm sm:text-base text-center flex items-center gap-2 justify-center shadow-lg hover:shadow-white/20"
                >
                  Contact Me
                </a>
              </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="mt-8 sm:mt-10">
              <div className="flex gap-4 justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                style={{ display: 'contents' }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 rounded-xl glass hover:scale-110 transition-all duration-300 block"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ color: social.color }}
                      >
                        <path d={social.icon} />
                      </svg>
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                        style={{ backgroundColor: social.color + '40' }}
                      />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: "Projects", value: "7+", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                { label: "Experience", value: "1.3 Yrs", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Certifications", value: "17+", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="glass rounded-2xl p-4 sm:p-5 text-center hover:border-neon-cyan/50 transition-all duration-300 group">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                        </svg>
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
            <div className="relative px-8 sm:px-12 md:px-16 py-8">
              <div className="relative mx-auto max-w-md">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full blur-3xl bg-neon-cyan/30 animate-pulse" />
                
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

                {/* Profile Image Container */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative glass rounded-full p-2 aspect-square overflow-hidden group border-2 border-neon-cyan/30">
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 via-transparent to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src="/profile.jpg"
                      alt="Tejas Sonkusare"
                      width={500}
                      height={500}
                      className="rounded-full object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl border border-neon-cyan/30">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <span className="text-2xl">💻</span>
                    <span className="text-xs font-semibold text-neon-cyan">Developer</span>
                  </motion.div>
                </div>

                <div className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl border border-neon-blue/30">
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <span className="text-2xl">☁️</span>
                    <span className="text-xs font-semibold text-neon-blue">Cloud</span>
                  </motion.div>
                </div>

                <div className="absolute top-1/2 -right-8 glass px-3 py-2 rounded-xl border border-purple-400/30">
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <span className="text-2xl">🎵</span>
                    <span className="text-xs font-semibold text-purple-400">Music</span>
                  </motion.div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a href="#about" className="flex flex-col items-center gap-2 group cursor-pointer">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
              >
                <span className="text-xs text-white/60 group-hover:text-neon-cyan transition-colors">Scroll Down</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/20 group-hover:border-neon-cyan flex items-start justify-center p-2 transition-colors">
                  <motion.div
                    style={{ width: '0.375rem', height: '0.375rem', borderRadius: '9999px', backgroundColor: '#22d3ee' }}
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
