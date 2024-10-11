import React from "react";
import logo from "../../assets/rise-logo.svg";
import menuIcon from "../../assets/menu (8) 1.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header">
        <a href="/">
          <div className="flex relative">
            <img src={logo} alt="rise-logo" className="logo" />
          </div>
        </a>
        <nav className="navigators">
            <a href="" className="nav active-nav">Home</a>
            <a href="" className="nav">Products</a>
            <a href="" className="nav">Investment Club</a>
            <a href="" className="nav">Blog</a>
            <a href="" className="nav">About Us</a>
            <a href="" className="nav">FAQs</a>
          {/* <div className="flex-center font-medium gap-x-2"></div> */}
        </nav>
        <img src={menuIcon} alt="menu" className="menu-icon" />
      </div>
    </header>
  );
};

export default Header;
