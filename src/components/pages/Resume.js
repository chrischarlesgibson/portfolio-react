import React from "react";
import Footer from "./Footer";
import "../styles/resume.css";
/* eslint-disable */
export default function Resume() {
  return (
    <div id="resume-container">
      <div className="columns">
        <div className="column is-half content has-text-centered ">
          <div className="card">
            <div className="card-content">
              <p className="title">Resume</p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  download{" "}
                  <a href="https://twitter.com/codinghorror/status/506010907021828096">
                    resume
                  </a>
                </span>
              </p>
              <p className="card-footer-item">
                <span>
                  expand <a href="#">resume</a>
                </span>
              </p>
            </footer>
          </div>
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
