import React from "react";
import Footer from "./Footer";
import "../styles/resume.css";
import resumePDF from "../assets/Resume_10-21-2021.pdf";
import resumeImage from "../assets/resume.png";
/* eslint-disable */
export default function Resume() {
  return (
    <div id="resume-container">
      <div className="columns">
        <div className="column is-half content has-text-centered ">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={resumeImage} alt="resume image" />
              </figure>
            </div>
            <div className="card-content">
              <p className="title">Resume</p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  download <a href={resumePDF}>resume</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
        <div className="column content has-text-centered ">
          <h1>Skills</h1>
          <ul id="skills-list">
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>MySQL</li>
            <li>HTML5</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Jest</li>
            <li>Handlebars</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Sequelize</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Materialize</li>
            <li>Heroku</li>
            <li>Git</li>
            <li>Insomnia</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
