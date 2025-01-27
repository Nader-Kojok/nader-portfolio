"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 10, stiffness: 250, mass: 0.05 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const hoveredElement = document.elementFromPoint(
        e.clientX + 16,
        e.clientY + 16
      );
      
      const isClickable = hoveredElement?.closest('a, button, [role="button"]');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [cursorX, cursorY]);


  return (
    <>
      <style jsx global>{`
        body * {
          cursor: none !important;
        }
      `}</style>
      
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 drop-shadow-lg"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
        }}
      >
        <motion.div
          className={`absolute -inset-1 rounded-full ${isPointer ? 'bg-orange-500/10' : 'bg-gray-800/10 dark:bg-white/10'} blur-sm transition-opacity duration-500 ${isPointer ? 'opacity-100' : 'opacity-0'}`}
          style={{
            scale: 1.5,
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />
        <motion.div
          className={`h-6 w-6 rounded-full border-2 ${isPointer ? 'border-orange-500' : 'border-gray-800 dark:border-white'} transition-colors duration-300`}
          initial={{ scale: 1 }}
          animate={{
            scale: isPointer ? 1.2 : 1,
          }}
        />
        <motion.div
          className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${isPointer ? 'bg-orange-500' : 'bg-gray-800 dark:bg-white'} transition-all duration-300`}
          initial={{ scale: 1 }}
          animate={{
            scale: isPointer ? 0.5 : 1,
          }}
        />
      </motion.div>
    </>
  );
}