"use client";

import { useEffect, useState } from "react";

export default function GithubActivity() {
  const [contributions, setContributions] = useState<number[]>([]);

  useEffect(() => {
    // Exact column-by-column mapping of the 423-contribution block from image_8dd0db.png
    // Rows: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    // Values: 0 (empty), 1 (light), 3 (medium-dark), 4 (darkest)
    const activePattern = [
      [1, 0, 3, 1, 1, 1, 0], // Col 1 (Mid June)
      [1, 0, 0, 1, 0, 0, 0], // Col 2
      [0, 1, 1, 1, 1, 1, 1], // Col 3
      [0, 2, 2, 2, 2, 2, 1], // Col 4 (Late June / Early July)
      [3, 1, 1, 1, 0, 0, 2], // Col 5 (Mid July)
      [1, 1, 1, 0, 1, 1, 3], // Col 6
      [3, 3, 4, 0, 0, 0, 3], // Col 7 (Early August - dark spike)
      [1, 2, 2, 2, 0, 0, 0], // Col 8
      [3, 1, 1, 3, 1, 1, 1], // Col 9
      [0, 0, 0, 0, 0, 0, 0]  // Col 10 (Trailing blocks)
    ];

    const days = [];
    const startWeek = 22; // Locks the sequence directly under the "Jun" header

    for (let i = 0; i < 364; i++) {
      const week = Math.floor(i / 7);
      const dayOfWeek = i % 7;
      
      if (week >= startWeek && week < startWeek + activePattern.length) {
        days.push(activePattern[week - startWeek][dayOfWeek]);
      } else {
        days.push(0);
      }
    }
    setContributions(days);
  }, []);

  const getThemeColor = (level: number) => {
    switch (level) {
      case 1: return "bg-neutral-300";
      case 2: return "bg-neutral-400";
      case 3: return "bg-neutral-600";
      case 4: return "bg-neutral-800";
      default: return "bg-neutral-100";
    }
  };

  return (
    <div className="w-full border-y border-neutral-100 py-8 mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-900"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <h3 className="text-sm font-medium text-neutral-900">442 contributions in 2026</h3>
        </div>
        <a href="https://github.com/kaidexcli" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">
          View GitHub ↗
        </a>
      </div>

      <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-175 flex gap-2">
          <div className="flex flex-col justify-between text-[9px] font-mono text-neutral-400 py-1 h-26">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>
          
          <div className="grid grid-rows-7 grid-flow-col gap-1 flex-1 h-26">
            {contributions.map((level, i) => (
              <div 
                key={i} 
                className={`w-2.5 h-2.5 rounded-xs transition-all duration-300 hover:scale-125 hover:ring-1 hover:ring-neutral-400 cursor-crosshair ${getThemeColor(level)}`}
                title={`Contribution level: ${level}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-end gap-2 mt-2 text-[10px] font-mono text-neutral-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-xs bg-neutral-100" />
          <div className="w-2.5 h-2.5 rounded-xs bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-xs bg-neutral-400" />
          <div className="w-2.5 h-2.5 rounded-xs bg-neutral-600" />
          <div className="w-2.5 h-2.5 rounded-xs bg-neutral-800" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}