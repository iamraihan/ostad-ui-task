import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo ostad.png";
import androidApp from "../../assets/images/companies/google-play 1.png";
import facebook from "../../assets/images/companies/facebook.png";
import instagram from "../../assets/images/companies/instagram.png";
import tiktok from "../../assets/images/companies/tiktok.png";
import linkedin from "../../assets/images/companies/linkedIn.png";
import youtube from "../../assets/images/companies/youtube.png";

const Footer = () => {
  return (
    <div className="container footer-area">
      <div>
        <div>
          <img style={{ marginBottom: "8px" }} src={logo} alt="" />
        </div>
        <p className="ostad-expert-subtitle text-dark">
          অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।
        </p>
        <p className="text-dark download-ostad">ডাউনলোড করুন ওস্তাদ অ্যাপ</p>
        <div>
          <img style={{ marginBottom: "24px" }} src={androidApp} alt="" />
        </div>
        <p className="ostad-expert-subtitle text-dark">
          কমিউনিটি -এর সাথে কানেক্টেড থাকতে
        </p>
        <div className="social-icon-wrapper">
          <div className="social-icon">
            <img src={facebook} alt="" />
          </div>
          <div className="social-icon">
            <img src={instagram} alt="" />
          </div>
          <div className="social-icon">
            <img src={youtube} alt="" />
          </div>
          <div className="social-icon">
            <img src={linkedin} alt="" />
          </div>
          <div className="social-icon">
            <img src={tiktok} alt="" />
          </div>
        </div>
      </div>
      <div>
        <p className="ostad-expert-subtitle text-dark mb-16">
          জয়েন করুন এক্সপার্টদের টিমে
        </p>
        <p className="ostad-expert-subtitle text-dark ">
          জয়েন করুন এক্সপার্টদের টিমে
        </p>
      </div>
      <div>
        <p className="ostad-expert-subtitle text-dark ">
          Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212
        </p>
      </div>
      <div>
        <p className="ostad-expert-subtitle text-dark ">Terms & Conditions </p>
      </div>
    </div>
  );
};

export default Footer;
