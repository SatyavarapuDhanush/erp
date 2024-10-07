import React from 'react';
import { Link } from 'react-router-dom';
import './Homenav.css';

const Homenav = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="nav-item">Home</li>
        <li className="nav-item">Attendance</li>
        <Link to="/courses"><li className="nav-item">Courses</li></Link>
        <li className="nav-item">TimeTable</li>
        <li className="nav-item">Fee Payments</li>
        <li className="nav-item">Exams</li>
        <li className="nav-item">Results</li>
        <li className="nav-item">Events</li>
        <li className="nav-item">Feedback</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Contact Us</li>
      </ul>
    </div>
  );
};

export default Homenav;
