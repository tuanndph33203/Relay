import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reveal main page after a brief flash/scale intro matching the video
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.85,
            filter: 'blur(10px)',
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070908] cursor-pointer"
        >
          {/* Lime Card with Relay logo icon */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-[90vw] max-w-[420px] aspect-[4/3] rounded-3xl bg-[#ccff00] flex items-center justify-center shadow-[0_0_60px_rgba(204,255,0,0.3)] relative overflow-hidden"
          >
            {/* Subtle grid pattern inside */}
            <div className="absolute inset-0 bg-grid-dots-lime opacity-40 pointer-events-none" />

            {/* Central icon container */}
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-[#0a0d0a] flex items-center justify-center shadow-lg relative z-10"
            >
              <svg
                className="w-9 h-9 text-[#ccff00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
                <polyline points="15 18 21 12 15 6" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

