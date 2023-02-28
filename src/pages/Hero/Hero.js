import React from "react";
import heroBanner from "../../assets/images/hero-bg-banner.png";
import "./Hero.css";
import category from "../../assets/images/CATAGORY.png";

const Hero = () => {
  const heroBannerStyle = {
    backgroundImage: `url(${heroBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={heroBannerStyle} className="hero">
      <div className="hero-inner container">
        <div>
          <img src={category} alt="" />
        </div>
        <div>
          <h2 className="hero-title text-dark">Tech and development</h2>
          <p className="hero-subtitle">
            স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
            বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
            নিচের বাটনে।
          </p>
          <div>
            <p>item1</p>
            <p>item2</p>
          </div>
          <div>
            <button className="hero-btn">btn1</button>
            <button className="hero-btn">btn2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
