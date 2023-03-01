import React from "react";
import "./IndustryExperts.css";
import expertIcon from "../../assets/images/join-comunity/career-expert.png";
import teacher from "../../assets/images/join-comunity/Teacher card.png";
import ExpertSwiperBtn from "../../components/ExpertSwiperBtn/ExpertSwiperBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const IndustryExperts = () => {
  return (
    <div className="industry-expert ">
      <div className="container">
        <div className="ostad-title-wrapper ">
          <div>
            <img src={expertIcon} alt="" />
          </div>
          <p className="expert-career-title text-dark">
            ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন
          </p>
        </div>
        <p className="ostad-expert-subtitle text-dark">
          স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
          বাটনে।
        </p>
        <div className="industry-card">
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
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={teacher} alt="" />
                  </div>
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

export default IndustryExperts;
