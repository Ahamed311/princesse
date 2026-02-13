'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 text-center relative overflow-hidden">
      {/* Effet de fond doré */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, #FFD700, transparent)',
            'radial-gradient(circle at 70% 50%, #FF6B9D, transparent)',
            'radial-gradient(circle at 30% 50%, #FFD700, transparent)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          className="inline-block text-7xl mb-8 filter drop-shadow-2xl"
        >
          ❤️
        </motion.div>
        
        <motion.p 
          className="font-italiana text-5xl md:text-6xl text-3d-gold font-bold mb-4"
          style={{ color: '#8B1538' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          animate={{
            textShadow: [
              '0 5px 15px rgba(255, 215, 0, 0.5)',
              '0 10px 30px rgba(255, 107, 157, 0.6)',
              '0 5px 15px rgba(255, 215, 0, 0.5)',
            ],
          }}
        >
          Ton prince 👑
        </motion.p>
        
        <motion.p 
          className="font-[family-name:var(--font-inter)] text-gray-600 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {currentYear}
        </motion.p>

        {/* Étoiles scintillantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#FFD700] rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </footer>
  );
}
