import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const ReliabilitySection: React.FC = () => {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
              <span>reliability</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              <span className="font-serif italic font-normal text-white">Boring</span>{' '}
              in the ways that matter.
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 text-sm sm:text-base leading-relaxed">
            Credentials, retries, rate limits, residency. The parts nobody demos, and the parts that decide the year.
          </p>
        </motion.div>

        {/* 2 Feature Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: One runtime, every app */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between h-full shadow-2xl">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  One runtime, every app
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Relay holds the credentials, retries and rate limits, so a step behaves the same on Stripe or on the API you wrote last week.
                </p>
              </div>

              {/* Visual Integration Hub */}
              <div className="relative my-6 h-56 rounded-2xl bg-black/40 border border-white/[0.04] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-dots opacity-25 pointer-events-none" />

                {/* Connecting SVG lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line
                    x1="26%"
                    y1="30%"
                    x2="50%"
                    y2="50%"
                    stroke={hoveredApp === 'st' ? '#ccff00' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={hoveredApp === 'st' ? '2.5' : '1.5'}
                    strokeDasharray={hoveredApp === 'st' ? 'none' : '4 4'}
                    className="transition-all duration-300"
                  />
                  <line
                    x1="20%"
                    y1="70%"
                    x2="50%"
                    y2="50%"
                    stroke={hoveredApp === 'sl' ? '#ccff00' : '#ccff00'}
                    strokeWidth={hoveredApp === 'sl' ? '2.5' : '1.8'}
                    strokeDasharray="4 4"
                    className="transition-all duration-300 animate-pulse"
                  />
                  <line
                    x1="74%"
                    y1="30%"
                    x2="50%"
                    y2="50%"
                    stroke={hoveredApp === 'pg' ? '#ccff00' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={hoveredApp === 'pg' ? '2.5' : '1.5'}
                    strokeDasharray={hoveredApp === 'pg' ? 'none' : '4 4'}
                    className="transition-all duration-300"
                  />
                  <line
                    x1="80%"
                    y1="70%"
                    x2="50%"
                    y2="50%"
                    stroke={hoveredApp === 'hs' ? '#ccff00' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={hoveredApp === 'hs' ? '2.5' : '1.5'}
                    strokeDasharray={hoveredApp === 'hs' ? 'none' : '4 4'}
                    className="transition-all duration-300"
                  />
                </svg>

                {/* Node: Stripe */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  onMouseEnter={() => setHoveredApp('st')}
                  onMouseLeave={() => setHoveredApp(null)}
                  className="absolute left-[20%] top-[20%] flex flex-col items-center cursor-pointer"
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono transition-all ${
                    hoveredApp === 'st' ? 'bg-[#ccff00] text-black shadow-[0_0_15px_#ccff00]' : 'bg-zinc-900 border border-white/20 text-zinc-300'
                  }`}>
                    ST
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 mt-1">stripe</span>
                </motion.div>

                {/* Node: Slack */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  onMouseEnter={() => setHoveredApp('sl')}
                  onMouseLeave={() => setHoveredApp(null)}
                  className="absolute left-[14%] top-[62%] flex flex-col items-center cursor-pointer"
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono transition-all ${
                    hoveredApp === 'sl' ? 'bg-[#ccff00] text-black shadow-[0_0_15px_#ccff00]' : 'bg-zinc-900 border border-[#ccff00]/60 text-[#ccff00]'
                  }`}>
                    SL
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 mt-1">slack</span>
                </motion.div>

                {/* Node: Postgres */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  onMouseEnter={() => setHoveredApp('pg')}
                  onMouseLeave={() => setHoveredApp(null)}
                  className="absolute right-[20%] top-[20%] flex flex-col items-center cursor-pointer"
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono transition-all ${
                    hoveredApp === 'pg' ? 'bg-[#ccff00] text-black shadow-[0_0_15px_#ccff00]' : 'bg-zinc-900 border border-white/20 text-zinc-300'
                  }`}>
                    PG
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 mt-1">postgres</span>
                </motion.div>

                {/* Node: HubSpot */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  onMouseEnter={() => setHoveredApp('hs')}
                  onMouseLeave={() => setHoveredApp(null)}
                  className="absolute right-[14%] top-[62%] flex flex-col items-center cursor-pointer"
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono transition-all ${
                    hoveredApp === 'hs' ? 'bg-[#ccff00] text-black shadow-[0_0_15px_#ccff00]' : 'bg-zinc-900 border border-white/20 text-zinc-300'
                  }`}>
                    HS
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 mt-1">hubspot</span>
                </motion.div>

                {/* Central Relay Icon */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 90 }}
                  className="w-14 h-14 rounded-2xl bg-[#ccff00] flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.5)] z-10 cursor-pointer"
                >
                  <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="9 18 15 12 9 6" />
                    <polyline points="15 18 21 12 15 6" />
                  </svg>
                </motion.div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04]">
                <span>one runtime, every conn</span>
                <span className="text-zinc-400">active encryption</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Runs where your data lives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between h-full shadow-2xl">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Runs where your data lives
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Pick Frankfurt, Virginia or Sydney. Payloads and logs stay in the region you chose, and the audit trail says so in writing.
                </p>
              </div>

              {/* Region progress sliders */}
              <div className="space-y-6 my-6 font-mono text-xs">
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
                  where runs executed
                </div>

                {/* eu-central-1 */}
                <div
                  onMouseEnter={() => setHoveredRegion('eu')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="space-y-2 cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="font-medium group-hover:text-white">eu-central-1</span>
                      <span className="text-[10px] text-zinc-500 font-sans">Frankfurt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {hoveredRegion === 'eu' && (
                        <span className="text-[10px] text-zinc-400 font-mono">14ms ping</span>
                      )}
                      <span className="text-[#ccff00] font-bold">46%</span>
                    </div>
                  </div>
                  <div className="h-2.5 rounded-full bg-zinc-900 overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '46%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-[#ccff00] rounded-full shadow-[0_0_12px_#ccff00]"
                    />
                  </div>
                </div>

                {/* us-east-1 */}
                <div
                  onMouseEnter={() => setHoveredRegion('us')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="space-y-2 cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="font-medium group-hover:text-white">us-east-1</span>
                      <span className="text-[10px] text-zinc-500 font-sans">Virginia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {hoveredRegion === 'us' && (
                        <span className="text-[10px] text-zinc-400 font-mono">68ms ping</span>
                      )}
                      <span className="text-zinc-400">37%</span>
                    </div>
                  </div>
                  <div className="h-2.5 rounded-full bg-zinc-900 overflow-hidden relative border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '37%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-zinc-600 group-hover:bg-[#ccff00]/70 rounded-full transition-colors"
                    />
                  </div>
                </div>

                {/* ap */}
                <div
                  onMouseEnter={() => setHoveredRegion('ap')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="space-y-2 cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="font-medium group-hover:text-white">ap</span>
                      <span className="text-[10px] text-zinc-500 font-sans">Sydney</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {hoveredRegion === 'ap' && (
                        <span className="text-[10px] text-zinc-400 font-mono">112ms ping</span>
                      )}
                      <span className="text-zinc-400">16%</span>
                    </div>
                  </div>
                  <div className="h-2.5 rounded-full bg-zinc-900 overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '16%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-zinc-700 group-hover:bg-[#ccff00]/70 rounded-full transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04]">
                <Lock className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>SOC2 Type II & GDPR compliant</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
