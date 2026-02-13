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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 relative overflow-hidden">
      {/* Particules réduites pour mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full hidden md:block"
          style={{
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#FF6B9D' : i % 3 === 1 ? '#9B59B6' : '#FFD700'
            }, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl relative z-10"
      >
        <motion.h1 
          className="font-italiana text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
          style={{ color: '#8B1538' }}
        >
          <span className="text-neon">Princesse</span>
          <motion.span 
            className="text-4xl sm:text-6xl md:text-7xl"
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
        
        <motion.p
          className="font-[family-name:var(--font-inter)] text-base sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 min-h-[2em] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
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
        
        {/* Bouton WOW spectaculaire */}
        <motion.a
          href="#decouvrir"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block group"
        >
          {/* Bordure animée dorée */}
          <motion.div
            className="absolute -inset-1 rounded-full opacity-75 blur-lg"
            animate={{
              background: [
                'linear-gradient(45deg, #FFD700, #FF6B9D, #9B59B6)',
                'linear-gradient(90deg, #9B59B6, #FFD700, #FF6B9D)',
                'linear-gradient(135deg, #FF6B9D, #9B59B6, #FFD700)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          
          <div className="relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#8B1538] via-[#FF6B9D] to-[#9B59B6] text-white font-[family-name:var(--font-inter)] font-bold text-base sm:text-lg rounded-full shadow-2xl overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Découvrir mon message
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </span>
            
            {/* Effet shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
