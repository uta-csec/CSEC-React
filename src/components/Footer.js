import { Container, Row, Col } from "react-bootstrap";
import "./styles/Footer.css";
import constants from "../assets/constants.json";

// assets
import { Discord, Instagram, Twitter } from "react-bootstrap-icons";

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
            <p>{constants.contact.office}</p>
            <a
              href={`mailto:${constants.contact.email}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {constants.contact.email}
            </a>
          </Col>

          {/* Social media */}
          <Col className="footer-section">
            <h4>Socials</h4>
            <div className="social-icon">
              {/* Discord */}
              <a
                href={constants.socials.discord}
                target="_blank"
                rel="noreferrer"
              >
                <Discord className="myIcon" />
              </a>
              <a
                href={constants.socials.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="myIcon" />
              </a>
              <a
                href={constants.socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="myIcon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
