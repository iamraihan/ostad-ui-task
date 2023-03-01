import React from "react";
import "./FreeVideoResourceCard.css";
import ieltsImg from "../../assets/images/video-resureces/ielsts-poster.png";
import time from "../../assets/images/video-resureces/time-line.svg";
import calenndar from "../../assets/images/video-resureces/calendar-event-line.svg";
import videoPlayIcon from "../../assets/images/video-resureces/Video Play.svg";

const FreeVideoResourceCard = () => {
  return (
    <div className="card-video-resource">
      <div className="video-play-btn-wrapper">
        <img className="" style={{ width: "100%" }} src={ieltsImg} alt="" />
        <img className="video-play-icon" src={videoPlayIcon} alt="" />
      </div>
      <div className="card-video-resource-wrapper">
        <p className="card-video-subtitle">Language Learning</p>
        <h4 className="card-video-subtitle">
          IELTS Listening: 15 Days Challenge
        </h4>

        <div className="vidoe-duration-wrapper">
          <p className="video-duration-btn">
            <span>
              <img src={time} alt="" />
            </span>
            60 min
          </p>
          <p className="video-duration-btn">
            <span>
              <img src={calenndar} alt="" />
            </span>
            30 March, 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeVideoResourceCard;
