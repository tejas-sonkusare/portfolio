"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Independent Music Creation & Studio Development",
    category: "Creative Arts",
    icon: "🎵",
    color: "from-red-500 to-orange-500",
    status: "Active",
    statusColor: "from-green-500 to-emerald-500",
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
    status: "Live",
    statusColor: "from-green-500 to-emerald-500",
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
    status: "Completed",
    statusColor: "from-blue-500 to-cyan-500",
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
    status: "Completed",
    statusColor: "from-blue-500 to-cyan-500",
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
    status: "Completed",
    statusColor: "from-blue-500 to-cyan-500",
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
    status: "Completed",
    statusColor: "from-blue-500 to-cyan-500",
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
    status: "Completed",
    statusColor: "from-blue-500 to-cyan-500",
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
    status: "Archived",
    statusColor: "from-gray-500 to-slate-500",
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
    <section id="projects" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            {/* Projects Count Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <svg className="w-4 h-4 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span className="text-xs uppercase tracking-widest text-neon-cyan font-semibold">
                  Portfolio • {projects.length} Projects
                </span>
              </div>
            </motion.div>
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                  My Work
                </span>
              </h2>
            </motion.div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
            </div>

            <p className="text-white/60 text-base max-w-xl mx-auto">
              Explore my diverse portfolio of projects spanning creative arts, cloud engineering, AI/ML, and digital marketing
            </p>
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
                  <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-neon-cyan/10">
                    {/* Left Gradient Accent Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${project.color}`} />
                    
                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col">
                      {/* Status Badge - Top Right */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${project.statusColor} text-white text-[9px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {project.status}
                        </motion.div>
                      </div>

                      {/* Top Section */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-xl relative`}
                        >
                          {project.icon}
                          {/* Icon glow */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`} />
                        </motion.div>
                        {/* Category & Number */}
                        <div className="flex-1">
                          <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide bg-gradient-to-r ${project.color} text-white mb-2 shadow-md`}>
                            {project.category}
                          </span>
                          <div className="text-xs text-white/40 font-mono flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
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
                        <div className="flex items-center gap-1.5 mb-2">
                          <svg className="w-3.5 h-3.5 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 + idx * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2.5 py-1 text-xs text-white/50 font-semibold">
                              +{project.techStack.length - 3} more
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
                          <div className="flex items-center gap-1.5 text-white/50">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">{project.highlights.length}</span>
                            <span>features</span>
                          </div>
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <div className="flex items-center gap-1.5 text-white/50">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">{project.techStack.length}</span>
                            <span>tech</span>
                          </div>
                        </div>
                        {/* Arrow */}
                        <div className="flex items-center gap-2 text-neon-cyan text-sm font-semibold group-hover:gap-3 transition-all">
                          <span>View</span>
                          <motion.div whileHover={{ x: 3 }}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>

                      {/* Hover Overlay with Details */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/97 via-black/95 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl p-6 flex flex-col overflow-y-auto backdrop-blur-sm">
                        {/* Overlay Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg`}>
                              {project.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-sm leading-tight">{project.title}</h4>
                              <p className="text-xs text-white/60 mt-0.5">{project.category}</p>
                            </div>
                          </div>
                          {/* Status in overlay */}
                          <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${project.statusColor} text-white text-[8px] font-bold uppercase tracking-wider flex items-center gap-1`}>
                            <div className="w-1 h-1 rounded-full bg-white" />
                            {project.status}
                          </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="mb-4 flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs font-bold text-white/90 uppercase tracking-wider">Key Highlights</p>
                          </div>
                          <ul className="space-y-2.5 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex gap-2.5 text-xs text-white/75 leading-relaxed">
                                <div className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
                                <span className="line-clamp-3">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-auto pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4 text-neon-purple" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs font-bold text-white/90 uppercase tracking-wider">Full Tech Stack</p>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 text-[10px] rounded-lg bg-white/10 text-white/90 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all font-medium"
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


