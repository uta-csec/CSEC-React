import { Container, Row, Col } from "react-bootstrap";
import "./styles/Footer.css";

// assets
import logo from "../assets/img/logo.png";
import { Discord, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          {/* Social media */}
          <Col size={12} sm={6} className="text-center text-sm-end">
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
              {/* eslint-disable-next-line */}
              <a href="#">
                <Instagram className="myIcon" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="#">
                <Twitter className="myIcon" />
              </a>
            </div>
            <p>© 2023 CSEC</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
