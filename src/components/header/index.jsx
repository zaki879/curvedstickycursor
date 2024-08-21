import React, { forwardRef, useEffect, useState } from "react";
import Magnetic from "../magnetic";
import { Toggle_Menu } from "../../../utils/pen";
import "./style.css";

const Header = forwardRef(function index({ isActive, isHoverd, setIsHoverd }, ref) {
  const [initialized, setInitialized] = useState(false);
  const handleMouseEnter = () => {
    console.log("Mouse entered");
    setIsHoverd(true);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left");
    setIsHoverd(false);
  };

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
  };

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!isActive) {
      const timer = setTimeout(() => {
        setShowMenu(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowMenu(false);
    }
  }, [isActive]);

  return (
    <div className="containerheader">
      {!isActive ? (
        <span key={isActive} className="menutext"> Menu</span>
      ) : (
        <span></span>
      )}

      <div className="containericon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Magnetic>
          <div
            className={`${isActive ? "burger-active" : "burger"}`} // Add conditionally applied class
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
