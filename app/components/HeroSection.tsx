'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = "Quelque chose de spécial pour toi...";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <h1 className="font-[family-name:var(--font-playfair)] text-7xl md:text-9xl lg:text-[10rem] font-bold text-[#8B1538] mb-8 flex items-center justify-center gap-4">
          Princesse <span className="text-6xl md:text-8xl">👑</span>
        </h1>
        
        <motion.p
          className="font-[family-name:var(--font-inter)] text-xl md:text-2xl text-gray-700 mb-12 min-h-[2em]"
        >
          {text}<span className="animate-pulse">|</span>
        </motion.p>
        
        <motion.a
          href="#decouvrir"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-[#8B1538] to-[#D4A5A5] text-white font-[family-name:var(--font-inter)] font-medium rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Découvrir
        </motion.a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #D4A5A5 0%, transparent 70%)'
        }}
      />
    </section>
  );
}
