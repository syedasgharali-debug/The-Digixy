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
  Calendar,
  ShoppingBag,
  GraduationCap,
  CreditCard,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

import heroImg from './assets/images/hero_digital_dominance_1794056318656.jpg';
import ebaySolutionsImg from './assets/images/ebay_solutions_showcase_1794056319090.jpg';
import ebayAcademyImg from './assets/images/ebay_academy_training_1794056318662.jpg';
import paymentSolutionsImg from './assets/images/payment_solutions_global_1794056318579.jpg';
import aiSaasLabImg from './assets/images/ai_saas_lab_1794056321118.jpg';

import { WorkDetailsModal, ProjectType } from './components/WorkDetailsModal';
import { Faq } from './components/Faq';
import { InteractiveHeroCanvas } from './components/InteractiveHeroCanvas';
import { BookingModal } from './components/BookingModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { EbaySolutionsModal } from './components/EbaySolutionsModal';
import { EbayAcademyModal } from './components/EbayAcademyModal';
import { PaymentSolutionsSection } from './components/PaymentSolutionsSection';
import { ServicesInteractiveSection } from './components/ServicesInteractiveSection';
import { BlogSection } from './components/BlogSection';

const DEFAULT_FALLBACK_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";

const Logo = ({ className = "", size = "md" }: { className?: string, size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const sizes = {
    sm: { container: "w-8 h-8", text: "text-lg", tracker: "tracking-tight", gap: "space-x-2.5", subSize: "text-[5.5px]" },
    md: { container: "w-11 h-11", text: "text-2xl", tracker: "tracking-tighter", gap: "space-x-3.5", subSize: "text-[7.5px]" },
    lg: { container: "w-16 h-16", text: "text-4xl", tracker: "tracking-tighter", gap: "space-x-4.5", subSize: "text-[9.5px]" },
    xl: { container: "w-20 h-20", text: "text-5xl", tracker: "tracking-tighter", gap: "space-x-6", subSize: "text-[11px]" }
  };
  
  const currentSize = sizes[size];

  return (
    <div className={`flex items-center ${currentSize.gap} ${className} group cursor-pointer`}>
      <div className={`relative ${currentSize.container} shrink-0`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-700 ease-out"
        >
          <defs>
            <linearGradient id="logo-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4e00" />
              <stop offset="50%" stopColor="#ff6a00" />
              <stop offset="100%" stopColor="#ff1e00" />
            </linearGradient>
            
            <linearGradient id="logo-dark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#121212" />
              <stop offset="50%" stopColor="#2c2c2c" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            
            <filter id="logo-drop-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>
          
          <motion.path 
            d="M68 20 L45 20 L25 50 L45 80 L68 80 L48 50 Z" 
            fill="url(#logo-dark-grad)"
            className="transition-all duration-700"
            animate={{ opacity: [0.95, 1, 0.95] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <path 
            d="M32 20 L55 20 L75 50 L55 80 L32 80 L52 50 Z" 
            fill="url(#logo-accent-grad)"
            filter="url(#logo-drop-shadow)"
          />

          <circle cx="50" cy="50" r="4.5" fill="#ffffff" />
          <circle cx="50" cy="50" r="2.5" fill="#ff4e00" />
        </svg>

        <span className="absolute -inset-1 rounded-full bg-brand-accent/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
      </div>
      
      <div className="flex flex-col -space-y-1">
        <div className={`${currentSize.text} font-display font-black tracking-tight leading-none uppercase select-none flex items-center`}>
          <span className="text-brand-black group-hover:text-brand-accent transition-colors duration-500">THE DIGI</span>
          <span className="text-brand-accent group-hover:text-brand-black transition-colors duration-500">XY</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent ml-1 transform group-hover:scale-150 transition-transform duration-500" />
        </div>
        <div className="flex items-center space-x-1.5 mt-1.5">
          <div className="h-[1px] w-5 bg-brand-accent/40" />
          <div className={`${currentSize.subSize} uppercase tracking-[0.45em] font-black text-brand-black/60`}>
            Global Innovation Studio
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ 
  onOpenModal, 
  onOpenBookingModal,
  onOpenEbaySolutions,
  onOpenEbayAcademy
}: { 
  onOpenModal: () => void, 
  onOpenBookingModal: () => void,
  onOpenEbaySolutions: () => void,
  onOpenEbayAcademy: () => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-brand-white/95 backdrop-blur-2xl py-4 shadow-xl shadow-brand-black/5' : 'bg-transparent py-5 sm:py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="group">
          <Logo size="md" />
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#services" className="text-[10px] font-black uppercase tracking-[0.25em] hover:text-brand-accent transition-all relative group">
            Services
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-500 ease-out" />
          </a>
          <button onClick={onOpenEbaySolutions} className="text-[10px] font-black uppercase tracking-[0.25em] hover:text-brand-accent transition-all relative group">
            eBay Solutions
          </button>
          <button onClick={onOpenEbayAcademy} className="text-[10px] font-black uppercase tracking-[0.25em] hover:text-brand-accent transition-all relative group">
            eBay Academy
          </button>
          <a href="#payment-solutions" className="text-[10px] font-black uppercase tracking-[0.25em] hover:text-brand-accent transition-all relative group">
            Payments
          </a>
          <a href="#work" className="text-[10px] font-black uppercase tracking-[0.25em] hover:text-brand-accent transition-all relative group">
            Work
          </a>
          <a href="#about" className="text-[10px] font-black uppercase tracking-[0.25em] hover:text-brand-accent transition-all relative group">
            About
          </a>
          <a href="#blog" className="text-[10px] font-black uppercase tracking-[0.25em] hover:text-brand-accent transition-all relative group">
            Blog
          </a>

          <button 
            onClick={onOpenBookingModal}
            className="px-5 py-2.5 border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full transition-all duration-300 flex items-center space-x-1.5 shrink-0"
          >
            <Calendar size={12} />
            <span>Book Consultation</span>
          </button>

          <button 
            onClick={onOpenModal}
            className="px-6 py-2.5 bg-brand-black text-brand-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-brand-accent hover:scale-105 transition-all shadow-md shrink-0"
          >
            Request a Quote
          </button>
        </div>

        <button className="lg:hidden p-3 bg-brand-black text-brand-white rounded-2xl shadow-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-white border-t border-brand-black/5 shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="p-8 flex flex-col space-y-5">
              <a href="#services" className="text-2xl font-display font-black tracking-tight hover:text-brand-accent text-brand-black" onClick={() => setIsMenuOpen(false)}>
                Services Overview
              </a>
              <button onClick={() => { setIsMenuOpen(false); onOpenEbaySolutions(); }} className="text-2xl font-display font-black tracking-tight hover:text-brand-accent text-left text-brand-black">
                eBay Business Solutions
              </button>
              <button onClick={() => { setIsMenuOpen(false); onOpenEbayAcademy(); }} className="text-2xl font-display font-black tracking-tight hover:text-brand-accent text-left text-brand-black">
                eBay Academy
              </button>
              <a href="#payment-solutions" className="text-2xl font-display font-black tracking-tight hover:text-brand-accent text-brand-black" onClick={() => setIsMenuOpen(false)}>
                International Payments
              </a>
              <a href="#work" className="text-2xl font-display font-black tracking-tight hover:text-brand-accent text-brand-black" onClick={() => setIsMenuOpen(false)}>
                Selected Work
              </a>
              <a href="#about" className="text-2xl font-display font-black tracking-tight hover:text-brand-accent text-brand-black" onClick={() => setIsMenuOpen(false)}>
                About Us
              </a>
              <a href="#blog" className="text-2xl font-display font-black tracking-tight hover:text-brand-accent text-brand-black" onClick={() => setIsMenuOpen(false)}>
                Blog & Insights
              </a>
              <a href="#contact" className="text-2xl font-display font-black tracking-tight hover:text-brand-accent text-brand-black" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </a>

              <div className="pt-4 border-t border-brand-black/10 space-y-3">
                <button 
                  onClick={() => { setIsMenuOpen(false); onOpenBookingModal(); }}
                  className="w-full py-4 border border-brand-black text-brand-black text-[10px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-brand-black hover:text-brand-white transition-all text-center flex items-center justify-center space-x-2"
                >
                  <Calendar size={14} />
                  <span>Book Free Consultation</span>
                </button>
                <button 
                  onClick={() => { setIsMenuOpen(false); onOpenModal(); }}
                  className="w-full py-4 bg-brand-black text-brand-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-brand-accent transition-all text-center"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Marquee = () => {
  return (
    <div className="py-5 bg-brand-black overflow-hidden whitespace-nowrap border-y border-brand-white/10">
      <div className="inline-block animate-marquee">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-brand-white/30 text-xs font-bold uppercase tracking-[0.4em] mx-8">
            UNITED STATES • UNITED KINGDOM • GERMANY • FRANCE • NETHERLANDS • EUROPE • UAE • SAUDI ARABIA • WORLDWIDE
          </span>
        ))}
      </div>
    </div>
  );
};

const GlobalTrustBadges = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-brand-white rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-black shadow-sm border border-brand-black/5">
        <span>🇺🇸</span>
        <span>USA Office</span>
      </span>
      <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-brand-white rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-black shadow-sm border border-brand-black/5">
        <span>🇬🇧</span>
        <span>UK & Europe</span>
      </span>
      <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-brand-white rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-black shadow-sm border border-brand-black/5">
        <span>🇦🇪</span>
        <span>UAE & Gulf</span>
      </span>
      <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-brand-white rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-black shadow-sm border border-brand-black/5">
        <span>🌐</span>
        <span>Worldwide</span>
      </span>
    </div>
  );
};

const Hero = ({ 
  onOpenModal, 
  onOpenBookingModal,
  onOpenEbaySolutions,
  onOpenEbayAcademy
}: { 
  onOpenModal: () => void, 
  onOpenBookingModal: () => void,
  onOpenEbaySolutions: () => void,
  onOpenEbayAcademy: () => void
}) => {
  const [canvasMode, setCanvasMode] = useState<'mesh' | 'velocity' | 'ledger'>('mesh');

  const telemetryData = {
    mesh: {
      title: "Digital Marketing & Growth",
      status: "ACTIVE",
      metrics: [
        { label: "Target Regions", value: "USA, UK, EU, UAE" },
        { label: "Acquisition Return", value: "Optimized ROI" },
        { label: "Organic Search", value: "Technical SEO" },
        { label: "Core Strategy", value: "Omni-Channel Lead Gen" }
      ]
    },
    velocity: {
      title: "eBay & E-Commerce Acceleration",
      status: "SCALING",
      metrics: [
        { label: "Cassini Ranking", value: "Top Page Exposure" },
        { label: "Dropshipping Model", value: "Policy Compliant" },
        { label: "eBay Academy", value: "1-Month Accelerator" },
        { label: "Listing Copy", value: "High-CTR Conversion" }
      ]
    },
    ledger: {
      title: "AI & Custom SaaS Solutions",
      status: "SECURE",
      metrics: [
        { label: "AI Voice Agents", value: "24/7 Automated Stream" },
        { label: "Custom Software", value: "React / Node / Python" },
        { label: "Payment Gateways", value: "Stripe & PayPal Guidance" },
        { label: "Security", value: "GDPR & International Standard" }
      ]
    }
  };

  const activeTelemetry = telemetryData[canvasMode];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden bg-brand-beige">
      <InteractiveHeroCanvas mode={canvasMode} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-black/60">
                THE DIGIXY • YOUR GROWTH PARTNER IN THE DIGITAL WORLD
              </span>
            </motion.div>

            <h1 className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-display font-black tracking-tight leading-[0.88] uppercase mb-6 text-brand-black">
              Global Digital <br />
              <span className="text-brand-accent">Dominance</span> & <br />
              Innovation Studio.
            </h1>

            <div className="max-w-xl">
              <p className="text-base md:text-lg text-brand-black/70 font-light leading-relaxed mb-8 border-l-2 border-brand-accent/30 pl-6">
                We build high-performance websites, AI software applications, global SEO dominance, eBay e-commerce businesses, and payment gateway infrastructure for international clients.
              </p>

              <GlobalTrustBadges />

              <div className="bg-brand-black/5 p-3 rounded-2xl border border-brand-black/5 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-[10px] font-black uppercase tracking-wider text-brand-black flex items-center space-x-1.5">
                    <Cpu size={14} className="text-brand-accent" />
                    <span>EXPLORE CAPABILITIES</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {(['mesh', 'velocity', 'ledger'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setCanvasMode(mode)}
                        className={`px-3 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
                          canvasMode === mode
                            ? 'bg-brand-black text-brand-white shadow-md'
                            : 'bg-brand-white/60 text-brand-black/60 hover:text-brand-black'
                        }`}
                      >
                        {mode === 'mesh' ? 'Digital Marketing' : mode === 'velocity' ? 'eBay Solutions' : 'AI & Payment Tech'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenBookingModal}
                  className="bg-brand-accent text-brand-white px-8 py-4 sm:py-5 rounded-full font-black uppercase tracking-[0.25em] text-[10px] sm:text-[11px] hover:bg-brand-black transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <Calendar size={14} />
                  <span>Book a Free Consultation</span>
                </button>

                <button 
                  onClick={onOpenModal}
                  className="bg-brand-black text-brand-white px-8 py-4 sm:py-5 rounded-full font-black uppercase tracking-[0.25em] text-[10px] sm:text-[11px] hover:bg-brand-accent transition-all shadow-md flex items-center justify-center"
                >
                  <span>Request a Quote</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-square bg-brand-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-white/10 group flex flex-col justify-between p-8 text-brand-white">
              <img 
                src={heroImg} 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-all duration-700" 
                alt="The DigiXy Digital Dominance" 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                  <span className="text-[10px] font-bold text-brand-white tracking-widest uppercase">
                    GLOBAL STUDIO ACTIVE
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-brand-white/10 border border-brand-white/10 text-brand-accent text-[9px] font-mono font-black uppercase">
                  {activeTelemetry.status}
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent">FOCUS AREA</span>
                  <h3 className="text-xl sm:text-2xl font-display font-black uppercase">{activeTelemetry.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-brand-white/10">
                  {activeTelemetry.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-[8px] font-black uppercase tracking-widest text-brand-white/40">{m.label}</div>
                      <div className="text-xs font-bold text-brand-beige">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Manifesto = () => {
  return (
    <section className="py-20 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tight leading-[0.9] uppercase">
              CRAFTED FOR <br />
              <span className="italic font-serif font-normal text-brand-accent lowercase tracking-normal">Global</span> Growth, <br />
              ENGINEERED FOR <br />
              <span className="text-stroke">Dominance.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-0.5 bg-brand-accent" />
                <h4 className="text-base font-black uppercase tracking-wider">International Scale</h4>
                <p className="text-brand-black/60 text-sm leading-relaxed font-light">
                  We empower businesses across the US, UK, Europe, UAE, Saudi Arabia, and worldwide to conquer international customer markets.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-0.5 bg-brand-accent" />
                <h4 className="text-base font-black uppercase tracking-wider">Full-Spectrum Execution</h4>
                <p className="text-brand-black/60 text-sm leading-relaxed font-light">
                  From custom web & AI engineering to organic SEO, eBay store acceleration, and payment setup, we handle end-to-end digital growth.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-brand-black rounded-[3rem] overflow-hidden shadow-2xl p-8 text-brand-white flex flex-col justify-between">
                <img 
                  src={heroImg} 
                  alt="The DigiXy Studio" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                  }}
                />
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">THE DIGIXY PROMISE</span>
                  <CheckCircle2 className="text-brand-accent" size={24} />
                </div>
                <div className="relative z-10 space-y-2">
                  <div className="text-4xl font-display font-black text-brand-white">100%</div>
                  <div className="text-xs uppercase tracking-[0.3em] font-black text-brand-white/60">Dedicated Premium Quality & Support</div>
                </div>
              </div>
            </div>
          </div>
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
      category: "Digital Growth & Web",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
      ],
      challenge: "Luxe London required an ultra-fast headless storefront with integrated global payment processing and targeted PPC lead generation across UK & European markets.",
      solution: "We engineered a Next.js storefront integrated with Stripe and PayPal APIs, combined with targeted search & social media advertising campaigns.",
      techStack: ["Next.js", "React", "Stripe API", "Google Ads", "Tailwind CSS"],
      stats: [
        { value: "+340%", label: "Conversion Rate Increase" },
        { value: "0.4s", label: "Page Load Speed" },
        { value: "International", label: "UK & EU Reach" }
      ],
      feedback: {
        quote: "The DigiXy delivered flawless performance. Our digital presence and global advertising converted far beyond our expectations.",
        author: "Victoria Sterling",
        role: "VP of Digital Commerce",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
      }
    },
    {
      title: "eBay Store & Dropshipping Accelerator",
      client: "Global Commerce Group",
      category: "eBay Business Solutions",
      image: ebaySolutionsImg,
      images: [
        ebaySolutionsImg
      ],
      challenge: "Scaling an international eBay seller account while optimizing product listings for eBay Cassini SEO and establishing policy-compliant dropshipping supply chains.",
      solution: "We conducted data-driven product research, optimized store branding, created Cassini-aligned title copy, and implemented automated listing workflows.",
      techStack: ["eBay Cassini SEO", "Terapeak Data", "Zik Analytics", "Custom Copywriting"],
      stats: [
        { value: "Top Page", label: "Cassini Search Ranking" },
        { value: "+280%", label: "Monthly Sales Volume" },
        { value: "Top Rated", label: "Seller Status Achieved" }
      ],
      feedback: {
        quote: "The DigiXy's eBay specialists transformed our store operations. Their Cassini SEO and listing frameworks generated instant top page positions.",
        author: "Marcus Vance",
        role: "Founder, Global Commerce Group",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
      }
    },
    {
      title: "Enterprise AI Voice Agent & SaaS Platform",
      client: "NexaFlow Automation",
      category: "AI & SaaS Development",
      image: aiSaasLabImg,
      images: [
        aiSaasLabImg
      ],
      challenge: "NexaFlow needed an automated AI Voice Agent platform to qualify incoming leads 24/7 and route appointment schedules directly to sales representatives.",
      solution: "We built a custom Python & React SaaS architecture featuring real-time speech transcription, natural language understanding, and automated calendar sync.",
      techStack: ["Python", "Gemini AI", "React", "WebSockets", "Node.js"],
      stats: [
        { value: "24/7", label: "Automated Lead Qualification" },
        { value: "Sub-300ms", label: "AI Speech Latency" },
        { value: "99.9%", label: "Uptime Reliability" }
      ],
      feedback: {
        quote: "Our lead response speed is now instantaneous. The DigiXy's AI engineering team is unmatched in technical capability.",
        author: "Dr. Elena Rostova",
        role: "VP of Product Engineering",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
      }
    }
  ];

  return (
    <section id="work" className="py-20 md:py-28 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent mb-2 block">PORTFOLIO EXCELLENCE</span>
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tight leading-[0.9] uppercase">
              Featured <br />Case Studies.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div 
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="bg-brand-white rounded-[2rem] overflow-hidden border border-brand-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-brand-black text-brand-white text-[9px] uppercase tracking-widest font-black rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-black mb-2 text-brand-black group-hover:text-brand-accent transition-colors uppercase">{project.client}</h3>
                  <p className="text-brand-black/60 text-xs font-light leading-relaxed">{project.title}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-brand-black/5 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-black group-hover:text-brand-accent transition-colors">
                  View Detailed Study
                </span>
                <div className="w-8 h-8 rounded-full bg-brand-beige text-brand-black flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-white transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
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

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The DigiXy transformed our global digital presence. Their technical execution in web development and international SEO increased our organic lead volume significantly within six months.",
      name: "Alexander Sterling",
      role: "CTO, Sterling International",
      rating: 5,
      logo: "STERLING"
    },
    {
      quote: "Creative, highly responsive, and results-focused. They guided our eBay seller store setup and Cassini SEO ranking with complete precision.",
      name: "Sarah Jenkins",
      role: "E-Commerce Director, GlobalVibe",
      rating: 5,
      logo: "VIBE"
    },
    {
      quote: "The DigiXy's payment gateway consultation was instrumental for our overseas business expansion into US and European payment processing.",
      name: "Marcus Thorne",
      role: "Founder, Fintech Global",
      rating: 5,
      logo: "FINTECH"
    }
  ];

  return (
    <section className="py-20 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-2 block">CLIENT TRUST</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.9] tracking-tight uppercase">
              Global Partner <br />Reviews.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="p-8 bg-brand-beige rounded-[2rem] border border-transparent hover:border-brand-accent/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                    ))}
                  </div>
                  <Quote size={20} className="text-brand-accent opacity-30" />
                </div>
                
                <p className="text-sm text-brand-black/80 font-light leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-4 border-t border-brand-black/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center text-[9px] font-black text-brand-white tracking-widest">
                  {t.logo}
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider">{t.name}</h4>
                  <p className="text-[10px] text-brand-black/50 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 shadow-2xl border border-brand-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent mb-2 block">GET IN TOUCH</span>
                <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[0.9] uppercase">
                  Let's Discuss <br />
                  <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Your Project</span>.
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-beige flex items-center justify-center shrink-0 text-brand-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest font-black text-brand-black/40 mb-1">Direct Email Contact</p>
                    <a href="mailto:hello@thedigixy.com" className="text-base md:text-xl font-bold hover:text-brand-accent transition-colors break-all">hello@thedigixy.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-beige flex items-center justify-center shrink-0 text-brand-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest font-black text-brand-black/40 mb-1">Direct Line & WhatsApp</p>
                    <a href="tel:+15072583835" className="text-base md:text-xl font-bold hover:text-brand-accent transition-colors block">+1 (507) 258-3835</a>
                    <p className="text-xs text-brand-black/50 font-medium mt-1">Available 9:00 AM – 5:00 PM (EST / Worldwide)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-beige flex items-center justify-center shrink-0 text-brand-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest font-black text-brand-black/40 mb-1">US Studio Hub</p>
                    <p className="text-base md:text-lg font-bold">100 South 5th St, Suite 1900, Minneapolis, MN 55402, United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {!formSubmitted ? (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest font-black text-brand-black/40">Full Name</label>
                      <input required type="text" className="w-full bg-brand-beige border border-brand-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-accent outline-none font-medium text-sm text-brand-black" placeholder="Alexander Sterling" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest font-black text-brand-black/40">Email Address</label>
                      <input required type="email" className="w-full bg-brand-beige border border-brand-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-accent outline-none font-medium text-sm text-brand-black" placeholder="alex@sterling.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest font-black text-brand-black/40">Country</label>
                      <input required type="text" className="w-full bg-brand-beige border border-brand-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-accent outline-none font-medium text-sm text-brand-black" placeholder="USA, UK, UAE, Germany..." />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest font-black text-brand-black/40">Required Service</label>
                      <select required className="w-full bg-brand-beige border border-brand-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-accent outline-none appearance-none font-medium text-sm text-brand-black">
                        <option>Digital Marketing & Lead Generation</option>
                        <option>Website Development (Custom/Shopify/WordPress)</option>
                        <option>SEO Services (Technical & International)</option>
                        <option>AI & SaaS Development</option>
                        <option>Social Media Management</option>
                        <option>eBay Business Solutions</option>
                        <option>eBay Digital Marketing Academy</option>
                        <option>International Payment Solutions Guidance</option>
                        <option>Creative & Business Branding</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-widest font-black text-brand-black/40">Project Description & Goals</label>
                    <textarea required rows={4} className="w-full bg-brand-beige border border-brand-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-accent outline-none resize-none font-medium text-sm text-brand-black" placeholder="Tell us about your company goals, timeline, and required outcomes..." />
                  </div>

                  <button className="w-full py-5 bg-brand-black text-brand-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs hover:bg-brand-accent transition-all shadow-xl hover:scale-[1.01] active:scale-[0.99]">
                    Submit Project Inquiry
                  </button>
                </form>
              ) : (
                <div className="p-10 bg-brand-beige rounded-2xl text-center space-y-6">
                  <div className="w-16 h-16 bg-brand-black text-brand-accent rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-black uppercase text-brand-black">Inquiry Submitted Successfully</h3>
                  <p className="text-sm text-brand-black/70 font-light max-w-md mx-auto">
                    Thank you. Your message has been received by The DigiXy team. An Account Director will review your parameters and reach out within 12 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-8 py-3 bg-brand-black text-brand-white rounded-full font-black uppercase tracking-widest text-[10px]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const PreFooter = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-20 bg-brand-black text-brand-white relative overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-7xl font-display font-black mb-8 tracking-tight uppercase leading-[0.9]">
          READY TO <br />
          <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Architect</span> YOUR <br />
          DIGITAL DOMINANCE?
        </h2>
        <button 
          onClick={onOpenModal}
          className="inline-flex items-center space-x-3 bg-brand-accent px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-white">Get Started Now</span>
          <ArrowRight className="text-brand-white w-5 h-5" />
        </button>
      </div>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-y-auto">
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
            className="relative w-full max-w-4xl bg-brand-beige rounded-[2rem] overflow-hidden shadow-2xl border border-brand-black/5 z-10"
          >
            <button 
              onClick={resetModal}
              className="absolute top-6 right-6 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-accent transition-colors z-20"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block bg-brand-black p-12 text-brand-white relative overflow-hidden flex flex-col justify-between">
                <div>
                  <Logo size="sm" className="mb-8" />
                  <h3 className="text-3xl font-display font-black uppercase tracking-tight leading-tight mb-6">
                    Request a Quote <br />
                    <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Global</span> Project Registry
                  </h3>
                  <p className="text-brand-white/60 text-xs font-light leading-relaxed">
                    Submit your project parameters. Our team will review your scope and provide a tailored quotation and technical execution strategy.
                  </p>
                </div>
                
                <div className="space-y-3 pt-6 border-t border-brand-white/10">
                  <div className="text-[9px] font-black uppercase tracking-widest text-brand-accent">Regional Routing</div>
                  <div className="text-xs font-bold text-brand-white">{regionDetails[selectedRegion].name} — {regionDetails[selectedRegion].hub}</div>
                </div>
              </div>

              <div className="p-6 md:p-12 max-h-[85vh] overflow-y-auto">
                {!isSubmitted ? (
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1 block">REQUEST A QUOTE</span>
                      <h4 className="text-2xl font-display font-black text-brand-black uppercase">Project Parameters</h4>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40">Select Region</label>
                      <div className="grid grid-cols-4 gap-2">
                        {(['US', 'CA', 'UK', 'AU'] as const).map((reg) => (
                          <button
                            key={reg}
                            type="button"
                            onClick={() => setSelectedRegion(reg)}
                            className={`py-2.5 rounded-xl font-bold text-xs uppercase transition-all ${
                              selectedRegion === reg
                                ? 'bg-brand-black text-brand-white'
                                : 'bg-brand-black/5 text-brand-black/50 hover:bg-brand-black/10'
                            }`}
                          >
                            {reg}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40">Full Name</label>
                      <input required type="text" placeholder="Full Name / Organization" className="w-full bg-brand-black/5 rounded-xl p-3.5 outline-none font-medium text-xs text-brand-black" />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40">Email Address</label>
                      <input required type="email" placeholder="email@domain.com" className="w-full bg-brand-black/5 rounded-xl p-3.5 outline-none font-medium text-xs text-brand-black" />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40">Required Service</label>
                      <select required className="w-full bg-brand-black/5 rounded-xl p-3.5 outline-none appearance-none font-medium text-xs text-brand-black">
                        <option>Digital Marketing & Lead Gen</option>
                        <option>Website Development (Custom/WordPress/E-commerce)</option>
                        <option>SEO Services (Technical & International)</option>
                        <option>AI & SaaS Development</option>
                        <option>Social Media Management</option>
                        <option>eBay Business Solutions</option>
                        <option>eBay Digital Marketing Academy</option>
                        <option>International Payment Guidance</option>
                        <option>Creative & Business Branding</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40">Project Summary</label>
                      <textarea required rows={3} placeholder="Describe your goals and required scope..." className="w-full bg-brand-black/5 rounded-xl p-3.5 outline-none resize-none font-medium text-xs text-brand-black" />
                    </div>

                    <button className="w-full py-4 bg-brand-black text-brand-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent transition-all shadow-lg">
                      Request a Quote
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-brand-black text-brand-accent rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck size={32} />
                    </div>
                    <h4 className="text-2xl font-display font-black text-brand-black uppercase">Quote Request Received</h4>
                    <p className="text-xs text-brand-black/60 font-light">
                      Your parameters have been routed to our <strong className="text-brand-black font-semibold">{regionDetails[selectedRegion].hub}</strong> team. We will review and send a formal response via email.
                    </p>
                    <button 
                      onClick={resetModal}
                      className="px-8 py-3 bg-brand-black text-brand-white rounded-full font-black uppercase tracking-widest text-[10px]"
                    >
                      Close Window
                    </button>
                  </div>
                )}
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
    <footer className="pt-20 pb-12 bg-brand-white overflow-hidden border-t border-brand-black/5 text-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          <div className="lg:col-span-5">
            <Logo size="lg" className="mb-8" />
            
            <p className="text-brand-black/70 text-base leading-relaxed mb-8 max-w-md font-light">
              THE DIGIXY — Your Growth Partner in the Digital World. Architecting high-performance digital marketing, web engineering, AI software, eBay solutions, and global payment guidance for international market leaders.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1DmL7VfjWP/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-brand-black/10 flex items-center justify-center hover:bg-brand-black hover:text-brand-white transition-all shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/thedigixy?igsh=MW52dTduNjBoMGRqMA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-brand-black/10 flex items-center justify-center hover:bg-brand-black hover:text-brand-white transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-brand-black/10 flex items-center justify-center hover:bg-brand-black hover:text-brand-white transition-all shadow-sm">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-black mb-6 opacity-50">Navigation</h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="#payment-solutions" className="hover:text-brand-accent transition-colors">Payment Solutions</a></li>
              <li><a href="#work" className="hover:text-brand-accent transition-colors">Selected Work</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-brand-accent transition-colors">Blog & Insights</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-black mb-6 opacity-50">Specializations</h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-wider">
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">SEO Services</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">AI & SaaS Development</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">eBay Business Solutions</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">eBay Academy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-black mb-6 opacity-50">US Studio Headquarters</h4>
            <p className="text-xs text-brand-black/70 mb-6 font-medium leading-relaxed">
              100 South 5th St <br />
              Suite 1900 <br />
              Minneapolis, MN 55402 <br />
              United States
            </p>
            <div className="space-y-2 text-xs">
              <div className="font-bold">Email: <a href="mailto:hello@thedigixy.com" className="text-brand-accent hover:underline">hello@thedigixy.com</a></div>
              <div className="font-bold">Direct & WhatsApp: <a href="tel:+15072583835" className="text-brand-accent hover:underline">+1 (507) 258-3835</a></div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-black/50">© 2026 THE DIGIXY. ALL RIGHTS RESERVED.</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-accent">CRAFTED IN USA.</span>
          </div>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-brand-black/40">
            <a href="#" className="hover:text-brand-black">Privacy Policy</a>
            <a href="#" className="hover:text-brand-black">Terms of Service</a>
            <a href="#" className="hover:text-brand-black">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEbaySolutionsOpen, setIsEbaySolutionsOpen] = useState(false);
  const [isEbayAcademyOpen, setIsEbayAcademyOpen] = useState(false);

  return (
    <div className="selection:bg-brand-accent selection:text-brand-white bg-brand-beige min-h-screen">
      <Navbar 
        onOpenModal={() => setIsModalOpen(true)} 
        onOpenBookingModal={() => setIsBookingOpen(true)}
        onOpenEbaySolutions={() => setIsEbaySolutionsOpen(true)}
        onOpenEbayAcademy={() => setIsEbayAcademyOpen(true)}
      />
      
      <main>
        <Hero 
          onOpenModal={() => setIsModalOpen(true)} 
          onOpenBookingModal={() => setIsBookingOpen(true)}
          onOpenEbaySolutions={() => setIsEbaySolutionsOpen(true)}
          onOpenEbayAcademy={() => setIsEbayAcademyOpen(true)}
        />
        <Marquee />
        <ServicesInteractiveSection 
          onOpenConsultation={() => setIsBookingOpen(true)}
          onOpenProjectModal={() => setIsModalOpen(true)}
          onOpenEbaySolutions={() => setIsEbaySolutionsOpen(true)}
          onOpenEbayAcademy={() => setIsEbayAcademyOpen(true)}
        />
        <PaymentSolutionsSection 
          onOpenConsultation={() => setIsBookingOpen(true)}
          onOpenProjectModal={() => setIsModalOpen(true)}
        />
        <Manifesto />
        <Work onOpenModal={() => setIsModalOpen(true)} />
        <Testimonials />
        <BlogSection />
        <Faq onOpenModal={() => setIsModalOpen(true)} />
        <Contact />
        <PreFooter onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer />

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <EbaySolutionsModal 
        isOpen={isEbaySolutionsOpen} 
        onClose={() => setIsEbaySolutionsOpen(false)} 
        onOpenConsultation={() => setIsBookingOpen(true)} 
      />
      <EbayAcademyModal 
        isOpen={isEbayAcademyOpen} 
        onClose={() => setIsEbayAcademyOpen(false)} 
        onOpenConsultation={() => setIsBookingOpen(true)} 
      />

      <WhatsAppButton />
    </div>
  );
}
