import React from "react";
import Footer from "./Footer";
import "../styles/portfolio.css";
/* eslint-disable */
export default function Portfolio() {
  return (
    <div id="portfolio-wrapper">
      <div className="card">
        <div className="card-content">
          <p className="title">
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">Jeff Atwood</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on{" "}
              <a href="https://twitter.com/codinghorror/status/506010907021828096">
                Twitter
              </a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
      <Footer />
    </div>
  );
}
