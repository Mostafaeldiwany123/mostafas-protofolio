import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
    </div>

    {/* Animated Blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
    <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
  </div>
);

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!hasMoved) setHasMoved(true);
    };
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Add hover listeners to links/buttons
    const handleLinkHover = () => setLinkHover(true);
    const handleLinkLeave = () => setLinkHover(false);

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [hasMoved]);

  if (isTouch || !hasMoved) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          x: position.x - 8,
          y: position.y - 8,
          scale: clicked ? 0.8 : linkHover ? 1.5 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9998]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: linkHover ? 0 : 1,
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 1.2 : linkHover ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
};
