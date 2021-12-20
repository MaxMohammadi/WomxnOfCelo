import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import Bombs from "./Bombs";
export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  return (
    <motion.div id="hero-section" className="relative">
      <img
        className=" w-full h-full  object-cover absolute bottom-0 right-0  2xl:h-auto"
        src="/imgs/bg.jpg"
        alt="bombs-splash"
      />
      <div className="gradient"></div>
      <div className="bg-shade"></div>

      <div className="my-container relative splash">
        <img
          className="w-1/12 block absolute top-full left-1/3 z-10 pt-10"
          src="/imgs/brick.png"
          alt="brick"
        />
        <div className="bombs relative  lg:block">
          <Bombs />
        </div>
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />
      </div>
    </motion.div>
  );
}
