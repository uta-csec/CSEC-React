import { Card } from "react-bootstrap";
import { Calendar2Heart } from "react-bootstrap-icons";
import "./styles/CalendarCard.css";

export default function CalendarCard() {
  return (
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
            We will update this section on a weekly basis. So, be sure to check
            back regularly for new activities and learning opportunities.
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
