'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-center text-[#5E0F1B] mb-16"
      >
        Nos moments
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#B08968] to-[#5E0F1B] flex items-center justify-center">
            <p className="text-white font-[family-name:var(--font-inter)] text-lg">
              [Ajoute ta grande photo ici]
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#5E0F1B] to-[#B08968] flex items-center justify-center">
            <p className="text-white font-[family-name:var(--font-inter)] text-lg">
              [Photo 2]
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#B08968] to-[#5E0F1B] flex items-center justify-center">
            <p className="text-white font-[family-name:var(--font-inter)] text-lg">
              [Photo 3]
            </p>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#5E0F1B] mb-6 text-center">
          Quelques souvenirs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <video
            src="/video/videos4.mp4.mp4"
            className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            controls
            playsInline
          />
          <video
            src="/video/videos1.mp4.mp4"
            className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            controls
            playsInline
          />
        </div>
      </motion.div>
    </section>
  );
}
