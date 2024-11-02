import React from 'react';
import './ExamDetails.css';

const ExamDetails = ({ exam }) => {
  return (
    <div className="exam-details-container">
      <h3>Exam Details</h3>
      {exam ? (
        <div>
          <h3><strong>Name of exam:</strong> {exam.examname}</h3>
          <h3><strong>Date:</strong> {exam.date}</h3>
          <h3><strong>Duration:</strong> {exam.duration} minutes</h3>
          <h3><strong>Assigned Students:</strong></h3>
          <ul>
          {exam.assignedStudents && exam.assignedStudents.map(student => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Select an exam to view details</p>
      )}
    </div>
  );
};

export default ExamDetails;
