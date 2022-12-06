import React from "react";
import Footer from "./Footer";
import headshot from "../assets/headshot.png";
import "../styles/aboutMe.css";

export default function AboutMe() {
  return (
    <div id="aboutMe-container ">
      <div className="columns">
        <div className="column is-full content has-text-centered ">
          <h1>About Me</h1>
          <img id="headshot" src={headshot} alt="Chris Gibson headshot" />
          <p>
            I'm a full-stack developer that has a strong history in project
            management. I graduated from UW-Madison in 2018 with a degree in
            Biology and I have working as a project manager in the biotech
            industry for the last 4 years. I'm currently looking for new
            oppourtunities and challenges so I created this porfolio page to
            display my talents and my work. Please take a look at my projects
            and skills and contact me if you are interested.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
