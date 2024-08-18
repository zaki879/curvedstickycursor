"use client";
import { forwardRef } from "react";
import styles from "./style.module.scss";
import { useRef, useEffect, useState } from "react";
import Header from "../components/header";
import StickyCursor from "../components/stickyCursor";
import Headersecond from "../components/headersecond";
import Nav from "../components/nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function SideBar() {
    const [isActive, setIsActive] = useState(false);
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
  return  (
    <main className={styles.main}>
      <div className={styles.header}>
        <div
          ref={buttonRef}
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
          className={styles.button}
        >
          <Header ref={stickyElement} isActive={isActive} />
          <Headersecond ref={stickyElement1} />
          <StickyCursor stickyElement={stickyElement} />
          <StickyCursor stickyElement={stickyElement1} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <div ref={navRef}>
            <Nav />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

