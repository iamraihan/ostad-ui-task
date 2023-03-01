import React, { useState } from "react";
import "./FreeVideoResourceCard.css";
import ieltsImg from "../../assets/images/video-resureces/ielsts-poster.png";
import time from "../../assets/images/video-resureces/time-line.svg";
import calenndar from "../../assets/images/video-resureces/calendar-event-line.svg";
import videoPlayIcon from "../../assets/images/video-resureces/Video Play.svg";

const FreeVideoResourceCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="card-video-resource">
      <div className="video-play-btn-wrapper">
        <img className="" style={{ width: "100%" }} src={ieltsImg} alt="" />
        <img
          onClick={togglePopup}
          className="video-play-icon"
          src={videoPlayIcon}
          alt=""
        />
        {showPopup && (
          <div className="popup-video ">
            <iframe
              width="300"
              height="315"
              src="https://www.youtube.com/embed/4L7e54TIM-0?autoplay=1"
              title="Rick Astley - Never Gonna Give You Up (Video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <p className="popup-cross-btn cross-btn-dark" onClick={togglePopup}>
              X
            </p>
          </div>
        )}
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
