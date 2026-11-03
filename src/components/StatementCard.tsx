import React from 'react';
import { motion } from 'framer-motion';

export const StatementCard: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-3xl sm:rounded-[40px] bg-[#ccff00] p-10 sm:p-20 text-center text-black overflow-hidden shadow-[0_0_80px_rgba(204,255,0,0.25)] group cursor-default"
        >
          {/* Subtle dark dot matrix grid */}
          <div className="absolute inset-0 bg-grid-dots-lime opacity-35 pointer-events-none group-hover:opacity-45 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-3xl mx-auto">
            {/* Tagline */}
            <span className="font-mono text-xs sm:text-sm tracking-widest text-black/75">
              [ what we are actually ]
            </span>

            {/* Statement Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
              The best workflow is the{' '}
              <span className="opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                one that disappears.
              </span>
            </h2>

            {/* Centered Relay Icon Badge */}
            <div className="pt-4">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#090c0a] flex items-center justify-center shadow-2xl cursor-pointer"
              >
                <svg
                  className="w-8 h-8 text-[#ccff00]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                  <polyline points="15 18 21 12 15 6" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
