import React, { useRef } from "react";
import expertBook from "../../assets/images/expert-career-guideline/book.png";
import ExpertCareerCard from "../../components/ExpertCareerCard/ExpertCareerCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ExpertGuideline.css";

// import required modules
import { Navigation, Pagination } from "swiper";

const ExpertGuideline = () => {
  // const navigationNextRef = useRef(null);
  // const navigationPrevRef = useRef(null);
  return (
    <div className="bg-dark">
      <div className="container expert-area-inner">
        <div className="expert-title-wrapper">
          <div>
            <img src={expertBook} alt="" />
          </div>
          <p className="expert-career-title text-white">
            এক্সপার্টদের ক্যারিয়ার গাইডলাইন
          </p>
        </div>
        {/* slider  */}
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            // navigation={{
            //   nextEl: "#expert-swiper-button-next",
            //   prevEl: "#expert-swiper-button-prev",
            // }}

            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3.8,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="expertSwiper"
          >
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExpertCareerCard />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      {/* <button ref={navigationNextRef}>Hello</button>
      <button ref={navigationPrevRef}>Prev</button> */}
    </div>
  );
};

export default ExpertGuideline;
