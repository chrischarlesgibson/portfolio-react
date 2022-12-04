import React from "react";
import "../styles/footer.css";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Built by Chris Gibson. The source code is licensed
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faHouse} />
        </p>
      </div>
    </footer>
  );
}
