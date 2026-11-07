import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, GraduationCap, Video, BookOpen, Award, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import ebayAcademyImg from '../assets/images/ebay_academy_training_1794056318662.jpg';

const DEFAULT_FALLBACK_IMG = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200";

interface EbayAcademyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const EbayAcademyModal: React.FC<EbayAcademyModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [submitted, setSubmitted] = useState(false);

  const modules = [
    {
      title: "One-Month eBay Intensive Training",
      desc: "Comprehensive 4-week accelerator designed for beginners and established sellers aiming for international scale."
    },
    {
      title: "Live Online Classes & Mentorship",
      desc: "Interactive live webinars, screen-share walk-throughs, Q&A sessions, and 1-on-1 instructor guidance."
    },
    {
      title: "Product Research & Data Mining",
      desc: "Learn to use Zik Analytics, Terapeak, and custom research frameworks to identify profitable winning products."
    },
    {
      title: "eBay Cassini SEO & Algorithmic Ranking",
      desc: "Master title construction, item specifics optimization, and search indexing tactics for maximum buyer visibility."
    },
    {
      title: "Dropshipping & Supply Chain Fundamentals",
      desc: "Compliant dropshipping models, supplier negotiation, order automation, and risk mitigation strategies."
    },
    {
      title: "High-Converting Product Listing Mastery",
      desc: "Craft professional image layouts, policy-compliant templates, compelling bullet points, and pricing strategies."
    },
    {
      title: "Promoted Listings & Advertising Strategies",
      desc: "Leverage eBay Promoted Listings Standard & Advanced campaigns to scale impression volume efficiently."
    },
    {
      title: "Practical Business & Store Management",
      desc: "Financial accounting, dispute handling, customer satisfaction metrics, Top Rated Seller status roadmap."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setSubmitted(false); onClose(); }}
            className="absolute inset-0 bg-brand-black/95 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-brand-beige rounded-[2rem] overflow-hidden shadow-2xl border border-brand-black/5 z-10"
          >
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="absolute top-6 right-6 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-accent transition-colors z-20"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 bg-brand-black p-8 sm:p-12 text-brand-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-brand-accent/20 border border-brand-accent/40 rounded-full text-[9px] font-black uppercase tracking-widest text-brand-accent">
                    <GraduationCap size={14} />
                    <span>DIGITAL MARKETING ACADEMY</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight leading-tight">
                      eBay Digital <br />
                      <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Academy</span>
                    </h3>
                    <p className="text-brand-white/60 text-sm font-light leading-relaxed mt-4">
                      Master international e-commerce through live mentorship, hands-on store building, and proven dropshipping & SEO techniques.
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-brand-white/10 shadow-lg">
                    <img
                      src={ebayAcademyImg}
                      alt="eBay Digital Marketing Academy"
                      className="w-full h-44 object-cover object-center"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                      }}
                    />
                  </div>

                  <div className="space-y-3 border-t border-brand-white/10 pt-6">
                    <div className="text-[9px] font-black uppercase tracking-widest text-brand-white/40">Academy Highlights</div>
                    <div className="text-xs text-brand-white/80 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Video size={14} className="text-brand-accent shrink-0" />
                        <span>Live interactive online classes with recording access</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen size={14} className="text-brand-accent shrink-0" />
                        <span>Real case studies & verified seller blueprints</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award size={14} className="text-brand-accent shrink-0" />
                        <span>Certificate of Completion from The DigiXy</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-6">
                  <button
                    onClick={() => { onClose(); onOpenConsultation(); }}
                    className="w-full py-4 bg-brand-accent text-brand-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-white hover:text-brand-black transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 max-h-[85vh] overflow-y-auto bg-brand-beige">
                {!submitted ? (
                  <div className="space-y-8">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1 block">CURRICULUM ARCHITECTURE</span>
                      <h4 className="text-2xl font-display font-black uppercase tracking-tight text-brand-black">1-Month Masterclass Curriculum</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {modules.map((item, idx) => (
                        <div key={idx} className="p-4 bg-brand-white rounded-2xl border border-brand-black/5 shadow-sm space-y-2 hover:border-brand-accent/30 transition-all">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-brand-accent" />
                            <h5 className="text-xs font-bold uppercase tracking-wider text-brand-black leading-snug">{item.title}</h5>
                          </div>
                          <p className="text-xs text-brand-black/60 leading-relaxed font-light">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 bg-brand-white rounded-2xl border border-brand-black/5 shadow-md space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest text-brand-black">Enrollment Inquiry & Seat Reservation</div>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input required type="text" placeholder="Full Name" className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                          <input required type="email" placeholder="Email Address" className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input required type="text" placeholder="Country" className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                          <select required className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent">
                            <option>Upcoming Cohort (Next Month)</option>
                            <option>Private 1-on-1 Mentorship Session</option>
                            <option>Corporate Team Training</option>
                          </select>
                        </div>
                        <textarea rows={2} placeholder="Tell us about your current e-commerce experience..." className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent resize-none" />
                        <button type="submit" className="w-full py-4 bg-brand-black text-brand-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent transition-all">
                          Discuss Enrollment Options
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 bg-brand-black text-brand-accent rounded-full flex items-center justify-center mx-auto">
                      <GraduationCap size={32} />
                    </div>
                    <h4 className="text-2xl font-display font-black uppercase text-brand-black">Academy Seat Reserved</h4>
                    <p className="text-sm text-brand-black/60 max-w-md mx-auto font-light">
                      Thank you for your interest in The DigiXy eBay Academy. Our Lead Instructor will contact you shortly with upcoming live session schedules and syllabus details.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); onClose(); }}
                      className="px-8 py-3 bg-brand-black text-brand-white rounded-full font-black uppercase tracking-[0.3em] text-[10px]"
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
