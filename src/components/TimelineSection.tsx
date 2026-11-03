import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const TimelineSection: React.FC = () => {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
              <span>content service</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Most of a process is{' '}
              <span className="font-serif italic font-normal text-white">
                glue.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 text-sm sm:text-base leading-relaxed">
            Copy this into that. Check it went through. Ask Dana if it is fine.
            Relay takes the glue and leaves you the decisions.
          </p>
        </motion.div>

        {/* 2-Column Content: Feature details & Execution Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              One canvas, every branch
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Drop a trigger, add a condition, split the path. A step that fails at 3am is retried four times without waking the team.
            </p>
          </motion.div>

          {/* Right Card: run 41982 Timeline bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400 pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-200 font-semibold">run 41982</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-[#ccff00]">72 ms execution</span>
                </div>
                <button
                  onClick={() => setReplayKey((prev) => prev + 1)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.05] hover:bg-white/10 hover:text-white transition-all text-[11px] text-zinc-400"
                  title="Replay execution animation"
                >
                  <RotateCcw className="w-3 h-3 text-[#ccff00]" />
                  <span>replay</span>
                </button>
              </div>

              {/* Progress Steps Breakdown */}
              <div key={replayKey} className="py-6 space-y-4 font-mono text-xs">
                {/* Step 1 */}
                <div className="flex items-center justify-between gap-4 group cursor-pointer hover:bg-white/[0.02] p-1 rounded transition-colors">
                  <span className="w-32 text-zinc-300 group-hover:text-white">read refund</span>
                  <div className="flex-1 h-3 rounded-full bg-zinc-900 overflow-hidden relative border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '42%' }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-[#ccff00] rounded-full shadow-[0_0_12px_#ccff00]"
                    />
                  </div>
                  <span className="w-12 text-right text-[#ccff00] font-semibold">72 ms</span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center justify-between gap-4 group cursor-pointer hover:bg-white/[0.02] p-1 rounded transition-colors">
                  <span className="w-32 text-zinc-400 group-hover:text-zinc-300">check amount</span>
                  <div className="flex-1 h-3 rounded-full bg-zinc-900/60 overflow-hidden">
                    <div className="w-1.5 h-full bg-zinc-600 rounded-full" />
                  </div>
                  <span className="w-12 text-right text-zinc-500 font-mono">0 ms</span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center justify-between gap-4 group cursor-pointer hover:bg-white/[0.02] p-1 rounded transition-colors">
                  <span className="w-32 text-zinc-400 group-hover:text-zinc-300">branch, over 5000</span>
                  <div className="flex-1 h-3 rounded-full bg-zinc-900/60 overflow-hidden">
                    <div className="w-1.5 h-full bg-zinc-600 rounded-full" />
                  </div>
                  <span className="w-12 text-right text-zinc-500 font-mono">0 ms</span>
                </div>

                {/* Step 4 */}
                <div className="flex items-center justify-between gap-4 group cursor-pointer hover:bg-white/[0.02] p-1 rounded transition-colors">
                  <span className="w-32 text-zinc-400 group-hover:text-zinc-300">ask finance</span>
                  <div className="flex-1 h-3 rounded-full bg-zinc-900/60 overflow-hidden">
                    <div className="w-1.5 h-full bg-zinc-600 rounded-full" />
                  </div>
                  <span className="w-12 text-right text-zinc-500 font-mono">-</span>
                </div>
              </div>

              {/* Scale Ticks */}
              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-600 px-32">
                <span>0</span>
                <span>50</span>
                <span>100</span>
                <span>150</span>
                <span>200 ms</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
