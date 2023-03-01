import React from "react";
import "./IndustryExperts.css";
import expertIcon from "../../assets/images/join-comunity/career-expert.png";
import teacher from "../../assets/images/join-comunity/Teacher card.png";

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
          <img src={teacher} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IndustryExperts;
