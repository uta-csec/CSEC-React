import { Col, Container, Row, Card } from "react-bootstrap";
import "./styles/Calendar.css";
import { Calendar2Heart } from "react-bootstrap-icons";
import calendar from "../assets/img/officers/calendar.jpg";

export default function Calendar() {
  return (
    <section className="calendar-section" id="calendar">
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Don't miss our activities!</h2>
              <div className="calendar-info">
                <img src={calendar} alt="Meeting pic" />
                <Card>
                  <Card.Body>
                    <div className="calendar-card">
                      <div className="calendar-icon">
                        <Calendar2Heart size={18} />
                      </div>
                      <div className="calendar-text">
                        We will update this section on a weekly basis. So, be
                        sure to check back regularly for new activities and
                        learning opportunities
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
