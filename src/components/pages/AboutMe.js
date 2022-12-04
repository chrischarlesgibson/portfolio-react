import React from "react";
import Footer from "./Footer";
import headshot from "../assets/headshot.png";

export default function AboutMe() {
  return (
    <div>
      <div>
        <h1>About Me</h1>
        <img src={headshot} alt="Chris Gibson headshot" />
        <p>put about me paragraph here</p>
      </div>
      <Footer />
    </div>
  );
}
