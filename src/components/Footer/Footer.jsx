import React from "react";
import risefooterLogo from "../../assets/Group (1).png";
import arrowUpIcon from "../../assets/Vector (2).svg";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="container footer-wrapper">
        <ul>
          <li>
            <img src={risefooterLogo} alt="rise logo" />
          </li>
          <li>About Us</li>
          <li>Careers</li>
          <li>FAQs</li>
          <li>FAQs</li>
          <li>Contact Info</li>
          <li>Press</li>
          <li>Rise Impact</li>
        </ul>
        <ul>
          <li className="footer-headers">Eplore</li>
          <li>Investment Club <img src={arrowUpIcon} alt="icon" className="icon-up-footer"/></li>
          <li>Blog <img src={arrowUpIcon} alt="icon" className="icon-up-footer"/></li>
        </ul>

        <ul>
          <li className="footer-headers">Products</li>
          <li>Rise App</li>
          <li>Wallets</li>
          <li>Asset Classes</li>
        </ul>
        <ul>
          <li className="footer-headers">Contact Us</li>
          <li>0818 714 7405 <img src={arrowUpIcon} alt="icon" className="icon-up-footer"/></li>
          <li>hello@rise.capital <img src={arrowUpIcon} alt="icon" className="icon-up-footer"/></li>
          <li>Newsletter <img src={arrowUpIcon} alt="icon" className="icon-up-footer"/></li>
          <li>Instagram <img src={arrowUpIcon} alt="icon" className="icon-up-footer"/></li>
          <li>Twitter <img src={arrowUpIcon} alt="icon" className="icon-up-footer"/></li>
        </ul>
    </footer>
  );
};

export default Footer;
