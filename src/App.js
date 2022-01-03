import React, { useState, useEffect } from "react";
import "./styles/common.scss";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalMenu from "./components/ModalMenu";
import ComingSoonPopUp from "./components/ComingSoonPopUp";
import AboutUs from "./components/AboutUs";

import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Burst from "./components/Burst";
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  //scrolling listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //connect wallet functions
  const [userAddress, setUserAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const props_through = {
    showPopup: showPopup,
    setShowPopup: setShowPopup,
    setUserAddress: setUserAddress,
    userAddress: userAddress,
  };
  return (
    <div className=" relative overflow-hidden app">
      <div id="top"></div>

      <Header
        {...props_through}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        scrolled={scrolled}
      />

      <HeroSection {...props_through} />
      <AboutUs {...props_through} />
      <Team />
      <Roadmap />
      <FAQ />
      <ContactUs />
      <Footer {...props_through} />

      <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
