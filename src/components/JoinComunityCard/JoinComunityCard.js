import React from "react";
import "./JoinComunityCard.css";
import flutter from "../../assets/images/join-comunity/flutter-career.png";
import team from "../../assets/images/join-comunity/team-line.svg";
import fbCircle from "../../assets/images/join-comunity/facebook-circle-line.png";

const JoinComunityCard = ({ image }) => {
  console.log(image);
  return (
    <div className="join-comunity-card">
      <div className="join-comunity-card-wrapper">
        <div className="join-comunity-card-area">
          <div>
            <img style={{ width: "100%" }} src={flutter} alt="" />
          </div>
          <div>
            <button className="join-comunity-member">
              <img src={team} alt="" /> 698 members
            </button>
            <h3 className="join-comunity-card-title">
              Flutter Developers Community @Bangladesh
            </h3>
            <p className="join-comunity-cta-btn">
              ফেসবুক গ্রুপে জয়েন করুন <img src={fbCircle} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinComunityCard;
