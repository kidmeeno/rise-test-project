import React from "react";
import stockOmage from "../../assets/Ellipse 205.png";
import fixedIcomeImage from "../../assets/fixedIcome.png";
import estateImage from "../../assets/estate.png";
import "./AssetClasses.css";

const AssetClasses = () => {
  return (
    <section className="asset-section container">
      <h2 className="asset-header">Asset Classes</h2>
      <p className="asset-paragraph">
        It’s your money, choose where you invest it
      </p>
      <div className="assets-wrapper">
        <div className="assets-card">
          <div className="stock-top-style">
            <div className="assets-Image-wrapper">
              <img src={stockOmage} alt="stocks" className="asset-image" />
            </div>
          </div>
          <div className="px-2">
            <h3 className="assets-title">Stocks</h3>
            <p className="asset-description">
              We help you invest and manage your money by investing in our
              portfolio of 30 high-growth stocks across the US market with our
              equity portfolio of power stocks.
            </p>
            <p className="historical-return">
              <span style={{ color: "#919FB533" }}>Historical returns:</span>{" "}
              14% per annum
              <br />
              <span style={{ color: "#919FB533" }}>Risk Level:</span> Medium
            </p>
            <div className="asset-action-call-link">
              <span>Learn how Stocks work</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        <div className="assets-card">
          <div className="estate-top-style">
            <div className="assets-Image-wrapper">
              <img src={estateImage} alt="stocks" className="asset-image" />
            </div>
          </div>
          <div className="px-2">
            <h3 className="assets-title">Real Estate</h3>
            <p className="asset-description">
              Our Real Estate plan is the sweet middle. Best for those who want
              a balance of good returns and medium risk. This plan invests in
              rented buildings in the US.
            </p>
            <p className="historical-return">
              <span style={{ color: "#919FB533" }}>Historical returns:</span>{" "}
              14% per annum
              <br />
              <span style={{ color: "#919FB533" }}>Risk Level:</span> Medium
            </p>
            <div className="asset-action-call-link">
              <span>Learn how Real Estate work</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        <div className="assets-card">
          <div className="fixedIcome-top-style">
            <div className="assets-Image-wrapper">
              <img src={fixedIcomeImage} alt="stocks" className="asset-image" />
            </div>
          </div>
          <div className="px-2">
            <h3 className="assets-title">Fixed Income</h3>
            <p className="asset-description">
              A low-risk asset perfect for anyone who wants to protect their
              money in a secure, appreciating currency, i.e. the dollar. For
              people who want to protect their hard-earned money from inflation
              while earning steady returns.
            </p>
            <p className="historical-return">
              <span style={{ color: "#919FB533" }}>Historical returns:</span>{" "}
              14% per annum
              <br />
              <span style={{ color: "#919FB533" }}>Risk Level:</span> Medium
            </p>
            <div className="asset-action-call-link">
              <span>Learn how Fixed Income work</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetClasses;
