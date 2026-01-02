import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Esencia', href: '#hero' },
  { label: 'Servicios', href: '#services' },
  { label: 'Espacios', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clases dinámicas basadas en el estado del scroll
  const navContainerClasses = scrolled 
    ? 'bg-white/90 backdrop-blur-xl border border-white/20 shadow-sm py-3' 
    : 'bg-transparent py-6';
    
  const logoClasses = scrolled || isOpen ? 'text-stone-900' : 'text-white';
  const linkClasses = scrolled 
    ? 'text-stone-600 hover:text-zurcan-orange' 
    : 'text-white/90 hover:text-white drop-shadow-md';
    
  const buttonClasses = scrolled
    ? 'bg-stone-900 text-stone-50 hover:bg-zurcan-orange'
    : 'bg-white text-stone-900 hover:bg-stone-200';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-0' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div 
            className={`
              flex items-center justify-between px-6 md:px-10
              rounded-full transition-all duration-500
              ${navContainerClasses}
            `}
          >
            {/* Espacio vacío (sin logo) manteniendo estructura layout */}
            <div className="w-8 h-8" />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${linkClasses}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className={`group flex items-center gap-2 px-6 py-3 rounded-full transition-colors duration-300 ${buttonClasses}`}>
                <span className="text-xs uppercase tracking-widest font-semibold">Reservar Visita</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${logoClasses}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} className="text-stone-900" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-stone-50/95 md:hidden flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="font-serif text-4xl text-stone-800 hover:text-zurcan-orange transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="mt-8 px-8 py-3 bg-zurcan-orange text-white rounded-full uppercase tracking-widest text-sm"
              >
                Reservar Experiencia
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};