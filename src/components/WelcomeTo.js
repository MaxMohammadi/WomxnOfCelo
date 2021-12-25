import React from "react";
import { motion } from "framer-motion";
import Timer from "./Timer";
import ConnectWallet from "./ConnectWallet";
export default function WelcomeTo({
  setShowPopup,
  showPopup,
  setUserAddress,
  userAddress,
}) {
  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-60vw", opacity: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div variants={cont} initial="hidden" animate="show" className="welcome-to ">
      <motion.p variants={item} key={1} className="title  ">
        Inspiring
      </motion.p>
      <motion.p variants={item} key={2} className="title title-big ">
        <span className="text-white">Womxn</span> Around the World <br /> Through Blockchain and Art
      </motion.p>

      <motion.div className="pb-5 lg:pb-0" variants={item} key={4}>
        <Timer />
      </motion.div>
      <motion.div
        variants={item}
        key={5}
        className="w-full connect-wallet z-20 flex flex-col items-center lg:grid lg:grid-cols-3 gap-6"
      >
        <ConnectWallet
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setUserAddress={setUserAddress}
          userAddress={userAddress}
        />
        <a className="block w-full" href="https://discord.com">
          <button className="btn  w-full"> Join The Discord</button>{" "}
        </a>
      </motion.div>
    </motion.div>
  );
}
