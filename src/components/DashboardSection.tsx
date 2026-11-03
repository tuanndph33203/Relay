import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const DashboardSection: React.FC = () => {
  const [activeCell, setActiveCell] = useState<{ day: string; hour: string; runs: number } | null>(null);

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const hours = ['09', '11', '13', '15'];

  return (
    <section id="customers" className="relative py-24 sm:py-32">
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
              <span>daily view</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              A Tuesday, seen from Relay.
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 text-sm sm:text-base leading-relaxed">
            The screen people actually keep open: what ran, what is queued, and who still owes an answer.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Heatmap Matrix: this week, run by run */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <SpotlightCard className="p-6 sm:p-8 h-full shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06] font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-300">this week, run by run</span>
                  {activeCell && (
                    <span className="text-[#ccff00] bg-zinc-800/80 px-2 py-0.5 rounded border border-white/10 text-[10px]">
                      {activeCell.day} {activeCell.hour}:00 — {activeCell.runs.toLocaleString()} runs
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[#ccff00]">
                  <Clock className="w-3 h-3" />
                  <span>next run in 1m 24s</span>
                </div>
              </div>

              {/* Time Matrix */}
              <div className="space-y-3 font-mono text-xs">
                {hours.map((hour) => (
                  <div key={hour} className="flex items-center gap-4">
                    <span className="w-6 text-zinc-500">{hour}</span>
                    <div className="flex-1 grid grid-cols-7 gap-2">
                      {days.map((day, idx) => {
                        const runs = Math.floor(1200 + (idx * 317 + Number(hour) * 94) % 3800);
                        const isWeekend = idx >= 5;

                        return (
                          <motion.div
                            key={day + hour}
                            whileHover={{ scale: 1.15, zIndex: 10 }}
                            onMouseEnter={() => setActiveCell({ day, hour, runs })}
                            onMouseLeave={() => setActiveCell(null)}
                            className={`h-7 rounded-md transition-all duration-200 cursor-pointer ${
                              !isWeekend
                                ? 'bg-zinc-800/90 hover:bg-[#ccff00] hover:shadow-[0_0_15px_#ccff00] border border-white/5'
                                : 'bg-zinc-900/40 hover:bg-zinc-700 border border-white/[0.02]'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Day Labels */}
                <div className="flex items-center gap-4 pt-3 text-[11px] text-zinc-500">
                  <span className="w-6"></span>
                  <div className="flex-1 grid grid-cols-7 gap-2 text-center">
                    {days.map((d) => (
                      <span key={d} className="hover:text-white transition-colors cursor-pointer">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Hands Off Radial Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between shadow-2xl group cursor-default">
              <div className="font-mono text-xs text-zinc-400 pb-4 border-b border-white/[0.06] flex items-center justify-between">
                <span>hands off</span>
                <span className="text-[#ccff00] text-[10px]">automated</span>
              </div>

              {/* Circular Gauge */}
              <div className="flex flex-col items-center justify-center my-6">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="58"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <motion.circle
                      initial={{ strokeDashoffset: 364 }}
                      whileInView={{ strokeDashoffset: 364 * (1 - 0.75) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      cx="72"
                      cy="72"
                      r="58"
                      stroke="#ccff00"
                      strokeWidth="10"
                      strokeDasharray="364"
                      strokeLinecap="round"
                      fill="transparent"
                      className="filter drop-shadow-[0_0_12px_#ccff00]"
                    />
                  </svg>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center cursor-pointer"
                  >
                    <span className="text-3xl font-bold font-mono text-white group-hover:text-[#ccff00] transition-colors">
                      75%
                    </span>
                  </motion.div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 text-center font-mono leading-relaxed">
                of steps finish without a person in the loop
              </p>
            </SpotlightCard>
          </motion.div>

          {/* Bottom Card 1: Waiting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <SpotlightCard className="p-6 flex items-center justify-between group hover:border-[#ccff00]/40 transition-all cursor-pointer">
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400">waiting on approvals</span>
                <div className="text-3xl font-bold font-mono text-white group-hover:text-[#ccff00] transition-colors">
                  0
                </div>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#ccff00] shadow"
              >
                <CheckCircle className="w-5 h-5" />
              </motion.div>
            </SpotlightCard>
          </motion.div>

          {/* Bottom Card 2: Failed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <SpotlightCard className="p-6 flex items-center justify-between group hover:border-[#ccff00]/40 transition-all cursor-pointer">
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400">failed executions</span>
                <div className="text-3xl font-bold font-mono text-white group-hover:text-[#ccff00] transition-colors">
                  0
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_8px_#ccff00]"></span>
                <span className="text-xs font-mono text-zinc-300">clean runs</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
