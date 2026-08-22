"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";

export type ParticleColor = "charcoal" | "amber" | "emerald" | "cyan";
export type ParticleSpeed = "paused" | "slow" | "normal" | "fast";
export type ParticleDensity = "low" | "medium" | "high";

export interface TerminalMessage {
  sender: "user" | "assistant" | "system";
  text: string;
}

interface PortfolioContextType {
  // Particle Settings
  particleColor: ParticleColor;
  particleSpeed: ParticleSpeed;
  particleDensity: ParticleDensity;
  setParticleColor: (color: ParticleColor) => void;
  setParticleSpeed: (speed: ParticleSpeed) => void;
  setParticleDensity: (density: ParticleDensity) => void;

  // System Telemetry
  uptime: string;
  cpuTemp: number;
  memoryLoad: number;
  snrSignal: number;
  isSelfTesting: boolean;
  selfTestProgress: number;
  triggerSelfTest: () => void;

  // AI Assistant Terminal
  isTerminalOpen: boolean;
  setIsTerminalOpen: (open: boolean) => void;
  terminalHistory: TerminalMessage[];
  isTyping: boolean;
  askAI: (questionId: string, promptText: string) => void;
  clearTerminal: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  // Particle Controls
  const [particleColor, setParticleColor] = useState<ParticleColor>("charcoal");
  const [particleSpeed, setParticleSpeed] = useState<ParticleSpeed>("normal");
  const [particleDensity, setParticleDensity] = useState<ParticleDensity>("medium");

  // System Telemetry
  const [uptimeSeconds, setUptimeSeconds] = useState(0);
  const [cpuTemp, setCpuTemp] = useState(42.5);
  const [memoryLoad, setMemoryLoad] = useState(54.1);
  const [snrSignal, setSnrSignal] = useState(94);
  const [isSelfTesting, setIsSelfTesting] = useState(false);
  const [selfTestProgress, setSelfTestProgress] = useState(0);

  // AI Assistant Terminal
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<TerminalMessage[]>([
    {
      sender: "system",
      text: "Claude-AI CORE v1.0.4. Ready for queries.",
    },
    {
      sender: "assistant",
      text: "Welcome. Ask me anything about Benedict's engineering expertise, startup background, or achievements.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Ticking Uptime
  useEffect(() => {
    const interval = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format uptime to hh:mm:ss
  const uptime = React.useMemo(() => {
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = uptimeSeconds % 60;
    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  }, [uptimeSeconds]);

  // 2. Fluctuating Telemetry (subtle shifts)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isSelfTesting) return; // Freeze normal fluctuations during self-test

      setCpuTemp((prev) => {
        const change = (Math.random() - 0.5) * 0.4;
        const next = prev + change;
        return Math.max(38.0, Math.min(48.0, Number(next.toFixed(1))));
      });

      setMemoryLoad((prev) => {
        const change = (Math.random() - 0.5) * 0.8;
        const next = prev + change;
        return Math.max(48.0, Math.min(68.0, Number(next.toFixed(1))));
      });

      setSnrSignal((prev) => {
        const change = Math.random() > 0.85 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        const next = prev + change;
        return Math.max(90, Math.min(99, next));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isSelfTesting]);

  // 3. Self Test Sequence
  const triggerSelfTest = () => {
    if (isSelfTesting) return;
    setIsSelfTesting(true);
    setSelfTestProgress(0);
    setCpuTemp(39.0);
    setMemoryLoad(50.0);
    setSnrSignal(99);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setSelfTestProgress(progress);
      
      // Simulate hardware load during diagnostic
      setCpuTemp((prev) => Number((prev + 1.2).toFixed(1)));
      setMemoryLoad((prev) => Number((prev + 3.5).toFixed(1)));

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSelfTesting(false);
          // Cool down
          setCpuTemp(41.2);
          setMemoryLoad(53.4);
          setSnrSignal(95);
        }, 800);
      }
    }, 150);
  };

  // 4. Simulated AI Answers Data
  const aiDatabase: Record<string, string> = {
    about: "Benedict Fusin is an Electronics and AI Engineer. He specializes in bridging advanced AI/ML algorithms with embedded microcontrollers (ESP32, Jetson Nano, STM32) and building robust Full-Stack Web Applications.",
    auren: "Auren AI is Benedict's startup where he serves as Founder and CEO. It develops custom Software-as-a-Service (SaaS) products, embedding generative AI agents and predictive ML models into corporate workflows.",
    hardware: "Benedict's hardware repertoire includes microcontrollers (ESP32, ESP8266, STM32), edge-AI systems (NVIDIA Jetson Nano, Raspberry Pi), sensor integration (I2C, SPI, UART), wireless telemetry (GSM, Wi-Fi, BLE), and custom PCB prototyping.",
    contact: "You can reach Benedict via email at benedictfusin99@gmail.com. He is located in Manila, Philippines (GMT+8) and is currently open to innovative projects, contract roles, and academic collaborations.",
    achievements: "Key achievements include: 1) Top #1 University Ideathon winner (DOST Pylon engineering track). 2) Competitor in the 2026 Nationwide Math Wizard search. 3) Leading DataCamp scholar specializing in AI & Data Engineering. 4) NVIDIA Deep Learning Institute certified on Jetson Nano.",
  };

  const askAI = (questionId: string, promptText: string) => {
    if (isTyping) return;

    // Clear previous typing timer if active
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }

    // Add User Message
    const updatedHistory = [
      ...terminalHistory,
      { sender: "user" as const, text: promptText },
    ];
    setTerminalHistory(updatedHistory);
    setIsTyping(true);

    // Simulate AI thinking delay
    const responseText = aiDatabase[questionId] || "Telemetry error: Request unknown.";
    
    typingTimerRef.current = setTimeout(() => {
      let index = 0;
      const initialAssistantMessage = { sender: "assistant" as const, text: "" };
      
      // We append a temporary empty message that we will stream into
      setTerminalHistory([...updatedHistory, initialAssistantMessage]);

      const streamTimer = setInterval(() => {
        index += 2; // Stream 2 characters at a time for snappier terminal feel
        const slicedText = responseText.slice(0, index);

        setTerminalHistory((prev) => {
          const nextHistory = [...prev];
          if (nextHistory.length > 0) {
            nextHistory[nextHistory.length - 1] = {
              sender: "assistant",
              text: slicedText,
            };
          }
          return nextHistory;
        });

        if (index >= responseText.length) {
          clearInterval(streamTimer);
          setIsTyping(false);
        }
      }, 15);
    }, 800);
  };

  const clearTerminal = () => {
    if (isTyping) return;
    setTerminalHistory([
      {
        sender: "system",
        text: "BENEDICT-AI CORE v1.0.4. Cache cleared.",
      },
    ]);
  };

  return (
    <PortfolioContext.Provider
      value={{
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
        isTerminalOpen,
        setIsTerminalOpen,
        terminalHistory,
        isTyping,
        askAI,
        clearTerminal,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
