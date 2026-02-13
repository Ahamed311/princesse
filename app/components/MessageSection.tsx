'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const paragraphs = [
  "Je ne sais pas exactement comment dire ça, mais depuis qu'on s'est rencontrés, quelque chose a changé.",
  "Tu as cette façon d'être qui me donne envie de te connaître davantage, de découvrir qui tu es vraiment.",
  "Je ne cherche pas à impressionner ou à jouer un rôle. Je veux juste être honnête avec toi.",
  "Ce site, c'est ma façon de te montrer que tu comptes, que je prends ça au sérieux.",
  "J'aimerais qu'on construise quelque chose de vrai ensemble, quelque chose qui a du sens."
];

function Paragraph({ text, index }: { text: string, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="font-[family-name:var(--font-inter)] text-xl md:text-2xl text-gray-800 leading-relaxed mb-8"
    >
      {text.split(' ').map((word, i) => {
        const isKeyword = ['sérieux', 'vrai', 'honnête', 'comptes'].some(k => word.toLowerCase().includes(k.toLowerCase()));
        return (
          <span key={i} className={isKeyword ? 'text-[#5E0F1B] font-semibold' : ''}>
            {word}{' '}
          </span>
        );
      })}
    </motion.p>
  );
}

export default function MessageSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-xl"
      >
        {paragraphs.map((text, index) => (
          <Paragraph key={index} text={text} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
