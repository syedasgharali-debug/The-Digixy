import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/15072583835?text=Hello%20The%20DigiXy%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The DigiXy on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute -inset-1 rounded-full bg-white/30 animate-ping opacity-75" />
        <MessageCircle size={22} className="relative z-10 fill-white text-emerald-600" />
      </div>
      <span className="hidden sm:inline-block text-xs font-black uppercase tracking-widest text-white whitespace-nowrap">
        WhatsApp Quick Chat
      </span>
    </a>
  );
};
