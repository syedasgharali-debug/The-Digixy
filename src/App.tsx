/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Search, 
  Target, 
  Users, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Globe,
  Zap,
  Layers,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  ExternalLink,
  Calendar
} from 'lucide-react';

import { WorkDetailsModal, ProjectType } from './components/WorkDetailsModal';
import { Faq } from './components/Faq';
import { InteractiveHeroCanvas } from './components/InteractiveHeroCanvas';
import { BookingModal } from './components/BookingModal';

const Logo = ({ className = "", size = "md" }: { className?: string, size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = {
    sm: { container: "w-8 h-8", text: "text-lg", tracker: "tracking-tight", gap: "space-x-2.5", subSize: "text-[5.5px]" },
    md: { container: "w-10 h-10", text: "text-2xl", tracker: "tracking-tighter", gap: "space-x-3.5", subSize: "text-[7px]" },
    lg: { container: "w-16 h-16", text: "text-5xl", tracker: "tracking-tighter", gap: "space-x-5", subSize: "text-[10px]" }
  };
  
  const currentSize = sizes[size];

  return (
    <div className={`flex items-center ${currentSize.gap} ${className} group cursor-pointer`}>
      {/* Premium Tech-Giant SVG Emblem */}
      <div className={`relative ${currentSize.container} shrink-0`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-700 ease-out"
        >
          <defs>
            {/* The Vermilion Spark Gradient - Representing Innovation & Speed */}
            <linearGradient id="logo-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4e00" />
              <stop offset="50%" stopColor="#ff6a00" />
              <stop offset="100%" stopColor="#ff1e00" />
            </linearGradient>
            
            {/* The Deep Platinum Gradient - Representing Pure Precision */}
            <linearGradient id="logo-dark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#121212" />
              <stop offset="50%" stopColor="#2c2c2c" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            
            {/* Soft Shadow Filter for Interlocking Dimensionality */}
            <filter id="logo-drop-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
            </filter>
          </defs>
          
          {/* Obsidian Base Ribbon (The 'X' Dimension) */}
          <motion.path 
            d="M68 20 L45 20 L25 50 L45 80 L68 80 L48 50 Z" 
            fill="url(#logo-dark-grad)"
            className="transition-all duration-700"
            animate={{ 
              opacity: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Vermilion Overlay Ribbon (The 'D' Dimension - Interlocking perfectly) */}
          <path 
            d="M32 20 L55 20 L75 50 L55 80 L32 80 L52 50 Z" 
            fill="url(#logo-accent-grad)"
            filter="url(#logo-drop-shadow)"
          />

          {/* Core Singularity (Center Energy Node) */}
          <circle 
            cx="50" 
            cy="50" 
            r="4.5" 
            fill="#ffffff" 
            className="shadow-inner"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="2.5" 
            fill="#ff4e00" 
          />
        </svg>

        {/* Outer Kinetic Pulse */}
        <span className="absolute -inset-1 rounded-full bg-brand-accent/5 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
      </div>
      
      {/* Elegant Typographic Identity */}
      <div className="flex flex-col -space-y-1">
        <div className={`${currentSize.text} font-display font-black tracking-tight leading-none uppercase select-none flex items-center`}>
          <span className="text-brand-black group-hover:text-brand-accent transition-colors duration-500">DIGI</span>
          <span className="text-brand-accent group-hover:text-brand-black transition-colors duration-500">XY</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent ml-1 transform group-hover:scale-150 transition-transform duration-500" />
        </div>
        <div className="flex items-center space-x-1.5 mt-1.5">
          <div className="h-[1px] w-5 bg-brand-accent/40" />
          <div className={`${currentSize.subSize} uppercase tracking-[0.45em] font-black text-brand-black/50`}>
            Global Innovation Studio
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onOpenModal, onOpenBookingModal }: { onOpenModal: () => void, onOpenBookingModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-brand-white/95 backdrop-blur-2xl py-4 shadow-2xl shadow-brand-black/5' : 'bg-transparent py-6 sm:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="group">
          <Logo size="md" />
        </a>
        
        <div className="hidden md:flex items-center space-x-12">
          {['Services', 'About', 'Work', 'Blog'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-brand-accent transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-500 ease-out" />
            </a>
          ))}
          <button 
            onClick={onOpenBookingModal}
            className="px-6 py-3 border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all duration-300 flex items-center space-x-1.5"
          >
            <Calendar size={12} />
            <span>Schedule Call</span>
          </button>
          <button 
            onClick={onOpenModal}
            className="px-8 py-3 bg-brand-black text-brand-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-brand-accent hover:scale-105 transition-all shadow-md shadow-brand-black/10"
          >
            Start a Project
          </button>
        </div>

        <button className="md:hidden p-3 bg-brand-black text-brand-white rounded-2xl shadow-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-white border-t border-brand-black/5 shadow-2xl md:hidden"
          >
            <div className="p-10 flex flex-col space-y-6">
              {['Services', 'About', 'Work', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-3xl font-display font-black tracking-tighter hover:text-brand-accent transition-colors text-left text-brand-black block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-4 mt-4 border border-brand-black text-brand-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-brand-black hover:text-brand-white transition-all text-center flex items-center justify-center space-x-2"
              >
                <Calendar size={14} />
                <span>Schedule Call</span>
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-4 bg-brand-black text-brand-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-brand-accent transition-all text-center"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Marquee = () => {
  return (
    <div className="py-6 bg-brand-black overflow-hidden whitespace-nowrap border-y border-brand-white/10">
      <div className="inline-block animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-brand-white/20 text-sm font-bold uppercase tracking-[0.5em] mx-12">
            MINNEAPOLIS • NEW YORK • TORONTO • LONDON • SYDNEY • DUBAI • SINGAPORE
          </span>
        ))}
      </div>
    </div>
  );
};

const GlobalTrustBadges = () => {
  return (
    <div className="flex flex-wrap gap-2.5 mb-6">
      <span className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-white rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-brand-black shadow-sm border border-brand-black/5 hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
        <span className="text-sm">🇺🇸</span>
        <span>USA HQ</span>
      </span>
      <span className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-white rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-brand-black shadow-sm border border-brand-black/5 hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
        <span className="text-sm">🇨🇦</span>
        <span>Canada Hub</span>
      </span>
      <span className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-white rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-brand-black shadow-sm border border-brand-black/5 hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
        <span className="text-sm">🇬🇧</span>
        <span>United Kingdom Hub</span>
      </span>
      <span className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-white rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-brand-black shadow-sm border border-brand-black/5 hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
        <span className="text-sm">🇦🇺</span>
        <span>Australia Hub</span>
      </span>
    </div>
  );
};

const GlobalClocks = () => {
  const [times, setTimes] = useState({
    minneapolis: '',
    toronto: '',
    london: '',
    sydney: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      try {
        const options = (timeZone: string) => ({
          timeZone,
          hour: '2-digit' as const,
          minute: '2-digit' as const,
          second: '2-digit' as const,
          hour12: true,
        });
        const formatter = (tz: string) => new Intl.DateTimeFormat('en-US', options(tz)).format(new Date());

        setTimes({
          minneapolis: formatter('America/Chicago'),
          toronto: formatter('America/Toronto'),
          london: formatter('Europe/London'),
          sydney: formatter('Australia/Sydney'),
        });
      } catch (e) {
        setTimes({
          minneapolis: '05:38:14 PM',
          toronto: '06:38:14 PM',
          london: '11:38:14 PM',
          sydney: '08:38:14 AM',
        });
      }
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 bg-brand-black text-brand-beige rounded-[1.5rem] sm:rounded-[2rem] border border-brand-white/10 shadow-2xl mb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-beige/50">🇺🇸 Minneapolis, CST</span>
        </div>
        <span className="text-lg sm:text-xl font-bold tracking-tight font-mono text-brand-white">{times.minneapolis || '05:38 PM'}</span>
      </div>

      <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-brand-white/10 pt-4 sm:pt-0 sm:pl-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-beige/50">🇨🇦 Toronto, EST</span>
        </div>
        <span className="text-lg sm:text-xl font-bold tracking-tight font-mono text-brand-white">{times.toronto || '06:38 PM'}</span>
      </div>

      <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-brand-white/10 pt-4 lg:pt-0 lg:pl-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-beige/50">🇬🇧 London, BST</span>
        </div>
        <span className="text-lg sm:text-xl font-bold tracking-tight font-mono text-brand-white">{times.london || '11:38 PM'}</span>
      </div>

      <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-brand-white/10 pt-4 sm:pt-0 sm:pl-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-beige/50">🇦🇺 Sydney, AEST</span>
        </div>
        <span className="text-lg sm:text-xl font-bold tracking-tight font-mono text-brand-white">{times.sydney || '08:38 AM'}</span>
      </div>
    </div>
  );
};

const Hero = ({ onOpenModal, onOpenBookingModal }: { onOpenModal: () => void, onOpenBookingModal: () => void }) => {
  const [canvasMode, setCanvasMode] = useState<'mesh' | 'velocity' | 'ledger'>('mesh');

  // Business-focused demo models matching the interactive canvas projections
  const telemetryData = {
    mesh: {
      title: "Premium Web & Mobile Apps",
      status: "DEPLOYED",
      color: "text-brand-accent",
      metrics: [
        { label: "User Experience", value: "Optimized & Clean" },
        { label: "Responsive Scale", value: "Fluid & Fast" },
        { label: "Load Velocity", value: "Sub-second Speeds" },
        { label: "Core Technologies", value: "React / Node / Tailwind" }
      ]
    },
    velocity: {
      title: "AI & Custom Workflows",
      status: "INTEGRATED",
      color: "text-green-500",
      metrics: [
        { label: "Process Automation", value: "99.8% Efficiency" },
        { label: "Sync Delay", value: "Real-time Stream" },
        { label: "Custom AI Models", value: "Tailored Solutions" },
        { label: "Database Security", value: "Secure Cloud Core" }
      ]
    },
    ledger: {
      title: "Robust Cloud Architecture",
      status: "PROTECTED",
      color: "text-blue-500",
      metrics: [
        { label: "Infrastructure", value: "Infinite Auto-Scale" },
        { label: "Network Protocol", value: "Zero-Trust Security" },
        { label: "Uptime Standard", value: "99.99% Guaranteed" },
        { label: "Data Compliance", value: "Fully Encrypted (GDPR)" }
      ]
    }
  };

  const activeTelemetry = telemetryData[canvasMode];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-16 overflow-hidden bg-brand-beige">
      {/* Interactive generative background canvas */}
      <InteractiveHeroCanvas mode={canvasMode} />

      {/* Grid pattern and lighting overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-black/[0.01] -skew-x-12 transform origin-top-right" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Content Area */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-black/50">
                Precision Engineering • Global Reach
              </span>
            </motion.div>

            <h1 className="text-[clamp(3rem,7.5vw,6rem)] font-display font-black tracking-tight leading-[0.85] uppercase mb-8 text-brand-black">
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Engineering
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="block text-brand-accent"
                >
                  High-Performance
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="block"
                >
                  Digital Products.
                </motion.span>
              </div>
            </h1>

            <div className="max-w-xl">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-base md:text-lg text-brand-black/60 font-light leading-relaxed mb-8 border-l-2 border-brand-accent/20 pl-6 sm:pl-8"
              >
                We design, build, and scale premium software for enterprise market leaders and fast-growing businesses. Engineered for ultimate reliability, modern speed, and beautiful design.
              </motion.p>

              {/* Dynamic Projection Controller Hub */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="bg-brand-black/5 p-4 rounded-2xl border border-brand-black/5 mb-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="text-[8px] font-black uppercase tracking-[0.25em] text-brand-black/40">PORTFOLIO DEMO</div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-brand-black flex items-center space-x-1.5">
                      <Cpu size={12} className="text-brand-accent" />
                      <span>INTERACTIVE SHOWCASE</span>
                    </div>
                  </div>

                  {/* Mode Toggles */}
                  <div className="flex flex-wrap gap-1.5">
                    {(['mesh', 'velocity', 'ledger'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setCanvasMode(mode)}
                        className={`min-h-[44px] sm:min-h-0 px-4 py-2 sm:py-2.5 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${
                          canvasMode === mode
                            ? 'bg-brand-black text-brand-white shadow-md'
                            : 'bg-brand-white/50 text-brand-black/50 hover:bg-brand-black/5 hover:text-brand-black'
                        }`}
                      >
                        {mode === 'mesh' ? 'Digital Platforms' : mode === 'velocity' ? 'Workflow Automation' : 'Enterprise Architecture'}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <GlobalTrustBadges />
                <GlobalClocks />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={onOpenBookingModal}
                  className="group relative overflow-hidden bg-brand-accent text-brand-white px-8 py-4 sm:py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center space-x-2.5 min-h-[44px]"
                >
                  <Calendar size={14} className="text-brand-white group-hover:scale-110 transition-all duration-300" />
                  <span className="relative z-10 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Schedule Appointment</span>
                </button>

                <button 
                  onClick={onOpenModal}
                  className="group relative overflow-hidden bg-brand-black text-brand-white px-8 py-4 sm:py-5 rounded-full transition-all hover:bg-brand-black/85 hover:scale-105 active:scale-95 shadow-md flex items-center justify-center min-h-[44px]"
                >
                  <span className="relative z-10 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Start a Project</span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right Visual Area: Interactive Telemetry Deck */}
          <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-brand-black rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.25)] border border-brand-white/10 group flex flex-col justify-between"
            >
              {/* Backing structural asset image */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-35 grayscale group-hover:scale-105 transition-all duration-[2000ms] ease-out" 
                alt="Global Architectural Grid" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/45 to-transparent pointer-events-none" />

              {/* Header Telemetry bar */}
              <div className="relative p-6 sm:p-8 flex items-center justify-between border-b border-brand-white/5 bg-brand-black/25 backdrop-blur-sm">
                <div className="flex items-center space-x-2.5">
                  <div className={`w-2 h-2 rounded-full bg-brand-accent animate-ping`} />
                  <span className="text-[10px] font-bold text-brand-white tracking-widest uppercase">
                    SYS.PROJECTION.LIVE
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-brand-white/10 border border-brand-white/10 text-brand-white text-[9px] font-mono font-black uppercase tracking-widest">
                  {activeTelemetry.status}
                </div>
              </div>

              {/* Dynamic telemetry stats center */}
              <div className="relative p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-end">
                <div className="space-y-1.5">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-accent">
                    ACTIVE ENVIRONMENT
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-brand-white uppercase tracking-tight">
                    {activeTelemetry.title}
                  </h3>
                </div>

                {/* Multi-grid telemetry outputs */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-white/10">
                  <AnimatePresence mode="wait">
                    {activeTelemetry.metrics.map((metric, idx) => (
                      <motion.div 
                        key={`${canvasMode}-${idx}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="space-y-0.5"
                      >
                        <div className="text-[8px] font-black uppercase tracking-widest text-brand-white/40">
                          {metric.label}
                        </div>
                        <div className="text-sm font-semibold text-brand-beige">
                          {metric.value}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-brand-beige border border-brand-black/10 p-5 rounded-2xl shadow-2xl hidden sm:block z-20"
            >
              <div className="text-2xl font-display font-black text-brand-black tracking-tighter">GLOBAL</div>
              <div className="text-[8px] font-black uppercase tracking-[0.3em] text-brand-accent mt-0.5">Deployment Standard</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Manifesto = () => {
  return (
    <section className="py-16 md:py-20 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-10 md:mb-12 leading-[0.85]">
              CRAFTED BY <br />
              <span className="italic font-serif font-normal text-brand-accent">Engineers</span>, <br />
              DRIVEN BY <br />
              <span className="text-stroke">Design.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-0.5 bg-brand-accent" />
                <h4 className="text-lg font-black uppercase tracking-widest">White Label Mastery</h4>
                <p className="text-brand-black/60 leading-relaxed">
                  We empower agencies globally with high-performance white-label SaaS solutions. Your brand, our world-class engineering.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-0.5 bg-brand-accent" />
                <h4 className="text-lg font-black uppercase tracking-widest">Global Marketing Game</h4>
                <p className="text-brand-black/60 leading-relaxed">
                  From London to Singapore, we command local SEO and global SEM campaigns that convert at the highest industry benchmarks.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-brand-beige rounded-[60px] rotate-6" />
              <div className="absolute inset-0 bg-brand-black rounded-[60px] -rotate-3 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-40">
                   <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" alt="Workspace" className="w-full h-full object-cover object-center grayscale" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[120px] font-display font-black text-brand-accent">99%</div>
                    <div className="text-xs uppercase tracking-[0.5em] text-brand-white/50 font-black">Retention Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Market Domination",
      description: "We don't just 'rank' your site. We command the search landscape across every relevant market platform.",
      icon: <Globe className="w-12 h-12" />,
      tags: ["Global SEO", "Aggressive SEM", "Authority"]
    },
    {
      title: "Core Engineering",
      description: "Architecting high-frequency web ecosystems and native mobile products that scale from zero to millions.",
      icon: <Layers className="w-12 h-12" />,
      tags: ["Scale Architecture", "iOS", "Android"]
    },
    {
      title: "SaaS Ecosystems",
      description: "White-label mastery and custom enterprise software. We build the engines that power other businesses.",
      icon: <Zap className="w-12 h-12" />,
      tags: ["White Label", "Custom SaaS", "Legacy Sync"]
    },
    {
      title: "Brand Integrity",
      description: "Elite digital protection and growth strategy. We safeguard your reputation while accelerating your scale.",
      icon: <ShieldCheck className="w-12 h-12" />,
      tags: ["Elite PR", "Risk Matrix", "Hyper Growth"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-6 mb-8"
          >
            <div className="h-0.5 w-12 bg-brand-accent" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-accent">OUR CAPABILITIES</span>
          </motion.div>
          <h2 className="text-[clamp(3rem,8vw,10rem)] font-display font-black leading-[0.8] tracking-tighter uppercase mb-12">
            End-to-End <br />
            Engineering.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-brand-beige p-12 rounded-[40px] group transition-all duration-500 hover:shadow-2xl hover:shadow-brand-black/5 flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-brand-black mb-10 group-hover:text-brand-accent transition-colors duration-500 scale-125 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-display font-black mb-6 tracking-tight leading-none uppercase">{service.title}</h3>
                <p className="text-brand-black/50 text-lg mb-10 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[8px] uppercase tracking-[0.3em] font-black px-4 py-2 border border-brand-black/5 rounded-full group-hover:bg-brand-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const allProjects: ProjectType[] = [
    {
      title: "Global E-commerce Scale",
      client: "Luxe London",
      category: "Digital Growth",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1200"
      ],
      challenge: "Luxe London's legacy platform struggled to handle holiday traffic surges, resulting in severe checkout dropouts and speed spikes. They required a secure, ultra-fast headless storefront.",
      solution: "We engineered a highly optimized headless storefront with a Next.js/React frontend. We integrated modular APIs, Stripe, and global CDNs to guarantee fast page responses under 0.4 seconds.",
      techStack: ["Next.js", "GraphQL", "Tailwind CSS", "Shopify API", "Vercel Edge", "Stripe API"],
      stats: [
        { value: "+340%", label: "Conversion Rate" },
        { value: "0.4s", label: "First Contentful Paint" },
        { value: "$12M+", label: "Sales Processed" }
      ],
      feedback: {
        quote: "The Digixy delivered flawless performance. Our Black Friday traffic spikes had zero latency, transforming our digital brand presence globally.",
        author: "Victoria Sterling",
        role: "VP of Digital Commerce",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
      }
    },
    {
      title: "Fintech Brand Identity",
      client: "Sterling Digital",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200"
      ],
      challenge: "Sterling Digital was launching a premium banking interface for high-net-worth investors. They required a visual system that inspired absolute prestige, safety, and modern sophistication.",
      solution: "We crafted a comprehensive corporate branding identity, high-fidelity UI tokens, interactive vector design languages, and motion layouts that define a luxury digital banking experience.",
      techStack: ["Figma Studio", "After Effects", "Tailwind CSS", "React Motion", "Storybook"],
      stats: [
        { value: "100%", label: "System Consistency" },
        { value: "2.4M", label: "Launch Impressions" },
        { value: "A+", label: "App Store Audit" }
      ],
      feedback: {
        quote: "Outstanding creative execution. They didn't just design elements; they established a mathematical visual language of high-net-worth luxury.",
        author: "Marcus Vance",
        role: "Chief Creative Officer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
      }
    },
    {
      title: "Enterprise SaaS Core",
      client: "NexaFlow",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1454165833767-1330084b1f91?auto=format&fit=crop&q=80&w=1200",
      images: [
        "https://images.unsplash.com/photo-1454165833767-1330084b1f91?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200"
      ],
      challenge: "NexaFlow required a modular multi-tenant core platform to sync industrial telemetry data securely from globally distributed sensor grids with sub-millisecond precision.",
      solution: "We engineered an ultra-resilient Go/Node backend coupled with PostgreSQL clusters. Designed custom pub/sub mechanics, high-throughput pipelines, and responsive React data hubs.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Docker"],
      stats: [
        { value: "99.99%", label: "System Uptime" },
        { value: "10x", label: "Telemetry Pipeline Speed" },
        { value: "Zero", label: "Security Leaks" }
      ],
      feedback: {
        quote: "Our global analytics sync is now bulletproof. The Digixy's engineering team exceeded every rigorous security and speed expectation we established.",
        author: "Dr. Elena Rostova",
        role: "VP of Engineering",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
      }
    },
    {
      title: "Real Estate Ecosystem",
      client: "Estate Global",
      category: "Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
      ],
      challenge: "Estate Global needed to scale their brokerage network with real-time geospatial filtering, interactive map visualization, and offline capability for field brokers.",
      solution: "We built an optimized Single-Page Application leveraging custom Mapbox SDK layers, offline sync protocols, and automated client-contract generation engines.",
      techStack: ["React", "Tailwind CSS", "Mapbox GL", "Node.js", "Redis", "PDF Generation"],
      stats: [
        { value: "+180%", label: "Broker Engagement" },
        { value: "1.8s", label: "Interactive Load" },
        { value: "12", label: "Global Regions Live" }
      ],
      feedback: {
        quote: "Broker onboarding times dropped by 70%. The maps integration is incredibly fluid and has set a new premium benchmark in high-end real estate.",
        author: "Charles Montgomery",
        role: "Founder & CEO",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
      }
    },
    {
      title: "Logistics Optimization",
      client: "Rapid Route",
      category: "Software",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1519003722824-192514ad74bb?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
      ],
      challenge: "Rapid Route dispatchers spent hours manually plotting and adjusting delivery schedules for over a thousand active heavy vehicles. Stale traffic data compounded delay fees.",
      solution: "We designed a dynamic, graph-based routing algorithm combined with real-time fleet telematics. The system auto-recalculates routes continuously based on live traffic events.",
      techStack: ["Go", "React", "WebSockets", "Kafka", "PostGIS", "Leaflet Maps"],
      stats: [
        { value: "-22%", label: "Fuel Expenses" },
        { value: "99.4%", label: "On-Time Dispatch" },
        { value: "2.1M", label: "Daily Route Updates" }
      ],
      feedback: {
        quote: "A quantum leap for our logistics workflow. Routes are calculated and dispatched instantly, improving fleet efficiency beyond our targets.",
        author: "Sarah Jenkins",
        role: "Chief Operating Officer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
      }
    },
    {
      title: "AI Marketing Engine",
      client: "Vertex AI",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200"
      ],
      challenge: "Vertex AI wanted to enable hyper-personalized ad generation matching tailored textual copy directly to automated HTML5 visual canvases on the fly.",
      solution: "We developed a server-driven generation flow utilizing Gemini LLM parameters integrated with React Canvas rendering and fast cloud asset distribution APIs.",
      techStack: ["Gemini SDK", "FastAPI", "React Canvas", "Tailwind CSS", "Framer Motion"],
      stats: [
        { value: "15x", label: "Ad Iteration Cycle" },
        { value: "+85%", label: "CTR Increase" },
        { value: "1.5M", label: "Banners Rendered" }
      ],
      feedback: {
        quote: "Outstanding integration of advanced AI with intuitive canvas UI. It makes complex dynamic asset creation simple and lightning fast.",
        author: "Alexander Thorne",
        role: "VP of Product Strategy",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
      }
    }
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <section id="work" className="py-16 md:py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.8]">SELECTED <br />WORK.</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-black/20 text-right rotate-90 origin-right translate-y-12">
              Portfolio Integrity
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-32">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/11] overflow-hidden mb-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:-translate-y-2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8">
                    <span className="px-6 py-3 bg-brand-white text-[9px] uppercase tracking-[0.3em] font-black rounded-full shadow-2xl">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-end px-4">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-display font-bold mb-2 tracking-tight group-hover:text-brand-accent transition-colors">{project.client}</h3>
                    <p className="text-brand-black/40 italic font-serif text-lg lg:text-xl">{project.title}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:text-brand-white group-hover:border-brand-black transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-5 bg-transparent border-2 border-brand-black rounded-full overflow-hidden transition-all duration-500 hover:bg-brand-black"
          >
            <div className="relative z-10 flex items-center space-x-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-black group-hover:text-brand-white transition-colors">
                {showAll ? "Collapse Archive" : "View All Projects"}
              </span>
              <div className={`w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center transition-transform duration-500 ${showAll ? 'rotate-180' : 'group-hover:rotate-45'}`}>
                <ArrowRight className={`text-brand-white w-4 h-4 ${showAll ? '-rotate-90' : ''}`} />
              </div>
            </div>
            {/* Kinetic Liquid Background Effect */}
            <div className="absolute inset-0 bg-brand-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
          </motion.button>
        </div>
      </div>

      <WorkDetailsModal 
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        onOpenProjectModal={onOpenModal}
      />
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-brand-black text-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-brand-accent mb-6 md:mb-8 block underline underline-offset-[12px] decoration-2">THE ARCHITECTURE</span>
            <h2 className="text-[clamp(4rem,10vw,12rem)] font-display font-black leading-[0.8] mb-8 md:mb-10 tracking-tighter uppercase">
              PURE <br />
              <span className="italic font-serif font-normal text-brand-accent lowercase tracking-normal">Class.</span> <br />
              Total <br />
              <span className="text-stroke">Scale.</span>
            </h2>
            <div className="space-y-12 text-2xl text-brand-white/40 leading-[1.2] font-light max-w-lg">
              <p className="hover:text-brand-white transition-colors duration-500 cursor-default">
                We believe the baseline is the enemy. Every line of code, every pixel of design must serve a singular purpose: Dominance.
              </p>
              <p className="hover:text-brand-white transition-colors duration-500 cursor-default">
                The DigiXy is an elite partner for those who understand that in the global digital landscape, there is no second place.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 z-0 opacity-20 transition-opacity group-hover:opacity-40 duration-700">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" alt="Engineering" className="w-full h-full object-cover object-center rounded-full grayscale" />
            </div>
            <div className="aspect-square rounded-full border-[8px] border-brand-white/5 p-20 animate-spin-slow group-hover:border-brand-accent/40 transition-colors duration-1000 relative z-10">
              <div className="w-full h-full rounded-full border-2 border-brand-white/10 border-dashed" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center relative z-20">
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  className="text-[15rem] font-display font-black text-brand-white leading-none tracking-tighter"
                >
                  7
                </motion.div>
                <div className="text-[10px] uppercase tracking-[1em] font-black text-brand-accent -mt-8">WORLD CLASS YEARS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Text */}
      <div className="absolute -bottom-20 -right-20 text-[25rem] font-display font-black text-brand-white/[0.03] select-none pointer-events-none uppercase tracking-tighter italic">
        Elite
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The DigiXy transformed our global presence in record time. Their technical depth in custom SaaS architecture and white-label methodology is simply unmatched in the industry.",
      name: "Alexander Sterling",
      role: "CTO, NexaFlow",
      rating: 5,
      logo: "NEXA"
    },
    {
      quote: "Creative, professional, and results-driven. They managed our global marketing game with precision, increasing our organic international reach by 120% within the first seven months.",
      name: "Sarah Jenkins",
      role: "VP Marketing, GlobalVibe",
      rating: 5,
      logo: "VIBE"
    },
    {
      quote: "The DigiXy delivered a flawless product that feels native, fast, and incredibly polished. Scaling a mobile application across iOS and Android was our biggest hurdle.",
      name: "Marcus Thorne",
      role: "Founder, Sterling Digital",
      rating: 5,
      logo: "STERLING"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-6 block">Trusted by Leaders</span>
            <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
              CLIENT <br />STORIES.
            </h2>
          </div>
          <p className="text-brand-black/60 text-lg leading-relaxed max-w-xs mt-8 md:mt-0 italic font-serif">
            "Design is a way of life, a point of view. It involves the whole complex of visual communication."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-brand-beige rounded-[40px] border border-transparent hover:border-brand-accent/20 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <Quote size={24} className="text-brand-accent opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <p className="text-xl text-brand-black/80 font-light leading-relaxed mb-10 min-h-[140px]">
                "{t.quote}"
              </p>

              <div className="flex items-center space-x-4 border-t border-brand-black/5 pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center text-[10px] font-black text-brand-white tracking-widest">
                  {t.logo}
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider">{t.name}</h4>
                  <p className="text-xs text-brand-black/40 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Graphical Strength */}
      <div className="absolute -top-24 -right-24 w-64 h-64 border border-brand-black/5 rounded-full" />
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-brand-white rounded-[32px] md:rounded-[60px] p-6 md:p-16 shadow-2xl shadow-brand-black/5 border border-brand-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-6 md:mb-10 tracking-tighter leading-[0.9]">LET'S <br />TALK <span className="text-brand-accent italic font-serif font-normal">GROWTH</span>.</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="group flex items-start space-x-4 md:space-x-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand-beige flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-brand-white transition-all duration-500">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-black/30 mb-1">Email us</p>
                    <a href="mailto:hello@thedigixy.com" className="text-lg md:text-2xl font-bold hover:text-brand-accent transition-colors break-all">hello@thedigixy.com</a>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4 md:space-x-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand-beige flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-brand-white transition-all duration-500">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-black/30 mb-1">Direct Line & Queries</p>
                    <a href="tel:+15072583835" className="text-lg md:text-2xl font-bold hover:text-brand-accent transition-colors block">+1 (507) 258-3835</a>
                    <p className="text-xs text-brand-black/40 font-medium mt-1">Available 9:00 AM – 5:00 PM (USA EST Time)</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 md:space-x-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand-beige flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-brand-white transition-all duration-500">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-black/30 mb-1">US Office Hub</p>
                    <p className="text-lg md:text-2xl font-bold">100 South 5th St, Suite 1900, Minneapolis, MN 55402</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6 md:space-y-8 mt-8 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-black/30">Full Name</label>
                  <input type="text" className="w-full bg-brand-beige border-none rounded-xl md:rounded-2xl p-4 md:p-6 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-medium text-sm md:text-base" placeholder="Alexander Sterling" />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-black/30">Email Address</label>
                  <input type="email" className="w-full bg-brand-beige border-none rounded-xl md:rounded-2xl p-4 md:p-6 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-medium text-sm md:text-base" placeholder="alex@sterling.co.uk" />
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-black/30">Service Required</label>
                <select className="w-full bg-brand-beige border-none rounded-xl md:rounded-2xl p-4 md:p-6 focus:ring-2 focus:ring-brand-accent outline-none transition-all appearance-none font-medium text-sm md:text-base">
                  <option>Software Development (Web/Mobile)</option>
                  <option>White Label & Custom SaaS</option>
                  <option>Global SEO & Marketing</option>
                  <option>Paid Media Strategy</option>
                  <option>Full Brand Refresh</option>
                </select>
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-brand-black/30">Your Vision</label>
                <textarea rows={4} className="w-full bg-brand-beige border-none rounded-xl md:rounded-2xl p-4 md:p-6 focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none font-medium text-sm md:text-base" placeholder="Tell us about your goals..." />
              </div>
              <button className="w-full py-5 md:py-6 bg-brand-black text-brand-white rounded-xl md:rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] md:text-xs hover:bg-brand-accent transition-all shadow-2xl shadow-brand-black/20 hover:scale-[1.02] active:scale-[0.98]">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const PreFooter = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-16 md:py-20 bg-brand-black text-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-display font-black mb-12 tracking-tighter uppercase leading-[0.85]">
            READY TO <br />
            <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Architect</span> <br />
            YOUR FUTURE?
          </h2>
          <button 
            onClick={onOpenModal}
            className="group relative inline-flex items-center space-x-4 bg-brand-accent px-12 py-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-white">Initiate Build</span>
            <ArrowRight className="text-brand-white w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
      
      {/* Decroative grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

const ProjectModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [selectedRegion, setSelectedRegion] = useState<'US' | 'CA' | 'UK' | 'AU'>('US');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const regionDetails = {
    US: { name: 'United States', hub: 'New York (EST)', indicator: 'Fast-Track US Enterprise Routing' },
    CA: { name: 'Canada', hub: 'Toronto (EST)', indicator: 'CA Sovereign Standard Routing' },
    UK: { name: 'United Kingdom', hub: 'London (BST)', indicator: 'UK Tech & GDPR Aligned Routing' },
    AU: { name: 'Australia', hub: 'Sydney (AEST)', indicator: 'APAC & AU Privacy Act Routing' },
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetModal = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-brand-beige rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-brand-black/5 z-10"
          >
            <button 
              onClick={resetModal}
              className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-accent transition-colors z-20"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: Context Card */}
              <div className="hidden lg:block bg-brand-black p-16 text-brand-white relative overflow-hidden">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <Logo size="sm" className="mb-12" />
                    <h3 className="text-4xl font-display font-black uppercase tracking-tight leading-none mb-8">
                      The Next <br />
                      <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Chapter</span> <br />
                      of Scale.
                    </h3>
                    <p className="text-brand-white/40 text-sm font-light leading-relaxed max-w-xs">
                      Tell us about your architectural vision. We specialize in high-frequency engineering for market leaders across global zones.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-brand-white/5 rounded-xl border border-brand-white/10">
                      <div className="text-[9px] font-black uppercase tracking-widest text-brand-accent mb-1">Active Hub Priority</div>
                      <div className="text-xs font-bold text-brand-white">{regionDetails[selectedRegion].name} — {regionDetails[selectedRegion].hub}</div>
                      <div className="text-[9px] text-brand-white/40 mt-1">{regionDetails[selectedRegion].indicator}</div>
                    </div>

                    <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-brand-accent">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                      <span>Secure Transmission Active</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-20 -left-20 text-[20rem] font-black text-brand-white/[0.03] select-none pointer-events-none italic">
                  XY
                </div>
              </div>

              {/* Right Column: Interactive Form / Success screen */}
              <div className="p-6 md:p-12 lg:p-16 max-h-[85vh] lg:max-h-[90vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form-view"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="mb-8">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-2 block">PROJECT REGISTRY</span>
                        <h4 className="text-2xl md:text-3xl font-display font-black text-brand-black leading-tight uppercase">Initiate Connection</h4>
                      </div>

                      <form className="space-y-6" onSubmit={handleFormSubmit}>
                        {/* Interactive Region Selector */}
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Select Your Region</label>
                          <div className="grid grid-cols-4 gap-2">
                            {(['US', 'CA', 'UK', 'AU'] as const).map((reg) => (
                              <button
                                key={reg}
                                type="button"
                                onClick={() => setSelectedRegion(reg)}
                                className={`py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                                  selectedRegion === reg
                                    ? 'bg-brand-black text-brand-white shadow-lg shadow-brand-black/10'
                                    : 'bg-brand-black/5 text-brand-black/50 hover:bg-brand-black/10'
                                }`}
                              >
                                {reg}
                              </button>
                            ))}
                          </div>
                          <div className="text-[10px] text-brand-black/40 italic flex items-center space-x-1.5 pt-1">
                            <span className="w-1 h-1 rounded-full bg-green-500" />
                            <span>Routing to closest physical endpoint: {regionDetails[selectedRegion].hub}</span>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Client Identity</label>
                            <input required type="text" placeholder="Full Name / Company Name" className="w-full bg-brand-black/5 border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-medium text-sm text-brand-black" />
                          </div>
                          
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Communication Line</label>
                            <input required type="email" placeholder="email@address.com" className="w-full bg-brand-black/5 border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-medium text-sm text-brand-black" />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Target Vector</label>
                            <select required className="w-full bg-brand-black/5 border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all appearance-none font-medium text-sm text-brand-black">
                              <option>Software Ecosystems</option>
                              <option>White Label SaaS Solutions</option>
                              <option>Global SEO Dominance</option>
                              <option>Digital Infrastructure</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Architectural Brief</label>
                            <textarea required rows={3} placeholder="Provide a high-level summary of your project vision..." className="w-full bg-brand-black/5 border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none font-medium text-sm text-brand-black" />
                          </div>
                        </div>

                        <button className="w-full py-5 bg-brand-black text-brand-white rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-accent transition-all shadow-2xl shadow-brand-black/10 hover:scale-[1.01] active:scale-[0.99] mt-4">
                          Transmit Project Brief
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12 flex flex-col items-center justify-center h-full"
                    >
                      <div className="w-20 h-20 bg-brand-black text-brand-accent rounded-full flex items-center justify-center mb-8 shadow-2xl relative">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 bg-brand-accent/20 rounded-full"
                        />
                        <ShieldCheck size={40} className="relative z-10" />
                      </div>

                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent mb-3 block">CONNECTION SECURITY PROTOCOL SECURED</span>
                      <h4 className="text-3xl md:text-4xl font-display font-black text-brand-black uppercase tracking-tighter mb-6 leading-none">Transmission <br />Received.</h4>
                      
                      <p className="text-brand-black/60 text-sm font-light leading-relaxed max-w-sm mb-10">
                        Your project brief has been routed to our <strong className="text-brand-black font-semibold">{regionDetails[selectedRegion].hub}</strong> regional headquarters. An Account Director is auditing your parameters now.
                      </p>

                      <div className="w-full bg-brand-black/5 rounded-2xl p-6 border border-brand-black/5 text-left mb-8 space-y-4 max-w-sm mx-auto">
                        <div className="text-[9px] font-black uppercase tracking-widest text-brand-black/40">Next Sequence:</div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            <span className="text-xs font-semibold text-brand-black/80">Regional Director allocation (15 mins)</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            <span className="text-xs font-semibold text-brand-black/80">Feasibility check & specification audit</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            <span className="text-xs font-semibold text-brand-black/80">Secure line meeting invite via calendar</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={resetModal}
                        className="px-10 py-4 bg-brand-black text-brand-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent transition-all hover:scale-105 active:scale-95"
                      >
                        Return to Hub
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="pt-16 md:pt-24 pb-12 bg-brand-white overflow-hidden border-t border-brand-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <Logo size="lg" className="mb-12" />
            <p className="text-brand-black/60 text-xl leading-relaxed mb-12 max-w-md font-light">
              We architect high-performance digital ecosystems for global market leaders. Transforming sophisticated code into intuitive customer experiences.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/share/1DmL7VfjWP/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl border border-brand-black/5 flex items-center justify-center hover:bg-brand-black hover:text-brand-white transition-all duration-700 shadow-sm hover:shadow-xl">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/thedigixy?igsh=MW52dTduNjBoMGRqMA==" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl border border-brand-black/5 flex items-center justify-center hover:bg-brand-black hover:text-brand-white transition-all duration-700 shadow-sm hover:shadow-xl">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl border border-brand-black/5 flex items-center justify-center hover:bg-brand-black hover:text-brand-white transition-all duration-700 shadow-sm hover:shadow-xl">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-black mb-10 opacity-40">Navigation</h4>
            <ul className="space-y-6">
              {['Services', 'About', 'Work', 'Blog', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-brand-black/70 hover:text-brand-accent transition-colors font-bold uppercase text-[11px] tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-black mb-10 opacity-40">Expertise</h4>
            <ul className="space-y-6">
              {['Software Dev', 'SaaS Strategy', 'Global SEO', 'Mobile Apps', 'Branding'].map(item => (
                <li key={item}>
                  <a href="#" className="text-brand-black/70 hover:text-brand-accent transition-colors font-bold uppercase text-[11px] tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-black mb-10 opacity-40">Studio Hub</h4>
            <p className="text-brand-black/70 mb-8 font-medium leading-relaxed">
              100 South 5th St <br />
              Suite 1900 <br />
              Minneapolis, MN 55402 <br />
              United States
            </p>
            <div className="relative group">
              <input type="email" placeholder="JOIN THE LIST" className="w-full bg-brand-beige border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all text-[11px] font-black tracking-[0.2em] placeholder:text-brand-black/30" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-black text-brand-white rounded-xl hover:bg-brand-accent transition-all flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-baseline space-x-2">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-black/40">© 2024 THE DIGIXY LTD.</span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-accent">CRAFTED IN USA.</span>
          </div>
          <div className="flex space-x-12">
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-black/20 hover:text-brand-black transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="selection:bg-brand-accent selection:text-brand-white">
      <Navbar onOpenModal={() => setIsModalOpen(true)} onOpenBookingModal={() => setIsBookingOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} onOpenBookingModal={() => setIsBookingOpen(true)} />
        <Marquee />
        <Services />
        <Manifesto />
        <Philosophy />
        <Work onOpenModal={() => setIsModalOpen(true)} />
        <Testimonials />
        <Faq onOpenModal={() => setIsModalOpen(true)} />
        <Contact />
        <PreFooter onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
