import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 bg-stone-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
         {/* Imagen de fondo: Textura de cuero oscuro / Silla de montar (Saddle) */}
         <img src="https://images.unsplash.com/photo-1529259174620-6f77977eb0c9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Textura ecuestre oscura" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="p-0 flex flex-col md:flex-row !bg-white/5 !border-white/10 !rounded-[40px]">
            
            {/* Info Side */}
            <div className="w-full md:w-2/5 p-12 bg-white/5 backdrop-blur-sm border-r border-white/5 flex flex-col justify-between text-white">
              <div>
                <span className="text-zurcan-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Contacto</span>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Comience su Viaje</h2>
                <p className="text-stone-400 font-light text-sm leading-relaxed mb-8">
                  Le invitamos a experimentar ZURCAN de primera mano. Programe un recorrido privado por nuestros terrenos y discuta sus necesidades ecuestres con nuestro director.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-white/10 text-zurcan-orange">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-stone-300">Ubicación</p>
                    <p className="text-stone-400 font-light">Camí de la Fanguera del Merdoset,<br/>17487 Empuriabrava</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-white/10 text-zurcan-orange">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-stone-300">Email</p>
                    <p className="text-stone-400 font-light">membresia@zurcan.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-white/10 text-zurcan-orange">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-stone-300">Conserjería</p>
                    <p className="text-stone-400 font-light">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-3/5 p-12 bg-white/10 backdrop-blur-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-400 ml-2">Nombre</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zurcan-orange/50 transition-colors" placeholder="Juan" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-400 ml-2">Apellido</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zurcan-orange/50 transition-colors" placeholder="Pérez" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400 ml-2">Interés</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-stone-300 focus:outline-none focus:border-zurcan-orange/50 transition-colors">
                    <option className="bg-stone-800">Información de Alojamiento</option>
                    <option className="bg-stone-800">Clases de la Academia</option>
                    <option className="bg-stone-800">Organización de Eventos</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400 ml-2">Mensaje</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zurcan-orange/50 transition-colors" placeholder="¿Cómo podemos ayudarle?"></textarea>
                </div>

                <button type="button" className="group w-full py-4 bg-white text-stone-900 rounded-2xl font-bold uppercase tracking-widest hover:bg-zurcan-orange hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>Enviar Solicitud</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </GlassCard>
        </div>
      </div>
    </section>
  );
};