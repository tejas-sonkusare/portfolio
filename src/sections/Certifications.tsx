"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const certificationGroups = [
  {
    category: "Cybersecurity & Cloud Security",
    icon: "🔐",
    color: "from-red-500 to-orange-500",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/5",
    textColor: "text-red-400",
    items: [
      { 
        name: "Palo Alto Networks Certified Cybersecurity Entry-level Technician", 
        issuer: "Palo Alto Networks", 
        featured: true,
        verified: true,
        year: "2024",
        skills: ["Network Security", "Threat Detection", "Firewall"],
        imageUrl: "/certificates/palo-alto-pccet.jpg"
      },
      { name: "The Fundamentals of SOC - Assessment", issuer: "Palo Alto Networks Academy", featured: false, verified: true, year: "2024", skills: ["SOC Operations", "Incident Response"], imageUrl: "/certificates/palo-alto-soc-fundamentals.jpg" },
      { name: "Microsoft Technology Associate: Security Fundamentals", issuer: "Microsoft", featured: false, verified: true, year: "2023", skills: ["Security Concepts", "Cloud Security"], imageUrl: "/certificates/microsoft-security-fundamentals.jpg" },
      { name: "ISC² Candidate", issuer: "ISC²", featured: false, verified: true, year: "2024", skills: ["Cybersecurity Principles"], imageUrl: "/certificates/isc2-candidate.jpg" },
      { name: "NEAT Cybersecurity Virtual Internship", issuer: "AICTE / Govt. of India", featured: false, verified: true, year: "2023", skills: ["Practical Security"], imageUrl: "/certificates/neat-certificate.jpg" },
    ],
  },
  {
    category: "Cloud Computing & DevOps",
    icon: "☁️",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/5",
    textColor: "text-cyan-400",
    items: [
      { name: "Google Cloud Study Jam 2023", issuer: "Google Cloud - 2nd Rank", featured: true, verified: true, year: "2023", skills: ["GCP", "Cloud Platform", "Qwiklabs"], imageUrl: "/certificates/google-cloud-study-jam.jpg" },
      { name: "Azure Fundamentals Cloud Skill Challenge", issuer: "Microsoft Learn Student Ambassador", featured: false, verified: true, year: "2023", skills: ["Azure", "Cloud Services"], imageUrl: "/certificates/azure-fundamentals-microsoft.jpg" },
      { name: "DevOps Fundamentals", issuer: "Udemy", featured: false, verified: true, year: "2024", skills: ["CI/CD", "Automation"], imageUrl: "/certificates/devops-fundamentals-udemy.jpg" },
      { name: "IBM SkillsBuild Internship", issuer: "IBM SkillsBuild", featured: false, verified: true, year: "2023", skills: ["Cloud Computing", "AI/ML"], imageUrl: "/certificates/ibm-skillsbuild-internship.jpg" },
      { name: "LinkedIn Learning Certifications", issuer: "LinkedIn Learning", featured: false, verified: true, year: "2023-24", skills: ["Professional Dev"], imageUrl: "/certificates/linkedin-learning-certifications.jpg" },
      { name: "FutureSkills Prime", issuer: "FutureSkills Prime", featured: false, verified: true, year: "2023", skills: ["Digital Skills"], imageUrl: "/certificates/futureskills-prime.jpg" },
    ],
  },
  {
    category: "Software Development",
    icon: "💻",
    color: "from-purple-500 to-fuchsia-500",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    textColor: "text-purple-400",
    items: [
      { name: "Android Virtual Internship", issuer: "Google / AICTE", featured: true, verified: true, year: "2023", skills: ["Android Development", "Mobile Apps"], imageUrl: "/certificates/android-virtual-internship.jpg" },
      { name: "Java Full-Stack Development", issuer: "Sipna College", featured: false, verified: true, year: "2024", skills: ["Java", "Spring Boot"], imageUrl: null },
      { name: "Python for Data Science", issuer: "IBM SkillsBuild", featured: false, verified: true, year: "2023", skills: ["Python", "Data Analysis"], imageUrl: null },
    ],
  },
  {
    category: "Digital Marketing",
    icon: "📊",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/30",
    bgColor: "bg-pink-500/5",
    textColor: "text-pink-400",
    items: [
      { name: "Digital Marketing Certification", issuer: "LinkedIn Learning", featured: false, verified: true, year: "2024", skills: ["SEO", "Social Media", "Analytics"], imageUrl: null },
    ],
  },
  {
    category: "Academic Recognition",
    icon: "🎓",
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/5",
    textColor: "text-yellow-400",
    items: [
      { name: "Techno Ignite 2022 - National Quiz Competition (3rd Prize)", issuer: "Institution of Engineers (India)", featured: true, verified: true, year: "2022", skills: ["Technical Knowledge", "Problem Solving"], imageUrl: "/certificates/techno-ignite-2022.jpg" },
      { name: "Machine Learning Course", issuer: "SHINE PROJECTS", featured: false, verified: true, year: "2023", skills: ["ML Algorithms", "AI Concepts"], imageUrl: "/certificates/machine-learning-shine.jpg" },
    ],
  },
];

export function Certifications() {
  const totalCerts = certificationGroups.reduce((acc, group) => acc + group.items.length, 0);
  const [selectedCert, setSelectedCert] = useState<{ name: string; issuer: string; imageUrl: string | null; color: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-60 animate-pulse" />
                <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center shadow-2xl">
                  <span className="text-5xl">🏆</span>
                </div>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Showcasing {totalCerts}+ industry-recognized credentials across {certificationGroups.length} specialized domains
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="https://www.credly.com/users/tejas-sonkusare" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="px-6 py-3 rounded-2xl border-2 border-white/30 glass text-white font-bold hover:border-white/60 transition-all flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Credly Profile
                </div>
              </motion.button>
            </Link>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {certificationGroups.map((group, idx) => (
              <div key={idx} onClick={() => setActiveCategory(idx)}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === idx
                      ? `bg-gradient-to-r ${group.color} text-white shadow-lg`
                      : 'glass border border-white/20 text-white/60 hover:text-white hover:border-white/40'
                  }`}>
                    <span className="text-lg">{group.icon}</span>
                    <span>{group.category}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeCategory === idx ? 'bg-white/30' : 'bg-white/10'
                    }`}>
                      {group.items.length}
                    </span>
                  </div>
                </motion.button>
              </div>
            ))}
          </div>
        </div>
        </motion.div>

        {/* Certifications Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-16">
            {/* Category Header */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${certificationGroups[activeCategory].color} flex items-center justify-center text-4xl shadow-xl`}>
                  {certificationGroups[activeCategory].icon}
                </div>
              </motion.div>
              <div className="text-center">
                <h3 className={`text-3xl font-bold ${certificationGroups[activeCategory].textColor}`}>
                  {certificationGroups[activeCategory].category}
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  {certificationGroups[activeCategory].items.length} Professional {certificationGroups[activeCategory].items.length > 1 ? 'Certifications' : 'Certification'}
                </p>
              </div>
            </div>

            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationGroups[activeCategory].items.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative h-full">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${certificationGroups[activeCategory].color} rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                    
                    {/* Card */}
                    <div className={`relative h-full glass rounded-3xl p-6 border-2 ${certificationGroups[activeCategory].borderColor} ${certificationGroups[activeCategory].bgColor} hover:border-white/40 transition-all duration-300 group`}>
                      {/* Featured Badge */}
                      {cert.featured && (
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", delay: idx * 0.1 + 0.3 }}
                        >
                          <div className="absolute -top-3 -right-3 z-10">
                            <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${certificationGroups[activeCategory].color} shadow-xl flex items-center gap-1.5`}>
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-white text-xs font-bold">TOP</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Certificate Icon */}
                      <div className="flex items-center justify-center mb-6">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${certificationGroups[activeCategory].color} flex items-center justify-center shadow-xl`}>
                            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="text-center mb-4">
                        <h4 className="text-white font-bold text-lg mb-2 leading-snug min-h-[56px]">
                          {cert.name}
                        </h4>
                        
                        {/* Issuer & Year */}
                        <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-3">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="line-clamp-1">{cert.issuer}</span>
                        </div>

                        {/* Year & Verified Badge */}
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <div className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white/80 text-xs font-semibold flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {cert.year}
                          </div>
                          {cert.verified && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", delay: idx * 0.1 + 0.2 }}
                              className={`px-2.5 py-1 rounded-lg bg-gradient-to-r ${certificationGroups[activeCategory].color} text-white text-xs font-bold flex items-center gap-1`}
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Verified
                            </motion.div>
                          )}
                        </div>

                        {/* Skills Tags */}
                        {cert.skills && cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 justify-center">
                            {cert.skills.map((skill, skillIdx) => (
                              <motion.span
                                key={skillIdx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white/70 text-[10px] font-medium hover:bg-white/20 hover:text-white transition-all"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* View Button */}
                      <button
                        onClick={() => cert.imageUrl ? setSelectedCert({ ...cert, color: certificationGroups[activeCategory].color }) : null}
                        className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${certificationGroups[activeCategory].color} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${!cert.imageUrl ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Certificate
                      </button>

                      {/* Decorative Element */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${certificationGroups[activeCategory].color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`} />
                    </div>
                  </div>
              </motion.div>
            ))}
            </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-3xl glass border border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="inline-block mb-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">{totalCerts}+</div>
                <div className="text-white/60 text-sm font-medium">Total Certifications</div>
              </div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="inline-block mb-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">{certificationGroups.length}</div>
                <div className="text-white/60 text-sm font-medium">Specialized Domains</div>
              </div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="inline-block mb-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
                <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-1">∞</div>
                <div className="text-white/60 text-sm font-medium">Continuous Learning</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificate Preview Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
              >
                <div 
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  className="relative max-w-2xl w-full glass rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
                >
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(null);
                  }}
                  className="absolute top-3 right-3 z-50 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group cursor-pointer"
                >
                  <svg className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Header */}
                <div className={`p-4 bg-gradient-to-br ${selectedCert.color} relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white truncate">{selectedCert.name}</h3>
                        <p className="text-white/90 text-xs truncate">{selectedCert.issuer}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/5" />
                </div>

                {/* Content */}
                <div className="p-4">
                  {selectedCert.imageUrl ? (
                    <div className={`relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${
                      selectedCert.imageUrl === '/certificates/techno-ignite-2022.jpg' ? 'w-full max-w-4xl mx-auto flex items-center justify-center' : 'max-w-sm mx-auto'
                    }`} style={selectedCert.imageUrl === '/certificates/techno-ignite-2022.jpg' ? { minHeight: '400px', maxHeight: '70vh' } : {}}>
                      <img 
                        src={selectedCert.imageUrl} 
                        alt={`${selectedCert.name} Certificate`}
                        className={`select-none pointer-events-none ${
                          selectedCert.imageUrl === '/certificates/techno-ignite-2022.jpg' ? '' : 'w-full h-auto'
                        }`}
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        style={{ 
                          userSelect: 'none', 
                          WebkitUserSelect: 'none',
                          ...(selectedCert.imageUrl === '/certificates/techno-ignite-2022.jpg' && {
                            transform: 'rotate(-90deg) scale(0.85)',
                            transformOrigin: 'center',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          })
                        }}
                      />
                      {/* Watermark overlay */}
                      <div className="absolute inset-0 pointer-events-none select-none" 
                        style={{ 
                          background: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.02) 100px, rgba(255,255,255,0.02) 200px)'
                        }}
                      />
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Certificate Image Not Available</h4>
                      <p className="text-white/60 text-sm mb-4 px-4">
                        Add image to <code className="px-2 py-0.5 rounded bg-white/10 text-neon-cyan text-xs">public/certificates/</code>
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Link href="https://drive.google.com" target="_blank">
                          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-xs shadow-lg hover:shadow-cyan-500/50 transition-shadow">
                            View on Google Drive
                          </button>
                        </Link>
                        <Link href="https://www.credly.com/users/tejas-sonkusare" target="_blank">
                          <button className="px-4 py-2 rounded-lg border border-white/20 glass text-white font-semibold text-xs hover:border-white/40 transition-colors">
                            View on Credly
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 pb-4">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <svg className="w-4 h-4 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Click outside or press ESC to close</span>
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>
        </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


