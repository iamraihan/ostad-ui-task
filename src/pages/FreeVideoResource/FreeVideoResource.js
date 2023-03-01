import React from "react";
import "./FreeVideoResource.css";
import playIcon from "../../assets/images/ostad-career/play-icon.svg";
import FreeVideoResourceCard from "../../components/FreeVideoResourceCard/FreeVideoResourceCard";

const FreeVideoResource = () => {
  return (
    <div className="free-video-resource container">
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
        <FreeVideoResourceCard />
      </div>
    </div>
  );
};

export default FreeVideoResource;
