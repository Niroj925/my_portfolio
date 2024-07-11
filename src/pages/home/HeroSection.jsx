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
      <div className="lottieBox">
      <Lottie options={frontOption} width={260} height={260} />
      </div>
        <div>
          <div className="heroImage">
            <img src="images/nt.webp"></img>
          </div>
        </div>
        <div>
        <div className="lottieBox">
        <Lottie options={nodeOptions} width={260} height={260} />
      </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
