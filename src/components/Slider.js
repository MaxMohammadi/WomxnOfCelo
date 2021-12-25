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
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 5,
          slideShadows: true,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            {" "}
            <img src="/imgs/woman_1.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/woman_2.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/woman_3.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/woman_4.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/woman_5.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/woman_6.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="/imgs/woman_7.png" alt="bomb kicks" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
