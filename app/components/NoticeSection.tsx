'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const notices = [
  {
    title: "Ton sourire",
    text: "Chaque fois que tu souris, c'est comme si le monde s'illuminait un peu plus.",
    video: "/video/videos1.mp4.mp4"
  },
  {
    title: "Ta présence",
    text: "Il y a quelque chose de spécial dans ta façon d'être, une énergie qui rend tout plus beau.",
    video: "/video/videos2.mp4.mp4"
  },
  {
    title: "Ton authenticité",
    text: "Tu es toi-même, sans filtre, et c'est exactement ce qui te rend si unique.",
    video: "/video/videos3.mp4.mp4"
  }
];

function NoticeCard({ notice, index }: { notice: typeof notices[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center gap-6 mb-20"
    >
      <motion.div
        className="w-full max-w-md"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <video
          src={notice.video}
          className="w-full h-72 object-cover rounded-3xl shadow-2xl"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
      
      <div className="text-center max-w-xl px-6">
        <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#8B1538] mb-6">
          {notice.title}
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-xl text-gray-700 leading-relaxed">
          {notice.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function NoticeSection() {
  return (
    <section id="decouvrir" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-center text-[#8B1538] mb-24"
      >
        Ce que j'ai remarqué
      </motion.h2>
      
      {notices.map((notice, index) => (
        <NoticeCard key={index} notice={notice} index={index} />
      ))}
    </section>
  );
}
