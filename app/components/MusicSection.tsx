'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section ref={ref} className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#5E0F1B] mb-8">
          Une chanson pour toi
        </h2>
        
        <p className="font-[family-name:var(--font-inter)] text-lg text-gray-700 mb-8">
          Cette musique me fait penser à toi
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          {/* Spotify Embed - Remplace avec ton lien Spotify */}
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mx-auto"
          ></iframe>
          
          <p className="font-[family-name:var(--font-inter)] text-sm text-gray-600 mt-4">
            Remplace ce lien Spotify avec ta chanson préférée
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
