import React from "react";
import DesktopView from "./DesktopView";
import "./ServiceSection.css";
import MobileView from "./MobileView";

const ServiceSection = () => {
  return (
    <section className="container">
      <DesktopView />
      <MobileView/>
    </section>
  );
};

export default ServiceSection;
