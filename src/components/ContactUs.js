import React from "react";
import Heading from "./Heading";
import "../styles/contact-us.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function ContactUs() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const cont = {
    show: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
    hidden: { opacity: 0 },
  };

  return (
    <div id="contact-us">
      <div className="my-container relative ">
        <Heading>contact</Heading>
        <br/>
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-1/2 z-0 absolute top-1/2 left-1/2 "
        >
          {" "}
        </motion.div>
        
        <form ref={ref} className="contact-form z-0 relative">
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
            <input className="submit" type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
}
