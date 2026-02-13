'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section ref={ref} className="py-40 px-6 max-w-5xl mx-auto relative">
      {/* Effet de fond musical animé */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #FF6B9D 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        {/* Icônes musicales flottantes */}
        {['🎵', '🎶', '💕', '✨'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${20 + i * 20}%`,
              top: `${-10 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.7, 0.3],
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
          className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-bold text-gradient mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Une chanson pour toi
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-inter)] text-2xl text-gray-700 mb-12 italic"
        >
          Parce que la musique dit parfois ce que les mots ne peuvent pas...
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.9, rotateX: -20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="glass-effect rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto"
        >
          {/* Effet de brillance animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />

          {/* Bordure animée */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-[#FF6B9D] via-[#9B59B6] to-[#FF6B9D] rounded-[2.5rem] opacity-50 blur-xl"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          />

          <div className="relative z-10">
            <iframe
              style={{ borderRadius: '16px' }}
              src="https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="mx-auto"
            ></iframe>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className="font-[family-name:var(--font-inter)] text-sm text-gray-600 mt-8 italic"
            >
              💡 Remplace ce lien Spotify avec ta chanson préférée
            </motion.p>
          </div>
        </motion.div>

        {/* Message final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <p className="font-[family-name:var(--font-inter)] text-xl text-gray-700 italic">
            Écoute-la en pensant à nous 💫
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
