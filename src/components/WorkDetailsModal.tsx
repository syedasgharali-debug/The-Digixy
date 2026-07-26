import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Cpu, 
  Quote, 
  ArrowRight 
} from 'lucide-react';

export interface ProjectType {
  title: string;
  client: string;
  category: string;
  image: string;
  images: string[];
  challenge: string;
  solution: string;
  techStack: string[];
  stats: { value: string; label: string }[];
  feedback: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

interface WorkDetailsModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectModal: () => void;
}

export const WorkDetailsModal = ({
  project,
  isOpen,
  onClose,
  onOpenProjectModal,
}: WorkDetailsModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
    }
  }, [project?.title]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative w-full max-w-5xl bg-brand-beige rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-brand-black/5 z-10 max-h-[90vh] lg:max-h-[85vh] flex flex-col lg:grid lg:grid-cols-12"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-accent transition-colors z-30 shadow-lg"
            >
              <X size={18} />
            </button>

            {/* Left Area: Image Carousel (Grid col span 5) */}
            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-full lg:col-span-5 bg-brand-black flex flex-col justify-between overflow-hidden">
              {/* Slides wrapper */}
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - view ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                {/* Edge shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-brand-black/60 pointer-events-none" />
              </div>

              {/* Top Header Overlay info */}
              <div className="absolute inset-x-6 top-6 flex justify-between items-center z-10 pointer-events-none">
                <div className="px-4 py-1.5 bg-brand-black/40 backdrop-blur-md border border-brand-white/10 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-accent">
                    CASE PROFILE
                  </span>
                </div>
                <div className="px-3 py-1 bg-brand-black/40 backdrop-blur-md border border-brand-white/10 rounded-full text-brand-white text-[10px] font-mono tracking-widest font-black">
                  {String(currentImageIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
                </div>
              </div>

              {/* Slide Controls Overlay */}
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? project.images.length - 1 : prev - 1
                    );
                  }}
                  className="p-3 bg-brand-white/10 hover:bg-brand-accent text-brand-white rounded-full transition-colors backdrop-blur-md focus:outline-none"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Dots / dashes */}
                <div className="flex space-x-1.5">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === idx ? 'w-6 bg-brand-accent' : 'w-1.5 bg-brand-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) =>
                      prev === project.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="p-3 bg-brand-white/10 hover:bg-brand-accent text-brand-white rounded-full transition-colors backdrop-blur-md focus:outline-none"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Area: Project Insights (Grid col span 7) */}
            <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 overflow-y-auto max-h-[calc(90vh-280px)] sm:max-h-[calc(90vh-350px)] lg:max-h-[85vh] bg-brand-beige flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles size={12} className="text-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-accent">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display font-black text-brand-black uppercase tracking-tight leading-none mb-1">
                    {project.client}
                  </h3>
                  <p className="text-brand-black/50 font-serif italic text-base md:text-lg">
                    {project.title}
                  </p>
                </div>

                {/* Flat Metric Strip */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-brand-black/10">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <div className="text-xl md:text-2xl font-display font-black text-brand-black leading-none">
                        {stat.value}
                      </div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-brand-black/40 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Narrative block */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-black/40 mb-1">
                      The Challenge
                    </h4>
                    <p className="text-xs text-brand-black/70 leading-relaxed font-semibold">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-black/40 mb-1">
                      The Architecture & Solution
                    </h4>
                    <p className="text-xs text-brand-black/70 leading-relaxed font-semibold">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack tags */}
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-black/40 mb-2.5 flex items-center space-x-1.5">
                    <Cpu size={10} />
                    <span>Ecosystem Tech Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-brand-black/5 hover:bg-brand-black hover:text-brand-white text-brand-black rounded-lg text-[9px] font-black uppercase tracking-wider transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Quote Card (Highly responsive and elegant) */}
                <div className="bg-brand-black/5 p-5 rounded-2xl border border-brand-black/5 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-brand-black/10 select-none pointer-events-none">
                    <Quote size={32} />
                  </div>
                  <p className="text-xs text-brand-black/80 italic font-serif leading-relaxed mb-4 relative z-10">
                    "{project.feedback.quote}"
                  </p>
                  <div className="flex items-center space-x-3 relative z-10">
                    <img
                      src={project.feedback.avatar}
                      alt={project.feedback.author}
                      className="w-10 h-10 rounded-full object-cover grayscale border border-brand-black/10 animate-fade-in"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-black">
                        {project.feedback.author}
                      </h5>
                      <p className="text-[9px] text-brand-black/40 font-semibold">
                        {project.feedback.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Action Button */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenProjectModal();
                }}
                className="w-full mt-8 py-4 bg-brand-black text-brand-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent hover:text-brand-white transition-all shadow-xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2"
              >
                <span>Initiate Similar Build</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
