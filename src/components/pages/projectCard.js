import React from "react";

import "../styles/projectCard.css";
// import "../../components/data/projectsData";
/* eslint-disable */
export default function ProjectCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure>
          <img src={props.thumbnail} alt={props.project.title} />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="title">{props.project.title}</h4>
        <p className="subtitle">{props.project.description}</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            go to live app:
            <a href={props.project.appUrl}>link</a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            got project repo: <a href={props.project.repo}>link</a>
          </span>
        </p>
      </footer>
    </div>
  );
}
