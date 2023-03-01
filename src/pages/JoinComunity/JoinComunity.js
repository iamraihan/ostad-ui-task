import "./JoinComunity.css";
import joinComunity from "../../assets/images/join-comunity/join-comunity.png";
import JoinComunityCard from "../../components/JoinComunityCard/JoinComunityCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
// import flutter from "../../assets/images/join-comunity/flutter-career.png";
// import mern from "../../assets/images/join-comunity/mern.png";
// import content from "../../assets/images/join-comunity/content.png";
// import uiUx from "../../assets/images/join-comunity/ui-ux.png";

const JoinComunity = () => {
  const flutter =
    "https://raw.githubusercontent.com/iamraihan/ostad-ui-task/main/src/assets/images/join-comunity/flutter-career.png";
  const mern =
    "https://raw.githubusercontent.com/iamraihan/ostad-ui-task/main/src/assets/images/join-comunity/mern.png";
  const content =
    "https://raw.githubusercontent.com/iamraihan/ostad-ui-task/main/src/assets/images/join-comunity/content.png";
  const uiUx =
    "https://raw.githubusercontent.com/iamraihan/ostad-ui-task/main/src/assets/images/join-comunity/ui-ux.png";

  return (
    <div className="join-comunity">
      <div className="join-comunity-inner container">
        <div className="ostad-title-wrapper ">
          <div>
            <img src={joinComunity} alt="" />
          </div>
          <p className="expert-career-title text-dark">ফ্রি ভিডিও রিসোর্স</p>
        </div>
        <p className="ostad-expert-subtitle text-dark">
          স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
          বাটনে।
        </p>
        <div className="">
          <>
            <Swiper
              slidesPerView={1.2}
              grid={{
                rows: 1,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 30,
                  grid: {
                    rows: 1,
                  },
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  grid: {
                    rows: 2,
                  },
                },
              }}
              modules={[Grid]}
              className="myComunity"
            >
              <SwiperSlide>
                <JoinComunityCard data={flutter} />
              </SwiperSlide>
              <SwiperSlide>
                <JoinComunityCard data={mern} />
              </SwiperSlide>
              <SwiperSlide>
                <JoinComunityCard data={content} />
              </SwiperSlide>
              <SwiperSlide>
                <JoinComunityCard data={uiUx} />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default JoinComunity;
