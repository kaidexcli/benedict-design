"use client";

import React, { useState, useEffect } from "react";
import { 
  Book, Monitor, Box, PanelLeftClose, PanelRightClose, 
  Home, Code, Award, Briefcase, ShieldCheck, Camera,
  Download, Copy, Check, Mail, ExternalLink
} from "lucide-react";
import { portfolioData } from "@/data";

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

  const navItems = [
    { name: "Intro", icon: Home, href: "#" },
    { name: "Tech Stack", icon: Code, href: "#tech-stack" },
    { name: "Achievements", icon: Award, href: "#achievements" },
    { name: "Experience", icon: Briefcase, href: "#experience" },
    { name: "Certificates", icon: ShieldCheck, href: "#certificates" },
    { name: "Projects", icon: Box, href: "#projects" },
    { name: "Photography", icon: Camera, href: "#photography" },
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

  return (
    <aside className={`sticky top-6 shrink-0 transition-all duration-300 ease-in-out border-r border-neutral-100 ${isMinimized ? 'w-20 pr-0' : 'w-64 pr-8'} h-[calc(100vh-3rem)] hidden md:flex flex-col overflow-hidden`}>
      {/* Header */}
      <div className={`flex items-center mb-10 ${isMinimized ? 'justify-center' : 'justify-between'}`}>
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
          className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-50 shrink-0"
          title="Toggle Sidebar"
        >
          {isMinimized ? <PanelRightClose className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
        {!isMinimized && <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-[0.2em] mb-4 ml-1">Navigation</p>}
        {navItems.map((item) => (
          <a 
            href={item.href} 
            key={item.name} 
            className={`flex items-center py-2 px-3 rounded-md transition-all duration-200 group ${
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
      
      {/* Footer Info */}
      {!isMinimized && (
        <div className="py-6 space-y-4 border-t border-neutral-100 mt-auto">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">Location</p>
              <p className="text-[11px] text-neutral-600 font-medium">Manila, PH</p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">Local Time</p>
              <p className="text-[11px] text-neutral-600 font-medium">{time}</p>
            </div>
          </div>
          
          {showBackToTop && (
            <button 
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-neutral-50 hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-all text-[10px] font-mono uppercase tracking-widest border border-neutral-100"
            >
              Back to Top
            </button>
          )}
        </div>
      )}

      {/* Actions & Socials */}
      <div className={`pt-6 border-t border-neutral-100 space-y-6 ${isMinimized ? 'items-center mt-auto' : ''}`}>
        {!isMinimized && <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-[0.2em] ml-1">Quick Actions</p>}
        
        <div className={`flex flex-col gap-2 ${isMinimized ? 'items-center' : ''}`}>
          <button 
            onClick={handleCopyEmail}
            className={`flex items-center transition-all group ${isMinimized ? 'justify-center p-2 rounded-md hover:bg-neutral-50' : 'gap-3 px-3 py-2 rounded-md border border-neutral-100 hover:border-neutral-900 text-xs text-neutral-600 hover:text-neutral-900 bg-white shadow-sm'}`}
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
            className={`flex items-center transition-all group ${isMinimized ? 'justify-center p-2 rounded-md hover:bg-neutral-50' : 'gap-3 px-3 py-2 rounded-md border border-neutral-100 hover:border-neutral-900 text-xs text-neutral-600 hover:text-neutral-900 bg-white shadow-sm'}`}
            title="Download CV"
          >
            <Download className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900" />
            {!isMinimized && <span className="font-medium">Resume</span>}
          </a>
        </div>

        {!isMinimized && (
          <div className="flex items-center gap-4 px-1">
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