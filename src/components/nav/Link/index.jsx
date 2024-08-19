import React from 'react';
import './style.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index, id } = data;

  return (
    <motion.div
      id={id}
      className="linkoutcontainer"
      onMouseEnter={() => { setSelectedIndicator(href); }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator"
      ></motion.div>
      <Link href={href} className="pseudo-text-effect" data-after={title}>
        <span>{title}</span>
      </Link>
    </motion.div>
  );
}
