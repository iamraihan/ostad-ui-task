import React, { useEffect, useState } from "react";
import heroBannerDesktop from "../../assets/images/hero-bg-banner.png";
import heroBannerMobile from "../../assets/images/hero-banner-mobile.png";
import "./Hero.css";
import category from "../../assets/images/CATAGORY.png";
import liveCourseIcon from "../../assets/images/live-course.svg";
import graduateIcon from "../../assets/images/graduate-icon.svg";
import rightArrow from "../../assets/images/arrow-right-line.svg";

const Hero = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  let heroBanner;
  if (windowSize[0] <= 640) {
    heroBanner = heroBannerMobile;
  } else {
    heroBanner = heroBannerDesktop;
  }
  const heroBannerStyle = {
    backgroundImage: `url(${heroBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={heroBannerStyle} className="hero">
      <div className="hero-inner container">
        <div>
          <img src={category} alt="" />
        </div>
        <div>
          <h2 className="hero-title text-dark">Tech and development</h2>
          <p className="hero-subtitle">
            স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
            বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
            নিচের বাটনে।
          </p>
          <div className="course-btn-wrapper">
            <p className="live-course-btn text-dark">
              <span
                style={{
                  marginRight: "4px",
                }}
              >
                <img style={{ marginTop: "4px" }} src={liveCourseIcon} alt="" />
              </span>{" "}
              ৭টি লাইভ কোর্স
            </p>
            <p className="live-course-btn text-dark">
              <span
                style={{
                  marginRight: "4px",
                }}
              >
                <img style={{ marginTop: "4px" }} src={graduateIcon} alt="" />
              </span>{" "}
              ১৪২৪৫ জন Ostad গ্র্যাজুয়েট
            </p>
          </div>
          <div className="hero-assesment-btn-wrapper">
            <button className="hero-btn btn bg-dark text-white icon-btn">
              {" "}
              Start Learning <img src={rightArrow} alt="" />
            </button>
            <button className="hero-btn hero-btn-2 btn text-dark ">
              assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
