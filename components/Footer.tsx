import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-stone-950 py-20 border-t border-white/5 overflow-hidden">
      {/* Background Image Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1447992790757-9759d35870a3?q=80&w=2070&auto=format&fit=crop" 
          alt="Textura fondo" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          <div className="flex space-x-8 mb-12 mt-10">
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-zurcan-orange text-stone-400 hover:text-white transition-all duration-300"><Instagram size={20} /></a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-zurcan-orange text-stone-400 hover:text-white transition-all duration-300"><Facebook size={20} /></a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-zurcan-orange text-stone-400 hover:text-white transition-all duration-300"><Linkedin size={20} /></a>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-xs uppercase tracking-widest text-stone-500">
            <a href="#" className="hover:text-zurcan-orange transition-colors">Membresía</a>
            <a href="#" className="hover:text-zurcan-orange transition-colors">Prensa</a>
            <a href="#" className="hover:text-zurcan-orange transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-zurcan-orange transition-colors">Carreras</a>
          </div>

          <p className="mt-12 text-stone-700 text-xs">
            © {new Date().getFullYear()} Centro Ecuestre ZURCAN. Todos los derechos reservados. Diseñado con precisión.
          </p>
        </div>
      </div>
    </footer>
  );
};