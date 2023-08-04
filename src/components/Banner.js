import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/michi.png";
import "./styles/Banner.css";

export function Banner() {
  /* Use states */
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const toRotate = ["Option 1", "Option 2", "Option 3"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };

    // eslint-disable-next-line
  }, [text]);

  function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }

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
            <h1>
              {`Displaying: `}
              <span
                className="txt-rotate"
                dataperiod="1000"
                data-rotate='[ "Option 1", "Option 2", "Option 3" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>

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
