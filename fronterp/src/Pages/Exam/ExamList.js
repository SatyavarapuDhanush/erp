import React from 'react';
import './ExamList.css';

const ExamList = ({ exams, onEdit, onDelete }) => {
  if (!exams || exams.length === 0) {
    return <p>No exams available</p>;
  }

  return (
    <div className="exam-list-container">
      <h3>Exam List</h3>
      <ul className="exam-list">
        {exams.map((exam) => (
          <li key={exam.examid}>
            <span className="exam-details">
              {exam.examname} - {exam.date} - {exam.duration} minutes
            </span>
            <div className="exam-actions">
              <button onClick={() => onEdit(exam)}>Update</button>
              <button onClick={() => onDelete(exam.examid)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamList;
