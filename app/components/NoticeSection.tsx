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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-16 md:mb-24"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Vidéo optimisée */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-lg relative"
        >
          {/* Bordure animée simplifiée */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-[#FF6B9D] via-[#9B59B6] to-[#FFD700] rounded-3xl opacity-60 blur-lg"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <video
              src={notice.video}
              className="w-full h-64 sm:h-80 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            
            {/* Icône */}
            <motion.div
              className="absolute top-4 right-4 text-4xl sm:text-5xl filter drop-shadow-lg"
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
          </div>
        </motion.div>
        
        {/* Texte optimisé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="text-center max-w-2xl px-4"
        >
          <div className="glass-effect rounded-3xl p-6 sm:p-10">
            <motion.h3 
              className="font-italiana text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-3d-gold"
              style={{ color: '#8B1538' }}
            >
              {notice.title}
            </motion.h3>
            
            <p className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {notice.text}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function NoticeSection() {
  return (
    <section id="decouvrir" className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24"
      >
        <motion.h2
          className="font-italiana text-4xl sm:text-5xl md:text-7xl font-bold text-neon mb-4"
          style={{ color: '#8B1538' }}
        >
          Ce que j'ai remarqué
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-inter)] text-lg sm:text-xl text-gradient font-semibold italic"
        >
          En seulement une semaine... ✨
        </motion.p>
      </motion.div>
      
      {notices.map((notice, index) => (
        <NoticeCard key={index} notice={notice} index={index} />
      ))}
    </section>
  );
}
