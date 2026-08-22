
"use client";

import { useState, useMemo } from "react";
import { Plus, Minus, Search, X } from "lucide-react";

type CategoryProps = {
  category: string;
  items: string[];
};

interface CategoryGroupProps extends CategoryProps {
  searchTerm: string;
}

function CategoryGroup({ category, items, searchTerm }: CategoryGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Filter items based on the search term
  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // If a search is happening and there are matching items, expand the category automatically
  const shouldBeOpen = searchTerm ? filteredItems.length > 0 : isOpen;

  if (searchTerm && filteredItems.length === 0 && !category.toLowerCase().includes(searchTerm.toLowerCase())) {
    return null; // Hide categories with absolutely zero matches
  }

  return (
    <div className="border-b border-indigo-100/60 last:border-0 py-3.5 first:pt-0 transition-all duration-300">
      <button 
        onClick={() => !searchTerm && setIsOpen(!isOpen)} 
        disabled={!!searchTerm} // Lock toggle during active search to prevent confusing states
        className={`flex items-center justify-between w-full text-left group ${searchTerm ? "cursor-default" : "cursor-pointer"}`}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-widest group-hover:text-indigo-950 transition-colors">
            {category}
          </h4>
          {searchTerm && filteredItems.length > 0 && (
            <span className="text-[9px] font-mono bg-indigo-100/50 text-slate-500 px-1.5 py-0.5 rounded-full font-bold">
              {filteredItems.length} match{filteredItems.length > 1 ? "es" : ""}
            </span>
          )}
        </div>
        {!searchTerm && (
          <span className="text-indigo-400 group-hover:text-indigo-950 transition-colors">
            {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
          </span>
        )}
      </button>
      
      {shouldBeOpen && (
        <ul className="mt-3.5 flex flex-wrap gap-2 transition-all duration-200">
          {(searchTerm ? filteredItems : items).map((item, i) => {
            const isMatch = searchTerm && item.toLowerCase().includes(searchTerm.toLowerCase());
            return (
              <li 
                key={i} 
                className={`text-[11px] px-2.5 py-1 rounded border transition-all duration-200 ${
                  isMatch 
                    ? "bg-indigo-600 text-white border-indigo-950 shadow-sm font-semibold scale-105"
                    : "text-slate-600 border-indigo-200/60 bg-white/60 hover:bg-indigo-100/70 hover:border-indigo-300/60"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function TechStack({ categories }: { categories: CategoryProps[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative flex items-center">
        <span className="absolute left-3 text-indigo-400">
          <Search className="w-3.5 h-3.5" />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search technologies (e.g., React, Python, AWS)..."
          className="w-full pl-9 pr-8 py-2 border border-indigo-200/60 rounded-lg text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white transition-all shadow-sm shadow-indigo-100"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 text-indigo-400 hover:text-indigo-950 transition-colors cursor-pointer"
            title="Clear Search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Accordions */}
      <div className="space-y-1 bg-white/30 backdrop-blur-xs p-4 border border-indigo-100/60 rounded-xl shadow-sm shadow-indigo-100">
        {categories.map((cat, i) => (
          <CategoryGroup 
            key={i} 
            category={cat.category} 
            items={cat.items} 
            searchTerm={searchTerm} 
          />
        ))}
      </div>
    </div>
  );
}
