'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section ref={ref} className="py-40 px-6 max-w-6xl mx-auto relative">
      {/* Effet de fond musical ultra */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #FFD700 2px, transparent 2px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Cercles dorés flottants */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent)',
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        {/* Icônes musicales géantes flottantes */}
        {['🎵', '🎶', '💕', '✨', '👑', '💫'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl filter drop-shadow-2xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${-15 + (i % 2) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {emoji}
          </motion.div>
        ))}

        <motion.h2 
          className="font-italiana text-8xl md:text-9xl font-bold text-neon mb-12 relative"
          style={{ color: '#8B1538' }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 215, 0, 0.8)',
                '0 0 40px rgba(255, 107, 157, 0.8)',
                '0 0 20px rgba(255, 215, 0, 0.8)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Une chanson pour toi
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="font-[family-name:var(--font-inter)] text-3xl text-gradient font-bold mb-20 italic"
        >
          Parce que la musique dit parfois ce que les mots ne peuvent pas... 🎵
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: -30 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
          whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
          className="glass-effect rounded-[3rem] p-16 shadow-2xl relative overflow-hidden max-w-3xl mx-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Effet de brillance dorée ultra */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(255, 215, 0, 0.3), transparent)',
                'radial-gradient(circle at 100% 0%, rgba(255, 215, 0, 0.3), transparent)',
                'radial-gradient(circle at 100% 100%, rgba(255, 215, 0, 0.3), transparent)',
                'radial-gradient(circle at 0% 100%, rgba(255, 215, 0, 0.3), transparent)',
                'radial-gradient(circle at 0% 0%, rgba(255, 215, 0, 0.3), transparent)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          {/* Bordure dorée animée ultra */}
          <motion.div
            className="absolute -inset-2 rounded-[3rem] opacity-70"
            animate={{
              background: [
                'linear-gradient(0deg, #FFD700, #FF6B9D, #9B59B6, #FFD700)',
                'linear-gradient(90deg, #FFD700, #FF6B9D, #9B59B6, #FFD700)',
                'linear-gradient(180deg, #FFD700, #FF6B9D, #9B59B6, #FFD700)',
                'linear-gradient(270deg, #FFD700, #FF6B9D, #9B59B6, #FFD700)',
                'linear-gradient(360deg, #FFD700, #FF6B9D, #9B59B6, #FFD700)',
              ],
              boxShadow: [
                '0 0 30px rgba(255, 215, 0, 0.6)',
                '0 0 50px rgba(255, 107, 157, 0.6)',
                '0 0 30px rgba(255, 215, 0, 0.6)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            style={{
              filter: 'blur(20px)',
            }}
          />

          {/* Étoiles scintillantes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#FFD700] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          <div className="relative z-10">
            <iframe
              style={{ borderRadius: '20px' }}
              src="https://open.spotify.com/embed/track/3DamFFqW32WihKkTVlwTYQ?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="mx-auto shadow-2xl"
            ></iframe>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
              className="font-italiana text-2xl text-gradient font-bold mt-10"
            >
              Tayc - N'y pense plus 🎵✨
            </motion.p>
          </div>
        </motion.div>

        {/* Message final spectaculaire */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <motion.p 
            className="font-italiana text-4xl text-3d-gold font-bold"
            style={{ color: '#8B1538' }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Écoute-la en pensant à nous 💫👑
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
