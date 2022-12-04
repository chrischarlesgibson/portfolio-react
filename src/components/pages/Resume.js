import React from "react";
import Footer from "./Footer";
/* eslint-disable */
export default function Resume() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <p className="title">Resume</p>
          <p className="subtitle">Jeff Atwood</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              download{" "}
              <a href="https://twitter.com/codinghorror/status/506010907021828096">
                Twitter
              </a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              view<a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
      <Footer />
    </div>
  );
}
