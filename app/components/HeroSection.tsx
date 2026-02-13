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
        <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl lg:text-9xl font-bold text-[#5E0F1B] mb-8">
          [Son Prénom]
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
          className="inline-block px-10 py-4 bg-[#5E0F1B] text-white font-[family-name:var(--font-inter)] font-medium rounded-full hover:bg-[#7a1524] transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Découvrir
        </motion.a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #B08968 0%, transparent 70%)'
        }}
      />
    </section>
  );
}
