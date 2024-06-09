import React from "react";

function Intro() {
  return (
    <div id='about' className="IntroContainer">
      <div className="title">
        <h1>WHO AM I ?</h1>
      </div>
      <div className="description">
        <p>
          I am an expert in developing dynamic web applications using React and
          Node.js, with a strong focus on creating seamless user experiences and
          scalable backend solutions. Throughout my career, I've led numerous
          successful projects, leveraging my deep knowledge of modern JavaScript
          frameworks.
        </p>

        <p>
          I am passionate about best practices and continuous learning, and I
          thrive in collaborative, fast-paced environments. Let's connect and
          create innovative solutions together.
        </p>
      </div>
      <div>
        <button className="projectBtn">SHOW MY PROJECTS</button>
      </div>
    </div>
  );
}

export default Intro;
