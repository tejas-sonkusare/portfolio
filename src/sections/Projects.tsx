"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Independent Music Creation & Studio Development",
    category: "Creative Arts",
    icon: "🎵",
    color: "from-red-500 to-orange-500",
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
    links: [{ label: "Listen", href: "#" }],
  },
  {
    title: "E-commerce Brand Management — TanuShop",
    category: "Digital Marketing",
    icon: "🛍️",
    color: "from-pink-500 to-rose-500",
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
    description: "Created and managed TechHindish, a blog focused on technology, digital trends, and marketing.",
    techStack: ["WordPress", "SEO", "Canva", "Google Analytics"],
    highlights: [
      "Wrote and optimized SEO blogs ranking on Google SERPs",
      "Boosted engagement by 45% through targeted content and keyword strategy",
    ],
    links: [{ label: "View Blog", href: "#" }],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Sleek Header */}
        <div className="mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-widest text-neon-cyan font-semibold">
                Portfolio • {projects.length} Projects
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent">
                My Work
              </span>
            </h2>
            <p className="text-white/50 text-sm">Hover to explore each project</p>
          </div>
        </motion.div>
        </div>

        {/* Modern Cards with Side Accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="group">
              <Link href={project.links[0].href}>
                <div className="relative h-full">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card with Left Accent Border */}
                  <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-300">
                    {/* Left Gradient Accent Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${project.color}`} />
                    
                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col">
                      {/* Top Section */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-xl`}>
                          {project.icon}
                        </div>
                        {/* Category & Number */}
                        <div className="flex-1">
                          <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide bg-gradient-to-r ${project.color} text-white mb-2`}>
                            {project.category}
                          </span>
                          <div className="text-xs text-white/40 font-mono">
                            Project #{String(i + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 leading-tight line-clamp-2 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white/60 mb-4 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/70 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2 py-1 text-xs text-white/50">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1"></div>

                      {/* Bottom Section */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                        {/* Stats */}
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-white/50">
                            {project.highlights.length} features
                          </span>
                        </div>
                        {/* Arrow */}
                        <div className="flex items-center gap-2 text-neon-cyan text-sm font-medium group-hover:gap-3 transition-all">
                          <span>Explore</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>

                      {/* Hover Overlay with Details */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/95 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl p-6 flex flex-col overflow-y-auto">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}>
                            {project.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{project.title}</h4>
                            <p className="text-xs text-white/60">{project.category}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-xs font-semibold text-white/80 mb-2">Key Highlights:</p>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex gap-2 text-xs text-white/70">
                                <span className="text-neon-cyan mt-1">•</span>
                                <span className="line-clamp-2">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto">
                          <p className="text-xs font-semibold text-white/80 mb-2">Tech Stack:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-2 py-1 text-xs rounded-md bg-gradient-to-r ${project.color} bg-opacity-20 text-white border border-white/20`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </div>
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


