import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import { BsGithub } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <Container>
      <div className="project">
        <h1>Project Name: {project.name}</h1>
        <img src={project.image} />
        <p>
          <strong>Stack: </strong>
          {project.stack}
        </p>

        {/* Duhet me modify links */}
        <a target="_blank" href={project.github}>
          <BsGithub />
        </a>
      </div>
    </Container>
  );
};

export default ProjectDetails;
