import React from "react";
import Container from "react-bootstrap/Container";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <div className="about">
          <h3>Hi, my name is Lirigzon Bajrami</h3>
          <div className="prompt">
            <p>A web developer with a passion for learning and creating. </p>
            <div>
              <a target="_blank" href="https://github.com/LirigzonBajrami">
                <BsGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lirigzon-bajrami-277997232/"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <div className="item">
            <h3>Front-end</h3>
            <span>
              React.js, Redux Toolkit, React-Bootstrap, Wordpress, HTML, CSS,
            </span>
          </div>
          <div className="item">
            <h3>Back-end</h3>
            <span>Beginner: Node.js, MongoDb, Express.js</span>
          </div>
          <div className="item">
            <h3>Languages</h3>
            <span>JavaScript</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
