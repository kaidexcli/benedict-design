import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import ProjectDeck from "@/components/ProjectDeck";
import NeuralBackground from "@/components/NeuralBackground"; // <-- Import it here
import { portfolioData } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-neutral-900 p-6 md:p-12 lg:p-20 overflow-x-hidden relative">
      
      {/* The background canvas runs quietly behind everything */}
      <NeuralBackground />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
        <Sidebar />
        
        <div className="flex-1 w-full flex flex-col gap-20">
            <MainContent />
            <ProjectDeck projects={portfolioData.projects} />
        </div>
      </div>
    </main>
  );
}