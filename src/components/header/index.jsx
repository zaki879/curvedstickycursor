import React, { forwardRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position:"absolute",
        top:"2vh",
        right:"3vw",
        width:"fit-content"
      }}
    >
    
      <span style={{ position: "relative", top: "1px", zIndex: "0" }}>
        Menu
      </span>

      <div className="header" style={{  zIndex: "99" }}>
        <Magnetic>
          <div
            className={`burger ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <div ref={ref} className="bounds" onClick={handleClick}></div>
            <div className="btn-o" id="Button_Nav"></div>{" "}
            {/* Moved outside the burger */}
          </div>
        </Magnetic>
      </div>
    </div>
  );
});

export default Header;
