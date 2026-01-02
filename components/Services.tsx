import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Compass, Home, Star } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Experiencia a Caballo",
    description: "Explora paisajes hermosos con nuestras rutas guiadas a caballo. Seguridad y diversión garantizadas en un entorno natural incomparable.",
    // Imagen real cliente: Rutas / Exterior
    image: "https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/a5c8bbab-bfc9-450c-bb87-adffbb88395b-high-nn8chm.jpg?enable-io=true&enable=upscale&crop=1.2387%3A1&width=800",
    icon: <Compass size={24} className="text-zurcan-orange" />
  },
  {
    id: 2,
    title: "Pupilajes Premium",
    description: "Pensiones para todo tipo de caballo, sea en box o en exterior. ¡En las mejores condiciones y con atención profesional 24/7!",
    // Imagen real cliente: Box/Establo
    image: "https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/img_5826-high.jpg?enable-io=true&enable=upscale&crop=0.8333%3A1&width=800",
    icon: <Home size={24} className="text-zurcan-orange" />
  },
  {
    id: 3,
    title: "Eventos & Lifestyle",
    description: "Organiza eventos especiales con un toque único. Fiestas, celebraciones y eventos corporativos inolvidables en nuestro santuario.",
    // Imagen real cliente: Eventos sociales / Lifestyle
    image: "https://primary.jwwb.nl/unsplash/QrJc1RVI7uM.jpg?enable-io=true&enable=upscale&crop=0.8333%3A1&width=800",
    icon: <Star size={24} className="text-zurcan-orange" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 bg-stone-100">
      {/* Decorative Blur blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-300/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
           <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zurcan-orange text-xs font-bold tracking-[0.2em] uppercase"
           >
             Nuestra Oferta
           </motion.span>
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-stone-900 mt-4 mb-6"
           >
             Servicios Ecuestres Exclusivos
           </motion.h2>
           <div className="w-1 h-12 bg-stone-300 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={service.id} hoverEffect className="group h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-stone-800 mb-4">{service.title}</h3>
                <p className="font-sans text-stone-500 font-light leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-8 pt-8 border-t border-stone-100">
                  <span className="text-xs font-bold tracking-widest text-zurcan-orange uppercase group-hover:underline decoration-1 underline-offset-4 cursor-pointer">
                    Más Información
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};