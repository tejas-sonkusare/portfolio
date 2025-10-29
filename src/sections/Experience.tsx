"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    icon: "🎵",
    role: "Lyrics Writer & Music Creator",
    company: "Independent Artist",
    location: "",
    period: "Aug 2025 – Present",
    type: "Independent",
    color: "from-orange-500 to-red-500",
    points: [
      "Write and compose original songs and lyrics, blending storytelling with emotional expression and rhythm.",
      "Develop unique music concepts and collaborate with emerging talent for production and publishing.",
      "Currently building a personal studio to produce and release independent tracks under a self-driven creative label.",
    ],
  },
  {
    icon: "🌐",
    role: "Digital Marketing & E-commerce Manager",
    company: "TanuShop (Founder)",
    location: "Remote",
    period: "June 2025 – Present",
    type: "Founder",
    color: "from-blue-500 to-cyan-500",
    points: [
      "Founded and currently manage TanuShop, a self-owned dropshipping and digital brand focused on e-commerce growth.",
      "Plan and execute digital marketing campaigns across social platforms including Instagram and Facebook, increasing reach and conversions.",
      "Optimize SEO performance and product listings to enhance organic visibility and drive consistent traffic.",
      "Monitor analytics, develop content strategies, and manage end-to-end e-commerce operations from marketing to fulfillment.",
    ],
  },
  {
    icon: "⚙️",
    role: "DevOps Engineer",
    company: "Hisan Labs Pvt. Ltd.",
    location: "Pune",
    period: "June 2024 – June 2025",
    type: "Full-time",
    color: "from-purple-500 to-pink-500",
    points: [
      "Engineered and optimized CI/CD pipelines using Jenkins, cutting deployment time and eliminating manual errors.",
      "Containerized and deployed scalable applications with Docker and Kubernetes, ensuring reliability and seamless production operations.",
      "Automated cloud infrastructure provisioning using Terraform and Python, enhancing efficiency and system performance.",
      "Implemented real-time infrastructure monitoring through AWS CloudWatch, improving uptime and proactive incident management.",
      "Followed DevSecOps best practices, maintaining high security and performance standards across environments.",
    ],
  },
  {
    icon: "✍️",
    role: "Content Writer & Social Media Manager",
    company: "TechHindish (Founder)",
    location: "Remote",
    period: "June 2020 – Aug 2021",
    type: "Founder",
    color: "from-green-500 to-emerald-500",
    points: [
      "Created and managed TechHindish, an independent tech blog delivering SEO-optimized content focused on digital trends.",
      "Developed and executed social media strategies across Instagram, Facebook, and LinkedIn, achieving a 45% increase in engagement.",
      "Conducted SEO audits and implemented keyword strategies that improved web traffic by over 30%.",
      "Wrote, edited, and published blogs, newsletters, and marketing articles ranking on Google SERPs.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-white/60 mt-4 text-lg">
              Building, creating, and innovating across different domains
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink opacity-20 transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}>
                {/* Content Card */}
                <div className="flex-1 md:w-[calc(50%-2rem)] pt-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="group relative glass rounded-2xl p-6 md:p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                    
                    {/* Icon Badge */}
                    <div className={`absolute -top-8 ${
                      i % 2 === 0 ? "md:left-6" : "md:right-6"
                    } left-6`}>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl shadow-lg shadow-black/50`}>
                          {exp.icon}
                        </div>
                      </motion.div>
                    </div>

                    <div className="relative mt-4">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                        <span className="text-sm text-neon-cyan font-medium">
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="text-sm text-white/50 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {exp.location}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-neon-purple group-hover:bg-clip-text transition-all duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-white/80 font-medium mb-6">
                        {exp.company}
                      </p>

                      {/* Divider */}
                      <div className={`h-0.5 w-16 bg-gradient-to-r ${exp.color} mb-6`} />

                      {/* Points */}
                      <ul className="space-y-3">
                        {exp.points.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + idx * 0.05 }}
                          >
                            <div className="flex gap-3 text-white/70 text-sm md:text-base group/item">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 group-hover/item:scale-150 transition-transform`} />
                              <span className="group-hover/item:text-white/90 transition-colors">
                                {point}
                              </span>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot - desktop only */}
                <div className="hidden md:flex items-start justify-center w-16 flex-shrink-0 pt-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                  >
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} shadow-lg relative z-10`}>
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} animate-ping opacity-75`} />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


