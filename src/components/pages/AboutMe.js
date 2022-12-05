import React from "react";
import Footer from "./Footer";
import headshot from "../assets/headshot.png";
import "../styles/aboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <div className="columns">
        <div className="column is-full content has-text-centered ">
          <h1>About Me</h1>
          <img id="headshot" src={headshot} alt="Chris Gibson headshot" />
          <p>put about me paragraph here</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
