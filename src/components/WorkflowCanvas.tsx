import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer, Plus, CornerDownRight, Clock, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const WorkflowCanvas: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <SpotlightCard className="w-full shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      {/* Canvas Top Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] text-xs font-mono text-zinc-400 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <span className="text-zinc-200 font-medium hover:text-[#ccff00] transition-colors cursor-pointer">
            Refunds over 5000
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">3 steps / 1 branch</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#ccff00]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
            </span>
            <span className="text-[11px] tracking-wide">running</span>
          </div>
          <span className="text-zinc-500 hover:text-white transition-colors cursor-pointer">100%</span>
        </div>
      </div>

      {/* Main Canvas Body */}
      <div className="relative p-6 sm:p-8 min-h-[330px] flex items-center justify-center overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-dots opacity-25 pointer-events-none" />

        {/* Left vertical floating tool pallet */}
        <div className="absolute left-4 top-6 flex flex-col gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-white/10 z-20 shadow-lg">
          <button
            title="Select tool"
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-[#ccff00] hover:text-black transition-all hover:scale-105 active:scale-95"
          >
            <MousePointer className="w-3.5 h-3.5" />
          </button>
          <button
            title="Add step"
            className="p-2 rounded-lg text-zinc-400 hover:text-black hover:bg-[#ccff00] transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            title="Branch"
            className="p-2 rounded-lg text-zinc-400 hover:text-black hover:bg-[#ccff00] transition-all hover:scale-105 active:scale-95"
          >
            <CornerDownRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Node graph workflow */}
        <div className="relative w-full max-w-[540px] h-[220px]">
          {/* SVG Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Connection: Stripe -> Condition */}
            <path
              d="M 120 70 C 160 70, 160 50, 200 50"
              fill="none"
              stroke={hoveredNode === 1 || hoveredNode === 2 ? '#ccff00' : 'rgba(255, 255, 255, 0.2)'}
              strokeWidth={hoveredNode === 1 || hoveredNode === 2 ? '2.4' : '1.8'}
              className="transition-all duration-300"
            />
            {/* Condition -> Ask Finance (True branch) */}
            <path
              d="M 330 50 C 370 50, 370 90, 410 90"
              fill="none"
              stroke={hoveredNode === 4 || hoveredNode === 2 ? '#ccff00' : 'rgba(204, 255, 0, 0.6)'}
              strokeWidth={hoveredNode === 4 ? '2.4' : '1.8'}
              strokeDasharray="4 4"
              className="animate-pulse transition-all duration-300"
            />
            {/* Condition -> Log Postgres (Else branch) */}
            <path
              d="M 330 50 C 350 50, 350 140, 380 140"
              fill="none"
              stroke={hoveredNode === 3 ? '#ccff00' : 'rgba(255, 255, 255, 0.15)'}
              strokeWidth={hoveredNode === 3 ? '2.4' : '1.5'}
              className="transition-all duration-300"
            />

            {/* Glowing animated pulse particle moving along branch */}
            <circle r="4" fill="#ccff00" className="filter drop-shadow-[0_0_10px_#ccff00]">
              <animateMotion
                path="M 120 70 C 160 70, 160 50, 200 50 C 265 50, 265 50, 330 50 C 370 50, 370 90, 410 90"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Node 1: Refund Created (Stripe) */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHoveredNode(1)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setActiveStep(1)}
            className={`absolute left-0 top-[40px] px-4 py-2.5 rounded-xl border text-xs cursor-pointer transition-all duration-300 z-10 ${
              activeStep === 1
                ? 'bg-zinc-800/95 border-[#ccff00] shadow-[0_0_25px_rgba(204,255,0,0.25)]'
                : 'bg-zinc-900/90 border-white/10 hover:border-[#ccff00]/60 hover:shadow-[0_0_15px_rgba(204,255,0,0.15)]'
            }`}
          >
            <div className="text-zinc-200 font-medium flex items-center gap-1.5">
              <span>Refund created</span>
              {activeStep === 1 && <Sparkles className="w-3 h-3 text-[#ccff00] animate-spin" />}
            </div>
            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">stripe</div>
          </motion.div>

          {/* Branch Pill: Condition Label */}
          <div className="absolute left-[165px] top-[30px] px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-white/10 text-zinc-400 z-10 shadow">
            true
          </div>

          {/* Node 2: Amount over 5000 (Condition) */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHoveredNode(2)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setActiveStep(2)}
            className={`absolute left-[185px] top-[22px] px-4 py-2.5 rounded-xl border text-xs cursor-pointer transition-all duration-300 z-10 ${
              activeStep === 2
                ? 'bg-zinc-800/95 border-[#ccff00] shadow-[0_0_25px_rgba(204,255,0,0.25)]'
                : 'bg-zinc-900/90 border-white/10 hover:border-[#ccff00]/60 hover:shadow-[0_0_15px_rgba(204,255,0,0.15)]'
            }`}
          >
            <div className="text-zinc-200 font-medium">Amount over 5000</div>
            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">condition</div>
          </motion.div>

          {/* Branch Pill: Else */}
          <div className="absolute left-[340px] top-[100px] px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-white/10 text-zinc-500 z-10 shadow">
            else
          </div>

          {/* Node 3: Log to warehouse (Postgres) */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHoveredNode(3)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setActiveStep(3)}
            className={`absolute left-[360px] top-[120px] px-4 py-2.5 rounded-xl border text-xs cursor-pointer transition-all duration-300 z-10 ${
              activeStep === 3
                ? 'bg-zinc-800/95 border-[#ccff00] shadow-[0_0_25px_rgba(204,255,0,0.25)]'
                : 'bg-zinc-900/90 border-white/10 hover:border-[#ccff00]/60 hover:shadow-[0_0_15px_rgba(204,255,0,0.15)]'
            }`}
          >
            <div className="text-zinc-200 font-medium">Log to warehouse</div>
            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">postgres</div>
          </motion.div>

          {/* Node 4: Ask finance (Waiting on a yes) */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHoveredNode(4)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setActiveStep(4)}
            className={`absolute left-[390px] top-[60px] px-4 py-2.5 rounded-xl border text-xs cursor-pointer transition-all duration-300 z-10 ${
              activeStep === 4
                ? 'bg-zinc-800/95 border-[#ccff00] shadow-[0_0_25px_rgba(204,255,0,0.25)]'
                : 'bg-zinc-900/90 border-white/10 hover:border-[#ccff00]/60 hover:shadow-[0_0_15px_rgba(204,255,0,0.15)]'
            }`}
          >
            <div className="text-zinc-200 font-medium">Ask finance</div>
            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">waiting on a yes</div>
            <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-[10px] text-zinc-300 font-mono group-hover:border-[#ccff00]/40">
              <Clock className="w-2.5 h-2.5 text-[#ccff00]" />
              <span>26 min</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Canvas Bottom Drawer: Last Runs Terminal */}
      <div className="px-5 py-3.5 border-t border-white/[0.06] bg-black/40 font-mono text-xs">
        <div className="text-zinc-500 text-[11px] uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>last runs</span>
          <span className="text-[10px] text-zinc-600">live stream</span>
        </div>
        <div className="space-y-1.5 text-zinc-400">
          <div className="flex items-center justify-between hover:text-white hover:bg-white/[0.04] p-1 rounded transition-all cursor-pointer group">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] group-hover:scale-150 transition-transform"></span>
              <span className="text-zinc-500 group-hover:text-zinc-300">09:41:02</span>
              <span className="group-hover:text-[#ccff00]">refunds over 5000</span>
            </div>
            <span className="text-zinc-500 font-mono group-hover:text-white">129 ms</span>
          </div>

          <div className="flex items-center justify-between hover:text-white hover:bg-white/[0.04] p-1 rounded transition-all cursor-pointer group">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] group-hover:scale-150 transition-transform"></span>
              <span className="text-zinc-500 group-hover:text-zinc-300">09:38:57</span>
              <span className="group-hover:text-[#ccff00]">weekly export</span>
            </div>
            <span className="text-zinc-500 font-mono group-hover:text-white">2.1 s</span>
          </div>

          <div className="flex items-center justify-between hover:text-white hover:bg-white/[0.04] p-1 rounded transition-all cursor-pointer group">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] group-hover:scale-150 transition-transform"></span>
              <span className="text-zinc-500 group-hover:text-zinc-300">09:31:14</span>
              <span className="group-hover:text-[#ccff00]">invoice reminder</span>
            </div>
            <span className="text-zinc-500 font-mono group-hover:text-white">410 ms</span>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
