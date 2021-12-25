import React from "react";
import "./../styles/roadmap.scss";
import Heading from "./Heading";
import RoadmapPoint from "./RoadmapPoint";
import Poof from "./Poof";

const roadmap = [
  {
    key: 0,
    month: "Jan",
    heading: "Initial Mint",
  },
  {
    key: 1,
    month: "Feb",
    heading: "Community Partnerships",
  },

  {
    key: 1,
    month: "Mar",
    heading: "Sales & Discounts",
  },
  {
    key: 0,
    month: "Apr",
    heading: "Second Gen Collection Presale",
  },
  {
    key: 0,
    month: "May",
    heading: "Solana Blockchain Mint",
  },
  {
    key: 1,
    month: "Jun",
    heading: "Gated Discord Community",
  },
];
export default function Roadmap() {
  return (
    <div id="roadmap" className="relative">
      <div className="my-container relative">

        <Heading>Roadmap</Heading>
        <div className="line-h line1 hidden lg:block"></div>
        <div className="line-h line2 hidden lg:block"></div>
        <div className="line-h line3 hidden lg:block"></div>
        <div className="arc arc-r hidden lg:block">
          <div className="arc-inner"></div>
        </div>
        <div className="arc arc-l hidden lg:block">
          <div className="arc-inner"></div>
        </div>
        <div className="roadmap-path-wrapper relative">
          {roadmap.map((point, i) => (
            <RoadmapPoint key={i} idx={i} point={point} />
          ))}
        </div>
      </div>
    </div>
  );
}
