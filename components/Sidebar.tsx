"use client";

import React, { useState, useEffect } from "react";
import { 
  Book, Monitor, Box, PanelLeftClose, PanelRightClose, 
  Home, Code, Award, Briefcase, ShieldCheck, Camera,
  Download, Copy, Check, Mail, ExternalLink,
  Cpu, Terminal, Sliders, RefreshCw, Sparkles, Trash2, ChevronDown, ChevronUp
} from "lucide-react";
import { portfolioData } from "@/data";
import { usePortfolio, ParticleColor } from "@/context/PortfolioContext";

// Custom inline SVG for GitHub
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom inline SVG for LinkedIn
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [time, setTime] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Accordion active state: "none" | "ai" | "neural" | "telemetry"
  const [expandedPanel, setExpandedPanel] = useState<"none" | "ai" | "neural" | "telemetry">("none");

  // Consume our premium custom Portfolio Context
  const {
    particleColor,
    particleSpeed,
    particleDensity,
    setParticleColor,
    setParticleSpeed,
    setParticleDensity,
    uptime,
    cpuTemp,
    memoryLoad,
    snrSignal,
    isSelfTesting,
    selfTestProgress,
    triggerSelfTest,
    terminalHistory,
    isTyping,
    askAI,
    clearTerminal,
  } = usePortfolio();

  const navItems = [
    { name: "Intro", icon: Home, href: "#" },
    { name: "Tech Stack", icon: Code, href: "#tech-stack" },
    { name: "Achievements", icon: Award, href: "#achievements" },
    { name: "Experience", icon: Briefcase, href: "#experience" },
    { name: "Certificates", icon: ShieldCheck, href: "#certificates" },
    { name: "Projects", icon: Box, href: "#projects" },
    { name: "Documentation", icon: Camera, href: "#photography" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Manila',
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contactInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Simple scroll spy and back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      setShowBackToTop(window.scrollY > 300);

      const sections = navItems.map(item => item.href.replace("#", "")).filter(Boolean);
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current || "intro");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const togglePanel = (panel: "ai" | "neural" | "telemetry") => {
    if (isMinimized) {
      // If minimized, expanding a panel automatically restores the sidebar for better usability
      setIsMinimized(false);
      setExpandedPanel(panel);
    } else {
      setExpandedPanel(prev => prev === panel ? "none" : panel);
    }
  };

  return (
    <aside className={`sticky top-6 shrink-0 transition-all duration-300 ease-in-out border-r border-neutral-100 ${isMinimized ? 'w-20 pr-0' : 'w-72 pr-8'} h-[calc(100vh-3rem)] hidden md:flex flex-col overflow-hidden`}>
      {/* Header */}
      <div className={`flex items-center mb-6 ${isMinimized ? 'justify-center' : 'justify-between'}`}>
        {!isMinimized && (
          <div className="flex flex-col">
            <div className="text-sm font-semibold tracking-tight truncate">{portfolioData.name}</div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">Available for work</span>
            </div>
          </div>
        )}
        <button 
          onClick={() => setIsMinimized(!isMinimized)} 
          className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-50 shrink-0 cursor-pointer"
          title="Toggle Sidebar"
        >
          {isMinimized ? <PanelRightClose className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
        </button>
      </div>
      
      {/* Scrollable Navigation and Widgets */}
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-5 pr-1 py-2">
        {/* Navigation */}
        <nav className="space-y-1">
          {!isMinimized && <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-[0.2em] mb-3 ml-1">Navigation</p>}
          {navItems.map((item) => (
            <a 
              href={item.href} 
              key={item.name} 
              className={`flex items-center py-1.5 px-3 rounded-md transition-all duration-200 group ${
                (activeSection === item.href.replace("#", "") || (activeSection === "intro" && item.href === "#"))
                  ? 'bg-neutral-900 text-white shadow-sm' 
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
              } ${isMinimized ? 'justify-center' : 'gap-3'}`}
            >
              <item.icon className={`w-4 h-4 shrink-0 ${(activeSection === item.href.replace("#", "") || (activeSection === "intro" && item.href === "#")) ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-900'}`} />
              {!isMinimized && <span className="text-xs font-medium truncate">{item.name}</span>}
            </a>
          ))}
        </nav>

        {/* Dynamic Interactive Widgets Accordion */}
        <div className="pt-2 border-t border-neutral-100/70 space-y-2">
          {!isMinimized && <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-[0.2em] mb-2.5 ml-1">Engine Console</p>}
          
          {/* 1. Ask AI Copilot Panel */}
          <div className="border border-neutral-100 rounded-lg bg-neutral-50/20 overflow-hidden">
            <button
              onClick={() => togglePanel("ai")}
              className={`w-full flex items-center justify-between p-2.5 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all ${isMinimized ? 'justify-center' : ''}`}
              title="Ask AI Copilot"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Sparkles className={`w-4 h-4 text-neutral-400 ${expandedPanel === "ai" ? "text-neutral-800" : ""}`} />
                {!isMinimized && <span className="font-medium text-xs truncate">Ask AI Copilot</span>}
              </div>
              {!isMinimized && (
                expandedPanel === "ai" ? <ChevronUp className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              )}
            </button>
            {!isMinimized && expandedPanel === "ai" && (
              <div className="px-3 pb-3 border-t border-neutral-100 bg-white">
                <div className="flex flex-col gap-3 pt-3 pb-1 text-xs">
                  {/* Term History */}
                  <div className="bg-neutral-950 text-neutral-200 font-mono text-[9px] p-2.5 rounded-md h-32 overflow-y-auto space-y-2 select-text border border-neutral-800 custom-scrollbar">
                    {terminalHistory.map((msg, i) => (
                      <div key={i} className={
                        msg.sender === 'user' ? 'text-cyan-400' :
                        msg.sender === 'system' ? 'text-amber-500 opacity-85' : 'text-neutral-200'
                      }>
                        <span className="font-bold opacity-75">
                          {msg.sender === 'user' ? 'USR> ' :
                           msg.sender === 'system' ? 'SYS> ' : 'AI> '}
                        </span>
                        {msg.text}
                      </div>
                    ))}
                    {isTyping && (
                      <div className="text-neutral-400 animate-pulse">
                        <span className="font-bold opacity-70">AI&gt; </span>
                        Thinking...
                      </div>
                    )}
                  </div>

                  {/* Prompt buttons */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Select Query</p>
                      <button 
                        onClick={clearTerminal} 
                        disabled={isTyping}
                        className="text-[9px] text-neutral-400 hover:text-neutral-900 font-mono flex items-center gap-0.5 cursor-pointer disabled:opacity-50"
                      >
                        <Trash2 className="w-2.5 h-2.5" /> Clear
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { id: "about", label: "Bio / Experience" },
                        { id: "auren", label: "Auren Startup" },
                        { id: "hardware", label: "Hardware Stack" },
                        { id: "contact", label: "Contact / PH" },
                      ].map((q) => (
                        <button
                          key={q.id}
                          disabled={isTyping}
                          onClick={() => askAI(q.id, q.label)}
                          className="text-left py-1.5 px-2 text-[9px] bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/50 text-neutral-600 hover:text-neutral-900 transition-all rounded truncate cursor-pointer disabled:opacity-50"
                          title={q.label}
                        >
                          {q.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Neural Background Settings Panel */}
          <div className="border border-neutral-100 rounded-lg bg-neutral-50/20 overflow-hidden">
            <button
              onClick={() => togglePanel("neural")}
              className={`w-full flex items-center justify-between p-2.5 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all ${isMinimized ? 'justify-center' : ''}`}
              title="Neural Customizer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Sliders className={`w-4 h-4 text-neutral-400 ${expandedPanel === "neural" ? "text-neutral-800" : ""}`} />
                {!isMinimized && <span className="font-medium text-xs truncate">Neural Customizer</span>}
              </div>
              {!isMinimized && (
                expandedPanel === "neural" ? <ChevronUp className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              )}
            </button>
            {!isMinimized && expandedPanel === "neural" && (
              <div className="px-3 pb-3 border-t border-neutral-100 bg-white">
                <div className="space-y-4 pt-3 pb-1 text-xs">
                  {/* Color */}
                  <div className="space-y-1.5">
                    <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Accent Theme</p>
                    <div className="flex gap-2.5">
                      {[
                        { id: "charcoal", color: "bg-neutral-800", ring: "ring-neutral-800" },
                        { id: "amber", color: "bg-amber-500", ring: "ring-amber-500" },
                        { id: "emerald", color: "bg-emerald-500", ring: "ring-emerald-500" },
                        { id: "cyan", color: "bg-cyan-500", ring: "ring-cyan-500" },
                      ].map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => setParticleColor(theme.id as ParticleColor)}
                          className={`w-4.5 h-4.5 rounded-full ${theme.color} transition-all duration-200 cursor-pointer ${
                            particleColor === theme.id ? `ring-2 ring-offset-2 ${theme.ring}` : "opacity-60 hover:opacity-100"
                          }`}
                          title={theme.id}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Speed */}
                  <div className="space-y-1.5">
                    <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Dynamics Speed</p>
                    <div className="grid grid-cols-4 gap-1">
                      {(["paused", "slow", "normal", "fast"] as const).map((spd) => (
                        <button
                          key={spd}
                          onClick={() => setParticleSpeed(spd)}
                          className={`py-1 text-[9px] font-mono rounded uppercase tracking-tighter text-center transition-all cursor-pointer ${
                            particleSpeed === spd
                              ? "bg-neutral-900 text-white font-bold"
                              : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"
                          }`}
                        >
                          {spd}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Density */}
                  <div className="space-y-1.5">
                    <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Node Density</p>
                    <div className="grid grid-cols-3 gap-1">
                      {(["low", "medium", "high"] as const).map((dns) => (
                        <button
                          key={dns}
                          onClick={() => setParticleDensity(dns)}
                          className={`py-1 text-[9px] font-mono rounded uppercase tracking-tighter text-center transition-all cursor-pointer ${
                            particleDensity === dns
                              ? "bg-neutral-900 text-white font-bold"
                              : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"
                          }`}
                        >
                          {dns}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. System Monitor Panel */}
          <div className="border border-neutral-100 rounded-lg bg-neutral-50/20 overflow-hidden">
            <button
              onClick={() => togglePanel("telemetry")}
              className={`w-full flex items-center justify-between p-2.5 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all ${isMinimized ? 'justify-center' : ''}`}
              title="System Monitor"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Cpu className={`w-4 h-4 text-neutral-400 ${expandedPanel === "telemetry" ? "text-neutral-800" : ""}`} />
                {!isMinimized && <span className="font-medium text-xs truncate">System Monitor</span>}
              </div>
              {!isMinimized && (
                expandedPanel === "telemetry" ? <ChevronUp className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              )}
            </button>
            {!isMinimized && expandedPanel === "telemetry" && (
              <div className="px-3 pb-3 border-t border-neutral-100 bg-white">
                <div className="space-y-3 pt-3 pb-1 text-xs font-mono text-neutral-500">
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className={isSelfTesting ? "text-amber-500 animate-pulse font-bold" : "text-green-500 font-bold"}>
                      {isSelfTesting ? "DIAG_RUNNING" : "ONLINE_NOMINAL"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>UPTIME:</span>
                    <span className="text-neutral-800">{uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CORE TEMP:</span>
                    <span className={`transition-colors duration-300 ${cpuTemp > 45 ? 'text-amber-500 font-bold' : 'text-neutral-800'}`}>
                      {cpuTemp}°C
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>MEMORY:</span>
                    <span className="text-neutral-800">{memoryLoad}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RF SIGNAL:</span>
                    <span className="text-neutral-800">{snrSignal} dB</span>
                  </div>
                  
                  {isSelfTesting && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[8px] text-neutral-400">
                        <span>CALIBRATION:</span>
                        <span>{selfTestProgress}%</span>
                      </div>
                      <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                        <div 
                          className="bg-amber-500 h-full transition-all duration-150" 
                          style={{ width: `${selfTestProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    onClick={triggerSelfTest}
                    disabled={isSelfTesting}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 mt-1 rounded-md border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-[10px] text-neutral-600 hover:text-neutral-900 transition-all font-sans font-medium cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3 h-3 ${isSelfTesting ? 'animate-spin text-amber-500' : 'text-neutral-400'}`} />
                    {isSelfTesting ? "Calibrating..." : "Execute Self-Test"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer Info */}
      {!isMinimized && (
        <div className="py-4 space-y-3.5 border-t border-neutral-100 mt-auto bg-white/50">
          <div className="flex justify-between items-end">
            <div className="space-y-0.5">
              <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest">Location</p>
              <p className="text-[11px] text-neutral-600 font-medium">Manila, PH</p>
            </div>
            <div className="space-y-0.5 text-right">
              <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest">Local Time</p>
              <p className="text-[11px] text-neutral-600 font-medium">{time}</p>
            </div>
          </div>
          
          {showBackToTop && (
            <button 
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-md bg-neutral-50 hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-all text-[9px] font-mono uppercase tracking-widest border border-neutral-100 cursor-pointer"
            >
              Back to Top
            </button>
          )}
        </div>
      )}

      {/* Actions & Socials */}
      <div className={`pt-4 border-t border-neutral-100 space-y-4 ${isMinimized ? 'items-center mt-auto' : ''}`}>
        {!isMinimized && <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-[0.2em] ml-1">Quick Actions</p>}
        
        <div className={`flex flex-col gap-1.5 ${isMinimized ? 'items-center' : ''}`}>
          <button 
            onClick={handleCopyEmail}
            className={`flex items-center transition-all group cursor-pointer ${isMinimized ? 'justify-center p-2 rounded-md hover:bg-neutral-50' : 'gap-3 px-3 py-1.5 rounded-md border border-neutral-100 hover:border-neutral-900 text-xs text-neutral-600 hover:text-neutral-900 bg-white shadow-sm'}`}
            title="Copy Email"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Mail className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900" />}
            {!isMinimized && (
              <span className="font-medium">{copied ? "Copied!" : "Copy Email"}</span>
            )}
          </button>

          <a 
            href="/resume.pdf" 
            target="_blank"
            className={`flex items-center transition-all group cursor-pointer ${isMinimized ? 'justify-center p-2 rounded-md hover:bg-neutral-50' : 'gap-3 px-3 py-1.5 rounded-md border border-neutral-100 hover:border-neutral-900 text-xs text-neutral-600 hover:text-neutral-900 bg-white shadow-sm'}`}
            title="Download CV"
          >
            <Download className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900" />
            {!isMinimized && <span className="font-medium">Resume</span>}
          </a>
        </div>

        {!isMinimized && (
          <div className="flex items-center gap-3.5 px-1 pb-1">
            {portfolioData.socials.map((social) => {
              const Icon = social.name === 'github' ? GithubIcon : social.name === 'linkedin' ? LinkedinIcon : Mail;
              return (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 transition-colors p-1 hover:bg-neutral-50 rounded"
                  title={social.name}
                >
                  <Icon className="w-4" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
