"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  file: string;
  gradient: string;
  isNew?: boolean;
}

export default function MusicPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'none' | 'one' | 'all'>('none');
  const [showCopyright, setShowCopyright] = useState(false);

  const songs: Song[] = [
    {
      id: 1,
      title: "तु माझी वाइब",
      artist: "Tejas Sonkusare",
      album: "My Originals",
      duration: "3:45",
      file: "/तु माझी वाइब.mp3",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      isNew: true,
    },
    {
      id: 2,
      title: "तेरे नाम",
      artist: "Tejas Sonkusare",
      album: "My Originals",
      duration: "4:20",
      file: "/तुम मेरी धड़कन.mp3",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      isNew: true,
    },
  ];

  const currentSong = songs[currentSongIndex];
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
      } else if (repeatMode === 'all' || currentSongIndex < songs.length - 1) {
        handleNext();
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex, repeatMode, songs.length]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentSongIndex]);

  // Show copyright warning when playing
  useEffect(() => {
    if (isPlaying) {
      setShowCopyright(true);
      const timer = setTimeout(() => {
        setShowCopyright(false);
      }, 8000); // Hide after 8 seconds
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    if (isShuffle) {
      let randomIndex = Math.floor(Math.random() * songs.length);
      while (randomIndex === currentSongIndex && songs.length > 1) {
        randomIndex = Math.floor(Math.random() * songs.length);
      }
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    }
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (currentTime > 3) {
      if (audioRef.current) audioRef.current.currentTime = 0;
    } else {
      setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ background: currentSong.gradient }}
        >
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30" />
        </motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ background: currentSong.gradient }}
        >
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>

      <audio ref={audioRef} src={currentSong.file} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative z-10 p-3 sm:p-4 md:p-6">
          <button
            onClick={() => window.location.href = "/"}
            className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold text-sm sm:text-base">Back</span>
          </button>
        </div>
      </motion.div>

      {/* Copyright Warning Notice */}
      <AnimatePresence>
        {showCopyright && (
          <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 max-w-[95%] sm:max-w-md">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="backdrop-blur-2xl rounded-xl sm:rounded-2xl border p-2.5 sm:p-3 shadow-2xl relative overflow-hidden">
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(239, 68, 68, 0.15), rgba(185, 28, 28, 0.2))',
                    borderColor: 'rgba(239, 68, 68, 0.5)',
                    boxShadow: '0 0 50px rgba(239, 68, 68, 0.3), 0 20px 40px rgba(0,0,0,0.4)',
                    borderRadius: 'inherit',
                    pointerEvents: 'none',
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 50px rgba(239, 68, 68, 0.3), 0 20px 40px rgba(0,0,0,0.4)',
                      '0 0 60px rgba(220, 38, 38, 0.4), 0 20px 40px rgba(0,0,0,0.4)',
                      '0 0 50px rgba(239, 68, 68, 0.3), 0 20px 40px rgba(0,0,0,0.4)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 animate-pulse" />
                
                <div className="relative z-10 flex items-center gap-2 sm:gap-2.5">
                  {/* Warning Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                           style={{
                             background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                             boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)',
                           }}>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>

                  {/* Warning Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[11px] sm:text-xs font-black uppercase mb-0.5">
                      <span className="bg-gradient-to-r from-red-200 via-orange-200 to-red-200 bg-clip-text text-transparent">
                        <motion.span
                          animate={{
                            textShadow: [
                              '0 0 20px rgba(239, 68, 68, 0.5)',
                              '0 0 30px rgba(220, 38, 38, 0.6)',
                              '0 0 20px rgba(239, 68, 68, 0.5)',
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ⚠️ COPYRIGHT PROTECTED
                        </motion.span>
                      </span>
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-white/90 font-medium leading-snug">
                      🚫 DO NOT COPY - Original song © All rights reserved
                    </p>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setShowCopyright(false)}
                    className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 transition-all hover:scale-110 hover:rotate-90"
                  >
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Player Card */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 pb-8 sm:pb-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full max-w-5xl">
          <div className="backdrop-blur-3xl bg-white/5 rounded-2xl sm:rounded-3xl md:rounded-[3rem] border border-white/10 shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-center">
              
              {/* Left: Circular Progress Player */}
              <div className="md:col-span-2 flex justify-center mb-6 md:mb-0">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                  {/* Circular Progress */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 320 320">
                    {/* Background Circle */}
                    <circle
                      cx="160"
                      cy="160"
                      r="120"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="160"
                      cy="160"
                      r="120"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      animate={{
                        strokeDashoffset: strokeDashoffset,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899">
                          <animate attributeName="stop-color" values="#ec4899; #f59e0b; #10b981; #06b6d4; #3b82f6; #8b5cf6; #ec4899" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="14%" stopColor="#f59e0b">
                          <animate attributeName="stop-color" values="#f59e0b; #fbbf24; #10b981; #06b6d4; #3b82f6; #8b5cf6; #ec4899" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="28%" stopColor="#fbbf24">
                          <animate attributeName="stop-color" values="#fbbf24; #10b981; #06b6d4; #3b82f6; #8b5cf6; #ec4899; #f59e0b" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="42%" stopColor="#10b981">
                          <animate attributeName="stop-color" values="#10b981; #06b6d4; #3b82f6; #8b5cf6; #ec4899; #f59e0b; #fbbf24" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="57%" stopColor="#06b6d4">
                          <animate attributeName="stop-color" values="#06b6d4; #3b82f6; #8b5cf6; #ec4899; #f59e0b; #fbbf24; #10b981" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="71%" stopColor="#3b82f6">
                          <animate attributeName="stop-color" values="#3b82f6; #8b5cf6; #ec4899; #f59e0b; #fbbf24; #10b981; #06b6d4" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="85%" stopColor="#8b5cf6">
                          <animate attributeName="stop-color" values="#8b5cf6; #ec4899; #f59e0b; #fbbf24; #10b981; #06b6d4; #3b82f6" dur="6s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#ec4899">
                          <animate attributeName="stop-color" values="#ec4899; #8b5cf6; #3b82f6; #06b6d4; #10b981; #fbbf24; #f59e0b" dur="6s" repeatCount="indefinite" />
                        </stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Center Album Art */}
                  <motion.div
                    animate={{
                      rotate: isPlaying ? 360 : 0,
                    }}
                    transition={{
                      duration: 20,
                      repeat: isPlaying ? Infinity : 0,
                      ease: "linear",
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div 
                      className="w-48 h-48 rounded-full flex items-center justify-center shadow-2xl shadow-pink-500/50"
                      style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 20%, #10b981 40%, #06b6d4 60%, #3b82f6 80%, #8b5cf6 100%)' }}
                    >
                      <motion.div
                        animate={{
                          scale: isPlaying ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isPlaying ? Infinity : 0,
                        }}
                      >
                        <svg className="w-24 h-24 text-white drop-shadow-2xl" fill="currentColor" viewBox="0 0 20 20" style={{ filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))' }}>
                          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                        </svg>
                      </motion.div>
                    </div>
                    </div>
                  </motion.div>

                  {/* Spectrum Bars around Circle */}
                  {isPlaying && [...Array(12)].map((_, i) => {
                    const angle = (i * 360) / 12;
                    const radius = 140;
                    const x = 160 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = 160 + radius * Math.sin((angle * Math.PI) / 180);
                    
                    return (
                      <motion.div
                        key={i}
                        animate={{
                          height: ['8px', `${Math.random() * 20 + 10}px`, '8px'],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        style={{
                          position: 'absolute',
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                          width: '4px',
                        }}
                      >
                        <div className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full" style={{ height: '100%' }} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Controls */}
              <div className="md:col-span-3 space-y-4 sm:space-y-6 md:space-y-8">
                {/* Song Info */}
                <motion.div
                  key={currentSongIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="space-y-2 sm:space-y-3">
                  <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80">
                      Now Playing
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                      {currentSong.title}
                    </h1>
                    {currentSong.isNew && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      >
                        <span 
                          className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg border sm:border-2"
                          style={{
                            background: currentSong.gradient,
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
                          }}
                        >
                          NEW
                        </span>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-xl text-white/70">
                    <span className="font-medium">{currentSong.artist}</span>
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white/50" />
                    <span>{currentSong.album}</span>
                  </div>
                  </div>
                </motion.div>

                {/* Time Info */}
                <div className="flex justify-between items-center text-white/60 font-mono text-xs sm:text-sm">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>

                {/* Main Controls */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
                  {/* Shuffle */}
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <button
                      onClick={() => setIsShuffle(!isShuffle)}
                      className={`p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-xl transition-all border ${
                        isShuffle 
                          ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-purple-400/50 shadow-lg shadow-purple-500/30' 
                          : 'bg-white/5 border-white/10 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20'
                      }`}
                    >
                      <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${isShuffle ? 'text-purple-300' : 'text-white/50 group-hover:text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </motion.div>

                  {/* Previous */}
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <button
                      onClick={handlePrevious}
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/30 hover:border-cyan-400/50 transition-all shadow-lg shadow-cyan-500/20"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                      </svg>
                    </button>
                  </motion.div>

                  {/* Play/Pause */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={togglePlay}
                      className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group border-2 border-white/20"
                      style={{
                        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #06b6d4 75%, #10b981 100%)',
                      }}
                    >
                      {/* Ripple Effect */}
                      {isPlaying && (
                        <>
                          <motion.div
                            animate={{
                              scale: [1, 2],
                              opacity: [0.5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                            style={{ 
                              position: 'absolute',
                              inset: 0,
                              borderRadius: '1.5rem',
                              background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #06b6d4 75%, #10b981 100%)'
                            }}
                          />
                          <motion.div
                            animate={{
                              scale: [1, 2],
                              opacity: [0.5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 0.75,
                            }}
                            style={{ 
                              position: 'absolute',
                              inset: 0,
                              borderRadius: '1.5rem',
                              background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #06b6d4 75%, #10b981 100%)'
                            }}
                          />
                        </>
                      )}

                      <AnimatePresence mode="wait">
                        {isPlaying ? (
                          <motion.svg
                            key="pause"
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white relative z-10"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </motion.svg>
                        ) : (
                          <motion.svg
                            key="play"
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white relative z-10"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </motion.svg>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>

                  {/* Next */}
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <button
                      onClick={handleNext}
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl hover:from-orange-500/30 hover:to-red-500/30 border border-orange-400/30 hover:border-orange-400/50 transition-all shadow-lg shadow-orange-500/20"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                      </svg>
                    </button>
                  </motion.div>

                  {/* Repeat */}
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <button
                      onClick={() => setRepeatMode(repeatMode === 'none' ? 'all' : repeatMode === 'all' ? 'one' : 'none')}
                      className={`p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-xl transition-all relative border ${
                        repeatMode !== 'none'
                          ? 'bg-gradient-to-br from-green-500/30 to-teal-500/30 border-green-400/50 shadow-lg shadow-green-500/30'
                          : 'bg-white/5 border-white/10 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-teal-500/20'
                      }`}
                    >
                      <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${repeatMode !== 'none' ? 'text-green-300' : 'text-white/50'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                      {repeatMode === 'one' && (
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] sm:text-[10px] font-bold text-white">1</span>
                      )}
                    </button>
                  </motion.div>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <button onClick={() => setVolume(volume === 0 ? 0.8 : 0)} className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-pink-500/20 hover:from-yellow-500/30 hover:to-pink-500/30 border border-yellow-400/30 hover:border-pink-400/40 transition-all">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="flex-1 relative">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
                      <motion.div
                        animate={{ width: `${volume * 100}%` }}
                        style={{ 
                          height: '100%',
                          borderRadius: '9999px',
                          background: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #06b6d4 75%, #10b981 100%)' 
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume * 100}
                      onChange={(e) => setVolume(Number(e.target.value) / 100)}
                      className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-white/60 font-mono w-8 sm:w-12 text-right">{Math.round(volume * 100)}%</span>
                </div>

                {/* Playlist */}
                <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4">
                  <h3 className="text-[10px] sm:text-xs font-bold text-white/50 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                    Queue • {songs.length}
                  </h3>
                  
                  <div className="space-y-2">
                    {songs.map((song, index) => (
                      <motion.div
                        key={song.id}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={() => {
                            setCurrentSongIndex(index);
                            setIsPlaying(true);
                          }}
                          className={`w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-xl transition-all text-left flex items-center gap-2 sm:gap-3 md:gap-4 border ${
                            currentSongIndex === index
                              ? 'bg-white/15 border-white/30'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <div 
                            className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                            style={{ 
                              background: currentSongIndex === index ? song.gradient : 'rgba(255,255,255,0.05)'
                            }}
                          >
                            {currentSongIndex === index && isPlaying ? (
                              <div className="flex items-center gap-0.5 sm:gap-1">
                                {[0, 1, 2].map((i) => (
                                  <motion.div
                                    key={i}
                                    animate={{
                                      height: ['10px', '20px', '10px'],
                                    }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Infinity,
                                      delay: i * 0.15,
                                    }}
                                  >
                                    <div className="w-0.5 sm:w-1 bg-white rounded-full" style={{ height: '100%' }} />
                                  </motion.div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-white/70 font-bold text-sm sm:text-base md:text-lg">{index + 1}</span>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                              <h4 className={`font-bold truncate text-sm sm:text-base md:text-lg ${
                                currentSongIndex === index ? 'text-white' : 'text-white/80'
                              }`}>
                                {song.title}
                              </h4>
                              {song.isNew && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <span
                                    className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-wider flex-shrink-0 shadow-lg inline-block"
                                    style={{
                                      background: song.gradient,
                                      color: 'white',
                                    }}
                                  >
                                    NEW
                                  </span>
                                </motion.div>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-white/50 truncate">{song.artist}</p>
                          </div>
                          
                          <span className="text-xs sm:text-sm text-white/40 font-mono flex-shrink-0">{song.duration}</span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
