import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Magnetic from "../magnetic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSkype,
  faYoutube,
  faTiktok ,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
const navItems = [
  { title: "HOME", href: "/", id: "home" },
  { title: "PROJECTS", href: "/projects", id: "projects" },
  { title: "ABOUT", href: "/about", id: "about" },
  { title: "CONTACT", href: "/contact", id: "contact" },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menuoutcontainer"
    >
      <div className="bodyoutcontainer">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="navoutcontainer"
        >
          <div className="headeroutcontainer">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link
              className="linkof"
              key={index}
              data={{ ...data }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>

      
      </div>
      <div className="social-icons">
          <div class="social-overlap process-scetion mt100">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <div class="social-bar">
                    <div class="social-icons text-center">
                      <a class="slider-nav-item">
                        {" "}
                        <FontAwesomeIcon
                          className="hovericon"
                          icon={faInstagram}
                        />
                      </a>
                      <a class="slider-nav-item">
                        {" "}
                        <FontAwesomeIcon
                          className="hovericon"
                          icon={faTiktok}
                        />
                      </a>
                      <a class="slider-nav-item">
                        {" "}
                        <FontAwesomeIcon
                          className="hovericon"
                          icon={faYoutube}
                        />
                      </a>
                      <a class="slider-nav-item">
                        {" "}
                        <FontAwesomeIcon
                          className="hovericon"
                          icon={faPinterest}
                        />
                      </a>

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Curve />
    </motion.div>
  );
}
