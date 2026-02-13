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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -10 : 10 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -10 : 10 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="mb-12 relative"
    >
      {/* Numéro décoratif */}
      <motion.div
        className="absolute -left-16 top-0 text-8xl font-bold opacity-5 text-[#FF6B9D]"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        {index + 1}
      </motion.div>

      <motion.p
        className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl text-gray-800 leading-relaxed relative z-10"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        {paragraph.text.split(' ').map((word, i) => {
          const isHighlight = paragraph.highlight.some(h => 
            word.toLowerCase().includes(h.toLowerCase())
          );
          return (
            <motion.span
              key={i}
              className={isHighlight ? 'text-gradient font-bold text-3xl md:text-4xl' : ''}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.2 + i * 0.03 }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.p>

      {/* Ligne décorative */}
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-[#FF6B9D] to-transparent mt-6 rounded-full"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
}

export default function MessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-40 px-6 max-w-5xl mx-auto relative">
      {/* Effet de fond animé */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-[#9B59B6]/10 to-[#FF6B9D]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: ['-50%', '-40%', '-50%'],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1 }}
        className="glass-effect rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
      >
        {/* Effet shimmer */}
        <motion.div
          className="absolute inset-0 shimmer"
          animate={{
            backgroundPosition: ['-1000px 0', '1000px 0'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Titre de la section */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-center mb-16 text-gradient"
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
          transition={{ delay: 2 }}
          className="text-right mt-16"
        >
          <p className="font-[family-name:var(--font-playfair)] text-3xl italic text-gradient">
            Avec sincérité 💫
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
