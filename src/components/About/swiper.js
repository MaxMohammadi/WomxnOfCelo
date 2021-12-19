import React from "react";
// Core modules imports are same as usual
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/effect-coverflow/effect-coverflow.scss";

//import images
import First from "./../../images/first.png"
import Second from "./../../images/second.png"
import Third from "./../../images/third.png"
import Fourth from "./../../images/fourth.png"
import Fifth from "./../../images/fifth.png"

SwiperCore.use([EffectCoverflow, Autoplay]);

export default function Slider() {
  return (
    <div styles={{ width: "100%" }}>
      <Swiper
        autoplay={{ delay: 2500 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 10,
          slideShadows: true,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            {" "}
            <img src={First}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Second} alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Third} alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Fourth} alt="bomb kicks" />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="slide">
            <img src={Fifth} alt="bomb kicks" />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="slide">
            <img src="/imgs/6.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/7.png" alt="bomb kicks" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

