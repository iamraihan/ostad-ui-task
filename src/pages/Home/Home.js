import React from "react";
import CareerGuideline from "../CareerGuideline/CareerGuideline";
import ExpertGuideline from "../ExpertGuideline/ExpertGuideline";
import FreeVideoResource from "../FreeVideoResource/FreeVideoResource";
import Hero from "../Hero/Hero";
import IndustryExperts from "../IndustryExperts/IndustryExperts";
import JoinComunity from "../JoinComunity/JoinComunity";
import OstadCareer from "../OstadCareer/OstadCareer";
import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";
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
      <IndustryExperts />
      <TrustedCompanies />
      <CareerGuideline />
    </div>
  );
};

export default Home;
