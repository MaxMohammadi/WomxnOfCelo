import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import Bombs from "./Bombs";
import { useEffect, useState, useContext } from "react";
import { useContractKit } from '@celo-tools/use-contractkit';
import { Link } from 'react-router-dom';
import "../styles/common.scss";

export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {

  const { address: addr, connect } = useContractKit();
  const address = typeof addr === 'string' ? addr.toLowerCase() : addr;

  useEffect(() => {
    if (!address) {
      return;
    }

    // registerUser({ address });
  }, [address]);

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

          <div className="btn-center">
            {!address ? (
              <div>
                <button type="button" className="btn w-full" onClick={connect}>
                  Connect wallet
                </button>
              </div>
            ) : (
              <Link to="/" className="app-header__profile">
                <span className="btn w-full">{`${address.slice(
                  0,
                  5
                )}...${address.slice(-3)}`}</span>
              </Link>
            )}


        </div>

      </div>
    </motion.div>
  );
}
