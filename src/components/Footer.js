import { Container, Row, Col } from "react-bootstrap";
import "./styles/Footer.css";

// assets
import { Discord, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center  flex-column flex-sm-row">
          {/* Logo */}
          <Col className="footer-section">
            <h4>CSEC</h4>
            <p>© 2023 CSEC</p>
          </Col>

          <Col className="footer-section">
            <h4>Contact</h4>
            <p>500 UTA Blvd, Room 438, Arlington, TX 76010</p>
            <a
              href="mailto:csec@gmail.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              csec@gmail.com
            </a>
          </Col>

          {/* Social media */}
          <Col className="footer-section">
            <h4>Socials</h4>
            <div className="social-icon">
              {/* Discord */}
              <a
                href="https://discord.gg/8YuGKecGU4"
                target="_blank"
                rel="noreferrer"
              >
                <Discord className="myIcon" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="#">
                <Linkedin className="myIcon" />
              </a>
              <a href="https://www.instagram.com/uta.csec/">
                <Instagram className="myIcon" />
              </a>
              <a href="https://twitter.com/UTA_CSEC">
                <Twitter className="myIcon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
