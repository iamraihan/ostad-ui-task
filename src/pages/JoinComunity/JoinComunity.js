import React from "react";
import "./JoinComunity.css";
import joinComunity from "../../assets/images/join-comunity/join-comunity.png";
import JoinComunityCard from "../../components/JoinComunityCard/JoinComunityCard";
import flutter from "../../assets/images/join-comunity/flutter-career.png";
import mern from "../../assets/images/join-comunity/mern.png";
import content from "../../assets/images/join-comunity/content.png";
import uiUx from "../../assets/images/join-comunity/ui-ux.png";

const JoinComunity = () => {
  const images = [
    { id: 1, img: flutter },
    { id: 2, img: mern },
    { id: 3, img: content },
    { id: 4, img: uiUx },
  ];
  return (
    <div className="join-comunity">
      <div className="join-comunity-inner container">
        <div className="ostad-title-wrapper ">
          <div>
            <img src={joinComunity} alt="" />
          </div>
          <p className="expert-career-title text-dark">ফ্রি ভিডিও রিসোর্স</p>
        </div>
        <p className="ostad-expert-subtitle text-dark">
          স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
          বাটনে।
        </p>
        <div className="join-comunity-wrapper">
          {images.map((image) => (
            <JoinComunityCard key={image.id} image={image} />
          ))}
          <JoinComunityCard />
        </div>
      </div>
    </div>
  );
};

export default JoinComunity;
