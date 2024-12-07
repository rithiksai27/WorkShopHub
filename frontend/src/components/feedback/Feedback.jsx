import React from "react";
import "./feedback.css";

function Feedback() {
  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <h2>Student Feedback</h2>
        <form>
          <label htmlFor="student-feedback">Provide Your Feedback:</label>
          <textarea
            id="student-feedback"
            rows="5"
            placeholder="Enter your feedback here..."
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
        <button
          className="view-feedback-btn"
          onClick={() => window.open("https://example.com/student-feedback", "_blank")}
        >
          View Student Feedbacks
        </button>
      </div>
      <div className="feedback-card">
        <h2>Faculty Feedback</h2>
        <form>
          <label htmlFor="faculty-feedback">Provide Your Feedback:</label>
          <textarea
            id="faculty-feedback"
            rows="5"
            placeholder="Enter your feedback here..."
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
        <button
          className="view-feedback-btn"
          onClick={() => window.open("https://example.com/faculty-feedback", "_blank")}
        >
          View Faculty Feedbacks
        </button>
      </div>
    </div>
  );
}

export default Feedback;
