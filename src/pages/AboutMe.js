import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu";
import backgroundImage from "../resources/landingPageBackground.jpg";
import AboutMeContent from "../components/AboutMeContent";
import logoOverrideImg from "../resources/5.png";

const AboutMe = () => {
  return (
    <div
      className="about-me-wrapper d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "18vh",
          zIndex: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Menu />
      <div style={{ height: "80px" }} />
      <Container
        style={{
          padding: "0px",
          fontFamily: "Arial, sans-serif",
          flexGrow: 1, // Ensures the content takes up available space
        }}
      >
        <Row>
          <AboutMeContent />
        </Row>
        <Row>
          <br />
          <br />
        </Row>
      </Container>
      <footer
        style={{
          marginTop: "auto",
          width: "100%",
          backgroundColor: "#55020e",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <p>© 2025 Emily Jane Photography</p>
      </footer>
    </div>
  );
};

export default AboutMe;
