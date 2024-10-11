import React from "react";
import armTrustess from "../../assets/download (5) 1.png";
import westernUnion from "../../assets/download (6) 1.png";
import techStars from "../../assets/download (3) 1.png";
import venturePlatform from "../../assets/1_QDtv0vb7931mEjsnaZ_8ow 1.png";
import "./SupportBanner.css";

const SupportBanner = () => {
  return (
    <section className="container support-banner">
      <p className="mobile-display support-banner-text">We are supported by</p>
      <div className="ourPartners-section">
        <div className="partners-container">
          <img
            className="partner-image"
            src={armTrustess}
            alt="arm trust image"
          />
          <img
            className="partner-image"
            src={westernUnion}
            alt="western union"
          />
          <img className="partner-image" src={techStars} alt="tech stars" />
          <img
            className="partner-image"
            src={venturePlatform}
            alt="venture platform"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
