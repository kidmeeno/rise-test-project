import React from "react";
import playStoreIcon from "../../assets/playstore 1.svg";
import appStoreIcon from "../../assets/apple 1.svg";
import macroImage from "../../assets/Phone (1).png";

import "./DownloadAppBanner.css";

const DownloadAppBanner = () => {
  return (
    <section className="container appDownload-banner">
      <div className="appDownload-banner-content">
        <p className="banner-title">Download The Rise App</p>
        <h3>Join our 100,000 users investing and setting long term goals!</h3>
        <p className="banner-description">Dollar investments that help you grow.</p>
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
      <div className="">
        <img src={macroImage} alt="phone" className="mobile-app-image" />
        <div className="manipulate-view"></div>
      </div>
    </section>
  );
};

export default DownloadAppBanner;
