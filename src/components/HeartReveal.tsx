'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartRevealProps {
  reason: string;
  emoji: string;
  position: { x: number; y: number };
  delay?: number;
}

export default function HeartReveal({ reason, emoji, position, delay = 0 }: HeartRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      className="fixed cursor-pointer z-10"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        delay,
        duration: 0.5,
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.2 }}
      onClick={() => setIsRevealed(true)}
    >
      <Heart className="w-8 h-8 text-pink-500 fill-pink-500 drop-shadow-lg" />
      
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-pink-200 min-w-[200px]"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{emoji}</div>
              <div className="text-gray-800 font-medium text-sm">{reason}</div>
            </div>
            <motion.button
              className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-pink-600 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsRevealed(false);
              }}
              whileHover={{ scale: 1.1 }}
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

