import { Col, Container, Row, Card } from "react-bootstrap";
import "./styles/Calendar.css";
import { Calendar2Heart } from "react-bootstrap-icons";
import blackHole from "../assets/img/Horse-space.png";

export default function Calendar() {
  return (
    <section className="calendar-section" id="calendar">
      <div className="horse">
        <img src={blackHole} alt="Blackhole horse" />
      </div>
      <Container>
        <Row>
          <Col>
            <div className="calendar-info">
              <div>
                <h2>Don't miss our activities!</h2>
                <Card
                  style={{
                    height: "fit-content",
                    padding: "1rem 0",
                    marginTop: "8%",
                  }}
                >
                  <Card.Body>
                    <div className="calendar-card">
                      <div className="calendar-icon">
                        <Calendar2Heart size={20} />
                      </div>
                      <div className="calendar-text">
                        We will update this section on a weekly basis. So, be
                        sure to check back regularly for new activities and
                        learning opportunities.
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
