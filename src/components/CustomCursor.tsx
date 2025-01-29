"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Adjusted spring config for smoother movement while maintaining responsiveness
  const springConfig = { damping: 15, stiffness: 300, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Adjust cursor position to account for the cursor's center point
      // Directly use clientX and clientY without offset for more accurate positioning
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Enhanced hover detection with more precise element checking
      const hoveredElements = document.elementsFromPoint(
        e.clientX,
        e.clientY
      );
      
      const isClickable = hoveredElements.some(el => {
        const clickableElement = el.closest('a, button, [role="button"], [role="link"], input[type="submit"], .cursor-pointer');
        if (!clickableElement) return false;

        // Check if the element is actually visible and interactive
        const style = window.getComputedStyle(clickableElement);
        return style.display !== 'none' && 
               style.visibility !== 'hidden' && 
               style.pointerEvents !== 'none';
      });
      
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
        className="pointer-events-none fixed left-0 top-0 z-[9999] drop-shadow-lg"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: 'translate(-3px, -3px)',
          transformOrigin: 'top left',
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className={`relative flex items-center justify-center ${isPointer ? 'text-orange-500' : 'text-gray-800 dark:text-white'} transition-all duration-300`}
            initial={{ scale: 1 }}
            animate={{
              scale: isPointer ? 0.8 : 1,
              rotate: isPointer ? 45 : 0
            }}
          >
            <div className="absolute h-2 w-[1px] bg-current" />
            <div className="absolute h-[1px] w-2 bg-current" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}