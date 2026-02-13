'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 sm:py-16 px-4 text-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          className="inline-block text-5xl sm:text-6xl mb-6"
        >
          ❤️
        </motion.div>
        
        <motion.p 
          className="font-italiana text-3xl sm:text-4xl md:text-5xl text-3d-gold font-bold mb-3"
          style={{ color: '#8B1538' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Ton prince 👑
        </motion.p>
        
        <motion.p 
          className="font-[family-name:var(--font-inter)] text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {currentYear}
        </motion.p>
      </motion.div>
    </footer>
  );
}
