import React from "react";
import { useSwiper } from "swiper/react";
import "./ExpertSwiperBtn.css";
import leftNavigationBtn from "../../assets/images/expert-career-guideline/left-navigation.svg";
import rightNavigationBtn from "../../assets/images/expert-career-guideline/right-navigation.svg";

const ExpertSwiperBtn = () => {
  const swiper = useSwiper();
  console.log(swiper);
  return (
    <div className="swiper-btns">
      <button
        className="expert-swiper-next-btn"
        onClick={() => swiper.slidePrev()}
      >
        <img src={leftNavigationBtn} alt="" />
      </button>
      <button
        className="expert-swiper-prev-btn"
        onClick={() => swiper.slideNext()}
      >
        <img src={rightNavigationBtn} alt="" />
      </button>
    </div>
  );
};

export default ExpertSwiperBtn;
