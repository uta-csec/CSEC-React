// bootstrap
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles/Officers.css";

// assets
import icon from "../assets/img/person-icon.png";

export function Officers() {
  // Carousel controls
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    // carousel section
    <section className="officers" id="officers">
      {/* Carousel main container */}
      <Container>
        <Row>
          <Col>
            {/* Caurosel header and description */}
            <div className="officer-bx">
              <h2>Meet Our Officers</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br></br>
                Lorem Ipsum has been the industry's standard dummy text.
              </p>

              {/* Carousel component */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="officer-slider"
              >
                {/* Item */}
                <div className="item">
                  <img src={icon} alt="description" />
                  <h5>Name Lastname</h5>
                  <a href="https://www.linkedin.com/">LinkedIn</a>
                </div>

                {/* Item */}
                <div className="item">
                  <img src={icon} alt="description" />
                  <h5>Name Lastname</h5>
                  <a href="https://www.linkedin.com/">LinkedIn</a>
                </div>

                {/* Item */}
                <div className="item">
                  <img src={icon} alt="description" />
                  <h5>Name Lastname</h5>
                  <a href="https://www.linkedin.com/">LinkedIn</a>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
