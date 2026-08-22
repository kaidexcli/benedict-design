"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the intro after the animation completes
    const timer = setTimeout(() => {
      setShow(false);
    }, 5500); 
    return () => clearTimeout(timer);
  }, []);

  // Split text for stagger effect
  const text = "Benedict Fusin".split(" ");

  // Pseudo-random generator for particle effect based on character indices
  const getParticle = (i: number, j: number) => {
    const xOffset = (Math.sin(i * 7 + j * 13) * 50) + 100;
    const yOffset = (Math.cos(i * 11 + j * 17) * 50) - 100;
    const rotation = Math.sin(i * j) * 90;
    return { x: xOffset, y: yOffset, rotation };
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-container"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            opacity: 0, 
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.8 } 
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-8">
            {/* Rhomboid Container */}
            <div className="flex items-center justify-center relative">
              {/* Left Rhomboid (Higher) */}
              <motion.div
                initial={{ x: -100, y: 100, opacity: 0, rotate: -5, scale: 0.8 }}
                animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                exit={{ filter: "blur(20px)", opacity: 0, scale: 0.9, transition: { duration: 0.8, ease: "easeIn" } }}
                transition={{ 
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  delay: 0.1 
                }}
                className="w-40 h-64 md:w-56 md:h-96 overflow-hidden relative shadow-2xl -translate-y-4 md:-translate-y-8 z-10"
                style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
              >
                <motion.div
                  initial={{ scale: 1.6 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="absolute top-4 left-0 md:top-8 md:left-0 w-[288px] h-72 md:w-98 md:h-112 max-w-none origin-center"
                >
                  <Image 
                    src="/benedict.jpg" 
                    alt="Benedict Window 1" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay"></div>
                </motion.div>
              </motion.div>
              
              {/* Right Rhomboid (Lower) */}
              <motion.div
                initial={{ x: 100, y: -100, opacity: 0, rotate: 5, scale: 0.8 }}
                animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                exit={{ filter: "blur(20px)", opacity: 0, scale: 0.9, transition: { duration: 0.8, ease: "easeIn", delay: 0.1 } }}
                transition={{ 
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  delay: 0.3 
                }}
                className="w-40 h-64 md:w-56 md:h-96 overflow-hidden relative shadow-2xl translate-y-4 md:translate-y-8 z-20 -ml-8 md:-ml-14"
                style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
              >
                <motion.div
                  initial={{ scale: 1.6 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
                  className="absolute -top-4 -left-32 md:-top-8 md:-left-42 w-[288px] h-72 md:w-98 md:h-112 max-w-none origin-center"
                >
                  <Image 
                    src="/benedict.jpg" 
                    alt="Benedict Window 2" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Text */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 md:gap-4 z-30 drop-shadow-sm mt-4 md:mt-0"
            >
              {text.map((word, i) => (
                <motion.div
                  key={i}
                  className={`text-3xl md:text-5xl lg:text-6xl uppercase tracking-widest text-neutral-900 flex drop-shadow-xl ${spaceGrotesk.className}`}
                >
                  {word.split("").map((char, j) => {
                    const particle = getParticle(i, j);
                    return (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, filter: "blur(10px)", x: -particle.x, y: -particle.y, scale: 0, rotate: -particle.rotation }}
                        animate={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1, rotate: 0 }}
                        exit={{ 
                          opacity: 0, 
                          filter: "blur(12px)", 
                          x: particle.x, 
                          y: particle.y, 
                          scale: 0.2, 
                          rotate: particle.rotation,
                          transition: { 
                            duration: 1.5, 
                            ease: "easeOut",
                            delay: (i * 5 + j) * 0.05
                          } 
                        }}
                        transition={{ 
                          type: "spring",
                          stiffness: 60,
                          damping: 12,
                          delay: 0.8 + (i * 5 + j) * 0.06,
                        }}
                        className="inline-block origin-center"
                        style={{ paddingRight: char === ' ' ? '1rem' : '0' }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
