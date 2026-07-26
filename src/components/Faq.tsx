import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, ArrowRight, Sparkles, Layers, ShieldCheck, Clock } from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'PROCESS' | 'TIMELINE' | 'ENGAGEMENT';
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export const Faq = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [activeId, setActiveId] = useState<string | null>("process-1");
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'PROCESS' | 'TIMELINE' | 'ENGAGEMENT'>('ALL');

  const faqs: FaqItem[] = [
    {
      id: "process-1",
      category: "PROCESS",
      icon: <Layers size={14} className="text-brand-accent" />,
      question: "How does the architectural audit and onboarding process work?",
      answer: "We initiate every relationship with an exhaustive 48-hour Architectural Specification Audit. After you submit your project brief, our US Director of Engineering conducts a review of your tech debt, performance benchmarks, and user metrics. We then jump on a secure line to construct a visual roadmap, technical stack selection, and milestone framework before any contracts are executed."
    },
    {
      id: "process-2",
      category: "PROCESS",
      icon: <Layers size={14} className="text-brand-accent" />,
      question: "Do you supply source code handoff and ongoing security protocols?",
      answer: "Absolutely. You maintain 100% intellectual property ownership. Code is pushed continuously to secure private repositories with automatic Docker container builds, linting, and automated unit tests. Upon final handoff, our team transfers all cloud credentials, databases, and structural schema files, alongside a thorough 30-day post-launch support guarantee."
    },
    {
      id: "timeline-1",
      category: "TIMELINE",
      icon: <Clock size={14} className="text-brand-accent" />,
      question: "What are your standard timelines for enterprise builds?",
      answer: "Our sprints operate on high-velocity 2-week cycles. Simple bespoke systems or full-stack MVPs generally achieve deployment in 4 to 6 weeks. Massive enterprise migrations, large-scale multi-tenant SaaS platforms, and multi-region real estate databases require approximately 8 to 12 weeks of high-fidelity engineering."
    },
    {
      id: "timeline-2",
      category: "TIMELINE",
      icon: <Clock size={14} className="text-brand-accent" />,
      question: "Can we fast-track our development cycle for an upcoming launch?",
      answer: "Yes, we support a Fast-Track Priority tier for critical launch dates. By routing the workspace build to our active US and Canada engineering squads concurrently, we can double resource throughput and operate in continuous overlapping development cycles. This allows us to reduce timeline schedules by up to 40%."
    },
    {
      id: "engagement-1",
      category: "ENGAGEMENT",
      icon: <ShieldCheck size={14} className="text-brand-accent" />,
      question: "What engagement models do you offer for long-term partners?",
      answer: "We offer three premium models tailored to project scope: 1) High-Throughput Fixed Spec (perfect for clear, pre-defined builds); 2) Retainer Squads (a dedicated monthly engineering team that operates directly as a high-frequency extension of your corporate staff); 3) Fractional CTO & Innovation partnership for strategic, evolving scale."
    },
    {
      id: "engagement-2",
      category: "ENGAGEMENT",
      icon: <ShieldCheck size={14} className="text-brand-accent" />,
      question: "Where are your physical engineering hubs located?",
      answer: "Our primary executive and engineering hub is located in Minneapolis, Minnesota, USA, with regional routing and standard GDPR/privacy-aligned standard endpoints in Toronto, Canada; London, United Kingdom; and Sydney, Australia. This ensures real-time availability across global timezones and sovereign data compliance."
    },
    {
      id: "engagement-3",
      category: "ENGAGEMENT",
      icon: <ShieldCheck size={14} className="text-brand-accent" />,
      question: "What is your starting budget for custom enterprise builds?",
      answer: "Our bespoke design and system engineering partnerships typically start at a $25,000 threshold. This budget entry-point guarantees the complete dedication of a senior systems architect, exhaustive architectural blueprinting, and continuous overlapping sprint velocity with zero handoff latency."
    },
    {
      id: "engagement-4",
      category: "ENGAGEMENT",
      icon: <ShieldCheck size={14} className="text-brand-accent" />,
      question: "Are you currently accepting new design or development projects?",
      answer: "Yes, our intake pipelines for Q2 and Q3 are actively open. To maintain absolute craft excellence and sub-millisecond platform performance, we limit our concurrent client cohorts to a maximum of 5 active builds. You can check real-time pipeline slot availability and initiate an immediate specifications audit by clicking any consult action."
    }
  ];

  const filteredFaqs = selectedCategory === 'ALL' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const categories = [
    { label: 'ALL COMMON INTEL', value: 'ALL' },
    { label: 'PROCESS & SECURITY', value: 'PROCESS' },
    { label: 'TIMELINES & MILESTONES', value: 'TIMELINE' },
    { label: 'ENGAGEMENT MODELS', value: 'ENGAGEMENT' },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-brand-white relative overflow-hidden">
      {/* Decorative gradient flare */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] bg-brand-black/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Context Card & Filter */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8 md:space-y-12">
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <Sparkles size={14} className="text-brand-accent animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent">
                  KNOWLEDGE BASE
                </span>
              </div>
              
              <h2 className="text-5xl md:text-[5.5rem] font-display font-black leading-[0.85] tracking-tighter uppercase mb-6">
                COMMON <br />
                <span className="italic font-serif font-normal text-brand-accent lowercase tracking-normal">Intel.</span>
              </h2>
              
              <p className="text-brand-black/50 text-sm font-medium leading-relaxed max-w-sm">
                Have questions about our sprint velocity, security architectures, or fractional squads? Filter categories below for direct parameters.
              </p>
            </div>

            {/* Flat Category selector list */}
            <div className="flex flex-wrap lg:flex-col gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.value as any);
                    // Open the first item of the newly filtered category automatically
                    const firstOfCat = faqs.find(f => cat.value === 'ALL' || f.category === cat.value);
                    if (firstOfCat) setActiveId(firstOfCat.id);
                  }}
                  className={`px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-left transition-all duration-300 border ${
                    selectedCategory === cat.value
                      ? 'bg-brand-black text-brand-white border-brand-black shadow-lg shadow-brand-black/10 translate-x-1 lg:translate-x-2'
                      : 'bg-brand-beige text-brand-black/60 border-transparent hover:bg-brand-black/5 hover:text-brand-black'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{cat.label}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono ${
                      selectedCategory === cat.value ? 'bg-brand-accent text-brand-white' : 'bg-brand-black/10 text-brand-black/60'
                    }`}>
                      {cat.value === 'ALL' 
                        ? faqs.length 
                        : faqs.filter(f => f.category === cat.value).length
                      }
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Consultation Promo card */}
            <div className="bg-brand-beige rounded-[2rem] p-8 border border-brand-black/5 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-black mb-2">
                  Need custom specs?
                </h4>
                <p className="text-xs text-brand-black/50 leading-relaxed mb-6 font-semibold">
                  Our Directors of Engineering are available for immediate custom security, performance, or migration audits.
                </p>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-black hover:text-brand-accent transition-colors"
                >
                  <span>Initiate Security Audit</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>

          {/* Right Column: Accordion Stack */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.map((faq, index) => {
                const isOpen = activeId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    layout="position"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                      isOpen 
                        ? 'bg-brand-black text-brand-beige border-brand-black shadow-2xl' 
                        : 'bg-brand-beige text-brand-black border-transparent hover:bg-brand-beige/80 hover:border-brand-black/10'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveId(isOpen ? null : faq.id)}
                      className="w-full text-left px-8 py-7 md:px-10 md:py-8 flex items-center justify-between gap-6 focus:outline-none"
                    >
                      <div className="flex items-center space-x-4 md:space-x-6">
                        {/* Number Indicator */}
                        <span className={`font-mono text-xs font-black tracking-widest ${
                          isOpen ? 'text-brand-accent' : 'text-brand-black/30'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        
                        <div className="space-y-1.5">
                          {/* Category Tag */}
                          <div className="flex items-center space-x-1.5">
                            {faq.icon}
                            <span className={`text-[8px] font-black uppercase tracking-widest ${
                              isOpen ? 'text-brand-accent/80' : 'text-brand-black/40'
                            }`}>
                              {faq.category}
                            </span>
                          </div>
                          
                          {/* Question */}
                          <h3 className="text-base md:text-xl font-bold tracking-tight uppercase leading-tight">
                            {faq.question}
                          </h3>
                        </div>
                      </div>

                      {/* Icon Indicator */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 flex-shrink-0 ${
                        isOpen 
                          ? 'bg-brand-white/10 text-brand-accent border-brand-white/10 rotate-180' 
                          : 'bg-brand-black/5 text-brand-black border-brand-black/5'
                      }`}>
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    {/* Answer Area */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-8 pb-8 pt-2 md:px-10 md:pb-10 pl-16 md:pl-20 border-t border-brand-white/5">
                            <p className="text-xs md:text-sm font-medium leading-relaxed max-w-2xl text-brand-beige/75">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
