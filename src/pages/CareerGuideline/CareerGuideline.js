import React from "react";
import "./CareerGuideline.css";
import careerIcon from "../../assets/images/companies/image 27.png";
import CareerGuildelineCard from "../../components/CareerGuildelineCard/CareerGuildelineCard";
import ExpertSwiperBtn from "../../components/ExpertSwiperBtn/ExpertSwiperBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
const CareerGuideline = () => {
  return (
    <div className="career-guideline">
      <div className="slider-container">
        <div className="ostad-title-wrapper ">
          <div>
            <img src={careerIcon} alt="" />
          </div>
          <p className="expert-career-title text-dark">
            ক্যারিয়ার গাইডলাইন নিয়ে আরও জানতে পড়ুন
          </p>
        </div>
        <p className="ostad-expert-subtitle text-dark">
          স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
          বাটনে।
        </p>
        <div className="reading-test">
          <>
            <div className="swiper-container">
              <Swiper
                slidesPerView={1.3}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.3,
                    spaceBetween: 10,
                  },

                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                // navigation={true}
                modules={[Pagination, Navigation]}
                className="expertSwiper"
              >
                <SwiperSlide>
                  <CareerGuildelineCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CareerGuildelineCard />
                </SwiperSlide>
                <SwiperSlide>
                  <CareerGuildelineCard />
                </SwiperSlide>

                <ExpertSwiperBtn />
              </Swiper>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default CareerGuideline;
