'use client';

import { motion } from 'framer-motion';

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  animation?: boolean;
}

export default function NeonText({ 
  children, 
  className = "", 
  glowColor = "#ff69b4",
  animation = true 
}: NeonTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"
        style={{
          textShadow: `
            0 0 5px ${glowColor},
            0 0 10px ${glowColor},
            0 0 15px ${glowColor},
            0 0 20px ${glowColor},
            0 0 35px ${glowColor},
            0 0 40px ${glowColor}
          `,
          filter: 'drop-shadow(0 0 10px rgba(255, 105, 180, 0.5))'
        }}
        animate={animation ? {
          textShadow: [
            `0 0 5px ${glowColor}, 0 0 10px ${glowColor}, 0 0 15px ${glowColor}, 0 0 20px ${glowColor}`,
            `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}, 0 0 40px ${glowColor}`,
            `0 0 5px ${glowColor}, 0 0 10px ${glowColor}, 0 0 15px ${glowColor}, 0 0 20px ${glowColor}`
          ]
        } : {}}
        transition={animation ? {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

