'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 4,
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    };

    const interval = setInterval(createHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
          initial={{ 
            y: 0, 
            opacity: 0, 
            scale: 0,
            rotate: 0 
          }}
          animate={{ 
            y: -window.innerHeight - 100,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: 360
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeOut"
          }}
        >
          <Heart 
            className="text-pink-400 fill-pink-400 drop-shadow-lg"
            style={{ 
              width: heart.size, 
              height: heart.size 
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

