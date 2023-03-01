import React from "react";
import "./CoursesCard.css";
import courseTeacher from "../../assets/images/ostad-career/course-teacher.png";
import teamIcon from "../../assets/images/ostad-career/team-line.svg";
import timeIcon from "../../assets/images/ostad-career/time-line.svg";
import righArrowDark from "../../assets/images/ostad-career/right-arrow-dark.svg";

const CoursesCard = () => {
  return (
    <div className="course-card-wrapper">
      <div className="card-inner-area">
        <div className="">
          <img style={{ width: "100%" }} src={courseTeacher} alt="" />
        </div>
        <div className="card-btn-area">
          <p className="btn text-white batch-btn">ব্যাচ ২৬ </p>
          <p className="batch-seat-btn text-white">
            <span
              style={{
                marginRight: "4px",
              }}
            >
              <img style={{ marginTop: "4px" }} src={teamIcon} alt="" />
            </span>{" "}
            ২০ টি সিট বাকি
          </p>
          <p className="batch-seat-btn text-white">
            <span
              style={{
                marginRight: "4px",
              }}
            >
              <img style={{ marginTop: "4px" }} src={timeIcon} alt="" />
            </span>{" "}
            ৫ দিন বাকি
          </p>
        </div>
      </div>
      <div className="course-card-description">
        <h3 className="course-descition-title">SolidWorks with Keyshot</h3>
        <div className="description-card-pricing">
          <div>
            <p className="discount-price">3000 TK</p>
            <p className="final-price">2000 TK</p>
          </div>
          <div>
            <p className="course-details-btn text-dark">
              {" "}
              বিস্তারিত দেখি{" "}
              <span>
                <img style={{ marginTop: "4px" }} src={righArrowDark} alt="" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
