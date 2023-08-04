import { Container, Row, Col } from "react-bootstrap";
import "./styles/Footer.css";

// assets
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
              {/* eslint-disable-next-line */}
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
