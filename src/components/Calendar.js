import { Col, Container, Row } from "react-bootstrap";
import "./styles/Calendar.css";
import blackHole from "../assets/img/horseInfo.png";
import CalendarCard from "./CalendarCard";
import eventData from "../assets/constants/calendar.json";
import CalendarTable from "./CalendarTable";

export default function Calendar() {
  const displayCalendar = () => {
    if (Object.keys(eventData).length === 0) {
      return <CalendarCard />;
    } else {
      return <CalendarTable />;
    }
  };

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
                {displayCalendar()}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
