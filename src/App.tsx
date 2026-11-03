import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { SplashLoader } from './components/SplashLoader';
import { LightStreamCanvas } from './components/LightStreamCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { MetricsSection } from './components/MetricsSection';
import { StatementCard } from './components/StatementCard';
import { ReliabilitySection } from './components/ReliabilitySection';
import { DashboardSection } from './components/DashboardSection';
import { PricingCalculator } from './components/PricingCalculator';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for butter-smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070908] text-[#ededed] overflow-hidden selection:bg-[#ccff00] selection:text-black">
      {/* Custom High-Tech Cursor with Magnetic Ring Matching Video */}
      <CustomCursor />

      {/* Intro Splash Animation matching the video */}
      <SplashLoader />

      {/* Background Glowing Energy Fiber Beams */}
      <LightStreamCanvas />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections with Scroll-In & Hover Effects */}
      <main className="relative z-10">
        <HeroSection />
        <TimelineSection />
        <MetricsSection />
        <StatementCard />
        <ReliabilitySection />
        <DashboardSection />
        <PricingCalculator />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
