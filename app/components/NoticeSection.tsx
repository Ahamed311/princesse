'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const notices = [
  {
    title: "Ton énergie",
    text: "Dès la première conversation, j'ai senti cette connexion. Tu as cette façon de parler qui rend chaque échange intéressant.",
    video: "/video/videos1.mp4.mp4",
    icon: "✨"
  },
  {
    title: "Ta personnalité",
    text: "En une semaine, j'ai découvert quelqu'un de vrai, de spontané. Tu ne joues pas de rôle, et c'est exactement ce qui me plaît.",
    video: "/video/videos2.mp4.mp4",
    icon: "💫"
  },
  {
    title: "Cette complicité",
    text: "On se connaît à peine, mais j'ai l'impression qu'on se comprend déjà. Nos discussions me donnent envie d'en savoir plus sur toi.",
    video: "/video/videos3.mp4.mp4",
    icon: "🌟"
  }
];

function NoticeCard({ notice, index }: { notice: typeof notices[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: -15 }}
      transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
      className="relative mb-32"
    >
      {/* Effet de halo */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.5,
        }}
        style={{
          background: index % 2 === 0 
            ? 'radial-gradient(circle, #FF6B9D, transparent)' 
            : 'radial-gradient(circle, #9B59B6, transparent)',
        }}
      />

      <div className="flex flex-col items-center gap-8 relative z-10">
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg relative group"
        >
          {/* Bordure animée */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-[#FF6B9D] via-[#9B59B6] to-[#FF6B9D] rounded-[2rem] opacity-75 blur-lg"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          />
          
          <video
            src={notice.video}
            className="relative w-full h-80 object-cover rounded-[2rem] shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
          />
          
          {/* Overlay avec icône */}
          <motion.div
            className="absolute top-4 right-4 text-5xl"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {notice.icon}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.3 + 0.4 }}
          className="text-center max-w-2xl px-6 glass-effect rounded-3xl p-10"
        >
          <motion.h3 
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-6 text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            {notice.title}
          </motion.h3>
          <p className="font-[family-name:var(--font-inter)] text-xl md:text-2xl text-gray-700 leading-relaxed">
            {notice.text}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function NoticeSection() {
  return (
    <section id="decouvrir" className="py-40 px-6 max-w-6xl mx-auto relative">
      {/* Effet de fond animé */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-[#FF6B9D]/10 to-[#9B59B6]/10 rounded-full blur-3xl"
        animate={{
          x: ['-50%', '-40%', '-50%'],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-32 relative z-10"
      >
        <motion.h2
          className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-bold text-gradient mb-6"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Ce que j'ai remarqué
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-inter)] text-xl text-gray-600 italic"
        >
          En seulement une semaine...
        </motion.p>
      </motion.div>
      
      {notices.map((notice, index) => (
        <NoticeCard key={index} notice={notice} index={index} />
      ))}
    </section>
  );
}
