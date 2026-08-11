"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  tag: string;
  description: string;
};

export default function ProjectDeck({ projects }: { projects: Project[] }) {
  const [cards, setCards] = useState(projects);
  const [isFlipping, setIsFlipping] = useState(false);

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
    <section className="w-full max-w-md mx-auto pt-16 pb-24">
      <div className="flex justify-between items-end mb-8 border-b border-neutral-100 pb-2">
         <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Selected Works</h3>
         <p className="text-[10px] text-neutral-400">Click to swap</p>
      </div>

      <div className="relative w-full max-w-[320px] h-100 mx-auto mt-12">
        {cards.map((project, index) => {
          const isTop = index === 0;
          const offset = index * 12;
          const scale = 1 - index * 0.04;

          if (index > 3) return null;

          return (
            <motion.div
              key={project.id}
              layout
              onClick={isTop ? moveCard : undefined}
              initial={false}
              animate={{
                y: isTop && isFlipping ? -120 : offset,
                x: isTop && isFlipping ? 180 : 0,
                rotateZ: isTop && isFlipping ? 12 : 0,
                scale: scale,
                zIndex: cards.length - index,
                opacity: isTop && isFlipping ? 0 : 1 - index * 0.15,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.8 }}
              className={`absolute top-0 left-0 w-full h-full rounded-xl border border-neutral-200 bg-white p-8 flex flex-col justify-center shadow-lg transition-colors hover:border-neutral-300
                ${isTop ? "cursor-pointer pointer-events-auto" : "pointer-events-none"}
              `}
            >
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 mb-4 block">
                {project.tag}
              </span>
              <h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {project.description}
              </p>
              
              <div className="absolute top-6 right-6 w-4 h-4 border border-neutral-200 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-neutral-300" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}