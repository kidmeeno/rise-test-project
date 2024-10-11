import React from "react";
import profileImage from "../../assets/Ellipse 213 (1).png";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        {/* Desktop text */}
        <div className="desktop-display">
          <h1 className="testimonial-header">From The People Who Use Rise</h1>
          <p className="testimonia-statement">
            Our mission at Risevest is to empower more people just like you
            <br /> to achieve your personal financial goals.
          </p>
        </div>
        {/* Mobile text */}
        <div className="mobile-display">
          <h1 className="testimonial-header">What our customers are saying</h1>
          <p className="testimonia-statement">
            We serve over 80,000 amazing users.
          </p>
        </div>
      </div>
      <div className="carousel">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((x, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-content">
                <p>
                  I chose Rise because of its leadership, wealth of knowledge
                  and the people who support them. I invest with Rise in order
                  to protect my savings and investment from being depleted by
                  devaluation and inflation that’s at an all-time high in
                  Nigeria.
                </p>
                <div className="profile">
                  <img src={profileImage} alt="Profile 1" />
                  <div>John Doe</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialSection;
