import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/[0.06] py-16 bg-[#070908] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#ccff00] flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-[#070908]"
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
            <span className="font-semibold text-white tracking-tight">Relay</span>
            <span className="text-zinc-600 text-sm">/ The handoffs run themselves.</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Documentation</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">API Reference</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Changelog</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Security</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#ccff00]"></span>
            <span>All systems operational</span>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.04] text-center text-xs font-mono text-zinc-600">
          © {new Date().getFullYear()} Relay Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

