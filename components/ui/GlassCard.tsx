import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.05)" } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        relative overflow-hidden
        bg-white/40 
        backdrop-blur-xl 
        border border-white/40 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        rounded-[32px]
        ${className}
      `}
    >
      {/* Subtle shine effect layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};