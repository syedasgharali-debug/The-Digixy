import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ShieldCheck, TrendingUp, Search, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import ebaySolutionsImg from '../assets/images/ebay_solutions_showcase_1794056319090.jpg';

const DEFAULT_FALLBACK_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";

interface EbaySolutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const EbaySolutionsModal: React.FC<EbaySolutionsModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [submitted, setSubmitted] = useState(false);

  const features = [
    {
      title: "eBay Seller Account Setup Assistance",
      desc: "Structured setup guidance to establish verified, policy-compliant eBay seller profiles ready for international trade."
    },
    {
      title: "eBay Business Consultation",
      desc: "Strategic advisory on market selection, fee optimization, category analysis, and global expansion strategy."
    },
    {
      title: "Seller Profile Optimization",
      desc: "High-trust design, seller policy badging, custom store branding, and feedback acceleration framework."
    },
    {
      title: "Product Research & Niche Discovery",
      desc: "Data-driven product research identifying high-margin, low-competition items across US, UK, and EU marketplaces."
    },
    {
      title: "eBay Dropshipping Guidance",
      desc: "Compliant dropshipping architecture, trusted supplier sourcing, inventory automation, and order dispatch workflows."
    },
    {
      title: "Product Listing Optimization & Copywriting",
      desc: "Conversion-engineered item descriptions, high-CTR gallery images, item specifics, and structured bullet points."
    },
    {
      title: "eBay Search Engine Optimization (Cassini SEO)",
      desc: "Algorithmic keyword optimization aligned with eBay's Cassini search engine to secure organic top-rank positions."
    },
    {
      title: "Complete Store Management",
      desc: "End-to-end store operations including customer service templates, dispute resolution, case handling, and daily maintenance."
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
                    <ShoppingBag size={12} />
                    <span>EBAY ENTERPRISE HUB</span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight leading-tight">
                      eBay Business <br />
                      <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Solutions</span>
                    </h3>
                    <p className="text-brand-white/60 text-sm font-light leading-relaxed mt-4">
                      Turn eBay into a predictable international sales channel. We help sellers set up, optimize, and scale profitable store ecosystems.
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-brand-white/10 shadow-lg">
                    <img
                      src={ebaySolutionsImg}
                      alt="eBay Business Solutions"
                      className="w-full h-44 object-cover object-center"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                      }}
                    />
                  </div>

                  <div className="space-y-3 border-t border-brand-white/10 pt-6">
                    <div className="text-[9px] font-black uppercase tracking-widest text-brand-white/40">Guiding Standards</div>
                    <div className="text-xs text-brand-white/80 space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 size={14} className="text-brand-accent shrink-0" />
                        <span>Policy-compliant store architecture</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 size={14} className="text-brand-accent shrink-0" />
                        <span>Cassini Search Engine Keyword Precision</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 size={14} className="text-brand-accent shrink-0" />
                        <span>Cross-border international buyer reach</span>
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
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1 block">COMPLETE SERVICES BREAKDOWN</span>
                      <h4 className="text-2xl font-display font-black uppercase tracking-tight text-brand-black">eBay Store Acceleration</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {features.map((item, idx) => (
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
                      <div className="text-xs font-black uppercase tracking-widest text-brand-black">Request a Quote for eBay Solutions</div>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input required type="text" placeholder="Full Name" className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                          <input required type="email" placeholder="Email Address" className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input required type="text" placeholder="Country (e.g., USA, UK, UAE)" className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                          <select required className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent">
                            <option>Account Setup & Optimization</option>
                            <option>Product Research & Sourcing</option>
                            <option>eBay Dropshipping Guidance</option>
                            <option>Cassini SEO & Store Management</option>
                          </select>
                        </div>
                        <textarea rows={2} placeholder="Tell us about your eBay goals or existing seller profile..." className="w-full p-3 bg-brand-beige rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent resize-none" />
                        <button type="submit" className="w-full py-4 bg-brand-black text-brand-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent transition-all">
                          Request a Quote
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 bg-brand-black text-brand-accent rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck size={32} />
                    </div>
                    <h4 className="text-2xl font-display font-black uppercase text-brand-black">Inquiry Transmitted</h4>
                    <p className="text-sm text-brand-black/60 max-w-md mx-auto font-light">
                      Thank you. Our eBay E-commerce Specialists will audit your requirements and get in touch within 12 hours.
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
