import React from "react";
import "./ExpertGuideline.css";
import expertBook from "../../assets/images/expert-career-guideline/book.png";
import ExpertCareerCard from "../../components/ExpertCareerCard/ExpertCareerCard";

const ExpertGuideline = () => {
  return (
    <div className="bg-dark">
      <div className="container expert-area-inner">
        <div className="expert-title-wrapper">
          <div>
            <img src={expertBook} alt="" />
          </div>
          <p className="expert-career-title text-white">
            এক্সপার্টদের ক্যারিয়ার গাইডলাইন
          </p>
        </div>
        <ExpertCareerCard />
      </div>
    </div>
  );
};

export default ExpertGuideline;
