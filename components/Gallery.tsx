import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    // Imagen Principal (Grande): Retrato nobleza equina (Nueva foto vertical)
    src: "https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/9ceeb0dc-cc94-4f93-839f-7318a2ba7fff-high.jpg",
    alt: "Retrato nobleza equina",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    // Imagen horizontal: Grupo en exterior (Nueva foto horizontal)
    src: "https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/img_3629-high.jpg",
    alt: "Grupo de jinetes en exterior",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    // Imagen Cliente (Existente)
    src: "https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/9e3dcd5e-d2b6-4e29-b702-a7bdde7c4bb3-high.jpg",
    alt: "Momento ecuestre exclusivo",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    // Imagen Cliente (Existente)
    src: "https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/a5c8bbab-bfc9-450c-bb87-adffbb88395b-high-nn8chm.jpg?enable-io=true&enable=upscale&crop=1.2387%3A1&width=800",
    alt: "Experiencia Zurcan",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    // Imagen Vertical: Jinete caminando (Nueva foto vertical - reutilizada aquí también para completar galería)
    src: "https://primary.jwwb.nl/public/p/w/q/temp-nxkodnqavkjwlhjcpkno/69238713-b69b-46b9-a269-6f0d1dae26c1-high.jpg",
    alt: "Conexión jinete caballo",
    span: "col-span-1 md:col-span-1 row-span-1"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
             <span className="text-zurcan-orange text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Lifestyle</span>
             <h2 className="font-serif text-3xl md:text-4xl text-white">Momentos Zurcan</h2>
           </div>
           <button className="hidden md:block text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors border-b border-white/20 pb-1 hover:border-white">
             Ver Instagram
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-[24px] group ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};