"use client";

import { useEffect, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { particleColor, particleSpeed, particleDensity } = usePortfolio();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Mouse position state
    const mouse = {
      x: -9999,
      y: -9999,
      radius: 120 
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Map speed configs
    let speedFactor = 0.7;
    if (particleSpeed === "paused") speedFactor = 0;
    else if (particleSpeed === "slow") speedFactor = 0.25;
    else if (particleSpeed === "fast") speedFactor = 2.2;

    // Map color configs
    let particleFillStyle = "rgba(0, 0, 0, 0.15)";
    let connectionStrokeStyle = "rgba(0, 0, 0, 0.08)";
    let mouseGlowStyle = "rgba(47, 129, 247, 0.15)";

    if (particleColor === "amber") {
      particleFillStyle = "rgba(217, 119, 6, 0.25)";
      connectionStrokeStyle = "rgba(217, 119, 6, 0.1)";
      mouseGlowStyle = "rgba(217, 119, 6, 0.25)";
    } else if (particleColor === "emerald") {
      particleFillStyle = "rgba(16, 185, 129, 0.25)";
      connectionStrokeStyle = "rgba(16, 185, 129, 0.1)";
      mouseGlowStyle = "rgba(16, 185, 129, 0.25)";
    } else if (particleColor === "cyan") {
      particleFillStyle = "rgba(6, 182, 212, 0.3)";
      connectionStrokeStyle = "rgba(6, 182, 212, 0.12)";
      mouseGlowStyle = "rgba(6, 182, 212, 0.3)";
    }

    // Map density configs
    let densityDivisor = 15000;
    if (particleDensity === "low") densityDivisor = 32000;
    else if (particleDensity === "high") densityDivisor = 6500;

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    // Particle Object
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5 + 0.5; 
        this.speedX = (Math.random() - 0.5) * speedFactor; 
        this.speedY = (Math.random() - 0.5) * speedFactor;
      }

      update() {
        if (speedFactor === 0) return;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas!.height || this.y < 0) this.speedY = -this.speedY;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = particleFillStyle;
        ctx!.fill();
      }
    }

    let particlesArray: Particle[] = [];

    const initParticles = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / densityDivisor;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            opacityValue = 1 - distance / 100;
            ctx.strokeStyle = connectionStrokeStyle.replace("0.08", (opacityValue * 0.08).toString())
                                                   .replace("0.12", (opacityValue * 0.12).toString())
                                                   .replace("0.1", (opacityValue * 0.1).toString());
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        const dxMouse = particlesArray[a].x - mouse.x;
        const dyMouse = particlesArray[a].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < mouse.radius) {
          opacityValue = 1 - distanceMouse / mouse.radius;
          ctx.strokeStyle = mouseGlowStyle.replace("0.15", (opacityValue * 0.2).toString())
                                          .replace("0.25", (opacityValue * 0.3).toString())
                                          .replace("0.3", (opacityValue * 0.35).toString());
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [particleColor, particleSpeed, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
}
