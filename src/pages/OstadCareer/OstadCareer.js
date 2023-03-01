import React from "react";
import "./OstadCareer.css";
import liveIcon from "../../assets/images/ostad-career/liv-icon.png";
import flag from "../../assets/images/ostad-career/flag.png";
import CoursesCard from "../../components/CoursesCard/CoursesCard";

const OstadCareer = () => {
  return (
    <div className="container">
      <div className="ostad-career">
        <div className="ostad-title-wrapper">
          <div>
            <img src={flag} alt="" />
          </div>
          <p className="expert-career-title text-dark">
            Ostad helps you in your career with
          </p>
        </div>
        <p className="ostad-expert-subtitle text-dark">
          স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
          বাটনে।
        </p>
        <div className="bottom-border"></div>
        <div className="live-course-wrapper">
          <div>
            <img src={liveIcon} alt="" />
          </div>
          <p>লাইভ কোর্সসমূহ</p>
        </div>
      </div>
      <div className="courses-list-card">
        <div>
          <CoursesCard />
        </div>
        <div>
          <CoursesCard />
        </div>
        <div>
          <CoursesCard />
        </div>
        <div>
          <CoursesCard />
        </div>
        <div>
          <CoursesCard />
        </div>
        <div>
          <CoursesCard />
        </div>
      </div>
    </div>
  );
};

export default OstadCareer;
