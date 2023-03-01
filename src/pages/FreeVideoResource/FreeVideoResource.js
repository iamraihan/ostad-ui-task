import React from "react";
import "./FreeVideoResource.css";
import playIcon from "../../assets/images/ostad-career/play-icon.svg";
import FreeVideoResourceCard from "../../components/FreeVideoResourceCard/FreeVideoResourceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ExpertSwiperBtn from "../../components/ExpertSwiperBtn/ExpertSwiperBtn";

const FreeVideoResource = () => {
  return (
    <div className="free-video-resource slider-container">
      <div className="ostad-title-wrapper">
        <div>
          <img src={playIcon} alt="" />
        </div>
        <p className="expert-career-title text-dark">ফ্রি ভিডিও রিসোর্স</p>
      </div>
      <p className="ostad-expert-subtitle text-dark">
        স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
        বাটনে।
      </p>
      <div className="bottom-border"></div>
      <div className="free-video-slider-area">
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
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              // navigation={true}
              modules={[Pagination, Navigation]}
              className="expertSwiper"
            >
              <SwiperSlide>
                <FreeVideoResourceCard />
              </SwiperSlide>
              <SwiperSlide>
                <FreeVideoResourceCard />
              </SwiperSlide>
              <SwiperSlide>
                <FreeVideoResourceCard />
              </SwiperSlide>
              <SwiperSlide>
                <FreeVideoResourceCard />
              </SwiperSlide>

              <ExpertSwiperBtn />
            </Swiper>
          </div>
        </>
        {/* <FreeVideoResourceCard /> */}
      </div>
    </div>
  );
};

export default FreeVideoResource;
