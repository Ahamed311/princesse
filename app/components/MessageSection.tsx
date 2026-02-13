'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const paragraphs = [
  {
    text: "Ça fait une semaine qu'on discute, et je dois t'avouer quelque chose : tu m'intrigues vraiment.",
    highlight: ["intrigues"]
  },
  {
    text: "Chaque conversation avec toi me donne envie d'en savoir plus. Tu as cette façon d'être qui rend tout naturel, fluide.",
    highlight: ["naturel", "fluide"]
  },
  {
    text: "Je sais qu'on se connaît depuis peu, mais j'apprécie vraiment nos échanges. Tu es différente, et ça me plaît.",
    highlight: ["apprécie", "différente"]
  },
  {
    text: "J'ai créé ce site pour te montrer que tu n'es pas juste une personne parmi d'autres. Tu comptes.",
    highlight: ["comptes"]
  },
  {
    text: "J'aimerais qu'on continue à se découvrir, à partager, à construire quelque chose de sincère ensemble.",
    highlight: ["sincère", "ensemble"]
  }
];

function Paragraph({ paragraph, index }: { paragraph: typeof paragraphs[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6 sm:mb-8"
    >
      {paragraph.text.split(' ').map((word, i) => {
        const isHighlight = paragraph.highlight.some(h => 
          word.toLowerCase().includes(h.toLowerCase())
        );
        return (
          <span
            key={i}
            className={isHighlight ? 'text-gradient font-bold text-lg sm:text-xl md:text-2xl' : ''}
          >
            {word}{' '}
          </span>
        );
      })}
    </motion.p>
  );
}

export default function MessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 md:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
        className="glass-effect rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden"
      >
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="font-italiana text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 text-gradient"
        >
          Ce que je veux te dire
        </motion.h2>

        <div className="relative z-10">
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index} paragraph={paragraph} index={index} />
          ))}
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5 }}
          className="text-right mt-8 sm:mt-12"
        >
          <p className="font-italiana text-xl sm:text-2xl md:text-3xl italic text-gradient">
            Avec sincérité 💫
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
