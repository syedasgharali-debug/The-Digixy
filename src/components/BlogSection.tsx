import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, BookOpen, Clock, Tag, X, User } from 'lucide-react';

import ebaySolutionsImg from '../assets/images/ebay_solutions_showcase_1794056319090.jpg';
import paymentSolutionsImg from '../assets/images/payment_solutions_global_1794056318579.jpg';
import aiSaasLabImg from '../assets/images/ai_saas_lab_1794056321118.jpg';

const DEFAULT_FALLBACK_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  summary: string;
  content: string[];
}

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "1",
      title: "Scaling eBay E-commerce: Cassini SEO & International Dropshipping Blueprints",
      category: "eBay & E-Commerce",
      readTime: "6 min read",
      author: "Syed Asghar Kazmi",
      date: "October 2026",
      image: ebaySolutionsImg,
      summary: "How global market leaders structure eBay seller profiles, optimize for the Cassini search engine, and navigate compliant dropshipping supply chains.",
      content: [
        "eBay remains one of the largest cross-border marketplaces globally, processing tens of billions in annual transaction volume across the US, UK, EU, and Australia.",
        "To dominate search rankings on eBay, sellers must align with Cassini—eBay's proprietary algorithm. Unlike traditional Google SEO, Cassini prioritizes listing completeness, item specifics, seller feedback ratios, and fast tracking upload rates.",
        "Key strategy: Craft high-CTR main gallery images, populate 100% of required and recommended item specifics, and leverage Promoted Listings Standard to build early sales velocity."
      ]
    },
    {
      id: "2",
      title: "Navigating International Payment Gateways: Stripe & PayPal Setup Guidance",
      category: "Fintech & Payments",
      readTime: "5 min read",
      author: "Sarah Jenkins",
      date: "November 2026",
      image: paymentSolutionsImg,
      summary: "A practical guide for non-US and European digital entrepreneurs seeking compliant cross-border payment merchant options.",
      content: [
        "Expanding globally requires robust payment infrastructure. For international merchants in regions like UAE, Saudi Arabia, or South Asia, accessing tier-1 acquiring channels like Stripe or PayPal Business involves clear legal entity structuring.",
        "By establishing verified US LLC or UK Ltd corporate entities with US EIN or UK VAT registration, international businesses can legally open merchant processing accounts.",
        "Always maintain transparent KYC/AML documentation, clear return policies on your website, and real-time transaction dispute monitoring to prevent reserve holds."
      ]
    },
    {
      id: "3",
      title: "Building Enterprise AI Agents: Custom Voice & Chatbots for Modern SaaS",
      category: "AI & Innovation",
      readTime: "7 min read",
      author: "Elena Rostova",
      date: "November 2026",
      image: aiSaasLabImg,
      summary: "How modern enterprises deploy custom AI agents, automated workflow pipelines, and neural LLM models to scale support and lead generation.",
      content: [
        "Artificial Intelligence has evolved from generic chatbot widgets into autonomous operational agents capable of qualifying inbound leads, scheduling appointments, and handling complex customer queries.",
        "By integrating Gemini AI APIs with backend WebSockets and vector databases, enterprise applications achieve sub-300ms response latencies with zero-hallucination guardrails.",
        "Investing in proprietary AI workflows provides a lasting moat, reducing operating costs while delivering 24/7 personalized customer experiences globally."
      ]
    }
  ];

  return (
    <section id="blog" className="py-20 md:py-28 bg-brand-beige text-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent mb-2 block">INSIGHTS & STRATEGY</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
              Global Growth <br />
              <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Perspectives</span>
            </h2>
          </div>
          <p className="text-brand-black/60 text-sm md:text-base max-w-sm font-light">
            Tactical playbooks on AI development, international SEO, eBay store scaling, and global payment solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <motion.div
              key={art.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedArticle(art)}
              className="bg-brand-white rounded-[2rem] overflow-hidden border border-brand-black/5 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-brand-black text-brand-white rounded-full text-[9px] font-black uppercase tracking-widest">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-[10px] text-brand-black/40 font-bold uppercase tracking-wider">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-display font-black text-brand-black uppercase tracking-tight leading-snug group-hover:text-brand-accent transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs text-brand-black/60 font-light leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-brand-black/5 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-black group-hover:text-brand-accent transition-colors">
                  Read Article
                </span>
                <div className="w-8 h-8 rounded-full bg-brand-beige text-brand-black flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-white transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-brand-beige text-brand-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-black/5 z-10"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-accent transition-colors z-20"
              >
                <X size={18} />
              </button>

              <div className="p-6 md:p-12 max-h-[85vh] overflow-y-auto space-y-6">
                <div className="space-y-2">
                  <span className="px-3.5 py-1 bg-brand-accent text-brand-white rounded-full text-[9px] font-black uppercase tracking-widest inline-block">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight text-brand-black">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-xs text-brand-black/50 font-medium pt-2">
                    <span className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{selectedArticle.author}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{selectedArticle.readTime}</span>
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden h-64 border border-brand-black/5">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                    }}
                  />
                </div>

                <div className="space-y-4 text-sm text-brand-black/80 font-light leading-relaxed">
                  {selectedArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-brand-black/10 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-8 py-3 bg-brand-black text-brand-white rounded-full font-black uppercase tracking-[0.3em] text-[10px]"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
