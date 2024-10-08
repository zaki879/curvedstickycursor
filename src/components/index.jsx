'use client';
import styles from './style.module.scss';
import './style.css';
import React ,{ useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [pathname, isActive]); // Added 'isActive' for completeness

  return (
    <>
      <div className="main">
        <div className="header">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
          
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ''
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}
