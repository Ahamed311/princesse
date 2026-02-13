'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block text-4xl mb-4"
        >
          ❤️
        </motion.div>
        
        <p className="font-[family-name:var(--font-inter)] text-gray-600 text-sm">
          Fait avec amour • {currentYear}
        </p>
      </motion.div>
    </footer>
  );
}
