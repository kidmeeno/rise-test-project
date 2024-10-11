import React from "react";
import manRingBellIllustrator from "../../assets/file1 2 (1).png";
import astronoiltIllustrator from "../../assets/file1 2.png";
import girlHangingFrameIllustrator from "../../assets/file1 1.png";
import girlreadingIlustrator from "../../assets/file3 1.png";


const DesktopView = () => {
  return (
    <div className="desktop-display">
      <article className="services-grid">
        <div className="article-content">
          <h2 className="article-header">Invest your money in dollars</h2>
          <p className="article-paragraph">
            By holding your investments in a stable currency, your money grows
            more over time and retains its value better.
          </p>
          <div className="invest-link">
            <span>Start Investing Now</span>
            <span className="arrow">→</span>
          </div>
        </div>
        <div className="articel-image-wrapper">
          <img
            src={girlHangingFrameIllustrator}
            alt="invets in dollars"
            className="article-image"
          />
        </div>
      </article>
      <article className="services-grid">
        <div className="articel-image-wrapper">
          <img
            src={girlreadingIlustrator}
            alt="invets in dollars"
            className="article-image"
          />
        </div>
        <div className="article-content">
          <h2 className="article-header">
            Choose what's best
            <br /> for you
          </h2>
          <p className="article-paragraph">
            Unlike other platforms, Rise lets you pick between stocks, US real
            estate and fixed income, according to your risk appetite. That way
            you can spread your risk and tap into different investments all in
            one place.
          </p>
          <div className="invest-link">
            <span>Start Investing Now</span>
            <span className="arrow">→</span>
          </div>
        </div>
      </article>
      <article className="services-grid">
        <div className="article-content">
          <h2 className="article-header">Set goals and reach them</h2>
          <p className="article-paragraph">
            You can invest towards a goal on Rise--retirement, higher education,
            save for your home or travel budgets. Or create a goal of your own
            and invest periodically to achieve them.
          </p>
          <div className="invest-link">
            <span>Start Investing Now</span>
            <span className="arrow">→</span>
          </div>
        </div>
        <div className="articel-image-wrapper">
          <img
            src={astronoiltIllustrator}
            alt="invets in dollars"
            className="article-image"
          />
        </div>
      </article>
      <article className="services-grid">
        <div className="articel-image-wrapper">
          <img
            src={manRingBellIllustrator}
            alt="invets in dollars"
            className="article-image"
          />
        </div>
        <div className="article-content">
          <h2 className="article-header">We remember so you dont have to</h2>
          <p className="article-paragraph">
            Our Auto-invest feature makes it easy to stay consistent, even when
            you forget. Set a funding amount, frequency and payment method and
            Rise will automatically fund your investment, on schedule.
          </p>
          <div className="invest-link">
            <span>Start Investing Now</span>
            <span className="arrow">→</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default DesktopView;
