import React from 'react';
import './CoursesList.css';

const CoursesList = ({ courses }) => {
  return (
    <div className="course-container">
      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <img src={course.image} alt={course.name} />
          <h5>{course.name}</h5>
          <h5>{course.branch}</h5>
          <button className="resume-button">Resume</button>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
