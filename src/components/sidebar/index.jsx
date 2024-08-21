"use client";
import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import Header from '../header';
import StickyCursor from '../stickyCursor';
import Headersecond from '../headersecond';
import Nav from '../nav';
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";


export default function SideBar() {
    const [isActive, setIsActive] = useState(false);
    const [isHoverd, setIsHoverd] = useState(false);
    const pathname = usePathname();
    const stickyElement = useRef(null);
    const stickyElement1 = useRef(null);
    const navRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        if (isActive) setIsActive(false);
      }, [pathname]);
    
      useEffect(() => {
        function handleClickOutside(event) {
          if (
            navRef.current && 
            !navRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
          ) {
            setIsActive(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
      // Event handlers to update isHoverd
    const handleMouseEnter = () => setIsHoverd(true);
    const handleMouseLeave = () => setIsHoverd(false);
  return  (
    <main className="main">
      <div className="header">
        <div
          ref={buttonRef}
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
         
        >
          <Header ref={stickyElement} isActive={isActive} />
          <Headersecond ref={stickyElement1} />
          <StickyCursor stickyElement={stickyElement} isHoverd={isHoverd}/>
          <StickyCursor stickyElement={stickyElement1} isHoverd={isHoverd}/>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <div    ref={navRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
            <Nav />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

