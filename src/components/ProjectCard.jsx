import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ image, name, stack, id }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} className="card-img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Stack: {stack}</Card.Text>
          <Button
            className="detail-button"
            onClick={() => {
              navigate("/project/" + id);
            }}
          >
            See In Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
