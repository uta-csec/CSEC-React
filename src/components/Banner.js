import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TypeIt from "typeit-react";
import headerImg from "../assets/img/michi.png";
import "./styles/Banner.css";

export function Banner() {
  return (
    /* Banner section */
    <section className="banner" id="home">
      {/* Main container */}
      <Container>
        {/* Row for both banner and image */}
        <Row className="align-items-center">
          {/* Banner column */}
          <Col xs={12} md={6} xl={7}>
            {/* Welcome tag */}
            <span className="tagline">Welcome to CSEC</span>

            {/* Main banner header */}
            <TypeIt element={"h1"} className="ban">
              This will be typed in a `span` element!
            </TypeIt>

            {/* Main text */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            {/* Join btn */}
            <button onClick={() => console.log("connect")}>
              Become a member <ArrowRightCircle size={25} />
            </button>
          </Col>

          {/* Image column */}
          <Col xs={12} md={6} xl={5}>
            {/* Image */}
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
