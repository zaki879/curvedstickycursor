import React, { forwardRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "../magnetic";
import { Toggle_Menu } from "../../../utils/pen";
import "./style.css";

const Header = forwardRef(function index({ isActive }, ref) {
  const [initialized, setInitialized] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (!initialized) {
      Toggle_Menu();
      setInitialized(true);
    } else {
      Toggle_Menu();
    }
  }, [isActive, initialized]);

  const handleClick = () => {
    Toggle_Menu();
    setShowOverlay((prev) => !prev);
  };

  useEffect(() => {
    if (isActive) {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [isActive]);

  return (
    <div className="containerheader">
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="overlay"
            style={{ backgroundColor: "rgba(76, 0, 0, 0.5)" }} // Inline style to change background color
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }} 
            transition={{ duration: 0.5 }} 
          ></motion.div>
        )}
      </AnimatePresence>
      {!isActive ? (
        <span key={isActive} className="menutext">
          Menu
        </span>
      ) : (
        <span></span>
      )}

      <div className="containericon">
        <Magnetic>
          <div
            className={`burger ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <div ref={ref} className="bounds" onClick={handleClick}></div>
            <div className="btnoutcontainero" id="Button_Nav"></div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
});

export default Header;
