"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "DevOps", icon: "⚙️", color: "#00e5ff" },
  { name: "AWS", icon: "☁️", color: "#ff9900" },
  { name: "Terraform", icon: "🏗️", color: "#7B42BC" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "Kubernetes", icon: "☸️", color: "#326CE5" },
  { name: "Jenkins", icon: "🔧", color: "#D24939" },
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "Cybersecurity", icon: "🔐", color: "#00e5ff" },
];

const achievements = [
  { icon: "🏆", label: "Certifications", value: "17+", color: "#ffd700" },
  { icon: "🚀", label: "Projects Deployed", value: "7+", color: "#00e5ff" },
  { icon: "⭐", label: "Client Satisfaction", value: "100%", color: "#ff6b6b" },
];

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Header with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Me</span>
              </motion.span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-neon-cyan" />
              <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
          </div>
        </motion.div>

        {/* Achievements Bar */}
        <div className="mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
          <div className="grid grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="glass rounded-xl p-4 text-center hover:border-neon-cyan/50 transition-all duration-300 group">
                  <div className="text-3xl mb-2">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      style={{ display: 'inline-block' }}
                    >
                      {achievement.icon}
                    </motion.span>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-xs text-white/60">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>

        {/* Main content in card layout */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {/* Left side - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 h-full hover:border-neon-cyan/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-2xl">👨‍💻</span>
                  <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">Who I Am</span>
                </h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Hi, I'm <span className="text-neon-cyan font-semibold">Tejas Sonkusare</span> — a passionate DevOps Engineer, Full-Stack Java Developer, and AI/ML Enthusiast with a creative edge in Digital Marketing, Cybersecurity, and Music Creation.
                </p>
                <p className="text-white/80 leading-relaxed mt-4 text-sm sm:text-base">
                  I specialize in building scalable, secure, and automated cloud systems, delivering smooth end-to-end solutions that connect innovation with performance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 h-full hover:border-neon-cyan/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-2xl">💼</span>
                  <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">Experience</span>
                </h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  I've worked with leading organizations like <span className="text-neon-blue font-semibold">Hisan Labs Pvt. Ltd.</span> and <span className="text-neon-blue font-semibold">Zetpeak</span>, where I enhanced CI/CD processes, developed robust backend systems, and integrated secure cloud architectures using AWS and GCP.
                </p>
                <p className="text-white/80 leading-relaxed mt-4 text-sm sm:text-base">
                  Beyond engineering, I've managed my own brand, <span className="text-neon-cyan font-semibold">TanuShop</span>, driving online sales and engagement through strategic marketing and SEO optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Creative & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:border-neon-cyan/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ display: 'inline-block' }}
                    >
                      🎵
                    </motion.span>
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creative Pursuits</span>
                </h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Outside of tech, I express my creativity through music and lyrics writing, blending rhythm and storytelling to produce original compositions — a reflection of my belief that technology and art are both forms of creation.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">
                    <motion.span 
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ display: 'inline-block' }}
                    >
                      💡
                    </motion.span>
                  </span>
                  <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">Philosophy</span>
                </h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Driven by curiosity and continuous learning, I aim to bridge technology, creativity, and real-world impact — crafting experiences that are not just functional but meaningful.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 hover:border-neon-cyan/50 transition-all duration-300 group">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-400 bg-clip-text text-transparent">
                Core Competencies
              </span>
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotate: [0, -5, 5, 0]
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className="glass px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 cursor-pointer group/skill border border-transparent hover:border-neon-cyan/50 relative overflow-hidden"
                    style={{
                      boxShadow: `0 0 20px ${skill.color}20`
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{ backgroundColor: skill.color + '20' }}
                    />
                    <span className="text-lg relative z-10">{skill.icon}</span>
                    <span className="relative z-10" style={{ color: skill.color }}>{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
