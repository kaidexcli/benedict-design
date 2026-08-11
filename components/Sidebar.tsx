"use client";

import React, { useState } from "react";
import { Book, Monitor, Box, PanelLeftClose, PanelRightClose } from "lucide-react";
import { portfolioData } from "@/data";

const iconMap = {
  book: Book,
  monitor: Monitor,
  box: Box,
};

export default function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside className={`shrink-0 transition-all duration-300 ease-in-out border-r border-neutral-100 ${isMinimized ? 'w-20 pr-0' : 'w-64 pr-6'} space-y-12 h-full hidden md:block overflow-hidden`}>
      <div className={`flex items-center ${isMinimized ? 'justify-center mt-2' : 'justify-between'}`}>
        {!isMinimized && <div className="text-lg font-semibold tracking-tight truncate">{portfolioData.name}</div>}
        <button 
          onClick={() => setIsMinimized(!isMinimized)} 
          className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-50 shrink-0"
          title="Toggle Sidebar"
        >
          {isMinimized ? <PanelRightClose className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </button>
      </div>
      
      <nav className="space-y-4">
        {portfolioData.sidebarMenu.map((item) => (
          <a href="#" key={item.name} className={`flex items-center text-neutral-500 hover:text-neutral-900 text-sm ${isMinimized ? 'justify-center' : 'gap-3'}`}>
            {item.icon && React.createElement(iconMap[item.icon as keyof typeof iconMap], { className: "w-4 h-4 shrink-0" })}
            {!isMinimized && <span className="truncate">{item.name}</span>}
          </a>
        ))}
      </nav>
      
      {!isMinimized && (
        <div className="space-y-6 border-t border-neutral-100 pt-6">
          <p className="text-xs text-neutral-400 leading-relaxed uppercase tracking-widest">
            Contact
          </p>
          <a href={`mailto:${portfolioData.contactInfo}`} className="block text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors truncate">
            {portfolioData.contactInfo}
          </a>
        </div>
      )}
    </aside>
  );
}