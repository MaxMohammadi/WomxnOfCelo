import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";

const faqs = [
  { qstn: "How do I buy a Bomb Kicks?", answr: "The Answer" },
  { qstn: "What Blockhain and technology are Bomb Kicks on?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Bomb Kicks NFT?", answr: "The Answer" },
  { qstn: "How many Bomb Kicks caan I buy?", answr: "The Answer" },
];
export default function FAQ() {
  return (
    <div id="faq" className="relative">
      <div className="my-container relative">
        <img className="absolute bomb" src="/imgs/bomb.png" alt="bomb" />
        <div className="special-grid place-items-center">
          <Heading>
            <div className="">FAQ's</div>
          </Heading>
          <SubHeading>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text
          </SubHeading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-10 w-full">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}
