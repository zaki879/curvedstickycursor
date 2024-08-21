import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, transform, animate } from 'framer-motion';
import '../header/style.css';

export default function StickyCursor({ stickyElement, isHoverd ,isActive }) {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);

  // Define cursor size based on hover state
  const cursorSize = isHovered ? 55 : 10;

  // Define background color based on hover state
  const cursorColor = (isHoverd && isActive)  ? 'white' : '#560aff';

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1)
  };

  const smoothOptions = { damping: 20, stiffness: 250, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const rotate = useCallback((distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  }, []);

  const manageMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } = stickyElement.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      const distance = { x: clientX - center.x, y: clientY - center.y };
      rotate(distance);
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      mouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.1));
      mouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.1));
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  }, [isHovered, rotate, scale.x, scale.y, stickyElement, cursorSize]);

  const manageMouseOver = useCallback(() => {
    setIsHovered(true);
  }, []);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 }, { type: "spring" });
  }, []);

  useEffect(() => {
    const element = stickyElement.current;

    if (element) {
      element.addEventListener("mouseenter", manageMouseOver);
      element.addEventListener("mouseleave", manageMouseLeave);
    }
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
      }
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [stickyElement, manageMouseOver, manageMouseLeave, manageMouseMove]);

  const template = ({ rotate, scaleX, scaleY }) => `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;

  return (
    <div>
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
          backgroundColor: cursorColor, // Use the variable for background color
        }}
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        className="cursor"
        ref={cursor}
      />
    </div>
  );
}
