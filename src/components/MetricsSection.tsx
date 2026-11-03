import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';

export const MetricsSection: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  const days = [
    { name: 'mon', height: 48, runs: '52,100 runs' },
    { name: 'tue', height: 68, runs: '68,400 runs' },
    { name: 'wed', height: 82, runs: '84,900 runs' },
    { name: 'thu', height: 100, runs: '92,300 runs' },
    { name: 'fri', height: 18, runs: '18,500 runs' },
    { name: 'sat', height: 8, runs: '4,200 runs', highlight: true },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Every run is on the record
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Inputs, outputs and timings for 90 days. Replay any run before you trust it with money.
            </p>
          </motion.div>

          {/* Right Column: 3D Isometric Bar Chart Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-6 sm:p-10 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-10 pb-4 border-b border-white/[0.06]">
                <span className="text-zinc-400">runs per weekday</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00]"></span>
                  <span className="text-white font-medium">62,000 average</span>
                </div>
              </div>

              {/* 3D Columns Chart Area */}
              <div className="flex items-end justify-between gap-3 sm:gap-6 h-56 pt-6 px-4">
                {days.map((d) => {
                  const isHovered = hoveredDay === d.name;

                  return (
                    <div
                      key={d.name}
                      onMouseEnter={() => setHoveredDay(d.name)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className="flex-1 flex flex-col items-center gap-3 cursor-pointer group"
                    >
                      {/* Tooltip on hover */}
                      <motion.div
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 5,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-[10px] font-mono text-zinc-200 bg-zinc-800/90 px-2 py-0.5 rounded border border-white/10 shadow whitespace-nowrap"
                      >
                        {d.runs}
                      </motion.div>

                      {/* Monolithic 3D Bar representation */}
                      <div className="w-full relative flex flex-col items-center justify-end h-40">
                        {/* 3D Pillar */}
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${d.height}%` }}
                          viewport={{ once: true }}
                          animate={{
                            scaleY: isHovered ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className={`w-full max-w-[48px] rounded-t-md relative transition-all duration-300 ${
                            isHovered
                              ? 'bg-gradient-to-t from-zinc-800 to-zinc-600 border-t-2 border-[#ccff00]'
                              : d.name === 'sat'
                              ? 'bg-zinc-800 border-t border-zinc-600'
                              : 'bg-gradient-to-t from-zinc-900 to-zinc-700/80 border-t border-zinc-400/50'
                          }`}
                          style={{
                            boxShadow: isHovered
                              ? '0 0 25px rgba(204, 255, 0, 0.35)'
                              : '0 10px 30px rgba(0,0,0,0.5)',
                            transformOrigin: 'bottom',
                          }}
                        >
                          {/* 3D Top Cap Diamond / Polygon */}
                          <div
                            className={`absolute -top-2 left-0 right-0 h-3 rounded-sm transition-colors duration-200 ${
                              isHovered
                                ? 'bg-[#ccff00] shadow-[0_0_10px_#ccff00]'
                                : d.name === 'sat'
                                ? 'bg-zinc-600'
                                : 'bg-zinc-400'
                            }`}
                            style={{
                              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Day label */}
                      <span
                        className={`text-xs font-mono transition-colors ${
                          d.name === 'sat'
                            ? 'text-[#ccff00] font-semibold'
                            : isHovered
                            ? 'text-[#ccff00] font-bold'
                            : 'text-zinc-500'
                        }`}
                      >
                        {d.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
