import React from "react";
import "./CareerGuildelineCard.css";
import readingTest from "../../assets/images/companies/reading-test.png";

const CareerGuildelineCard = () => {
  return (
    <div className="career-guideline-card">
      <div>
        <img className="reading-test-img" src={readingTest} alt="" />
      </div>
      <div className="reading-test-card-wrapper">
        <div className="reading-test-card-duration">
          <p className="reading-test-duration">March 3, 2022</p>{" "}
          <p className="reading-test-duration">.</p>{" "}
          <p className="reading-test-duration"> 5 min read</p>
        </div>
        <h4 className="card-video-subtitle">IELTS Reading Test</h4>
        <p className="reading-test-card-subtitle">IELTS Reading</p>
      </div>
    </div>
  );
};

export default CareerGuildelineCard;
