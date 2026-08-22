import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; 
import { portfolioData } from "@/data";
import TechStack from "@/components/tech-stack"; 
import GithubActivity from "@/components/github-activity"; 
import CardDeck from "@/components/card-deck"; 

export default function MainContent() {
  return (
    <section className="space-y-12 flex-1 w-full max-w-4xl pb-24">
      {/* Header & Bio */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 lg:gap-16 pt-4">
        {/* Large Rhomboid Picture Frame Design (High, Low, High) */}
        <div className="relative flex items-center shrink-0 mt-4 pl-6">
          {/* Left Rhomboid (High) */}
          <div
            className="w-32 h-48 md:w-40 md:h-60 overflow-hidden relative shadow-xl -translate-y-6 z-10 bg-indigo-100/50 group"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <div className="absolute top-6 left-0 w-88 h-60 md:w-108 md:h-72 max-w-none">
              <Image 
                src="/benedict.jpg" 
                alt="Benedict Window 1" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
          
          {/* Middle Rhomboid (Low) */}
          <div
            className="w-32 h-48 md:w-40 md:h-60 overflow-hidden relative shadow-xl translate-y-6 z-20 -ml-6 md:-ml-8 bg-indigo-100/50 group"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <div className="absolute -top-6 -left-26 md:-left-32 w-88 h-60 md:w-108 md:h-72 max-w-none">
              <Image 
                src="/benedict.jpg" 
                alt="Benedict Window 2" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>

          {/* Right Rhomboid (High) */}
          <div
            className="w-32 h-48 md:w-40 md:h-60 overflow-hidden relative shadow-xl -translate-y-6 z-30 -ml-2 md:-ml-4 bg-indigo-100/50 group"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <div className="absolute top-6 -left-56 md:-left-68 w-88 h-60 md:w-108 md:h-72 max-w-none">
              <Image 
                src="/benedict.jpg" 
                alt="Benedict Window 3" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
        </div>

        
        <div className="space-y-6 mt-4 xl:mt-8">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-violet-500 to-cyan-500 pb-2">{portfolioData.name}</h1>
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl text-balance">
                {portfolioData.intro}
            </p>
            <div className="flex gap-6 text-sm font-mono text-indigo-400 pt-2">
                {portfolioData.socials.map(social => (
                    <a key={social.name} href={social.url} className="hover:text-indigo-600 transition-colors uppercase tracking-widest">
                        {social.name} /
                    </a>
                ))}
            </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-indigo-100/60 pt-8 mt-8">
        {portfolioData.stats.map((stat, i) => (
           <div key={i} className="space-y-1 border-l border-indigo-100/60 pl-4 first:border-0 first:pl-0">
               <div className="text-lg font-bold text-indigo-950 flex items-center gap-1">
                   {stat.value} 
                   <ArrowUpRight className="w-4 h-4 text-cyan-500 shrink-0" strokeWidth={2.5} />
               </div>
               <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest">{stat.label}</div>
           </div>
        ))}
      </div>

      {/* Focus & Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        <div className="group p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-indigo-100/50 space-y-3 transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300/50">
            <h4 className="text-[10px] font-mono text-indigo-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
              Current Focus
            </h4>
            <p className="text-sm text-slate-700 font-medium leading-relaxed italic group-hover:text-indigo-950 transition-colors">
                "Bridging the gap between Edge AI and Embedded Systems for industrial automation and smart environments."
            </p>
        </div>
        <div className="group p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-indigo-100/50 space-y-3 transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300/50">
            <h4 className="text-[10px] font-mono text-indigo-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
              Latest Insight
            </h4>
            <p className="text-sm text-slate-700 font-medium leading-relaxed italic group-hover:text-indigo-950 transition-colors">
                "Simplicity is the ultimate sophistication in both code and hardware design. Functional over flashy, always."
            </p>
        </div>
      </div>

      {/* GitHub Activity Graph */}
      <GithubActivity />

      {/* Details Sections */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-12">
            <div id="tech-stack" className="space-y-4 scroll-mt-20">
                <h3 className="text-xs font-mono text-indigo-950 uppercase tracking-widest border-b border-indigo-100/60 pb-2">Tech Stack</h3>
                <TechStack categories={portfolioData.techStackCategories} />
            </div>
            <div id="achievements" className="space-y-4 scroll-mt-20">
                <h3 className="text-xs font-mono text-indigo-950 uppercase tracking-widest border-b border-indigo-100/60 pb-2">Achievements</h3>
                <ul className="space-y-3">
                    {portfolioData.achievements.map((ach, i) => (
                        <li key={i} className="text-sm text-neutral-700 leading-relaxed">{ach}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div id="experience" className="space-y-4 scroll-mt-20">
            <h3 className="text-xs font-mono text-indigo-950 uppercase tracking-widest border-b border-indigo-100/60 pb-2">Experience</h3>
            <div className="space-y-6">
                {portfolioData.experiences.map((exp, i) => (
                    <div key={i} className="space-y-1">
                        <div className="flex justify-between items-baseline">
                            <h4 className="text-sm font-medium text-indigo-950">{exp.role}</h4>
                            <span className="text-xs font-mono text-indigo-400 shrink-0 ml-4">{exp.period}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Lengthwise Card Decks Container */}
      <div className="flex flex-col gap-24 pt-16 mt-16 border-t border-indigo-100/60">
        <CardDeck id="certificates" title="Certificates" items={portfolioData.certificates} />
        <CardDeck id="projects" title="Selected Works" items={portfolioData.projects} />
        <CardDeck id="photography" title="Documentary" items={portfolioData.documentaries} />
      </div>

      {/* Final CTA */}
      <div className="mt-24 pt-24 border-t border-indigo-100/60 text-center space-y-8">
        <div className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight text-indigo-950">Let's build something meaningful.</h2>
            <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                Always open to discussing innovative projects, AI integrations, or embedded systems architecture.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
                href={`mailto:${portfolioData.contactInfo}`}
                className="px-8 py-3 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-200/50"
            >
                Start a Conversation
            </a>
            <a 
                href={portfolioData.socials.find(s => s.name === 'linkedin')?.url || '#'}
                target="_blank"
                className="px-8 py-3 rounded-full border border-indigo-200/60 text-slate-600 text-sm font-medium hover:border-indigo-600 hover:text-indigo-950 transition-all bg-white"
            >
                LinkedIn Profile
            </a>
        </div>
        <p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest pt-8">
            Designed & Developed by {portfolioData.name} © 2026
        </p>
      </div>
      
    </section>
  );
}
