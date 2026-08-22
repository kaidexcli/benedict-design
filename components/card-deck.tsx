"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type CardItem = {
  id: string;
  title: string;
  tag: string;
  description: string;
  image?: string; 
};

type CardDeckProps = {
  title: string;
  items?: CardItem[];
  id?: string;
};

export default function CardDeck({ title, items = [], id }: CardDeckProps) {
  const [cards, setCards] = useState(items);
  const [isFlipping, setIsFlipping] = useState(false);

  if (cards.length === 0) return null;

  const moveCard = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    
    setTimeout(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const first = newArr.shift();
        if (first) newArr.push(first);
        return newArr;
      });
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div id={id} className="w-full flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex justify-between items-end mb-10 border-b border-neutral-100 pb-2">
         <h3 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{title}</h3>
         <p className="text-[9px] text-neutral-400">Click to swap</p>
      </div>

      {/* Fanned Card Container */}
      <div className="relative w-full max-w-70 h-90 mt-4 flex justify-center">
        {cards.map((item, index) => {
          const isTop = index === 0;

          let rotateZ = 0;
          let x = 0;
          let y = 0;
          let opacity = 1;
          const zIndex = cards.length - index;

          if (index === 1) {
            rotateZ = 8;
            x = 35;
            y = 15;
          } else if (index === 2) {
            rotateZ = -8;
            x = -35;
            y = 15;
          } else if (index > 2) {
            rotateZ = 0;
            x = 0;
            y = 0;
            opacity = 0;
          }

          return (
            <motion.div
              key={item.id}
              layout
              onClick={isTop ? moveCard : undefined}
              initial={false}
              animate={{
                y: isTop && isFlipping ? -150 : y,
                x: isTop && isFlipping ? 150 : x,
                rotateZ: isTop && isFlipping ? 25 : rotateZ,
                zIndex: zIndex,
                opacity: isTop && isFlipping ? 0 : opacity,
                scale: index > 0 ? 0.95 : 1, 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
              className={`absolute top-0 w-full h-85 rounded-2xl border border-neutral-200/30 bg-neutral-900 shadow-2xl shadow-neutral-300/40
                ${isTop ? "cursor-pointer pointer-events-auto" : "pointer-events-none"}
              `}
            >
              {/*  BACKGROUND IMAGE & OVERLAY  */}
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden z-0">
                <img 
                  // 2. Added a fallback here! If item.image is missing, it uses your profile pic.
                  src={item.image || "/benedict.jpg"} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-90 grayscale mix-blend-overlay transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/50 to-black/95" />
              </div>

              {/*  CARD CONTENT  */}
              <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between">
                  {/* Top: Pill Tag */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full flex items-center shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="mb-2">
                    <h3 className="text-xl font-medium text-white tracking-tight leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 font-light">
                      {item.description}
                    </p>
                  </div>
              </div>
              
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
