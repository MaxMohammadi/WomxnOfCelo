import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
import Slider from "./Slider";
import SliderMob from "./SliderMob";
export default function AboutUs({
  setShowPopup,
  showPopup,
  setUserAddress,
  userAddress,
}) {
  return (
    <div id="about-us" className="relative">
      <br />
      <br />
      <br />
      <div className="my-container flex flex-col lg:flex-row items-center relative">
        <div className="about">
          <div className="w-full special-grid lg:gap-5 xl:gap-8">
            <Heading>
              <span>About</span>
              <span className="text-myRed">Womxn of Celo</span>
            </Heading>
            <SubHeading>
            Womxn of Celo is the 1st generation of the (Womxn of) series for different blockchains. This Collection was 
            created to empower women in the NFT space as well as women artists from all parts of the globe. To choose to 
            write "womxn" so that we represent different cultures and gender expressions in the women in NFT community. 
            The collection is based on the Celo blockchain and includes 5k unique gorgeous girls. Every girl has various rare 
            attributes and features.
            </SubHeading>
          </div>

          <div className="hidden lg:block w-full overflow-hidden">
            <Slider />
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full overflow-hidden">
        <SliderMob />
      </div>
    </div>
  );
}
