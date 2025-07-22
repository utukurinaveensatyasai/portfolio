import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VisualSort from "../../Assets/Projects/VisualSort.png";
import ticTacToeImg from "../../Assets/Projects/ticTacToeImg.png";
import randomPassImg from "../../Assets/Projects/randomPassImg.png";
import SalesForecast from "../../Assets/Projects/SalesForecast.png";
import SecurePassword from "../../Assets/Projects/SecurePassword.png";
import StuddyBuddy from "../../Assets/Projects/StuddyBuddy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SalesForecast}
              isBlog={false}
              title="Sales Forecasting & Inventory Optimization Dashboard"
              description="Developed a web application A web application demonstrating data-driven sales prediction and inventory management. It simulates historical sales, forecasts future demand using Prophet-like logic (client-side), and recommends optimal inventory levels with safety stock. Visualizes trends, seasonality, and provides actionable business insights."
              ghLink="https://github.com/utukurinaveensatyasai/sales-forecasting-dashboard.git"
              demoLink="https://utukurinaveensatyasai.github.io/sales-forecasting-dashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SecurePassword}
              isBlog={false}
              title="CareerMap.AI"
              description="Career Map AI is an intuitive web platform designed to help students explore diverse career paths through an interactive, visual tree structure. It offers personalized roadmaps based on individual education levels and interests, providing detailed information on qualifications, skills, and salary expectations for each role. This modern React application aims to guide users in making informed decisions about their future."
              ghLink="https://github.com/utukurinaveensatyasai/career-map-ai.git"
              demoLink="https://utukurinaveensatyasai.github.io/career-map-ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="SECURE PASSWORD GENERATOR"
              description="•	One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols.
•	One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
"
              ghLink="https://github.com/utukurinaveensatyasai/secure-password-generator.git"
              demoLink="https://utukurinaveensatyasai.github.io/secure-password-generator/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VisualSort}
              isBlog={false}
              title="Visual Sort"
              description="Sorting Algorithm Visualizer is a web-based project that visually demonstrates how different sorting algorithms work. Built using HTML, CSS, and JavaScript, this tool helps users understand sorting techniques through interactive animations."
              ghLink="https://github.com/utukurinaveensatyasai/VisualSort.git"
              demoLink="https://utukurinaveensatyasai.github.io/VisualSort/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={StuddyBuddy}
              isBlog={false}
              title="Studdy-Buddy Matching With AI Microservice"
              description="A lightweight, offline-ready Python-based microservice that intelligently recommends compatible study partners based on academic goals, study preferences, and personality traits. Built with FastAPI, configurable via JSON, and containerized for deployment anywhere."
              ghLink="https://github.com/utukurinaveensatyasai/Study-buddy-Matching-Microservice.git"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToeImg}
              isBlog={false}
              title="TicTacTwist"
              description="TicTacTwist is a modern take on the classic Tic Tac Toe game, crafted with JavaScript and styled with  CSS and HTML for a sleek and responsive design. This game offers a delightful user experience with smooth animations, intuitive gameplay, and a minimalist interface. Whether you're playing against a friend or challenging the computer, TicTacTwist provides a fun and engaging way to enjoy this timeless game, all from the convenience of your web browser. Dive into a world where strategy meets style, and see if you can outsmart your opponent in this reimagined classic!"
              ghLink="https://tic-tac-toe-8rd3.onrender.com/"
              demoLink=""      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
