import React from "react";
import { useSwiper } from "swiper/react";
import "./ExpertSwiperBtn.css";

const ExpertSwiperBtn = () => {
  const swiper = useSwiper();
  console.log(swiper);
  return (
    <div className="swiper-btns">
      <button
        className="expert-swiper-next-btn"
        onClick={() => swiper.slidePrev()}
      >
        Prev
      </button>
      <button
        className="expert-swiper-prev-btn"
        onClick={() => swiper.slideNext()}
      >
        Next
      </button>
    </div>
  );
};

export default ExpertSwiperBtn;
