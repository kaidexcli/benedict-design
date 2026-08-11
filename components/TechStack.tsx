"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type CategoryProps = {
  category: string;
  items: string[];
};

function CategoryGroup({ category, items }: CategoryProps) {
  // Keeping them closed by default keeps the UI incredibly clean
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 last:border-0 py-3 first:pt-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full text-left group"
      >
        <h4 className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest group-hover:text-neutral-900 transition-colors">
          {category}
        </h4>
        <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
          {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>
      
      {/* Smooth height transitions can be tricky in standard Tailwind, 
          so we use conditional rendering to keep it snappy and bug-free */}
      {isOpen && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {items.map((item, i) => (
            <li 
              key={i} 
              className="text-[11px] text-neutral-600 border border-neutral-200 px-2 py-1 rounded-sm bg-neutral-50/50"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function TechStack({ categories }: { categories: CategoryProps[] }) {
  return (
    <div className="space-y-1">
      {categories.map((cat, i) => (
        <CategoryGroup key={i} category={cat.category} items={cat.items} />
      ))}
    </div>
  );
}