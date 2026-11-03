import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070908]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#ccff00] flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(204,255,0,0.3)]">
            <svg
              className="w-4 h-4 text-[#070908]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
              <polyline points="15 18 21 12 15 6" />
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-tight text-white group-hover:text-[#ccff00] transition-colors">
            Relay
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a
            href="#product"
            className="hover:text-white transition-colors duration-200"
          >
            Product
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors duration-200"
          >
            How it works
          </a>
          <a
            href="#customers"
            className="hover:text-white transition-colors duration-200"
          >
            Customers
          </a>
          <a
            href="#pricing"
            className="hover:text-white transition-colors duration-200"
          >
            Pricing
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3.5">
          {/* Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
            </span>
            <span>all systems normal</span>
          </div>

          {/* Start Free CTA */}
          <a
            href="#pricing"
            className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-xs sm:text-sm transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  );
};

