"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const subjects = [
  { name: "Object-Oriented Programming (OOP)", icon: "💻" },
  { name: "Data Structures & Algorithms (DSA)", icon: "🔢" },
  { name: "Database Management Systems (DBMS)", icon: "🗄️" },
  { name: "Operating Systems (OS)", icon: "⚙️" },
];

export function Education() {
  const [showDegree, setShowDegree] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showDegree) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDegree]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowDegree(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="education" className="section">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-white/60 mt-2 sm:mt-3 text-base sm:text-lg">Academic Background & Achievements</p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative glass rounded-2xl border border-white/10 overflow-hidden">
            {/* Top Gradient Bar */}
            <div className="h-1.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
            
            <div className="p-4 sm:p-6 md:p-8">
              {/* Degree Icon & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 shadow-xl">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    Bachelor of Engineering (B.E.)
                  </h3>
                  <p className="text-lg sm:text-xl text-neon-cyan font-semibold">
                    Computer Science & Engineering
                  </p>
                </div>
              </div>

              {/* College Info */}
              <div className="mb-6 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-start sm:items-center gap-2 text-white/80 mb-2">
                  <svg className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-semibold text-sm sm:text-base md:text-lg">Sipna College of Engineering & Technology</span>
                </div>
                <div className="flex items-start sm:items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm sm:text-base">Amravati, Maharashtra, India</span>
                </div>
              </div>

              {/* Year & CGPA */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-cyan/5 border border-neon-cyan/20">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white/60 text-sm">Graduated</span>
                  </div>
                  <p className="text-2xl font-bold text-white">2024</p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 border border-neon-purple/20">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="text-white/60 text-sm">CGPA</span>
                  </div>
                  <p className="text-2xl font-bold text-white">8.91 <span className="text-base text-white/50">/ 10</span></p>
                </div>
              </div>

              {/* CGPA Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/60">Academic Performance</span>
                  <span className="text-sm font-bold text-neon-cyan">89.1%</span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "89.1%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                  />
                </div>
              </div>

              {/* View Degree Button */}
              <div className="mb-6">
                <motion.button
                  onClick={() => setShowDegree(true)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold shadow-xl hover:shadow-neon-cyan/50 transition-all flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Degree Certificate
                </motion.button>
              </div>

              {/* Subjects */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Key Subjects Studied
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {subjects.map((subject, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                      <span className="text-2xl">{subject.icon}</span>
                      <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                        {subject.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
          </div>
          </div>
        </motion.div>

        {/* Degree Certificate Modal */}
        <AnimatePresence>
          {showDegree && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div 
                onClick={() => setShowDegree(false)}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                >
                  <div 
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    className="relative max-w-4xl w-full glass rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
                  >
                    {/* Close Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDegree(false);
                      }}
                      className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group cursor-pointer"
                    >
                      <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Header */}
                    <div className="p-4 bg-gradient-to-br from-neon-cyan to-neon-purple relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-white">Bachelor of Engineering Degree</h3>
                            <p className="text-white/90 text-sm">Computer Science & Engineering - 2024</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-white/5" />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                        <img 
                          src="/certificates/degree-certificate.jpg" 
                          alt="Bachelor of Engineering Degree Certificate"
                          className="w-full h-auto select-none pointer-events-none"
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          style={{ userSelect: 'none', WebkitUserSelect: 'none', maxHeight: '70vh', objectFit: 'contain' }}
                        />
                        {/* Watermark overlay */}
                        <div className="absolute inset-0 pointer-events-none select-none" 
                          style={{ 
                            background: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.02) 100px, rgba(255,255,255,0.02) 200px)'
                          }}
                        />
                      </div>
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


