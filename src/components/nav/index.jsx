import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Curve from './Curve';

export default function Nav() { // Renamed the function to start with an uppercase letter
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname); // Correctly using useState

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
