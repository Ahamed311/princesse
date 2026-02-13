'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = "Une semaine... et déjà tant de choses à te dire";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Particules flottantes animées */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#FF6B9D' : i % 3 === 1 ? '#9B59B6' : '#D4A5A5'
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center max-w-5xl relative z-10"
      >
        {/* Effet de halo derrière le titre */}
        <motion.div
          className="absolute inset-0 blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle, #FF6B9D, #9B59B6, transparent)',
          }}
        />

        <motion.h1 
          className="font-[family-name:var(--font-playfair)] text-7xl md:text-9xl lg:text-[11rem] font-bold mb-8 flex items-center justify-center gap-4 relative"
          animate={{
            textShadow: [
              '0 0 20px rgba(255, 107, 157, 0.5)',
              '0 0 40px rgba(155, 89, 182, 0.5)',
              '0 0 20px rgba(255, 107, 157, 0.5)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-gradient">Princesse</span>
          <motion.span 
            className="text-6xl md:text-8xl"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            👑
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative"
        >
          <motion.p
            className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl text-gray-700 mb-12 min-h-[3em] font-light italic"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-[#FF6B9D]"
            >
              |
            </motion.span>
          </motion.p>
        </motion.div>
        
        <motion.a
          href="#decouvrir"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 20px 60px rgba(255, 107, 157, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-5 bg-gradient-to-r from-[#8B1538] via-[#FF6B9D] to-[#9B59B6] text-white font-[family-name:var(--font-inter)] font-semibold text-lg rounded-full shadow-2xl relative overflow-hidden group"
        >
          <span className="relative z-10">Découvrir mon message</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#9B59B6] via-[#FF6B9D] to-[#8B1538]"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.a>
      </motion.div>

      {/* Cercles décoratifs animés */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6B9D]/20 to-transparent blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#9B59B6]/20 to-transparent blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
