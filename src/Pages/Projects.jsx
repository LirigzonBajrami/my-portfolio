import React from "react";

import Container from "react-bootstrap/Container";
import ProjectCard from "../components/ProjectCard";
import { projectList } from "../helpers/ProjectList";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <Container>
        <h1>My Personal Projects</h1>
        <div className="project-cards">
          {projectList.map((project, index) => {
            return (
              <ProjectCard
                name={project.name}
                image={project.image}
                stack={project.stack}
                id={index}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
