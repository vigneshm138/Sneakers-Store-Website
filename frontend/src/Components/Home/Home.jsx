import React from "react";
import "./Home.css";
import img from "../Item/pngwing.com.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";
import { showImages } from "../../assets/showImages";

const Home = () => {
  return (
    <div className="home">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={showImages.s1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={showImages.s2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={showImages.s3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={showImages.s4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={showImages.s6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

/* <img src={img} alt="home-Image" />
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: false,
        }}
         modules={[EffectCoverflow, Pagination]}
         className="mySwiper"
       >
         <SwiperSlide className="slide">
           <img src={img} />
         </SwiperSlide>
         <SwiperSlide className="slide">
           <img src={img} />
         </SwiperSlide>
         <SwiperSlide className="slide">
           <img src={img} />
         </SwiperSlide>
         <SwiperSlide className="slide">
           <img src={img} />
         </SwiperSlide>
         <SwiperSlide className="slide">
           <img src={img} />
         </SwiperSlide>
         <SwiperSlide className="slide">
           <img src={img} />
         </SwiperSlide>
       </Swiper> */
