import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Megaphone, 
  Code2, 
  Search, 
  Bot, 
  Share2, 
  ShoppingBag, 
  GraduationCap, 
  Palette, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  X 
} from 'lucide-react';

import heroImg from '../assets/images/hero_digital_dominance_1794056318656.jpg';
import ebaySolutionsImg from '../assets/images/ebay_solutions_showcase_1794056319090.jpg';
import ebayAcademyImg from '../assets/images/ebay_academy_training_1794056318662.jpg';
import aiSaasLabImg from '../assets/images/ai_saas_lab_1794056321118.jpg';

const DEFAULT_FALLBACK_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";

interface ServicesInteractiveSectionProps {
  onOpenConsultation: () => void;
  onOpenProjectModal: () => void;
  onOpenEbaySolutions: () => void;
  onOpenEbayAcademy: () => void;
}

export interface ServiceCategory {
  id: string;
  name: string;
  shortDesc: string;
  icon: React.ReactNode;
  image: string;
  subItems: string[];
  fullDesc: string;
}

export const serviceCategoriesData: ServiceCategory[] = [
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    shortDesc: "High-ROI paid media campaigns, hyper-targeted lead generation, and performance marketing strategies.",
    icon: <Megaphone className="w-8 h-8 text-brand-accent" />,
    image: heroImg,
    subItems: [
      "Social Media Marketing",
      "Facebook & Instagram Advertising",
      "Google Ads (Search & Shopping)",
      "PPC Campaign Management",
      "High-Converting Lead Generation",
      "Organic Traffic Growth",
      "Comprehensive Marketing Strategy"
    ],
    fullDesc: "Our Digital Marketing division executes high-performance acquisition campaigns across Google, Meta, LinkedIn, and YouTube. We build data-backed funnels that lower customer acquisition costs and scale international revenue."
  },
  {
    id: "web-development",
    name: "Website Development",
    shortDesc: "Enterprise business portals, headless e-commerce storefronts, custom web apps, and WordPress development.",
    icon: <Code2 className="w-8 h-8 text-brand-accent" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    subItems: [
      "Business Website Development",
      "WordPress Development",
      "E-commerce Development (Shopify/Custom)",
      "Custom Web Applications (React/Node)",
      "Landing Page Design",
      "24/7 Website Maintenance & Security"
    ],
    fullDesc: "We design and engineer bespoke web platforms optimized for sub-second speeds, flawless responsive fidelity across all screen sizes, and enterprise-grade security standards."
  },
  {
    id: "seo-services",
    name: "SEO Services",
    shortDesc: "Command global and local search engine rankings with technical auditing, keyword dominance, and link authority.",
    icon: <Search className="w-8 h-8 text-brand-accent" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    subItems: [
      "Technical SEO Auditing",
      "On-Page SEO Optimization",
      "Off-Page SEO & Authority Building",
      "International Multi-Lingual SEO",
      "Deep Keyword Research",
      "Strategic Link Building",
      "Local SEO & Map Pack Ranking"
    ],
    fullDesc: "We don't just optimize for search engines; we position your business to command organic market share across the US, UK, Europe, UAE, and global markets through sustainable search architecture."
  },
  {
    id: "ai-saas",
    name: "AI & SaaS Development",
    shortDesc: "Custom AI agents, voice bots, workflow automation pipelines, and multi-tenant SaaS application engineering.",
    icon: <Bot className="w-8 h-8 text-brand-accent" />,
    image: aiSaasLabImg,
    subItems: [
      "AI Application Development",
      "AI Chatbots (Customer Service & Sales)",
      "AI Voice Agents (Automated Calling)",
      "AI Workflow & Task Automation",
      "SaaS Platform Architecture",
      "Enterprise API Integration",
      "Custom LLM & AI Engine Solutions"
    ],
    fullDesc: "Transform your business with cutting-edge artificial intelligence. We build custom conversational AI agents, automated workflow engines, and scalable SaaS solutions that reduce overhead and accelerate growth."
  },
  {
    id: "social-media",
    name: "Social Media Management",
    shortDesc: "Full-channel content creation, audience growth management, scheduling, and community analytics.",
    icon: <Share2 className="w-8 h-8 text-brand-accent" />,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    subItems: [
      "Facebook Channel Management",
      "Instagram Aesthetic & Reels Growth",
      "LinkedIn B2B Leadership",
      "Pinterest Brand Visuals",
      "X / Twitter Audience Strategy",
      "High-Impact Content Creation",
      "Social Media Scheduling & Analytics"
    ],
    fullDesc: "Build an unmistakable brand presence across major social networks. Our creative team handles daily content creation, strategic scheduling, community engagement, and transparent performance metrics."
  },
  {
    id: "ebay-solutions",
    name: "eBay Business Solutions",
    shortDesc: "End-to-end eBay store setup, seller profile optimization, Cassini SEO, dropshipping guidance, and store management.",
    icon: <ShoppingBag className="w-8 h-8 text-brand-accent" />,
    image: ebaySolutionsImg,
    subItems: [
      "eBay Seller Account Setup Assistance",
      "eBay Business Consultation",
      "Seller Profile Optimization",
      "High-Margin Product Research",
      "eBay Dropshipping Guidance",
      "Product Listing Optimization",
      "eBay Cassini SEO",
      "Complete Store Management"
    ],
    fullDesc: "Establish and scale a profitable eBay seller business with expert account setup, compliant dropshipping workflows, item listing copy, Cassini search engine ranking, and daily store operations."
  },
  {
    id: "ebay-academy",
    name: "eBay Digital Marketing Academy",
    shortDesc: "1-Month intensive training academy with live online classes, dropshipping fundamentals, SEO, and business mentorship.",
    icon: <GraduationCap className="w-8 h-8 text-brand-accent" />,
    image: ebayAcademyImg,
    subItems: [
      "One-Month Intensive eBay Training",
      "Live Online Classes & Screen-Shares",
      "Product Research & Data Mining Training",
      "eBay Cassini SEO Mastery",
      "Dropshipping Fundamentals",
      "High-Converting Product Listing",
      "Advertising & Promoted Listings",
      "Practical Business & Store Management"
    ],
    fullDesc: "Learn practical e-commerce skills directly from active international sellers. Our 1-month academy covers everything from seller registration to product research, dropshipping, advertising, and store scaling."
  },
  {
    id: "creative-business",
    name: "Creative & Business Services",
    shortDesc: "Brand identity design, video production, copy, email marketing, reputation management, and CRO.",
    icon: <Palette className="w-8 h-8 text-brand-accent" />,
    image: "https://images.unsplash.com/photo-1542744094-3a3172720177?auto=format&fit=crop&q=80&w=1200",
    subItems: [
      "Graphic Design & Visual Brand Kits",
      "Video Production & Motion Graphics",
      "Content Writing & Editorial Copy",
      "Email Marketing Funnels & Automation",
      "Influencer Marketing Outreach",
      "Online Reputation Management (ORM)",
      "Conversion Rate Optimization (CRO)",
      "Comprehensive Business Branding"
    ],
    fullDesc: "Fuel your brand growth with premium creative assets, persuasive copywriting, email retention flows, reputation shielding, and UX conversion rate optimization."
  }
];

export const ServicesInteractiveSection: React.FC<ServicesInteractiveSectionProps> = ({
  onOpenConsultation,
  onOpenProjectModal,
  onOpenEbaySolutions,
  onOpenEbayAcademy
}) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const filteredServices = activeTab === "all"
    ? serviceCategoriesData
    : serviceCategoriesData.filter(s => s.id === activeTab);

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-white text-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="h-0.5 w-12 bg-brand-accent" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent">
              GLOBAL CAPABILITIES & SERVICES
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-black leading-[0.9] tracking-tight uppercase">
              Comprehensive <br />
              <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Digital</span> Dominance.
            </h2>
            <p className="text-brand-black/60 text-base md:text-lg max-w-md font-light leading-relaxed">
              From enterprise software engineering and AI automation to high-frequency marketing, eBay store acceleration, and global payment guidance.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 p-2 bg-brand-beige rounded-2xl border border-brand-black/5">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "all"
                ? "bg-brand-black text-brand-white shadow-md"
                : "text-brand-black/60 hover:text-brand-black hover:bg-brand-black/5"
            }`}
          >
            All Capabilities (8)
          </button>
          {serviceCategoriesData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === cat.id
                  ? "bg-brand-black text-brand-white shadow-md"
                  : "text-brand-black/60 hover:text-brand-black hover:bg-brand-black/5"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-brand-beige p-8 rounded-[2rem] border border-brand-black/5 flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-black/10 transition-all duration-300 group cursor-pointer"
              onClick={() => {
                if (service.id === 'ebay-solutions') {
                  onOpenEbaySolutions();
                } else if (service.id === 'ebay-academy') {
                  onOpenEbayAcademy();
                } else {
                  setSelectedService(service);
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-brand-white rounded-2xl shadow-sm border border-brand-black/5 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-black/30">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-display font-black text-brand-black uppercase tracking-tight mb-3 group-hover:text-brand-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-brand-black/60 leading-relaxed font-light mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <div>
                <div className="space-y-1.5 mb-6 pt-4 border-t border-brand-black/5">
                  {service.subItems.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-[11px] font-medium text-brand-black/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                  {service.subItems.length > 3 && (
                    <div className="text-[10px] font-bold text-brand-accent pt-1">
                      + {service.subItems.length - 3} More Services Included
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-black group-hover:text-brand-accent transition-colors">
                    Explore Service
                  </span>
                  <div className="w-9 h-9 rounded-full bg-brand-black text-brand-white flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-brand-beige text-brand-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-black/5 z-10"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-accent transition-colors z-20"
                >
                  <X size={18} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-5 bg-brand-black p-8 text-brand-white flex flex-col justify-between">
                    <div>
                      <div className="mb-6">{selectedService.icon}</div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent block mb-2">SERVICE OVERVIEW</span>
                      <h3 className="text-3xl font-display font-black uppercase leading-tight mb-4">{selectedService.name}</h3>
                      <p className="text-xs text-brand-white/70 font-light leading-relaxed mb-6">{selectedService.fullDesc}</p>
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-brand-white/10 mb-6">
                      <img 
                        src={selectedService.image} 
                        alt={selectedService.name} 
                        className="w-full h-36 object-cover" 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                        }}
                      />
                    </div>

                    <button
                      onClick={() => { setSelectedService(null); onOpenConsultation(); }}
                      className="w-full py-4 bg-brand-accent text-brand-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-white hover:text-brand-black transition-all"
                    >
                      Book a Free Consultation
                    </button>
                  </div>

                  <div className="md:col-span-7 p-8 md:p-10 max-h-[80vh] overflow-y-auto">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent block mb-1">INCLUDED DELIVERABLES</span>
                    <h4 className="text-2xl font-display font-black uppercase mb-6">Detailed Capabilities Checklist</h4>

                    <div className="space-y-3 mb-8">
                      {selectedService.subItems.map((sub, i) => (
                        <div key={i} className="p-4 bg-brand-white rounded-xl border border-brand-black/5 flex items-start space-x-3 shadow-sm">
                          <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                          <span className="text-xs font-bold text-brand-black">{sub}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => { setSelectedService(null); onOpenProjectModal(); }}
                        className="flex-1 py-4 bg-brand-black text-brand-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent transition-all shadow-md"
                      >
                        Request a Quote
                      </button>
                      <button
                        onClick={() => { setSelectedService(null); onOpenConsultation(); }}
                        className="flex-1 py-4 border border-brand-black text-brand-black rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-black hover:text-brand-white transition-all"
                      >
                        Discuss Your Project
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
