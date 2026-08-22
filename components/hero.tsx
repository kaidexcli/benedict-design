import Image from "next/image";
import { portfolioData } from "@/data";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center max-w-lg mx-auto mb-16">
      <div className="relative w-20 h-20 mb-5 rounded-full overflow-hidden border border-neutral-200 bg-neutral-100 flex items-center justify-center shadow-lg">
        <Image 
          src="/benedict.jpg" 
          alt={portfolioData.name} 
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">
        {portfolioData.name}
      </h1>
      <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
        {portfolioData.intro}
      </p>
      
      <div className="flex flex-wrap justify-center gap-2">
      </div>
    </section>
  );
}
