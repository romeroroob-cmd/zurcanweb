import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Nueva Imagen: Primer plano artístico y dramático (Dark Equine Luxury) */}
        <img 
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2070&auto=format&fit=crop" 
          alt="Perfil artístico de caballo pura sangre" 
          className="w-full h-full object-cover"
        />
        {/* Gradiente ajustado para esta nueva imagen más oscura */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs uppercase tracking-[0.2em] mb-6 shadow-2xl">
            EXPERTOS EN EL MUNDO DEL CABALLO
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-6 tracking-tight drop-shadow-2xl">
            ZURCAN
          </h1>
          <p className="font-sans text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed tracking-wide mix-blend-screen">
            Donde el arte de la equitación se encuentra con el lujo moderno.
            Un santuario ecuestre diseñado para los distinguidos.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white cursor-pointer hover:bg-zurcan-orange hover:border-zurcan-orange transition-colors duration-300">
           <ArrowDown size={20} />
        </div>
      </motion.div>
    </section>
  );
};