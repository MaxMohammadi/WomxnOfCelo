import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/contact-us.scss";
import Poof from "./Poof";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function ContactUs() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const cont = {
    show: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
    hidden: { opacity: 0 },
  };
  const poof = {
    show: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      opacity: 0.7,
      transition: { duration: 0.2 },
    },
    hidden: { scale: 0, x: "-50%", y: "-50%", opacity: 0 },
  };
  return (
    <div id="contact-us">
      <div className="my-container relative ">
        <Heading>contact</Heading>
        <motion.div
          variants={poof}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-1/2 z-0 absolute top-1/2 left-1/2 "
        >
          {" "}
          <Poof className="poof" />
        </motion.div>
        <SubHeading>
          Venenatis dignissim massa ac, sodales malesuada quam. Aliquam in fermentum
          metus. Donec in mauris arcu.
        </SubHeading>
        <form ref={ref} className="contact-form z-10 relative">
          <motion.div
            variants={cont}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="contact-grid"
          >
            <input className="form-input" required type="text" placeholder="Name" />
            <input className="form-input" required type="email" placeholder="Email" />
            <input className="form-input" required type="phone" placeholder="Phone" />
            <textarea
              placeholder="Comment"
              className="form-input comment"
              rows={4}
            ></textarea>
          </motion.div>
          <div className="submit-container mx-auto lg:w-1/3 relative">
            <div className="line line-r"></div>
            <div className="line"></div>
            <input className="submit" type="submit" value="REQUEST A CALL BACK" />
          </div>
        </form>
      </div>
    </div>
  );
}
