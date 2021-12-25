import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Burst from "./Burst";
export default function RoadmapPoint({ point, idx }) {
  const { ref, inView } = useInView({ threshold: 0.8, triggerOnce: true });
  const cont = {
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
    hidden: { opacity: 1 },
  };
  const item = {
    show: {
      color: "#000",
      transition: { duration: 0.2 },
    },
    hidden: { color: "#fff" },
  };
  const item1 = {
    show: { opacity: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={cont}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="milestone-point"
    >
      <div className="w-1/2 relative">
        <Burst delay={point.key} />
        <motion.div key={idx} variants={item} className="milestone milestone-month">
          {point.month}
        </motion.div>
      </div>
      <motion.div variants={item1} key={2} className="w-3/4 milestone milestone-content">
        <p className="month-heading">{point.heading}</p>
        <p className="month-text">{point.text}</p>
      </motion.div>
      {idx < 5 && (
        <motion.div
          variants={item1}
          animate={inView ? "show" : "hidden"}
          key={3}
          className="line-v lg:hidden"
        ></motion.div>
      )}
    </motion.div>
  );
}
