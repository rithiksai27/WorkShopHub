import React from "react";
import "./schedule.css";

function Schedule() {
  return (
    <div className="schedule-container">
      <div className="schedule-card">
        <h2>Schedule a Session</h2>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Email ID:
            <input type="email" placeholder="Enter your email ID" required />
          </label>
          <label>
            Student ID:
            <input type="text" placeholder="Enter your student ID" required />
          </label>
          <label>
            Date and Time:
            <input type="datetime-local" required />
          </label>
          <button type="submit">Schedule</button>
        </form>
      </div>
    </div>
  );
}

export default Schedule;
