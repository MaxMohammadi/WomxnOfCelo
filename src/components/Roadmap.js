import React from "react";
import "./../styles/roadmap.scss";
import Heading from "./Heading";
import RoadmapPoint from "./RoadmapPoint";
import Poof from "./Poof";

const roadmap = [
  {
    key: 0,
    month: "jul",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 1,
    month: "aug",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

  {
    key: 1,
    month: "Oct",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 0,
    month: "sep",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 0,
    month: "nov",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 1,
    month: "dec",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
export default function Roadmap() {
  return (
    <div id="roadmap" className="relative">
      <div className="my-container relative">
        <img className="absolute bomb" src="/imgs/brick.png" alt="bomb" />

        <Poof className="poof" />
        <Heading>roadmap</Heading>
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
