import React from "react";
import macroImage from "../../assets/Subtract (2).png";
import playStoreIcon from "../../assets/playstore 1.svg";
import appStoreIcon from "../../assets/apple 1.svg";
import biggerEllipse from "../../assets/Ellipse 191.svg";
import smallEllipse from "../../assets/Ellipse 194.svg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="container hero-section">
      <img
        src={biggerEllipse}
        alt="elipses"
        className="elipse-1 move-up-down"
      />
      <img
        src={smallEllipse}
        alt="elipses"
        className="elipse-2 move-left-right"
      />
      <img
        src={biggerEllipse}
        alt="elipses"
        className="elipse-3 move-up-down"
      />
      <img
        src={smallEllipse}
        alt="elipses"
        className="elipse-4 move-left-right"
      />
      <img
        src={biggerEllipse}
        alt="elipses"
        className="elipse-5 move-up-down"
      />
      <div className="hero-content">
        <h1 className="hero-header">
          Dollar investments
          <br /> that help you grow
        </h1>
        <p className="hero-paragraph desktop-display">
          We put your money in high quality assets that help
          <br /> you build wealth and achieve your financial goals.
        </p>
        <p className="mobile-hero-paragraph mobile-display">
          Your personal wealth manager. Get started with a minimum of $10 and
        </p>
        <div className="dowload-app">
          <a href="https://www.apple.com/app-store/" className="btn app-store">
            <img src={appStoreIcon} alt="Apple logo" className="logo" />
            <p className="m-0">
              <small>Download on the</small>
              <br /> App Store
            </p>
          </a>

          <a
            href="https://play.google.com/store/apps"
            className="btn google-play"
          >
            <img src={playStoreIcon} alt="Google Play logo" className="logo" />
            <p className="m-0">
              <small>Download on the</small>
              <br /> Google Play
            </p>
          </a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img
          src={macroImage}
          alt="phone image"
          className="hero-section-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
