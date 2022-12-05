import React from "react";
import Footer from "./Footer.js";
import "../styles/portfolio.css";
import { projects } from "../../components/data/projectsData.js";
import ProjectCard from "./projectCard.js";

export default function Portfolio() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="container is-fluid">
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
