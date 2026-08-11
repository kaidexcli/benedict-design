import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; // <-- Import the sharp SVG arrow
import { portfolioData } from "@/data";
import TechStack from "./TechStack"; 

export default function MainContent() {
  return (
    <section className="space-y-12 flex-1 w-full max-w-3xl">
      {/* Header & Bio */}
      <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
        <div className="relative w-28 h-28 shrink-0 border border-neutral-200 rounded-sm overflow-hidden mt-1">
             <Image src="/benedict.jpg" alt="Avatar" fill className="object-cover grayscale" />
        </div>
        
        <div className="space-y-3">
            <h1 className="text-2xl font-medium tracking-tight text-neutral-900">{portfolioData.name}</h1>
            
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md text-balance">
                {portfolioData.intro}
            </p>
            
            <div className="flex gap-4 text-xs font-mono text-neutral-400 pt-2">
                {portfolioData.socials.map(social => (
                    <a key={social.name} href={social.url} className="hover:text-neutral-900 transition-colors">
                        {social.name} /
                    </a>
                ))}
            </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-neutral-100 py-8">
        {portfolioData.stats.map((stat, i) => (
           <div key={i} className="space-y-1 border-l border-neutral-100 pl-4 first:border-0 first:pl-0">
               {/* Wrapped the value and arrow in a flex container for perfect alignment */}
               <div className="text-lg font-medium text-neutral-900 flex items-center gap-1">
                   {stat.value} 
                   <ArrowUpRight className="w-4 h-4 text-neutral-400 shrink-0" strokeWidth={2.5} />
               </div>
               <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{stat.label}</div>
           </div>
        ))}
      </div>

      {/* Details Sections */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-12">
            <div className="space-y-4">
                <h3 className="text-xs font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-100 pb-2">Tech Stack</h3>
                <TechStack categories={portfolioData.techStackCategories} />
            </div>

            <div className="space-y-4">
                <h3 className="text-xs font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-100 pb-2">Achievements</h3>
                <ul className="space-y-3">
                    {portfolioData.achievements.map((ach, i) => (
                        <li key={i} className="text-sm text-neutral-700 leading-relaxed">{ach}</li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
            <h3 className="text-xs font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-100 pb-2">Experience</h3>
            <div className="space-y-6">
                {portfolioData.experiences.map((exp, i) => (
                    <div key={i} className="space-y-1">
                        <div className="flex justify-between items-baseline">
                            <h4 className="text-sm font-medium text-neutral-900">{exp.role}</h4>
                            <span className="text-xs font-mono text-neutral-400 shrink-0 ml-4">{exp.period}</span>
                        </div>
                        <p className="text-sm text-neutral-600 leading-relaxed">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}