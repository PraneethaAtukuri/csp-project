import React from "react";
import Logo from "../assets/farmerLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="rightSide">
        <Link to="/">Home </Link>
        <Link to="/About Us">About Us</Link>
        <Link to="/problems">Problems</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/contact us">Contact Us</Link>
        <GiHamburgerMenu/>
        </div>
      </div>
  );
}

export default Navbar;