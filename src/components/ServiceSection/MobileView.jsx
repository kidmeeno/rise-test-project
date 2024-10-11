import React from "react";
import girlHangingImage from "../../assets/girlHangingframe.png";
import girlReading from "../../assets/girlReadingMain.png";
import astroGuy from "../../assets/astroGuyMain.png";

const MobileView = () => {
  return (
    <div className="mobile-display">
      {/* // Mobile view */}
      <article className="service-stacked">
        <div className="articel-mobile-image-wrapper">
          <img
            src={girlHangingImage}
            alt="superior performance"
            className="articel-mobile-image"
          />
        </div>
        <h2 className="articel-mobile-header">Superior Performance</h2>
        <p className="article-mobile-paragraph">
          Rise outperforms your other alternatives in two ways. The first is
          through our expert, algorithm driven investment approach that picks
          through over 3,000 data sets to find the perfect investment for you.{" "}
        </p>
      </article>
      <article className="service-stacked">
        <div className="articel-mobile-image-wrapper">
          <img
            src={girlReading}
            alt="superior performance"
            className="articel-mobile-image"
          />
        </div>
        <h2 className="articel-mobile-header">Personalization</h2>
        <p className="article-mobile-paragraph">
          No two people are the same, and everyone’s financial goals are
          different. Rise understands this, which is why we tailor your journey
          to financial freedom to fit you.
        </p>
      </article>
      <article className="service-stacked">
        <div className="articel-mobile-image-wrapper">
          <img
            src={astroGuy}
            alt="superior performance"
            className="articel-mobile-image"
          />
        </div>
        <h2 className="articel-mobile-header">Diversification</h2>
        <p className="article-mobile-paragraph">
          Rise offers a choice of three asset classes: US equities, US real
          estate and fixed income assets to provide stability to your
          investments and protection from market declines. You can pick one
          asset class or
        </p>
      </article>
    </div>
  );
};

export default MobileView;
