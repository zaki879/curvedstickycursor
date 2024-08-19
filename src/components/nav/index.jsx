import React, { useState } from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';

const navItems = [
  { title: "Home", href: "/", id: "home" },
  { title: "Projects", href: "/projects", id: "projects" },
  { title: "About", href: "/about", id: "about" },
  { title: "Contact", href: "/contact", id: "contact" },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="menuoutcontainer">
      <div className="bodyoutcontainer">
        <div onMouseLeave={() => { setSelectedIndicator(pathname); }} className="navoutcontainer">
          <div className="headeroutcontainer">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link
              key={index}
              data={{ ...data }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
