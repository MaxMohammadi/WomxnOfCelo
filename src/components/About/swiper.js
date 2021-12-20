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
import First from "./../../images/first_1.png"
import Second from "./../../images/second.png"
import Third from "./../../images/third.png"
import Fourth from "./../../images/fourth.png"
import Fifth from "./../../images/fifth.png"
import ONE from "./../../images/IMG_0991.JPG"
import woman1 from "./../../images/woman_1.png"
import woman2 from "./../../images/woman_2.png"
import woman3 from "./../../images/woman_3.png"
import woman4 from "./../../images/woman_4.png"
import woman5 from "./../../images/woman_5.png"
import woman6 from "./../../images/woman_6.png"
import woman7 from "./../../images/woman_7.png"

SwiperCore.use([EffectCoverflow, Autoplay]);

export default function Slider() {
  return (
    // <div styles={{ width: "100%"}}>
    <div>
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
          modifier: 8,
          slideShadows: true,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            {" "}
            <img src={woman7}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={woman4} alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={woman3} alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={woman2} alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={woman6} alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={woman1} alt="bomb kicks" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

