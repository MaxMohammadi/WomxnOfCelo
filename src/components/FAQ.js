import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";

const faqs = [
  { qstn: "How do I buy a Womxn of Celo?", answr: "The Answer" },
  { qstn: "Why we decided to launch our NFT project on the Celo Blockchain?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Womxn of Celo NFT?", answr: "The Answer" },
  { qstn: "Where can I learn about the creators of Womxn of Celo?", answr: "The Answer" },
];
export default function FAQ() {
  return (
    <div id="faq" className="relative">
      <div className="my-container relative">
          <Heading>
            <div className="">FAQ's</div>
            <br/>
          </Heading>
          
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-10 w-full">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}
