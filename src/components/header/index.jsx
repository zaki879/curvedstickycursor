import React, { forwardRef } from "react";
import styles from "./style.module.scss";
import Magnetic from "../magnetic";

const Header = forwardRef(function index({ isActive }, ref) {
  return (
    <div className={styles.header}>
      <Magnetic>
        <div className={`${styles.burger} ${isActive ? styles.active : ""}`}>
          <div ref={ref} className={styles.bounds}></div>
          <span className={`${styles.text} ${styles.menu}`}>
       Menu
          </span>
          <span className={`${styles.text} ${styles.close}`}>
           Close
          </span>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
