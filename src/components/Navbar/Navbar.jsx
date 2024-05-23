import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={assets.logo} alt="" className="logo" />
      <div className="navbar-right">
        <ul>
          <li>ABOUT</li>
          <li>FEATURES</li>
          <li>CONTACT</li>
        </ul>
        <img src={assets.dark_mode} alt="" className="dark" />
        <button className="btn">SIGN IN</button>
      </div>
    </nav>
  );
};

export default Navbar;