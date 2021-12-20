import React from "react";
// import Image from "next/image";
import { Link as Anchor } from "react-scroll";

export default function Logo({ wide }) {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
  };
  const svg = {
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { scale: 0, opacity: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { scale: 1, opacity: 1, pathLength: 0, transition: { duration: 0.3 } },
    hidden: { scale: 0, opacity: 0, pathLength: 1, transition: { duration: 1 } },
  };
  return (
    <Anchor to="top" {...linkProps} className="flex justify-center">
      <img src="/imgs/logo.png" layout="responsive" alt="Bombs logo" />
    </Anchor>
  );
}
