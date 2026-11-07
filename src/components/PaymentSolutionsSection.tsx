import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, Globe2, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, Lock, X } from 'lucide-react';

interface PaymentSolutionsSectionProps {
  onOpenConsultation: () => void;
  onOpenProjectModal: () => void;
}

export const PaymentSolutionsSection: React.FC<PaymentSolutionsSectionProps> = ({
  onOpenConsultation,
  onOpenProjectModal
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const solutions = [
    {
      title: "Stripe Payment Gateway Guidance",
      icon: <CreditCard className="w-8 h-8 text-brand-accent" />,
      desc: "Structured consultation for international businesses navigating Stripe account verification, legal entity structuring, supported currencies, and developer API integration."
    },
    {
      title: "PayPal Business Integration & Support",
      icon: <Globe2 className="w-8 h-8 text-brand-accent" />,
      desc: "Guidance on setting up PayPal Business accounts, resolving account limitations, configuring multi-currency checkout, and integrating PayPal Commerce Platform."
    },
    {
      title: "USA Payment Account Options",
      icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
      desc: "Assistance with US LLC/C-Corp corporate setup documentation, US EIN registration, and merchant processing solutions for non-US residents."
    },
    {
      title: "European Payment Account Options",
      icon: <Lock className="w-8 h-8 text-brand-accent" />,
      desc: "Guidance on European SEPA IBAN corporate accounts, UK Limited company structures, VAT registration, and European acquiring channels."
    },
    {
      title: "International Card Payment Solutions",
      icon: <CreditCard className="w-8 h-8 text-brand-accent" />,
      desc: "Cross-border merchant acquiring guidance supporting Visa, Mastercard, American Express, Apple Pay, Google Pay, and localized regional payment methods."
    }
  ];

  const eligibilityNotes = [
    "Registered business entity or verifiable sole proprietorship documentation.",
    "Compliant product or service offering adhering to global card network guidelines.",
    "Transparent identity verification (KYC/AML compliance documents).",
    "Functional e-commerce store or website with clear Terms & Privacy policy."
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="payment-solutions" className="py-20 md:py-28 bg-brand-black text-brand-white relative overflow-hidden">
      {/* Background glow and subtle mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 bg-brand-accent/15 border border-brand-accent/30 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-brand-accent">
              <Globe2 size={14} />
              <span>INTERNATIONAL FINTECH & PAYMENT GATEWAY CONSULTATION</span>
            </div>

            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-black leading-[0.95] tracking-tight uppercase">
              Accept Payments. <br />
              <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Expand Globally.</span> <br />
              Grow Without Borders.
            </h2>

            <p className="text-brand-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl border-l-2 border-brand-accent/30 pl-6">
              We help eligible international businesses access payment solutions and payment-processing guidance through PayPal, Stripe, European, and USA merchant account options to unlock friction-free global revenue.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-brand-accent text-brand-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-white hover:text-brand-black transition-all shadow-xl hover:scale-105"
              >
                Get Started with Payment Guidance
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 border border-brand-white/20 text-brand-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-white/10 transition-all"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden border border-brand-white/10 shadow-2xl group">
              <img
                src="/src/assets/images/payment_solutions_global_1794056318579.jpg"
                alt="Global Payment Solutions"
                className="w-full h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-brand-black/80 backdrop-blur-md rounded-2xl border border-brand-white/10">
                <div className="text-[9px] font-black uppercase tracking-widest text-brand-accent mb-1">Global Reach Coverage</div>
                <div className="text-sm font-bold text-brand-white">135+ Currencies & Multi-Merchant Routing</div>
                <div className="text-xs text-brand-white/60 mt-1 font-light">USA • UK • EU • UAE • Australia • Worldwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-brand-white/5 rounded-[2rem] border border-brand-white/10 hover:border-brand-accent/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <h3 className="text-xl font-display font-black text-brand-white uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-brand-white/60 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-brand-white/10 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent">Consultation Ready</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-bold text-brand-white group-hover:text-brand-accent transition-colors flex items-center space-x-1"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transparency & Compliance Banner */}
        <div className="p-8 md:p-12 bg-brand-white/5 rounded-[2rem] border border-brand-white/10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-brand-white/10 pb-6">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1">TRANSPARENCY & COMPLIANCE COMMITMENT</div>
              <h3 className="text-2xl font-display font-black uppercase text-brand-white">Eligibility & Guidance Framework</h3>
            </div>
            <div className="text-xs text-brand-white/50 max-w-md italic font-light">
              * The DigiXy provides technical advisory, corporate formation guidance, and integration consulting. We do not issue bank accounts or guarantee financial approvals, adhering strictly to global banking laws and anti-fraud policies.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eligibilityNotes.map((note, i) => (
              <div key={i} className="flex items-start space-x-3 p-4 bg-brand-black/40 rounded-xl border border-brand-white/5">
                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                <span className="text-xs text-brand-white/80 font-light leading-snug">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Solutions Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setSubmitted(false); setIsModalOpen(false); }}
              className="absolute inset-0 bg-brand-black/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-beige text-brand-black rounded-[2rem] p-8 md:p-12 shadow-2xl border border-brand-black/5 z-10"
            >
              <button
                onClick={() => { setSubmitted(false); setIsModalOpen(false); }}
                className="absolute top-6 right-6 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-accent transition-colors"
              >
                <X size={18} />
              </button>

              {!submitted ? (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1 block">PAYMENT CONSULTATION REQUEST</span>
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase">International Payment Gateway Support</h3>
                    <p className="text-xs text-brand-black/60 font-light mt-2">
                      Please submit your business details below. Our Fintech Specialists will evaluate your eligibility and reach out with tailored gateway guidance.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40 block mb-1">Full Name</label>
                        <input required type="text" placeholder="Alexander Sterling" className="w-full p-4 bg-brand-white rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                      </div>
                      <div>
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40 block mb-1">Business Email</label>
                        <input required type="email" placeholder="alex@sterling.com" className="w-full p-4 bg-brand-white rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40 block mb-1">Country of Business</label>
                        <input required type="text" placeholder="USA, UK, UAE, Germany, etc." className="w-full p-4 bg-brand-white rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent" />
                      </div>
                      <div>
                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40 block mb-1">Payment Solution Needed</label>
                        <select required className="w-full p-4 bg-brand-white rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent">
                          <option>Stripe Payment Gateway Guidance</option>
                          <option>PayPal Business Setup & Support</option>
                          <option>USA Corporate Account Structure</option>
                          <option>European SEPA IBAN Setup Guidance</option>
                          <option>Multi-Currency International Cards</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-brand-black/40 block mb-1">Business Website & Summary</label>
                      <textarea rows={3} placeholder="Describe your store model, website URL, and monthly transaction volume..." className="w-full p-4 bg-brand-white rounded-xl text-xs font-medium outline-none border border-brand-black/5 focus:border-brand-accent resize-none" />
                    </div>

                    <button type="submit" className="w-full py-5 bg-brand-black text-brand-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent transition-all shadow-lg">
                      Submit Payment Guidance Inquiry
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-brand-black text-brand-accent rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="text-2xl font-display font-black uppercase text-brand-black">Inquiry Transmitted</h4>
                  <p className="text-sm text-brand-black/60 max-w-md mx-auto font-light">
                    Our International Payment Advisory team will review your business parameters and contact you via email within 12 hours with exact step-by-step guidance.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setIsModalOpen(false); }}
                    className="px-8 py-3 bg-brand-black text-brand-white rounded-full font-black uppercase tracking-[0.3em] text-[10px]"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
