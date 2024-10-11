import React from "react";
import mobileAppImage from '../../assets/Group 1429.png';
import './RiseAppAddBanner.css'


const RiseAppAddBanner = () => {
  return (
    <section className="container app-advert-wrapper">
      <div className="image-addvertisement">
        <img src={mobileAppImage} alt="app image"  className="mobile-app-addvert"/>
      </div>
      <div className="addvert-contnet">
        <p className="addvert-title">The Rise App</p>
        <h2 className="addvert-header">
          Save for your <span style={{color:'#8C5FF8'}}>future</span>
        </h2>
        <p className="advert-description">
          With Rise, you achieve your financial goals faster.<br/> Save for school,
          your home, vacations, your children’s<br/> future and more.
        </p>
        <button className="action-btn">Start Saving</button>
      </div>
    </section>
  );
};

export default RiseAppAddBanner;
