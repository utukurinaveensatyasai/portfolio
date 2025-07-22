import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen </span>
            from <span className="purple"> Kakinada, India.</span>
            <br />
            I am currently pursuing my B.Tech in Information Technology from PRAGATI ENGINEERING COLLEGE (2022-2026)
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new things 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">NAVEEN</footer>
        </blockquote>
        <a href="https://medium.com/@utukurinaveensatyasai" target="_blank" rel="noopener noreferrer">
          Visit my Medium Blogs
        </a>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
