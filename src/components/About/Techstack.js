import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJava, DiMongodb, DiGit } from "react-icons/di";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiPython,
  SiMysql,
  SiDocker,
  SiTableau,
  SiPowerbi,
  SiGooglecloud,
  SiThealgorithms,
} from "react-icons/si";

function Techstack() {
  const labelStyle = {
    fontSize: "0.8rem", // Adjusted size
    marginTop: "5px",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <CgCPlusPlus />
        <div style={labelStyle}>C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPython />
        <div style={labelStyle}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJava />
        <div style={labelStyle}>Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <FaHtml5 />
        <div style={labelStyle}>HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <FaCss3 />
        <div style={labelStyle}>CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiThealgorithms />
        <div style={labelStyle}>Data Structures</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMysql />
        <div style={labelStyle}>SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiMongodb />
        <div style={labelStyle}>MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTableau />
        <div style={labelStyle}>Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPowerbi />
        <div style={labelStyle}>Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiDocker />
        <div style={labelStyle}>Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiGit />
        <div style={labelStyle}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiGooglecloud />
        <div style={labelStyle}>Google Cloud</div>
      </Col>
    </Row>
  );
}

export default Techstack;
