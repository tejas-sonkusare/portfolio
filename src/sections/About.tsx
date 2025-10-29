"use client";

import { motion } from "framer-motion";

const skills = [
  "DevOps",
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Java",
  "Python",
  "Cybersecurity",
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="text-neon-cyan">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto" />
        </motion.div>

        {/* Main content in card layout */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {/* Left side - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-5 sm:p-6 md:p-8"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-neon-cyan mb-3 sm:mb-4">Who I Am</h3>
            <p className="text-white/80 leading-relaxed">
              Hi, I'm <span className="text-neon-cyan font-semibold">Tejas Sonkusare</span> — a passionate DevOps Engineer, Full-Stack Java Developer, and AI/ML Enthusiast with a creative edge in Digital Marketing, Cybersecurity, and Music Creation.
            </p>
            <p className="text-white/80 leading-relaxed mt-4">
              I specialize in building scalable, secure, and automated cloud systems, delivering smooth end-to-end solutions that connect innovation with performance.
            </p>
          </motion.div>

          {/* Right side - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-5 sm:p-6 md:p-8"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-neon-cyan mb-3 sm:mb-4">Experience</h3>
            <p className="text-white/80 leading-relaxed">
              I've worked with leading organizations like <span className="text-neon-blue font-semibold">Hisan Labs Pvt. Ltd.</span> and <span className="text-neon-blue font-semibold">Zetpeak</span>, where I enhanced CI/CD processes, developed robust backend systems, and integrated secure cloud architectures using AWS and GCP.
            </p>
            <p className="text-white/80 leading-relaxed mt-4">
              Beyond engineering, I've managed my own brand, <span className="text-neon-cyan font-semibold">TanuShop</span>, driving online sales and engagement through strategic marketing and SEO optimization.
            </p>
          </motion.div>
        </div>

        {/* Bottom section - Creative & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8"
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-neon-cyan mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl">🎵</span> Creative Pursuits
              </h3>
              <p className="text-white/80 leading-relaxed">
                Outside of tech, I express my creativity through music and lyrics writing, blending rhythm and storytelling to produce original compositions — a reflection of my belief that technology and art are both forms of creation.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-neon-cyan mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl">💡</span> Philosophy
              </h3>
              <p className="text-white/80 leading-relaxed">
                Driven by curiosity and continuous learning, I aim to bridge technology, creativity, and real-world impact — crafting experiences that are not just functional but meaningful.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-5 sm:p-6 md:p-8"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-neon-cyan mb-4 sm:mb-6 text-center">Core Competencies</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
                className="glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:shadow-glow transition-all duration-300"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
