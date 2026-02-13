'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [text, setText] = useState('');
  const [showHearts, setShowHearts] = useState(false);
  const fullText = "Une semaine... et déjà tant de choses à te dire";
  const router = useRouter();
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowHearts(true);
      }
    }, 60);
    
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    router.push('/message');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 relative overflow-hidden">
      {/* Cœurs flottants qui tombent */}
      {showHearts && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10%',
          }}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{
            y: '120vh',
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          {['💕', '💖', '💗', '💝', '❤️'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}

      {/* Particules dorées */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-3 h-3 rounded-full bg-[#FFD700]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Halo magique derrière le titre */}
        <motion.div
          className="absolute inset-0 blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          style={{
            background: 'radial-gradient(circle, #FF6B9D, #FFD700, #9B59B6)',
          }}
        />

        <motion.h1 
          className="font-italiana text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative"
          style={{ color: '#8B1538' }}
          animate={{
            textShadow: [
              '0 0 20px rgba(255, 107, 157, 0.6)',
              '0 0 40px rgba(255, 215, 0, 0.8)',
              '0 0 20px rgba(255, 107, 157, 0.6)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <span className="text-neon">Princesse</span>
          <motion.span 
            className="text-5xl sm:text-7xl md:text-8xl"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            👑
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="font-[family-name:var(--font-inter)] text-lg sm:text-2xl md:text-3xl text-gray-700 mb-12 md:mb-16 min-h-[2em] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-[#FF6B9D]"
          >
            |
          </motion.span>
        </motion.p>
        
        {/* Bouton SPECTACULAIRE plus gros */}
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block group cursor-pointer"
        >
          {/* Cercles concentriques animés */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-[#FFD700]"
              animate={{
                scale: [1, 2, 2],
                opacity: [0.8, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            />
          ))}
          
          {/* Bordure animée dorée ultra */}
          <motion.div
            className="absolute -inset-2 rounded-full opacity-80 blur-xl"
            animate={{
              background: [
                'linear-gradient(0deg, #FFD700, #FF6B9D, #9B59B6)',
                'linear-gradient(120deg, #FFD700, #FF6B9D, #9B59B6)',
                'linear-gradient(240deg, #FFD700, #FF6B9D, #9B59B6)',
                'linear-gradient(360deg, #FFD700, #FF6B9D, #9B59B6)',
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          
          <div className="relative px-12 sm:px-16 md:px-20 py-5 sm:py-6 md:py-7 bg-gradient-to-r from-[#8B1538] via-[#FF6B9D] to-[#9B59B6] text-white font-[family-name:var(--font-inter)] font-bold text-xl sm:text-2xl md:text-3xl rounded-full shadow-2xl overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Découvrir mon message
              <motion.span
                animate={{ 
                  x: [0, 8, 0],
                  rotate: [0, 20, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl sm:text-3xl"
              >
                ✨
              </motion.span>
            </span>
            
            {/* Effet shimmer ultra */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            {/* Particules dans le bouton */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 2, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.button>

        {/* Texte magique sous le bouton */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 font-[family-name:var(--font-inter)] text-sm sm:text-base text-gray-600 italic"
        >
          Clique pour découvrir quelque chose de spécial... 💫
        </motion.p>
      </motion.div>

      {/* Effet de lumière qui pulse au centre */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.2), transparent)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </section>
  );
}
