import Sidebar from "@/components/sidebar";
import MainContent from "@/components/main-content";
import NeuralBackground from "@/components/neural-background";
import Intro from "@/components/intro/intro";

export default function Home() {
  return (
    <>
      <Intro />

      <main className="min-h-screen bg-transparent text-slate-900 p-6 md:p-12 lg:p-20 overflow-x-hidden relative">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-400/20 blur-[120px] mix-blend-multiply animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-400/20 blur-[120px] mix-blend-multiply animate-[spin_40s_linear_infinite_reverse]"></div>
          <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-indigo-400/10 blur-[100px] mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite]"></div>
        </div>

        {/* The subtle, interactive neural network background */}
        <div className="absolute inset-0 z-0">
          <NeuralBackground />
        </div>

        {/* 
          Increased max-w-7xl to give the 3-column Card Decks plenty of room.
          Added relative z-10 so the content always sits above the canvas background. 
        */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-start relative z-10">
          <Sidebar />
          
          <div className="flex-1 w-full">
              <MainContent />
          </div>
        </div>
        
      </main>
    </>
  );
}