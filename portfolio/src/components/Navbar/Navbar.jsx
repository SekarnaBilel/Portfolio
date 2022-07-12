import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Bilel</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <Link
              spy={true}
              to="Home"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="About"
              smooth={true}
            >
              <li>About</li>
            </Link>
            <Link
              spy={true}
              to="Projects"
              smooth={true}
            >
              <li>Projects</li>
            </Link>
          </ul>
        </div>
        
        <Link
              spy={true}
              to="Contact"
              smooth={true}
            >
        <button className="button n-button">
          Contact 
        </button>
          </Link >
      </div>
    </div>
  );
};

export default Navbar;
