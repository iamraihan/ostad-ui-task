import React from "react";
import "./CoursesCard.css";
import courseTeacher from "../../assets/images/ostad-career/course-teacher.png";
import teamIcon from "../../assets/images/ostad-career/team-line.svg";
import timeIcon from "../../assets/images/ostad-career/time-line.svg";

const CoursesCard = () => {
  return (
    <div>
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
            ১৪২৪৫ জন Ostad গ্র্যাজুয়েট
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
    </div>
  );
};

export default CoursesCard;
