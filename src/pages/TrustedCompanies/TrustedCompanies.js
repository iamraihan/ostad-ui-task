import React from "react";
import "./TrustedCompanies.css";
import amarTaka from "../../assets/images/companies/amar-taka.png";
import misfit from "../../assets/images/companies/misfit.png";
import walton from "../../assets/images/companies/walton.png";
import ramoni from "../../assets/images/companies/ramoni.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";

const TrustedCompanies = () => {
  return (
    <div className="treusted-companies bg-dark">
      <h4 className="text-white company-title">Top companies trust Ostad</h4>
      <div className="compnanies">
        <>
          <Swiper
            slidesPerView={1.2}
            grid={{
              rows: 1,
            }}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 24,
                grid: {
                  rows: 1,
                },
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 24,
                grid: {
                  rows: 1,
                },
              },
            }}
            modules={[Grid]}
            className="myCompany"
          >
            <SwiperSlide>
              <div>
                <img src={amarTaka} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={misfit} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={walton} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={ramoni} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={walton} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={ramoni} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={amarTaka} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default TrustedCompanies;
