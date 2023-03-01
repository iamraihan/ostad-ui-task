import React from "react";
import "./Workshop.css";
import workshopIcon from "../../assets/images/ostad-career/workshoop-icon.png";
import CoursesCard from "../../components/CoursesCard/CoursesCard";

const Workshop = () => {
  return (
    <div className="workshop container">
      <div className="workshop-border">
        <div className="workshop-inner">
          <div className="workshop-wrapper">
            <div>
              <img src={workshopIcon} alt="" />
            </div>
            <p className="workshop-title">ওয়ার্কশপ</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
