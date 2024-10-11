import React from "react";
import communityImage from "../../assets/Group 1708.png";
import "./CommunitySection.css";

const ComumunitySection = () => {
  return (
    <section className="container community-section">
      <div className="community-content">
        <h1 className="regulation-header">Join The Rise Community</h1>
        <p className="community-paragraph">
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <button className="join-commuinty-action-btn">
          Join our Community
        </button>
      </div>
      <div className="community-image-wrapper">
        <img
          src={communityImage}
          alt="community picture"
          className="community-image"
        />
      </div>
      <div className="community-content-mobile">
        <h1 className="regulation-header">Join The Rise Community</h1>
        <p className="community-paragraph">
          If you want to go far, go together.
        </p>
        <button className="join-commuinty-action-btn">
          Join our Community
        </button>
      </div>
    </section>
  );
};

export default ComumunitySection;
