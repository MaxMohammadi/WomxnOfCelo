import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Poof({ className }) {
  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });
  return (
    <motion.img
      ref={ref}
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : { scale: 0 }}
      className={className}
    />
  );
}
