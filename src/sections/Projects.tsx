"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Independent Music Creation & Studio Development",
    category: "Creative Arts",
    icon: "🎵",
    color: "from-red-500 to-orange-500",
    bgColor: "red",
    status: "Active",
    year: "2025",
    description: "Writing, composing, and producing original songs and lyrics that combine emotion, rhythm, and storytelling.",
    techStack: ["FL Studio", "Logic Pro", "Lyric Writing", "Sound Design", "Vocal Mixing", "Mastering"],
    highlights: [
      "Experimenting across multiple genres including lo-fi, hip-hop, pop, and fusion to craft a distinct musical identity",
      "Building a personal recording studio for full-cycle music production — from songwriting and composition to mixing and mastering",
      "Using FL Studio and Logic Pro for beat creation, vocal layering, and sound design refinement",
      "Managing every stage of production independently — including lyrics, melody composition, arrangement, and post-production",
      "Collaborating with emerging artists and vocalists to create independent releases and original tracks",
      "Planning to release music on major streaming platforms such as Spotify, YouTube, and Apple Music",
      "Aiming to grow an independent studio brand that nurtures creativity, collaboration, and authentic musical expression",
    ],
    links: [{ label: "Listen", href: "/music" }],
  },
  {
    title: "E-commerce Brand Management — TanuShop",
    category: "Digital Marketing",
    icon: "🛍️",
    color: "from-pink-500 to-rose-500",
    bgColor: "pink",
    status: "Live",
    year: "2025",
    description: "Founded and manage TanuShop, an independent dropshipping brand.",
    techStack: ["WordPress", "SEO", "Facebook Ads", "Google Ads", "Analytics"],
    highlights: [
      "Executed marketing campaigns across Instagram and Facebook, increasing conversions",
      "Enhanced organic reach via SEO optimization and audience engagement strategies",
    ],
    links: [{ label: "View Live", href: "#" }],
  },
  {
    title: "Swiggy Clone App Deployment",
    category: "DevOps & Cloud",
    icon: "🚀",
    color: "from-purple-500 to-pink-500",
    bgColor: "purple",
    status: "Completed",
    year: "2024",
    description: "Developed and deployed a food delivery app clone using DevOps automation and cloud orchestration.",
    techStack: ["Terraform", "Jenkins", "Docker", "AWS", "GitHub", "SonarQube", "Trivy"],
    highlights: [
      "Built CI/CD pipelines using Jenkins and Terraform for automated infrastructure provisioning",
      "Implemented security scanning via Trivy and OWASP to maintain code quality",
      "Containerized the app with Docker, ensuring portability and scalability",
    ],
    links: [{ label: "View Code", href: "#" }],
  },
  {
    title: "AWS RDS Student Management System",
    category: "Cloud & Backend",
    icon: "☁️",
    color: "from-blue-500 to-cyan-500",
    bgColor: "blue",
    status: "Completed",
    year: "2024",
    description: "Built a cloud-based Student Management System using AWS RDS for secure and scalable data handling.",
    techStack: ["AWS RDS", "Elastic Beanstalk", "Amazon S3", "REST API", "Java"],
    highlights: [
      "Designed and deployed RESTful APIs for student registration, attendance, and course management",
      "Integrated AWS Elastic Beanstalk for auto-scaling and Amazon S3 for file storage",
      "Achieved improved performance, high availability, and reduced server downtime",
    ],
    links: [{ label: "View Code", href: "#" }],
  },
  {
    title: "Face Recognition System",
    category: "Computer Vision",
    icon: "👤",
    color: "from-yellow-500 to-amber-500",
    bgColor: "yellow",
    status: "Completed",
    year: "2023",
    description: "Implemented real-time face recognition using the K-Nearest Neighbors (KNN) algorithm.",
    techStack: ["Python", "OpenCV", "ML (KNN)", "HaarCascades"],
    highlights: [
      "Achieved <700 ms detection time and an error rate below 3% on 1,000+ image datasets",
      "Used OpenCV and HaarCascades for accurate facial detection and recognition",
    ],
    links: [{ label: "View Code", href: "#" }],
  },
  {
    title: "Number Plate Recognition System",
    category: "Machine Learning",
    icon: "🚗",
    color: "from-green-500 to-emerald-500",
    bgColor: "green",
    status: "Completed",
    year: "2023",
    description: "Designed a smart vehicle number plate detection system using OpenCV and OCR.",
    techStack: ["Python", "OpenCV", "OCR (Tesseract)", "Machine Learning"],
    highlights: [
      "Implemented image pre-processing and edge detection for accurate number extraction",
      "Integrated a machine learning classifier for automatic recognition of vehicle registration numbers",
      "Achieved over 95% detection accuracy on diverse image datasets",
      "Applied this solution for real-world automation scenarios like parking and traffic monitoring",
    ],
    links: [{ label: "View Code", href: "#" }],
  },
  {
    title: "Wikipedia Fetcher API",
    category: "Full Stack",
    icon: "📚",
    color: "from-orange-500 to-red-500",
    bgColor: "orange",
    status: "Completed",
    year: "2023",
    description: "Created a fast Wikipedia data query platform delivering JSON and HTML responses.",
    techStack: ["HTML", "CSS", "JavaScript", "Java", "Spring MVC", "PostgreSQL"],
    highlights: [
      "Engineered backend logic with Spring MVC, achieving <400 ms response times",
      "Supported 1,000+ queries while maintaining accuracy and stability under load",
    ],
    links: [{ label: "View Code", href: "#" }],
  },
  {
    title: "Tech Blog — TechHindish",
    category: "Content & SEO",
    icon: "✍️",
    color: "from-indigo-500 to-purple-500",
    bgColor: "indigo",
    status: "Archived",
    year: "2020-21",
    description: "Created and managed TechHindish, a blog focused on technology, digital trends, and marketing.",
    techStack: ["WordPress", "SEO", "Canva", "Google Analytics"],
    highlights: [
      "Wrote and optimized SEO blogs ranking on Google SERPs",
      "Boosted engagement by 45% through targeted content and keyword strategy",
    ],
    links: [{ label: "View Blog", href: "#" }],
  },
];

const categories = ["All", "Creative Arts", "Digital Marketing", "DevOps & Cloud", "Cloud & Backend", "Computer Vision", "Machine Learning", "Full Stack", "Content & SEO"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-neon-cyan">
              Featured Projects • {projects.length} Total
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              My Work
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-neon-cyan" />
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-neon-pink" />
          </div>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore my diverse portfolio spanning creative arts, cloud engineering, AI/ML, and digital marketing
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg shadow-neon-cyan/30'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20 hover:text-white/80'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              layout
            >
              <Link href={project.links[0].href}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden group-hover:border-white/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-neon-cyan/20">
                    
                    {/* Top Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />
                    
                    {/* Glowing Orb Effect */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col">
                      {/* Status & Year Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            project.status === 'Active' || project.status === 'Live' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : project.status === 'Archived'
                              ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}>
                            {project.status}
                          </div>
                        </div>
                        <div className="text-xs font-mono text-white/40">{project.year}</div>
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-4xl mb-4 shadow-xl`}
                      >
                        {project.icon}
                      </motion.div>

                      {/* Category */}
                      <div className={`inline-block px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wide bg-gradient-to-r ${project.color} text-white mb-3 self-start`}>
                        {project.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-neon-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white/60 mb-4 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 2).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/70 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 2 && (
                          <span className="px-2.5 py-1 text-xs text-white/50 font-semibold">
                            +{project.techStack.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Spacer */}
                      <div className="flex-1" />

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3 text-xs text-white/50">
                          <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                            <span>{project.highlights.length}</span>
                          </div>
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span>{project.techStack.length}</span>
                          </div>
                        </div>
                        
                        <motion.div 
                          className="flex items-center gap-2 text-neon-cyan text-sm font-bold"
                          whileHover={{ gap: 12 }}
                        >
                          <span>View</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/98 via-black/96 to-black/94 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl p-6 flex flex-col overflow-y-auto backdrop-blur-xl">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-5">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-2xl flex-shrink-0`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-base mb-1 leading-tight">{project.title}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-white/60">{project.category}</span>
                            <span className="text-white/30">•</span>
                            <span className="text-xs text-white/60">{project.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-5 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${project.color}`} />
                          <h5 className="text-xs font-black uppercase tracking-wider text-white/90">Key Features</h5>
                        </div>
                        <ul className="space-y-2.5 max-h-44 overflow-y-auto pr-2">
                          {project.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex gap-2.5 text-xs text-white/75 leading-relaxed"
                            >
                              <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${project.color}`} />
                          <h5 className="text-xs font-black uppercase tracking-wider text-white/90">Technologies</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.03 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-3 py-1.5 text-xs rounded-lg bg-white/10 text-white/90 border border-white/20 font-medium hover:bg-white/15 hover:border-white/30 transition-all"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/60 text-lg">No projects found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
