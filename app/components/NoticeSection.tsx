'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const notices = [
  {
    title: "Ton énergie",
    text: "Dès la première conversation, j'ai senti cette connexion. Tu as cette façon de parler qui rend chaque échange intéressant.",
    video: "/video/videos1.mp4.mp4",
    icon: "✨",
    position: "left"
  },
  {
    title: "Ta personnalité",
    text: "En une semaine, j'ai découvert quelqu'un de vrai, de spontané. Tu ne joues pas de rôle, et c'est exactement ce qui me plaît.",
    video: "/video/videos2.mp4.mp4",
    icon: "💫",
    position: "right"
  },
  {
    title: "Cette complicité",
    text: "On se connaît à peine, mais j'ai l'impression qu'on se comprend déjà. Nos discussions me donnent envie d'en savoir plus sur toi.",
    video: "/video/videos3.mp4.mp4",
    icon: "🌟",
    position: "left"
  }
];

function NoticeCard({ notice, index }: { notice: typeof notices[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = notice.position === "left";
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -200 : 200, rotateY: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: isLeft ? -200 : 200, rotateY: isLeft ? -30 : 30 }}
      transition={{ duration: 1.2, delay: index * 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="relative mb-40"
      style={{ perspective: '2000px' }}
    >
      {/* Effet de halo ultra */}
      <motion.div
        className="absolute inset-0 blur-[100px] opacity-30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: index * 0.5,
        }}
        style={{
          background: index % 2 === 0 
            ? 'radial-gradient(circle, #FF6B9D, #FFD700, transparent)' 
            : 'radial-gradient(circle, #9B59B6, #FF6B9D, transparent)',
        }}
      />

      <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 relative z-10`}>
        {/* Vidéo avec effets 3D spectaculaires */}
        <motion.div
          whileHover={{ 
            scale: 1.1, 
            rotateY: isLeft ? 15 : -15,
            z: 100,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 relative group"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Bordure animée ultra */}
          <motion.div
            className="absolute -inset-2 rounded-[3rem] opacity-90 blur-2xl"
            animate={{
              background: [
                'linear-gradient(45deg, #FF6B9D, #FFD700, #9B59B6)',
                'linear-gradient(90deg, #9B59B6, #FF6B9D, #FFD700)',
                'linear-gradient(135deg, #FFD700, #9B59B6, #FF6B9D)',
                'linear-gradient(180deg, #FF6B9D, #FFD700, #9B59B6)',
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Cadre doré animé */}
          <motion.div
            className="absolute -inset-3 border-4 border-[#FFD700] rounded-[3rem] opacity-60"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          
          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl">
            <video
              src={notice.video}
              className="relative w-full h-96 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            
            {/* Icône flottante géante */}
            <motion.div
              className="absolute top-8 right-8 text-7xl filter drop-shadow-2xl"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.3, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              {notice.icon}
            </motion.div>

            {/* Effet shimmer ultra */}
            <motion.div
              className="absolute inset-0 shimmer-ultra"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.6), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['-200% 0', '200% 0'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </div>
        </motion.div>
        
        {/* Texte avec effets spectaculaires */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: index * 0.4 + 0.6, duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left relative"
        >
          {/* Fond glass ultra premium */}
          <div className="glass-effect rounded-[2.5rem] p-12 relative overflow-hidden">
            {/* Effet de brillance dorée */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, #FFD700, transparent)',
                  'radial-gradient(circle at 100% 100%, #FFD700, transparent)',
                  'radial-gradient(circle at 0% 100%, #FFD700, transparent)',
                  'radial-gradient(circle at 100% 0%, #FFD700, transparent)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />

            <motion.h3 
              className="font-italiana text-6xl md:text-7xl font-bold mb-8 text-3d-gold relative z-10"
              style={{
                color: '#8B1538',
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{
                textShadow: [
                  '0 5px 10px rgba(255, 107, 157, 0.4)',
                  '0 10px 20px rgba(255, 215, 0, 0.6)',
                  '0 5px 10px rgba(255, 107, 157, 0.4)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              {notice.title}
            </motion.h3>
            
            <motion.p 
              className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl text-gray-800 leading-relaxed relative z-10 font-light"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              {notice.text.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.4 + 0.8 + i * 0.05 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function NoticeSection() {
  return (
    <section id="decouvrir" className="py-40 px-6 max-w-7xl mx-auto relative">
      {/* Effets de fond multiples */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FF6B9D]/20 to-[#FFD700]/20 rounded-full blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#9B59B6]/20 to-[#FF6B9D]/20 rounded-full blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-center mb-40 relative z-10"
      >
        <motion.h2
          className="font-italiana text-7xl md:text-9xl font-bold text-neon mb-8"
          style={{ color: '#8B1538' }}
        >
          Ce que j'ai remarqué
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-[family-name:var(--font-inter)] text-3xl text-gradient font-semibold italic"
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
