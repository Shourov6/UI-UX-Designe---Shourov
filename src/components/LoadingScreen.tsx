import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      setProgress(Math.min(100, Math.round((elapsed / 900) * 100)));
      if (elapsed < 900) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setVisible(false), 180);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -24 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0d1c] ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="w-[min(78vw,280px)] text-center">
        <motion.div
          animate={{ opacity: [0.55, 1, 0.55], scale: [0.98, 1.03, 0.98] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#d2bbff]"
        >
          Shourov / Studio
        </motion.div>
        <div className="h-px overflow-hidden bg-white/10">
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-[#7c3aed] via-[#d2bbff] to-[#ffb0cd] shadow-[0_0_18px_rgba(210,187,255,0.8)]"
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.18 }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[10px] font-mono uppercase tracking-widest text-[#958da1]">
          <span>Loading interface</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
