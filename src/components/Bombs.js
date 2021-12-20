import React from "react";
import { motion } from "framer-motion";
import "../styles/bombs.scss";
export default function Bombs() {
  return (
    <>
      <motion.img className="bomb bomb1 " src="/imgs/bomb1.png" alt="bomb" />
      <motion.img className=" bomb2 " src="/imgs/bomb2.png" alt="bomb" />
      <motion.img className="bomb bomb8 " src="/imgs/bomb8.png" alt="bomb" />
      <motion.img className="bomb bomb4 " src="/imgs/bomb4.png" alt="bomb" />
      <motion.img className="bomb bomb9 " src="/imgs/bomb9.png" alt="bomb" />
      <motion.img className="bomb bomb10 " src="/imgs/bomb10.png" alt="bomb" />
    </>
  );
}
