import React, { forwardRef, useEffect, useState } from "react";
import Magnetic from "../magnetic";
import { Toggle_Menu } from "../../../utils/pen";
import "./style.css";

const Header = forwardRef(function index({ isActive }, ref) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      // Initialize the Button_Nav state on first render
      Toggle_Menu();
      setInitialized(true);
    } else {
      // Toggle when isActive changes
      !isActive ? Toggle_Menu() : Toggle_Menu();
    }
  }, [isActive, initialized]);

  const handleClick = () => {
    Toggle_Menu();
  };
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!isActive) {
      const timer = setTimeout(() => {
        setShowMenu(true);
      }, 1000); // Show the menu after 4 seconds

      // Clear the timeout if `isActive` becomes true before 4 seconds
      return () => clearTimeout(timer);
    } else {
      setShowMenu(false);
    }
  }, [isActive]);

  return (
    <div
    className="containerheader"
    >
    
    
    {!isActive ? (
  <span key={isActive} className="menutext"> Menu</span>
) : (
  <span></span>
)}

   

      <div className="containericon" >
        <Magnetic>
          <div
            className={`burger ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <div ref={ref} className="bounds" onClick={handleClick}></div>
            <div className="btnoutcontainero" id="Button_Nav"></div>{" "}
            {/* Moved outside the burger */}
          </div>
        </Magnetic>
      </div>
    </div>
  );
});

export default Header;
