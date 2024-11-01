import React from 'react';

const ExamList = ({ exams, onEdit, onDelete }) => {
  if (!exams || exams.length === 0) {
    return <p>No exams available</p>;
  }

  return (
    <div>
      <h3>Exam List</h3>
      <ul>
        {exams.map((exam) => (
          <li key={exam.examid}>
            {exam.examname} - {exam.date} - {exam.duration} minutes
            <button onClick={() => onEdit(exam)}>Update</button>
            <button onClick={() => onDelete(exam.examid)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamList;
