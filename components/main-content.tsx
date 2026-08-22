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
            className="w-32 h-48 md:w-40 md:h-60 overflow-hidden relative shadow-xl -translate-y-6 z-10 bg-neutral-100"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <Image 
              src="/benedict.jpg" 
              alt="Avatar 1" 
              fill 
              className="object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
          
          {/* Middle Rhomboid (Low) */}
          <div
            className="w-32 h-48 md:w-40 md:h-60 overflow-hidden relative shadow-xl translate-y-6 z-20 -ml-6 md:-ml-8 bg-neutral-100"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <Image 
              src="/ai.jpg" 
              alt="Avatar 2" 
              fill 
              className="object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>

          {/* Right Rhomboid (High) */}
          <div
            className="w-32 h-48 md:w-40 md:h-60 overflow-hidden relative shadow-xl -translate-y-6 z-30 -ml-2 md:-ml-4 bg-neutral-100"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          >
            <Image 
              src="/aetelier.jpg" 
              alt="Avatar 3" 
              fill 
              className="object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </div>

        
        <div className="space-y-6 mt-4 xl:mt-8">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-neutral-900">{portfolioData.name}</h1>
            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed max-w-xl text-balance">
                {portfolioData.intro}
            </p>
            <div className="flex gap-6 text-sm font-mono text-neutral-400 pt-2">
                {portfolioData.socials.map(social => (
                    <a key={social.name} href={social.url} className="hover:text-neutral-900 transition-colors uppercase tracking-widest">
                        {social.name} /
                    </a>
                ))}
            </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-neutral-100 pt-8 mt-8">
        {portfolioData.stats.map((stat, i) => (
           <div key={i} className="space-y-1 border-l border-neutral-100 pl-4 first:border-0 first:pl-0">
               <div className="text-lg font-medium text-neutral-900 flex items-center gap-1">
                   {stat.value} 
                   <ArrowUpRight className="w-4 h-4 text-neutral-400 shrink-0" strokeWidth={2.5} />
               </div>
               <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{stat.label}</div>
           </div>
        ))}
      </div>

      {/* Focus & Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        <div className="p-5 rounded-xl bg-neutral-50/50 border border-neutral-100 space-y-3 transition-all hover:bg-white hover:shadow-sm">
            <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Current Focus</h4>
            <p className="text-sm text-neutral-700 font-medium leading-relaxed italic">
                "Bridging the gap between Edge AI and Embedded Systems for industrial automation and smart environments."
            </p>
        </div>
        <div className="p-5 rounded-xl bg-neutral-50/50 border border-neutral-100 space-y-3 transition-all hover:bg-white hover:shadow-sm">
            <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Latest Insight</h4>
            <p className="text-sm text-neutral-700 font-medium leading-relaxed italic">
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
                <h3 className="text-xs font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-100 pb-2">Tech Stack</h3>
                <TechStack categories={portfolioData.techStackCategories} />
            </div>
            <div id="achievements" className="space-y-4 scroll-mt-20">
                <h3 className="text-xs font-mono text-neutral-900 uppercase tracking-widest border-b border-neutral-100 pb-2">Achievements</h3>
                <ul className="space-y-3">
                    {portfolioData.achievements.map((ach, i) => (
                        <li key={i} className="text-sm text-neutral-700 leading-relaxed">{ach}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div id="experience" className="space-y-4 scroll-mt-20">
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

      {/* Lengthwise Card Decks Container */}
      <div className="flex flex-col gap-24 pt-16 mt-16 border-t border-neutral-100">
        <CardDeck id="certificates" title="Certificates" items={portfolioData.certificates} />
        <CardDeck id="projects" title="Selected Works" items={portfolioData.projects} />
        <CardDeck id="photography" title="Documentary" items={portfolioData.documentaries} />
      </div>

      {/* Final CTA */}
      <div className="mt-24 pt-24 border-t border-neutral-100 text-center space-y-8">
        <div className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900">Let's build something meaningful.</h2>
            <p className="text-neutral-500 max-w-sm mx-auto text-sm leading-relaxed">
                Always open to discussing innovative projects, AI integrations, or embedded systems architecture.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
                href={`mailto:${portfolioData.contactInfo}`}
                className="px-8 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200"
            >
                Start a Conversation
            </a>
            <a 
                href={portfolioData.socials.find(s => s.name === 'linkedin')?.url || '#'}
                target="_blank"
                className="px-8 py-3 rounded-full border border-neutral-200 text-neutral-600 text-sm font-medium hover:border-neutral-900 hover:text-neutral-900 transition-all bg-white"
            >
                LinkedIn Profile
            </a>
        </div>
        <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest pt-8">
            Designed & Developed by {portfolioData.name} © 2026
        </p>
      </div>
      
    </section>
  );
}
