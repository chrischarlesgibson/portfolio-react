import React from "react";
import Footer from "./Footer";
import "../styles/resume.css";
/* eslint-disable */
export default function Resume() {
  return (
    <div>
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
      <Footer />
    </div>
  );
}
