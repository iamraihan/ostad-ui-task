import React from "react";
import "./CareerGuideline.css";
import careerIcon from "../../assets/images/companies/image 27.png";
import CareerGuildelineCard from "../../components/CareerGuildelineCard/CareerGuildelineCard";
const CareerGuideline = () => {
  return (
    <div className="career-guideline">
      <div className="container">
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
          <CareerGuildelineCard />
        </div>
      </div>
    </div>
  );
};

export default CareerGuideline;
