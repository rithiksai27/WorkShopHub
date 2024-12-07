import React from 'react';
import './pastsessions.css';

function Pastsessions() {
  return (
    <div className="pastsessions-container">
      {/* Faculty Past Sessions */}
      <div className="pastsessions-card faculty">
        <h2>Faculty Past Sessions</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=SqcY0GlETPk" target="_blank" rel="noopener noreferrer">
              Advanced Mathematics
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=7IgVGSaQPaw" target="_blank" rel="noopener noreferrer">
              Physics Basics
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=OoL1ZoyfIgg&list=PLh11ucJN276LShB-f_5maiWO2RbLcZQnS" target="_blank" rel="noopener noreferrer">
              Data Structures
            </a>
          </li>
        </ul>
        <button onClick={() => window.location.href = '/schedule'} className="new-schedule-btn">
          New Schedule
        </button>
      </div>

      {/* Student Past Sessions */}
      <div className="pastsessions-card student">
        <h2>Student Past Sessions</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=SqcY0GlETPk" target="_blank" rel="noopener noreferrer">
              React Basics
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=7IgVGSaQPaw" target="_blank" rel="noopener noreferrer">
              Machine Learning Intro
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=OoL1ZoyfIgg&list=PLh11ucJN276LShB-f_5maiWO2RbLcZQnS" target="_blank" rel="noopener noreferrer">
              Cryptography Overview
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pastsessions;
