// bootstrap
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles/Officers.css";

// assets
import Hussein from "../assets/img/officers/hussein.jpg";
import Rose from "../assets/img/officers/Rose.jpg";
import Anderson from "../assets/img/officers/Anderson.jpg";
import Canyu from "../assets/img/officers/Canyu.jpg";
import Diego from "../assets/img/officers/Diego.jpg";
import Jocelyn from "../assets/img/officers/Jocelyn.jpg";
import Monika from "../assets/img/officers/Monika.jpg";
import Javier from "../assets/img/officers/Javier.jpg";

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
    <section className="officers">
      {/* Carousel main container */}
      <Container>
        <Row>
          <Col>
            {/* Caurosel header and description */}
            <div className="officer-bx">
              <div style={{ padding: "1.5rem 0" }}>
                <h2>Meet Our Officers</h2>
                <p>These are the brilliant minds behind CSEC</p>
              </div>

              {/* Carousel component */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="officer-slider"
              >
                {/* Hussein */}
                <div className="item">
                  <img src={Hussein} alt="description" />
                  <h4>President</h4>
                  <h5>Hussain Alkatheri</h5>
                  <a
                    href="https://www.linkedin.com/in/hussain-alkatheri/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Brett */}
                <div className="item">
                  <img src={icon} alt="description" />
                  <h4>Vice President</h4>
                  <h5>Brett</h5>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Anderson */}
                <div className="item">
                  <img src={Anderson} alt="description" />
                  <h4>Tresure</h4>
                  <h5>Anderson Flores</h5>
                  <a
                    href="https://www.linkedin.com/in/anderson-flores/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Diego */}
                <div className="item">
                  <img src={Diego} alt="description" />
                  <h4>Secretary</h4>
                  <h5>Diego Martinez</h5>
                  <a
                    href="https://www.linkedin.com/in/diemar20/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Javier */}
                <div className="item">
                  <img src={Javier} alt="description" />
                  <h4>Web Master</h4>
                  <h5>Javier Cardoso</h5>
                  <a
                    href="https://www.linkedin.com/in/cardoso-javier/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Rose */}
                <div className="item">
                  <img src={Rose} alt="description" />
                  <h4>Infra. Officer</h4>
                  <h5>Rose Ramirez</h5>
                  <a
                    href="https://www.linkedin.com/in/rose-ramirez/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Canyu */}
                <div className="item">
                  <img src={Canyu} alt="description" />
                  <h4>Data Sci. Officer</h4>
                  <h5>Canyu Hankins</h5>
                  <a
                    href="https://www.linkedin.com/in/canyuhankins/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Jocelyn */}
                <div className="item">
                  <img src={Jocelyn} alt="description" />
                  <h4>Graphics Officer</h4>
                  <h5>Jocelyn Vazquez</h5>
                  <a
                    href="https://www.linkedin.com/in/jocelyn-vazquez"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Monika */}
                <div className="item">
                  <img src={Monika} alt="description" />
                  <h4>Tech Devt. Officer</h4>
                  <h5>Monika Sutaria</h5>
                  <a
                    href="https://www.linkedin.com/in/monika-sutaria7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Nicole */}
                <div className="item">
                  <img src={icon} alt="description" />
                  <h4>Event Coordinator</h4>
                  <h5>Nicole Rodriguez</h5>
                  <a
                    href="www.linkedin.com/in/nicoleceline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
