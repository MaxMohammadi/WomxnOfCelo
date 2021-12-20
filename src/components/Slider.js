import React from "react";
// Core modules imports are same as usual
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
// import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
SwiperCore.use([EffectCoverflow, Autoplay]);
export default function Slider() {
  return (
    <div styles={{ width: "100%" }}>
      <Swiper
        autoplay={{ delay: 2500 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            {" "}
            <img src="/imgs/1.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/2.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/3.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/4.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/5.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/6.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/7.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
