import expertBook from "../../assets/images/expert-career-guideline/book.png";
import ExpertCareerCard from "../../components/ExpertCareerCard/ExpertCareerCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./ExpertGuideline.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import ExpertSwiperBtn from "../../components/ExpertSwiperBtn/ExpertSwiperBtn";

const ExpertGuideline = () => {
  // const navigationNextRef = useRef(null);
  // const navigationPrevRef = useRef(null);
  return (
    <div className="bg-dark slide-wrapper">
      <div className=" expert-area-inner container">
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
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              // navigation={{
              //   nextEl: ".swiper-button-next",
              //   prevEl: ".swiper-button-prev",
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
