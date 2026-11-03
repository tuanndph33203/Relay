import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { WorkflowCanvas } from './WorkflowCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-7"
          >
            {/* Open Beta Pill */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 hover:border-[#ccff00]/40 text-xs font-mono text-zinc-300 cursor-pointer transition-colors shadow-sm"
            >
              <span className="w-2 h-2 rounded-[2px] bg-[#ccff00] animate-pulse"></span>
              <span>open beta / 240 apps connected</span>
            </motion.div>

            {/* Headline with Staggered reveal */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.08]">
              The handoffs run{' '}
              <span className="font-serif italic font-normal tracking-normal text-white inline-block transition-transform duration-300 hover:text-[#ccff00]">
                themselves.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed">
              Relay runs the steps between your apps and only pings a person when it matters.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(204,255,0,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-sm transition-colors duration-200 shadow-[0_0_25px_rgba(204,255,0,0.25)]"
              >
                Start free
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => alert("Watch build demo video: 2 minutes preview.")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-sm font-medium transition-all duration-200 shadow-sm group"
              >
                <Play className="w-3.5 h-3.5 fill-current text-zinc-400 group-hover:text-[#ccff00] transition-colors" />
                <span>Watch a build, 2 minutes</span>
              </motion.button>
            </div>

            {/* Guarantee text */}
            <p className="text-xs font-mono text-zinc-500 pt-1">
              free for 14 days / no card / no call with sales
            </p>

            {/* Connects to ecosystem */}
            <div className="pt-8 flex flex-col gap-2.5">
              <div className="text-[11px] font-mono text-zinc-500 tracking-wider">connects to 24+</div>
              <div className="flex items-center gap-3">
                {[
                  { name: 'SL', label: 'Slack', active: true },
                  { name: 'ST', label: 'Stripe' },
                  { name: 'PG', label: 'Postgres' },
                  { name: 'HS', label: 'HubSpot' },
                ].map((app) => (
                  <motion.div
                    key={app.name}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center font-mono text-xs font-bold cursor-pointer transition-all ${
                      app.active
                        ? 'bg-zinc-900 border-[#ccff00]/60 text-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                        : 'bg-zinc-900/90 border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                    }`}
                    title={app.label}
                  >
                    {app.name}
                  </motion.div>
                ))}
                <span className="text-zinc-600 text-xs font-mono pl-1 hover:text-zinc-400 transition-colors cursor-pointer">
                  +20 more
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Workflow Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient neon backdrop glow */}
            <div className="absolute -inset-4 bg-[#ccff00]/10 rounded-full blur-3xl opacity-60 -z-10" />
            <WorkflowCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
