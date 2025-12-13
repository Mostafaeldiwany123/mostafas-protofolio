import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const items = [
  {
    title: "Slicy Dashboard",
    description: "My flagship **AI website builder**, capable of generating full working web apps. Clean, intuitive, and powerful.",
    src: "/images/slicy-dashboard.png",
    color: "#0f0f0f",
    link: "https://slicy-demo.netlify.app/"
  },
  {
    title: "Edited with EditMe",
    description: "Showcasing the power of **EditMe**: instant, smart visual transformations powered by AI.",
    src: "/images/editme-creation.png",
    color: "#0f0f0f",
    link: "https://editme-dev.netlify.app/"
  },
  {
    title: "Cubing Competition",
    description: "Taking 3rd place in a cubing competition. Problem-solving is built into my DNA.",
    src: "/images/cubing-3rd-place.png",
    color: "#0a0a0a"
  },
  {
    title: "#1 Speedcubing OH",
    description: "Number 1 Egyptian Speedcubing Record Holder (One-Handed).",
    src: "/images/speedcubing-oh-record.png",
    color: "#0a0a0a"
  }
];

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  link?: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, title, description, src, color, link, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, backgroundColor: color, top: `calc(10vh + ${i * 20}px)` }}
        className="flex flex-col relative w-[95vw] md:w-[70vw] aspect-video rounded-[2rem] border border-white/10 overflow-hidden origin-top shadow-2xl"
      >
        {/* Image Section - Full Size */}
        <div className="w-full h-full relative overflow-hidden bg-black">
          <motion.div style={{ scale: imageScale }} className="w-full h-full flex items-center justify-center">
            <img
              src={src}
              alt={title}
              className="w-full h-full object-contain md:object-cover"
            />
          </motion.div>

          {/* Gradient Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Content Section - Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 z-10">
          <div>
            {link ? (
              <a href={link} target="_blank" rel="noreferrer" className="text-xl md:text-5xl font-display font-bold text-white mb-1 md:mb-3 hover:text-theme transition-colors">{title}</a>
            ) : (
              <h2 className="text-xl md:text-5xl font-display font-bold text-white mb-1 md:mb-3">{title}</h2>
            )}
            <p className="hidden md:block text-white/80 text-lg max-w-xl leading-relaxed">
              {description.split('**').map((part, i) => i % 2 === 1 ? <span key={i} className="text-theme font-semibold">{part}</span> : part)}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-6xl font-display font-bold text-white/10">0{i + 1}</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Gallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative bg-black pt-32 pb-32">
      <div className="text-center mb-24 px-6 relative z-10">
        <span className="text-theme font-mono uppercase tracking-widest text-sm bg-theme/10 px-3 py-1 rounded-full border border-theme/20">Lifestyle</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold mt-6 text-white">Life & Craft</h2>
      </div>

      {items.map((item, i) => {
        const targetScale = 1 - ((items.length - i) * 0.05);
        return <Card key={i} i={i} {...item} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
      })}
    </section>
  )
}
export default Gallery;