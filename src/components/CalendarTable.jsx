import eventData from "../assets/constants/calendar.json";
import "./styles/CalendarTable.css";

export default function CalendarTable() {
  let csecEvents = eventData.events;

  return (
    <div className="tableContainer">
      {/* Table head */}
      <table className="calendarTable">
        <thead>
          <th>Event</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </thead>
        {/* Table body */}
        <tbody>
          {Object.values(csecEvents).map((csecEvent) => (
            <tr key={csecEvent.name}>
              <td>{csecEvent.name}</td>
              <td>{csecEvent.location}</td>
              <td>{csecEvent.date}</td>
              <td>{csecEvent.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
