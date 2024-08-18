import React ,{ forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';

const Headersecond = forwardRef(function index(props, ref) {
  return (
    <div >
        <Magnetic>
          <div >
            <div ref={ref} ></div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Headersecond