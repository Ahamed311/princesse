'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block text-5xl mb-6"
        >
          ❤️
        </motion.div>
        
        <motion.p 
          className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-gradient font-semibold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Ton prince 👑
        </motion.p>
        
        <p className="font-[family-name:var(--font-inter)] text-gray-600 text-sm">
          {currentYear}
        </p>
      </motion.div>
    </footer>
  );
}
