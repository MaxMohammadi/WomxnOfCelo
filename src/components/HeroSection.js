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
      <div className="my-container relative splash">
       
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
