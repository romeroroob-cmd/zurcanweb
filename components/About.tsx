import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "10+", label: "Boxes Premium" },
  { value: "+40", label: "Alumnos" },
  { value: "10", label: "Hectáreas de Campo" },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 translate-y-12"
                >
                   {/* Imagen 1: (Actualizada) Primer plano ecuestre vertical */}
                   <img src="https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/img_4261-high.jpg" className="rounded-[32px] w-full h-64 object-cover shadow-xl" alt="Jinete y caballo Zurcan" />
                   {/* Imagen 2: Paisaje natural */}
                   <img src="https://hotelplazaola.es/wp-content/uploads/2017/03/Lqz5BrKAiGlZBOp-bfIjlz3HruwkHEY31vsWonSexoxRzDIvky0G_XHHu5DYx7H7TTj0nuIs771-fcrop641295a0000def5ffff-40.jpeg" className="rounded-[32px] w-full h-80 object-cover shadow-xl" alt="Paisaje natural y entorno" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-4"
                >
                   {/* Imagen 3: Retrato en establo */}
                   <img src="https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/26e08049-1d88-4588-a97b-7913200becfa-high.jpg" className="rounded-[32px] w-full h-80 object-cover shadow-xl" alt="Caballo en establo" />
                   {/* Imagen 4: Ambiente del club/campo */}
                   <img src="https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/8c0de741-a894-4739-af78-ff94edb0e918-high.jpg" className="rounded-[32px] w-full h-64 object-cover shadow-xl" alt="Campo al atardecer" />
                </motion.div>
             </div>
             
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-stone-50 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-zurcan-orange text-xs font-bold tracking-[0.2em] uppercase mb-6"
            >
              <span className="w-8 h-[1px] bg-zurcan-orange"></span> El Predio
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight"
            >
              Un Santuario para <br/>
              <span className="italic text-stone-500">Caballo y Jinete</span>
            </motion.h2>

            <p className="font-sans text-lg text-stone-600 font-light leading-relaxed mb-8">
              En Zurcan, ofrecemos experiencias inolvidables de equitación en un entorno privilegiado en Empuriabrava, España. Nuestro objetivo es brindar momentos únicos para todos los amantes de los caballos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Pupilaje', 'Rutas', 'Clases', 'Venta de ejemplares'].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 size={18} className="text-zurcan-orange" />
                  <span className="font-sans text-sm">{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-12 border-t border-stone-100 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif text-3xl text-stone-900">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-stone-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};