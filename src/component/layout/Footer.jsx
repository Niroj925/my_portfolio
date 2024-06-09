import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerIntro">
        <h1>Niroj Thapa</h1>
        <p>
          Turn your project ideas into reality! I'm a passionate full-stack
          developer with expertise in both frontend and backend technologies.
          Let's chat - I'm eager to leverage my skills to make your vision a
          success.
        </p>
      </div>
      <div className="contactLink">
        <div className="footerLink">
          <h3>Important Links</h3>
          <a href="https://www.facebook.com/niroj.thapa.906" target="_blank">
            {" "}
            Facebook{" "}
          </a>
          <a href="https://wa.me/9867816329" target="_blank">
            {" "}
            WhatsApp{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/niroj-thapa-648761210/"
            target="_blank"
          >
            {" "}
            LinkedIn{" "}
          </a>
          <a href="https://github.com/Niroj925" target="_blank">
            {" "}
            Github
          </a>
        </div>
        <div className="myIntro">
          <h3>Contact Info</h3>
          <br />
          <p>thapaniroj5769@gmail.com</p>
          <p>9867816329</p>
          <p>Kathmandu,Nepal</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
