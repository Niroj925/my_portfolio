import React from "react";
import HeroSection from "./HeroSection";
import Intro from "./Intro";
import MySkills from "./MySkills";
import SocialMedia from "./SocialMedia";
import Mail from "./Mail";
import Project from "./Project";

function Home() {
  return (
    <div className="MainDiv">
     <HeroSection/>
     <Intro/>
     <MySkills/>
     <Project/>
     <SocialMedia/>
     <Mail/>
    </div>
  );
}

export default Home;
