import { Col, Container, Row } from "react-bootstrap";
import { SponsorCard } from "./SponsorCard";
import "./styles/Sponsors.css";
import UTA from "../assets/img/sponsors/uta.png";
import ISACA from "../assets/img/sponsors/isaca.png";

export function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <Container>
        <Row>
          <Col>
            <div className="container-box">
              <h1>
                Our <span className="beloved">beloved</span> sponsors
              </h1>
              <p>
                A big thanks to all our
                <span className="beloved"> sponsors</span>!
              </p>

              <div className="sponsors-cards">
                <SponsorCard
                  frontImage={UTA}
                  backText="UTA text description"
                  link="https://www.uta.edu/academics/schools-colleges/engineering"
                />

                <SponsorCard
                  frontImage={ISACA}
                  backText="ISACA text description"
                  link="https://www.isaca.org"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
