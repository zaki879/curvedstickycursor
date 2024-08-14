import React, { forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';

const Headersecond = forwardRef(function index(props, ref) {
  return (
    <div className={styles.header}>
        <Magnetic>
          <div className={styles.burger}>
            <div ref={ref} className={styles.bounds}></div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Headersecond