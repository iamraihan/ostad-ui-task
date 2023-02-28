import React, { useState } from "react";
import "./ExpertCareerCard.css";
import courseImage from "../../assets/images/expert-career-guideline/Course Image.png";
import playButton from "../../assets/images/expert-career-guideline/play-button.svg";

const ExpertCareerCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="career-guide-card">
      <img style={{ width: "100%" }} src={courseImage} alt="" />
      <div className="career-guide-card-description-area">
        <div className="play-button-wrapper">
          <div>
            {/* <img src={playButton} alt="" /> */}
            {/* popup */}
            <div>
              <button className="expert-card-play-btn" onClick={togglePopup}>
                <img src={playButton} alt="" />
              </button>
              {showPopup && (
                <div className="popup-video ">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/4L7e54TIM-0"
                    title="Rick Astley - Never Gonna Give You Up (Video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <p className="popup-cross-btn" onClick={togglePopup}>
                    X
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-white play-btn-title">
            ক্যারিয়ার করুন ওয়েব ডিজাইনে
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertCareerCard;
