import React, { useEffect, useRef, useState } from 'react';

interface InteractiveHeroCanvasProps {
  mode: 'mesh' | 'velocity' | 'ledger';
}

export const InteractiveHeroCanvas = ({ mode }: InteractiveHeroCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  // Handle Resize using ResizeObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Update canvas sizing for high-DPI screens
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }, [dimensions]);

  // Track Mouse / Touch Interactions
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    container.addEventListener('touchend', handleMouseLeave, { passive: true });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  // Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    // --- NEURAL MESH MODE SETUP ---
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
    }

    const generateNodes = (w: number, h: number): Node[] => {
      const count = Math.min(60, Math.floor((w * h) / 12000));
      return Array.from({ length: count }, () => {
        const radius = Math.random() * 2 + 1.5;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius,
          baseRadius: radius,
        };
      });
    };

    let nodes = generateNodes(dimensions.width, dimensions.height);

    // --- FLOW VELOCITY MODE SETUP ---
    interface Particle {
      x: number;
      y: number;
      angle: number;
      speed: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const generateParticles = (w: number, h: number): Particle[] => {
      const count = Math.min(100, Math.floor((w * h) / 8000));
      return Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.3,
        life: Math.random() * 100,
        maxLife: Math.random() * 150 + 100,
        size: Math.random() * 1.5 + 0.5,
      }));
    };

    let particles = generateParticles(dimensions.width, dimensions.height);

    // --- BLOCKCHAIN LEDGER SETUP ---
    interface Cryptic {
      x: number;
      y: number;
      char: string;
      alpha: number;
      speed: number;
      scale: number;
    }

    const hexChars = '0123456789ABCDEF<>[]_#$/';
    const generateCryptic = (w: number, h: number): Cryptic[] => {
      const count = Math.min(45, Math.floor((w * h) / 16000));
      return Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        char: hexChars[Math.floor(Math.random() * hexChars.length)],
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        scale: Math.random() * 0.3 + 0.8,
      }));
    };

    let cryptics = generateCryptic(dimensions.width, dimensions.height);

    // Re-generate assets when dimensions change
    nodes = generateNodes(dimensions.width, dimensions.height);
    particles = generateParticles(dimensions.width, dimensions.height);
    cryptics = generateCryptic(dimensions.width, dimensions.height);

    const render = () => {
      const w = dimensions.width;
      const h = dimensions.height;
      if (w === 0 || h === 0) return;

      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;

      if (mode === 'mesh') {
        // --- Render Neural Mesh ---
        ctx.strokeStyle = 'rgba(255, 78, 0, 0.08)';
        ctx.fillStyle = 'rgba(255, 78, 0, 0.7)';

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
          const n1 = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 120) {
              const alpha = (1 - dist / 120) * 0.18;
              ctx.strokeStyle = `rgba(10, 10, 10, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            }
          }

          // Move and bounce nodes
          n1.x += n1.vx;
          n1.y += n1.vy;

          if (n1.x < 0 || n1.x > w) n1.vx *= -1;
          if (n1.y < 0 || n1.y > h) n1.vy *= -1;

          // Mouse attraction
          if (mouse.active) {
            const mDx = mouse.x - n1.x;
            const mDy = mouse.y - n1.y;
            const mDist = Math.hypot(mDx, mDy);

            if (mDist < 160) {
              const pull = (1 - mDist / 160) * 0.05;
              n1.x += mDx * pull;
              n1.y += mDy * pull;
              n1.radius = n1.baseRadius + (1 - mDist / 160) * 2;

              // Connect to mouse
              ctx.strokeStyle = `rgba(255, 78, 0, ${(1 - mDist / 160) * 0.15})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            } else {
              n1.radius = Math.max(n1.radius - 0.1, n1.baseRadius);
            }
          } else {
            n1.radius = Math.max(n1.radius - 0.1, n1.baseRadius);
          }

          // Draw Node
          ctx.fillStyle = mouse.active && Math.hypot(mouse.x - n1.x, mouse.y - n1.y) < 160 
            ? 'rgba(255, 78, 0, 0.85)' 
            : 'rgba(10, 10, 10, 0.15)';
          ctx.beginPath();
          ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
          ctx.fill();
        }

      } else if (mode === 'velocity') {
        // --- Render Flow Velocity ---
        ctx.fillStyle = 'rgba(255, 78, 0, 0.35)';

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Compute angle based on wave formula + noise-like flow field
          const angleOffset = Math.sin(p.x * 0.005) * Math.cos(p.y * 0.005) * Math.PI;
          p.angle = angleOffset + (mouse.active ? Math.atan2(mouse.y - p.y, mouse.x - p.x) * 0.15 : 0);

          // Speed scaling
          const speedFactor = mouse.active && Math.hypot(mouse.x - p.x, mouse.y - p.y) < 200 ? 1.8 : 1.0;

          p.x += Math.cos(p.angle) * p.speed * speedFactor;
          p.y += Math.sin(p.angle) * p.speed * speedFactor;
          p.life += 0.5;

          // Wrap or Reset dead particles
          if (p.life > p.maxLife || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
            p.x = Math.random() * w;
            p.y = Math.random() * h;
            p.life = 0;
            p.speed = Math.random() * 0.5 + 0.3;
          }

          // Draw Particle with trail glow effect
          const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.4;
          ctx.fillStyle = `rgba(255, 78, 0, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size + (speedFactor > 1 ? 0.5 : 0), 0, Math.PI * 2);
          ctx.fill();

          // Mouse interactive ripple
          if (mouse.active && Math.hypot(mouse.x - p.x, mouse.y - p.y) < 80) {
            ctx.strokeStyle = `rgba(10, 10, 10, ${0.05 * (1 - Math.hypot(mouse.x - p.x, mouse.y - p.y) / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - Math.cos(p.angle) * 15, p.y - Math.sin(p.angle) * 15);
            ctx.stroke();
          }
        }

      } else if (mode === 'ledger') {
        // --- Render Blockchain Ledger ---
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for (let i = 0; i < cryptics.length; i++) {
          const c = cryptics[i];

          c.alpha += c.speed;
          if (c.alpha > 1) {
            c.alpha = 0;
            c.char = hexChars[Math.floor(Math.random() * hexChars.length)];
            // Distribute on reset
            c.x = Math.random() * w;
            c.y = Math.random() * h;
          }

          // Calculate interactive scale
          let scale = c.scale;
          let isHighlighted = false;

          if (mouse.active) {
            const mDist = Math.hypot(mouse.x - c.x, mouse.y - c.y);
            if (mDist < 120) {
              scale *= (1 + (1 - mDist / 120) * 0.4);
              isHighlighted = true;
            }
          }

          // Draw code string/char
          const finalAlpha = Math.sin(c.alpha * Math.PI) * (isHighlighted ? 0.8 : 0.25);
          ctx.fillStyle = isHighlighted 
            ? `rgba(255, 78, 0, ${finalAlpha})` 
            : `rgba(10, 10, 10, ${finalAlpha})`;

          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.scale(scale, scale);
          ctx.fillText(c.char, 0, 0);
          ctx.restore();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [mode, dimensions]);

  return (
    <div
      ref={containerRef}
      id="hero-canvas-container"
      className="absolute inset-0 w-full h-full select-none overflow-hidden pointer-events-auto"
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-70 pointer-events-none"
      />
    </div>
  );
};
