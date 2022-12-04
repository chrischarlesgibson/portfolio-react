import React from "react";
import Footer from "./Footer";

export default function Resume() {
  return (
    <div>
      <div class="card">
        <div class="card-content">
          <p class="title">Resume</p>
          <p class="subtitle">Jeff Atwood</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              download{" "}
              <a href="https://twitter.com/codinghorror/status/506010907021828096">
                Twitter
              </a>
            </span>
          </p>
          <p class="card-footer-item">
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
