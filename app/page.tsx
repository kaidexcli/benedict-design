import Sidebar from "@/components/sidebar";
import MainContent from "@/components/main-content";
import NeuralBackground from "@/components/neural-background";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      
      {/* Scrollable spacer for the loading animation transition */}
      <div className="h-[20vh] w-full" />

      <main className="min-h-screen bg-transparent text-neutral-900 p-6 md:p-12 lg:p-20 overflow-x-hidden relative">
        
        {/* The subtle, interactive neural network background */}
        <NeuralBackground />

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