import React from "react";
import Lottie from "react-lottie";
import frontAnimation from "../../assets/lottie/front.json";
import backAnimation from "../../assets/lottie/node.json";

function HeroSection() {
  const frontOption = {
    loop: true,
    autoplay: true,
    animationData: frontAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nodeOptions = {
    loop: true,
    autoplay: true,
    animationData: backAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
 
  return (
    <div className="heroContainer">
      <div className="heading">
        <h1>
          It's Me <span>Niroj Thapa</span>{" "}
        </h1>
        <h1>
          <span className="fullStack">Full Stack</span> Developer
        </h1>
      </div>
      <div className="bottomHero">
      <div >
      <Lottie options={frontOption} height={260} width={260} />
      </div>
        <div>
          <div className="heroImage">
            <img src="images/mypic.png"></img>
          </div>
        </div>
        <div>
        <div >
        <Lottie options={nodeOptions} height={260} width={260} />
      </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
