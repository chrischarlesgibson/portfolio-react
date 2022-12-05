import React from "react";
import Footer from "./Footer";
import headshot from "../assets/headshot.png";
import "../styles/aboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <div className="columns">
        <div className="column is-half content has-text-centered ">
          <h1>About Me</h1>
          <img id="headshot" src={headshot} alt="Chris Gibson headshot" />
          <p>put about me paragraph here</p>
        </div>
        <div className="column content has-text-centered ">
          <h1>Skills</h1>
          <ul id="skills-list">
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
