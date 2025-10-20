'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface FireworksProps {
  isActive: boolean;
  onComplete?: () => void;
}

export default function Fireworks({ isActive, onComplete }: FireworksProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (isActive) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
        onComplete?.();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive || !showConfetti) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
        gravity={0.3}
        initialVelocityY={20}
        colors={['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff69b4']}
      />
      
      {/* Custom firework animations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            ease: "easeOut"
          }}
        >
          <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
}

