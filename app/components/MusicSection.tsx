'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section ref={ref} className="py-20 md:py-32 px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Icônes musicales réduites */}
        {['🎵', '💕', '✨'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl sm:text-4xl hidden sm:block"
            style={{
              left: `${25 + i * 25}%`,
              top: `${-5 + (i % 2) * 15}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}

        <motion.h2 
          className="font-italiana text-4xl sm:text-5xl md:text-7xl font-bold text-neon mb-6 sm:mb-8"
          style={{ color: '#8B1538' }}
        >
          Une chanson pour toi
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-xl text-gradient font-semibold mb-10 sm:mb-12 italic px-4"
        >
          Parce que la musique dit parfois ce que les mots ne peuvent pas... 🎵
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="glass-effect rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden max-w-3xl mx-auto"
        >
          {/* Bordure animée simplifiée */}
          <motion.div
            className="absolute -inset-1 rounded-3xl opacity-50 blur-xl"
            animate={{
              background: [
                'linear-gradient(0deg, #FFD700, #FF6B9D, #9B59B6)',
                'linear-gradient(120deg, #FFD700, #FF6B9D, #9B59B6)',
                'linear-gradient(240deg, #FFD700, #FF6B9D, #9B59B6)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <div className="relative z-10">
            {/* YouTube Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl"
                src="https://www.youtube.com/embed/1sEhLoiUKCs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Message final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="mt-10 sm:mt-12"
        >
          <p className="font-italiana text-2xl sm:text-3xl md:text-4xl text-3d-gold font-bold" style={{ color: '#8B1538' }}>
            Écoute-la en pensant à nous 💫
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
