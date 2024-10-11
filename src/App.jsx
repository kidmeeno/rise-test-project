import { useState } from "react";
import Header from "./components/Header/Header";
import './App.css'
import HeroSection from "./components/HeroSection/HeroSection";
import SupportBanner from "./components/SupportBanner/SupportBanner";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import AssetClasses from "./components/AssetClasses/AssetClasses";
import RiseAppAddBanner from "./components/RiseAppAddBanner/RiseAppAddBanner";
import RegulationSection from "./components/RegulationSection/RegulationSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import ComumunitySection from "./components/ComumunitySection/ComumunitySection";
import DownloadAppBanner from "./components/DownloadAppBanner/DownloadAppBanner";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <HeroSection/>
      <SupportBanner/>
      <ServiceSection/>
      <AssetClasses/>
      <RiseAppAddBanner/>
      <RegulationSection/>
      <TestimonialSection/>
      <ComumunitySection/>
      <DownloadAppBanner/>
      <Footer/>
    </>
  );
}

export default App;
