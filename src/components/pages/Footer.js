import React from "react";
import "../styles/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="column is-full">
        <div
          className="content has-text-centered is-flex"
          id="social-media-icons"
        >
          <a href="https://github.com/chrischarlesgibson?tab=repositories">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href="https://www.linkedin.com/in/chris-gibson-415909250/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="https://medium.com/@chrischarlesgibson">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </div>
    </footer>
  );
}
