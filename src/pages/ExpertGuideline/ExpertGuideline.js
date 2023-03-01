import expertBook from "../../assets/images/expert-career-guideline/book.png";
import ExpertCareerCard from "../../components/ExpertCareerCard/ExpertCareerCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./ExpertGuideline.css";
import { Navigation, Pagination } from "swiper";
import ExpertSwiperBtn from "../../components/ExpertSwiperBtn/ExpertSwiperBtn";

const ExpertGuideline = () => {
  return (
    <div className="bg-dark slide-wrapper">
      <div className=" expert-area-inner slider-container">
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
          <div className="swiper-container">
            <Swiper
              slidesPerView={1.3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              // navigation={true}
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

              <ExpertSwiperBtn />
            </Swiper>
          </div>
        </>
      </div>
    </div>
  );
};

export default ExpertGuideline;
