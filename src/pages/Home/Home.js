import React from "react";
import ExpertGuideline from "../ExpertGuideline/ExpertGuideline";
import FreeVideoResource from "../FreeVideoResource/FreeVideoResource";
import Hero from "../Hero/Hero";
import JoinComunity from "../JoinComunity/JoinComunity";
import OstadCareer from "../OstadCareer/OstadCareer";
import Workshop from "../Workshop/Workshop";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ExpertGuideline />
      <OstadCareer />
      <Workshop />
      <FreeVideoResource />
      <JoinComunity />
    </div>
  );
};

export default Home;
