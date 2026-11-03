import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const PricingCalculator: React.FC = () => {
  // Slider index: 0 = 3,000, 1 = 30,000, 2 = 300,000
  const [sliderIndex, setSliderIndex] = useState<number>(1);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$29',
      runs: '3,000 runs a month',
      workflows: '10 workflows',
      history: '7 days of run history',
      support: 'email support',
      cta: 'Start free',
      mostPicked: false,
    },
    {
      id: 'team',
      name: 'Team',
      price: '$89',
      runs: '30,000 runs a month',
      workflows: 'unlimited workflows',
      history: '90 days of run history',
      support: 'Slack approvals and code steps',
      cta: 'Start free',
      mostPicked: true,
    },
    {
      id: 'scale',
      name: 'Scale',
      price: '$290',
      runs: '300,000 runs a month',
      workflows: 'single sign on and audit log',
      history: '1 year of run history',
      support: 'named engineer, 4 hour response',
      cta: 'Talk to us',
      mostPicked: false,
    },
  ];

  const currentPlan = plans[sliderIndex];

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Calculator Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SpotlightCard className="p-6 sm:p-10 mb-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-white/[0.06]">
              {/* Left: Estimate Question */}
              <div className="md:col-span-7 space-y-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  estimate
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  How many runs do you expect a month?
                </h3>
              </div>

              {/* Right: Selected Plan Summary */}
              <div className="md:col-span-5 flex items-center justify-between md:justify-end gap-6">
                <div className="space-y-1 text-right">
                  <div className="text-xs font-mono text-zinc-400">
                    your plan:{' '}
                    <span className="text-white font-medium">{currentPlan.name}</span>
                  </div>
                  <div className="text-3xl font-bold text-white flex items-baseline justify-end gap-1.5 font-mono">
                    <span className="text-[#ccff00]">{currentPlan.price}</span>
                    <span className="text-xs text-zinc-500 font-sans">a month</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {currentPlan.runs.replace(' a month', '')} included
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(204,255,0,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer"
                >
                  Start free
                </motion.button>
              </div>
            </div>

            {/* Interactive Range Slider */}
            <div className="pt-8 px-2">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={sliderIndex}
                  onChange={(e) => setSliderIndex(Number(e.target.value))}
                  className="w-full h-3 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#ccff00] focus:outline-none transition-all"
                  style={{
                    background: `linear-gradient(to right, #ccff00 0%, #ccff00 ${
                      sliderIndex === 0 ? '0%' : sliderIndex === 1 ? '50%' : '100%'
                    }, #18181b ${
                      sliderIndex === 0 ? '0%' : sliderIndex === 1 ? '50%' : '100%'
                    }, #18181b 100%)`,
                  }}
                />
              </div>

              {/* Slider Ticks */}
              <div className="flex justify-between font-mono text-xs text-zinc-500 pt-3">
                <button
                  onClick={() => setSliderIndex(0)}
                  className={`transition-all hover:scale-105 cursor-pointer ${sliderIndex === 0 ? 'text-[#ccff00] font-bold text-sm' : 'hover:text-zinc-300'}`}
                >
                  3,000
                </button>
                <button
                  onClick={() => setSliderIndex(1)}
                  className={`transition-all hover:scale-105 cursor-pointer ${sliderIndex === 1 ? 'text-[#ccff00] font-bold text-sm' : 'hover:text-zinc-300'}`}
                >
                  30,000
                </button>
                <button
                  onClick={() => setSliderIndex(2)}
                  className={`transition-all hover:scale-105 cursor-pointer ${sliderIndex === 2 ? 'text-[#ccff00] font-bold text-sm' : 'hover:text-zinc-300'}`}
                >
                  300,000
                </button>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* 3 Pricing Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => {
            const isSelected = sliderIndex === idx;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => setSliderIndex(idx)}
                className="cursor-pointer"
              >
                <SpotlightCard
                  className={`relative p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 ${
                    isSelected
                      ? 'border-2 border-[#ccff00] shadow-[0_0_40px_rgba(204,255,0,0.2)]'
                      : 'hover:border-[#ccff00]/40'
                  }`}
                  spotlightColor={isSelected ? 'rgba(204, 255, 0, 0.22)' : 'rgba(204, 255, 0, 0.12)'}
                >
                  {/* Most picked badge */}
                  {p.mostPicked && (
                    <div className="absolute top-6 right-6">
                      <span className="px-2.5 py-1 rounded-full bg-[#ccff00] text-black font-semibold text-[11px] font-mono shadow-[0_0_15px_rgba(204,255,0,0.4)]">
                        most picked
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="text-zinc-400 font-mono text-xs uppercase tracking-wider mb-2">
                      {p.name}
                    </div>

                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold font-mono text-white group-hover:text-[#ccff00]">
                        {p.price}
                      </span>
                      <span className="text-xs text-zinc-500 font-sans">a month</span>
                    </div>

                    {/* Feature Checklist */}
                    <ul className="space-y-3.5 text-xs text-zinc-300 mb-8">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#ccff00] shrink-0" />
                        <span>{p.runs}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#ccff00] shrink-0" />
                        <span>{p.workflows}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#ccff00] shrink-0" />
                        <span>{p.history}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#ccff00] shrink-0" />
                        <span>{p.support}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card CTA button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-full text-xs font-semibold font-mono tracking-wide transition-all ${
                      isSelected
                        ? 'bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {p.cta}
                  </motion.button>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
