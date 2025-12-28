'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      
      // Check if element or any parent is interactive
      const isInteractive = (element: HTMLElement | null): boolean => {
        if (!element) return false;
        
        const tag = element.tagName.toLowerCase();
        const role = element.getAttribute('role');
        const cursor = window.getComputedStyle(element).cursor;
        
        return (
          tag === 'button' ||
          tag === 'a' ||
          tag === 'input' ||
          tag === 'textarea' ||
          tag === 'select' ||
          role === 'button' ||
          cursor === 'pointer' ||
          element.onclick !== null ||
          element.classList.contains('cursor-pointer')
        );
      };
      
      // Check element and up to 3 parents
      let current: HTMLElement | null = target;
      let found = false;
      for (let i = 0; i < 3 && current; i++) {
        if (isInteractive(current)) {
          found = true;
          break;
        }
        current = current.parentElement;
      }
      
      setIsPointer(found);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-[#5D0D18] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor follower */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#5D0D18] rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  );
}
