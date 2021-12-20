import React from 'react';
import Slider from "./swiper";
import "./about-us.scss";

const About = () => {

    return (
        <div id="about-us" className="fixed">
            <div className="my-container flex flex-col lg:flex-row items-center relative">
                {/* <div className="about"> */}
                    {/* <div className="w-full special-grid lg:gap-5 xl:gap-8"> */}
                        <div className="hidden lg:block w-full overflow-hidden">
                            <Slider />
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default About;