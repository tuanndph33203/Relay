import React, { useEffect, useRef } from 'react';

/**
 * Enhanced LightStreamCanvas with smooth LERP scroll physics,
 * mouse reaction, and rich neon-lime energy waves matching the video.
 */
export const LightStreamCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Target and smoothed scroll values for silky physics
    let targetScroll = 0;
    let smoothScroll = 0;

    // Mouse tracking for subtle interactive pull
    let mouseX = width / 2;
    let mouseY = height / 2;
    let smoothMouseX = width / 2;
    let smoothMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight || 1;
      targetScroll = window.scrollY / docHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Number of fiber optic strands
    const strandCount = 36;
    let time = 0;

    // Glowing energy packets along strands
    interface Particle {
      t: number;
      speed: number;
      size: number;
      strandIndex: number;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      t: Math.random(),
      speed: 0.0018 + Math.random() * 0.0035,
      size: 1.2 + Math.random() * 2.8,
      strandIndex: Math.floor(Math.random() * strandCount),
      alpha: 0.4 + Math.random() * 0.6,
    }));

    const render = () => {
      time += 0.009;

      // Smooth interpolation (LERP) for buttery responsiveness
      smoothScroll += (targetScroll - smoothScroll) * 0.06;
      smoothMouseX += (mouseX - smoothMouseX) * 0.04;
      smoothMouseY += (mouseY - smoothMouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const mouseInfluenceX = ((smoothMouseX - width / 2) / width) * 70;
      const mouseInfluenceY = ((smoothMouseY - height / 2) / height) * 70;

      // Dynamic control points calculated based on scroll progress
      for (let i = 0; i < strandCount; i++) {
        const strandRatio = i / strandCount;
        const offset = (i - strandCount / 2) * 6;
        const phase = i * 0.14;

        // Color palette: glowing acid lime (#ccff00), spring green (#a3e635), and subtle teal highlight
        const isHighlight = i % 8 === 0;
        const isTeal = i % 11 === 0;

        let strokeColor: string;
        if (isTeal) {
          strokeColor = `rgba(56, 189, 248, ${0.12 + strandRatio * 0.18})`;
        } else if (isHighlight) {
          strokeColor = `rgba(204, 255, 0, ${0.28 + strandRatio * 0.32})`;
        } else {
          strokeColor = `rgba(187, 244, 56, ${0.14 + strandRatio * 0.22})`;
        }

        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = isHighlight ? 2.4 : 1.2 + (i % 3) * 0.5;
        ctx.shadowColor = isTeal ? '#38bdf8' : '#ccff00';
        ctx.shadowBlur = isHighlight ? 18 : 10;

        // Start point: shifts as user scrolls
        const startX =
          width * (0.88 - smoothScroll * 0.35) +
          offset * 1.8 +
          Math.sin(time + phase) * 30 +
          mouseInfluenceX * 0.3;
        const startY = -40;

        // Control point 1: sweeps across center
        const cp1X =
          width * (0.52 - Math.sin(smoothScroll * Math.PI) * 0.3) +
          offset * 2.8 +
          Math.sin(time * 0.8 + phase) * 50 +
          mouseInfluenceX * 0.6;
        const cp1Y =
          height * (0.28 + smoothScroll * 0.2) +
          Math.cos(time * 0.9 + phase) * 40 +
          mouseInfluenceY * 0.4;

        // Control point 2: looping through left / middle
        const cp2X =
          width * (0.28 + Math.cos(smoothScroll * Math.PI * 1.5) * 0.35) +
          offset * 2.2 +
          Math.cos(time * 0.7 + phase) * 55 +
          mouseInfluenceX * 0.8;
        const cp2Y =
          height * (0.65 - smoothScroll * 0.15) +
          Math.sin(time * 0.6 + phase) * 45 +
          mouseInfluenceY * 0.6;

        // End point: flows into bottom
        const endX =
          width * (0.82 - smoothScroll * 0.45) +
          offset * 3.2 +
          Math.sin(time * 0.5 + phase) * 65 +
          mouseInfluenceX;
        const endY = height + 50;

        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
        ctx.stroke();

        // Ambient wide glow halo on selected strands
        if (i % 6 === 0) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(187, 244, 56, 0.06)`;
          ctx.lineWidth = 14;
          ctx.shadowBlur = 35;
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(cp1X + 15, cp1Y, cp2X - 15, cp2Y, endX, endY);
          ctx.stroke();
        }
      }

      // Render flowing glowing particle pulses
      for (const p of particles) {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const offset = (p.strandIndex - strandCount / 2) * 6;
        const phase = p.strandIndex * 0.14;

        const startX =
          width * (0.88 - smoothScroll * 0.35) +
          offset * 1.8 +
          Math.sin(time + phase) * 30 +
          mouseInfluenceX * 0.3;
        const startY = -40;

        const cp1X =
          width * (0.52 - Math.sin(smoothScroll * Math.PI) * 0.3) +
          offset * 2.8 +
          Math.sin(time * 0.8 + phase) * 50 +
          mouseInfluenceX * 0.6;
        const cp1Y =
          height * (0.28 + smoothScroll * 0.2) +
          Math.cos(time * 0.9 + phase) * 40 +
          mouseInfluenceY * 0.4;

        const cp2X =
          width * (0.28 + Math.cos(smoothScroll * Math.PI * 1.5) * 0.35) +
          offset * 2.2 +
          Math.cos(time * 0.7 + phase) * 55 +
          mouseInfluenceX * 0.8;
        const cp2Y =
          height * (0.65 - smoothScroll * 0.15) +
          Math.sin(time * 0.6 + phase) * 45 +
          mouseInfluenceY * 0.6;

        const endX =
          width * (0.82 - smoothScroll * 0.45) +
          offset * 3.2 +
          Math.sin(time * 0.5 + phase) * 65 +
          mouseInfluenceX;
        const endY = height + 50;

        const t = p.t;
        const mt = 1 - t;
        const px =
          mt * mt * mt * startX +
          3 * mt * mt * t * cp1X +
          3 * mt * t * t * cp2X +
          t * t * t * endX;
        const py =
          mt * mt * mt * startY +
          3 * mt * mt * t * cp1Y +
          3 * mt * t * t * cp2Y +
          t * t * t * endY;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(235, 255, 140, ${p.alpha})`;
        ctx.shadowColor = '#ccff00';
        ctx.shadowBlur = 12;
        ctx.fill();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85 transition-opacity duration-1000"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
