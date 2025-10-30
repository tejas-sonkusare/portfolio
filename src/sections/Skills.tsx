"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps & Cloud Engineering",
    color: "cyan",
    mainSkills: [
      "DevOps Automation",
      "Cloud Infrastructure Management",
      "Continuous Integration / Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
    ],
    subCategories: [
      {
        name: "DevOps Tools",
        items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab"],
      },
      {
        name: "Cloud Platforms",
        items: ["AWS (EC2, S3, RDS, IAM, VPC, CloudFront, Route53, Lambda, EKS, Elastic Beanstalk)", "Google Cloud Platform (GCP)"],
      },
      {
        name: "IaC & Scripting",
        items: ["Terraform", "Bash", "Python"],
      },
      {
        name: "Monitoring & Security",
        items: ["AWS CloudWatch", "Datadog", "SonarQube", "Trivy", "OWASP", "Firewalls", "VPN"],
      },
    ],
  },
  {
    id: "programming",
    icon: "💻",
    title: "Programming & Software Development",
    color: "purple",
    mainSkills: [
      "Full-Stack Java Development",
      "Web & App Development",
      "Backend API Development",
    ],
    subCategories: [
      {
        name: "Languages",
        items: ["Java", "Python", "C++", "C", "JavaScript"],
      },
      {
        name: "Frameworks",
        items: ["Spring", "Spring MVC", "REST APIs", "Agile Development"],
      },
      {
        name: "Frontend",
        items: ["HTML", "CSS", "JavaScript"],
      },
      {
        name: "Databases",
        items: ["MySQL", "PostgreSQL"],
      },
      {
        name: "Version Control",
        items: ["Git", "GitHub", "GitLab"],
      },
      {
        name: "Developer Tools",
        items: ["IntelliJ", "VS Code", "Eclipse"],
      },
    ],
  },
  {
    id: "ai",
    icon: "🧠",
    title: "Artificial Intelligence & Machine Learning",
    color: "indigo",
    mainSkills: [
      "Applied Machine Learning",
      "Data Processing & Analysis",
    ],
    subCategories: [
      {
        name: "Libraries",
        items: ["NumPy", "Pandas", "Matplotlib", "NLTK"],
      },
      {
        name: "Concepts",
        items: ["Regression", "Classification", "Clustering"],
      },
      {
        name: "Projects",
        items: ["Face Recognition System", "AI/ML Automation Project (IBM SkillsBuild)"],
      },
    ],
  },
  {
    id: "security",
    icon: "🔐",
    title: "Cybersecurity",
    color: "red",
    mainSkills: [
      "Network & Cloud Security",
      "Threat Detection & Prevention",
      "Security Fundamentals",
    ],
    subCategories: [
      {
        name: "Security Tools",
        items: ["OWASP", "Trivy", "SonarQube", "Firewalls", "VPNs"],
      },
      {
        name: "Certifications",
        items: [
          "Palo Alto Networks – PCCET",
          "Microsoft Technology Associate: Security Fundamentals",
          "ISC² Candidate",
          "NEAT Certification",
        ],
      },
    ],
  },
  {
    id: "marketing",
    icon: "📱",
    title: "Digital Marketing & E-commerce",
    color: "pink",
    mainSkills: [
      "Social Media Management",
      "Content Strategy & SEO Optimization",
      "Ads & Campaign Analytics",
    ],
    subCategories: [
      {
        name: "Platforms",
        items: ["Instagram", "Facebook", "LinkedIn"],
      },
      {
        name: "Marketing Tools",
        items: ["Google Analytics", "SEMrush", "Ahrefs"],
      },
      {
        name: "Advertising",
        items: ["Facebook Ads Manager", "Google Ads"],
      },
      {
        name: "E-commerce Tools",
        items: ["Shopify", "WordPress", "Product Optimization", "Conversion Tracking"],
      },
      {
        name: "Analytics & Reporting",
        items: ["Data Studio", "Excel Dashboards"],
      },
    ],
  },
  {
    id: "content",
    icon: "✍️",
    title: "Content Writing & Communication",
    color: "green",
    mainSkills: [
      "SEO Blog Writing",
      "Copywriting & Brand Storytelling",
      "Social Media Content Creation",
    ],
    subCategories: [
      {
        name: "Platforms",
        items: ["WordPress", "Blogger"],
      },
      {
        name: "Creative Tools",
        items: ["Canva", "Photoshop", "MS Office"],
      },
      {
        name: "Writing Types",
        items: ["Blogs", "Newsletters", "Marketing Copy", "Product Descriptions"],
      },
      {
        name: "Soft Skills",
        items: ["Grammar", "Tone Adaptation", "Proofreading", "Audience Research"],
      },
    ],
  },
  {
    id: "design",
    icon: "🎨",
    title: "Design & Multimedia",
    color: "yellow",
    mainSkills: [
      "Visual & Brand Design",
      "Marketing Graphics Creation",
    ],
    subCategories: [
      {
        name: "Tools",
        items: ["Canva", "Photoshop", "Illustrator (basic)"],
      },
      {
        name: "Deliverables",
        items: ["Video Thumbnails", "Post Design", "Social Banners"],
      },
    ],
  },
  {
    id: "music",
    icon: "🎵",
    title: "Music Creation & Lyric Writing",
    color: "orange",
    mainSkills: [
      "Songwriting & Lyric Composition",
      "Sound Design & Vocal Production",
      "Studio Setup & Music Production",
    ],
    subCategories: [
      {
        name: "Software",
        items: ["FL Studio", "Logic Pro"],
      },
      {
        name: "Creative Areas",
        items: ["Composition", "Storytelling through Lyrics", "Beat Production", "Vocal Mixing", "Mastering"],
      },
    ],
  },
];

// BEST PREMIUM COLOR PALETTE
const colorMap: Record<string, { gradient: string; text: string; border: string; bg: string; shadow: string }> = {
  cyan: { 
    gradient: "from-cyan-500 via-sky-500 to-blue-600", 
    text: "text-cyan-400", 
    border: "border-cyan-400/40", 
    bg: "bg-cyan-400/15",
    shadow: "shadow-cyan-500/50"
  },
  purple: { 
    gradient: "from-purple-500 via-violet-500 to-fuchsia-600", 
    text: "text-purple-400", 
    border: "border-purple-400/40", 
    bg: "bg-purple-400/15",
    shadow: "shadow-purple-500/50"
  },
  indigo: { 
    gradient: "from-indigo-500 via-purple-500 to-pink-600", 
    text: "text-indigo-400", 
    border: "border-indigo-400/40", 
    bg: "bg-indigo-400/15",
    shadow: "shadow-indigo-500/50"
  },
  red: { 
    gradient: "from-red-500 via-rose-500 to-orange-600", 
    text: "text-red-400", 
    border: "border-red-400/40", 
    bg: "bg-red-400/15",
    shadow: "shadow-red-500/50"
  },
  pink: { 
    gradient: "from-pink-500 via-rose-500 to-red-600", 
    text: "text-pink-400", 
    border: "border-pink-400/40", 
    bg: "bg-pink-400/15",
    shadow: "shadow-pink-500/50"
  },
  green: { 
    gradient: "from-emerald-500 via-teal-500 to-cyan-600", 
    text: "text-emerald-400", 
    border: "border-emerald-400/40", 
    bg: "bg-emerald-400/15",
    shadow: "shadow-emerald-500/50"
  },
  yellow: { 
    gradient: "from-yellow-500 via-amber-500 to-orange-600", 
    text: "text-yellow-400", 
    border: "border-yellow-400/40", 
    bg: "bg-yellow-400/15",
    shadow: "shadow-yellow-500/50"
  },
  orange: { 
    gradient: "from-orange-500 via-amber-500 to-yellow-600", 
    text: "text-orange-400", 
    border: "border-orange-400/40", 
    bg: "bg-orange-400/15",
    shadow: "shadow-orange-500/50"
  },
};

const proficiencyLevels = {
  devops: 95,
  programming: 90,
  ai: 82,
  security: 88,
  marketing: 85,
  content: 92,
  design: 80,
  music: 94,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const activeCategory = skillCategories[activeTab];
  const activeColor = colorMap[activeCategory.color];

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.mainSkills.length, 0);
  const totalSubSkills = skillCategories.reduce((acc, cat) => 
    acc + cat.subCategories.reduce((sum, sub) => sum + sub.items.length, 0), 0
  );

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl" />
        </motion.div>
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-md opacity-60 animate-pulse" />
                <div className="relative w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
          </div>
          <div className="ml-6">
            <p className="text-sm text-white/70 mb-3">
              {skillCategories.length} domains • {totalSkills} core competencies • {totalSubSkills}+ technologies
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat, idx) => {
                const color = colorMap[cat.color];
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(idx)}
                  >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`px-2 py-1 rounded-md border transition-all text-xs ${
                      activeTab === idx
                        ? `${color.border} ${color.bg} ${color.text} border-2`
                        : "border-white/20 text-white/60 hover:border-white/30"
                    }`}>
                    <span className="mr-1 text-sm">{cat.icon}</span>
                    {cat.title.split(" ")[0]}
                    </div>
                  </motion.div>
                  </button>
                );
              })}
            </div>
          </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[280px,1fr] gap-6">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              {skillCategories.map((category, idx) => {
                const color = colorMap[category.color];
                const isActive = activeTab === idx;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(idx)}
                    className="w-full text-left group"
                  >
                    <motion.div
                      whileHover={{ x: 6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                    <div
                      className={`relative p-3 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? `${color.border} ${color.bg} shadow-lg ${color.shadow}`
                          : "border-white/10 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <>
                          <motion.div
                            layoutId="activeTab"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          >
                            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b ${color.gradient} rounded-r-full`} />
                          </motion.div>
                          <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b ${color.gradient} rounded-r-full blur-sm`} />
                          </motion.div>
                        </>
                      )}
                      
                      <div className="flex items-center gap-3">
                        {/* Icon - NO ROTATION on click, only scale on hover */}
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className={`text-2xl ${isActive ? "drop-shadow-lg" : "opacity-90"} transition-all duration-300`}>
                          {category.icon}
                          </div>
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <div className={`font-bold text-sm ${isActive ? color.text : "text-white"} transition-colors duration-300 truncate`}>
                            {category.title}
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-xs text-white/50">{category.mainSkills.length} core</span>
                            <span className="text-white/30">•</span>
                            <span className="text-xs text-white/50">{category.subCategories.length} cat</span>
                          </div>
                          {/* Mini Proficiency Bar */}
                          <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${proficiencyLevels[category.id as keyof typeof proficiencyLevels]}%` }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                            >
                              <div className={`h-full bg-gradient-to-r ${color.gradient}`} />
                            </motion.div>
                          </div>
                        </div>
                        
                        <motion.svg
                          animate={{ 
                            x: isActive ? [0, 4, 0] : 0,
                            rotate: isActive ? 0 : -90
                          }}
                          transition={{ 
                            x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 0.3 }
                          }}
                          className={`w-4 h-4 transition-colors duration-300 flex-shrink-0 ${
                            isActive ? color.text : "text-white/30"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </div>
                    </div>
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.98 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                {/* Enhanced Header with Proficiency */}
                <div className={`p-5 bg-gradient-to-br ${activeColor.bg} border-b ${activeColor.border}`}>
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeColor.gradient} flex items-center justify-center text-3xl shadow-xl ${activeColor.shadow} relative`}>
                      {activeCategory.icon}
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${activeColor.gradient} opacity-0 hover:opacity-50 blur-xl transition-opacity duration-300 rounded-2xl`} />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {activeCategory.title}
                        </h3>
                        {/* Proficiency Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                          className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${activeColor.gradient} text-white font-black text-sm shadow-lg flex items-center gap-1.5`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {proficiencyLevels[activeCategory.id as keyof typeof proficiencyLevels]}%
                        </motion.div>
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs text-white/60 font-medium">Overall Proficiency</span>
                          <span className={`text-xs ${activeColor.text} font-bold`}>
                            {proficiencyLevels[activeCategory.id as keyof typeof proficiencyLevels]}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${proficiencyLevels[activeCategory.id as keyof typeof proficiencyLevels]}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            className="h-full relative"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${activeColor.gradient} rounded-full`} />
                            <div className={`absolute inset-0 bg-gradient-to-r ${activeColor.gradient} rounded-full blur-sm opacity-50`} />
                          </motion.div>
                        </div>
                      </div>

                      <p className={`text-xs ${activeColor.text} font-semibold mb-2`}>
                        {activeCategory.mainSkills.length} Main • {activeCategory.subCategories.length} Categories
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCategory.mainSkills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white/80 text-xs font-medium inline-block">
                            {skill}
                            </span>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compact Main Skills */}
                <div className="p-5">
                  <h4 className={`text-base font-bold text-white mb-4 flex items-center gap-2`}>
                    <span className={`text-lg ${activeColor.text}`}>⚡</span>
                    Core Competencies
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {activeCategory.mainSkills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        whileHover={{ scale: 1.03, x: 4 }}
                      >
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                          <div className="flex items-start gap-2">
                            <svg className={`w-4 h-4 ${activeColor.text} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white/90 text-xs leading-relaxed">{skill}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Compact Sub Skills & Tools */}
                  <h4 className={`text-base font-bold text-white mb-4 flex items-center gap-2`}>
                    <span className={`text-lg ${activeColor.text}`}>🛠️</span>
                    Tools & Technologies
                  </h4>
                  <div className="space-y-4">
                    {activeCategory.subCategories.map((subCat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border ${activeColor.border}`}>
                          <h5 className={`text-xs font-bold ${activeColor.text} mb-2 flex items-center gap-1.5`}>
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${activeColor.gradient}`} />
                            {subCat.name}
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {subCat.items.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + idx * 0.1 + i * 0.03 }}
                                whileHover={{ scale: 1.08, y: -2 }}
                                onHoverStart={() => setHoveredSkill(item)}
                                onHoverEnd={() => setHoveredSkill(null)}
                                className="relative"
                              >
                                <span className={`px-2 py-1 rounded-md bg-white/10 border text-white/80 text-xs font-medium transition-all inline-block ${
                                  hoveredSkill === item 
                                    ? `border-white/60 ${activeColor.bg} ${activeColor.text} shadow-lg` 
                                    : 'border-white/20 hover:border-white/40'
                                }`}>
                                  {item}
                                </span>
                                {/* Tooltip effect */}
                                {hoveredSkill === item && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-gradient-to-r ${activeColor.gradient} text-white text-[10px] font-bold whitespace-nowrap shadow-lg pointer-events-none z-10`}
                                  >
                                    Skilled
                                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-${activeCategory.color}-500`} />
                                  </motion.div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Compact Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className={`mt-6 pt-5 border-t ${activeColor.border}`}>
                    <div className="grid grid-cols-3 gap-3">
                      <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                        <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                        <div className="text-xl mb-1">⚡</div>
                        <div className={`text-2xl font-bold ${activeColor.text} mb-1`}>
                          {activeCategory.mainSkills.length}
                        </div>
                        <div className="text-xs text-white/60 font-medium">Core</div>
                        </div>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                        <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                        <div className="text-xl mb-1">🛠️</div>
                        <div className={`text-2xl font-bold ${activeColor.text} mb-1`}>
                          {activeCategory.subCategories.length}
                        </div>
                        <div className="text-xs text-white/60 font-medium">Categories</div>
                        </div>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                        <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                        <div className="text-xl mb-1">📦</div>
                        <div className={`text-2xl font-bold ${activeColor.text} mb-1`}>
                          {activeCategory.subCategories.reduce((acc, sub) => acc + sub.items.length, 0)}+
                        </div>
                        <div className="text-xs text-white/60 font-medium">Tech</div>
                        </div>
                      </motion.div>
                    </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Compact Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/50">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
              </motion.div>
              <div>
                <div className="text-white font-bold text-base mb-0.5">Constantly Innovating</div>
                <div className="text-white/70 text-xs">Expanding skillset • Mastering new technologies</div>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-sm shadow-xl shadow-purple-500/50">
              Multi-Domain Expert
              </div>
            </motion.div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
