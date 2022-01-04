import React from "react";
import { motion } from "framer-motion";
import "../styles/bombs.scss";
export default function Bombs() {
  return (
    <>
      <motion.img className="bomb bomb1 " src="/imgs/hero_girl1.png" alt="bomb" />
      <motion.img className="bomb bomb8 " src="/imgs/hero_girl3.png" alt="bomb" />
      <motion.img className=" bomb2 " src="/imgs/hero_girl2.png" alt="bomb" />
      {/* <motion.img className="bomb bomb4 " src="/imgs/hero_girl4.png" alt="bomb" /> */}
    </>
  );
}
