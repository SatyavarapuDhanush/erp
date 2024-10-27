import React, { useEffect, useState } from 'react';
import ExamService from '../../Service/ExamService';

const ExamForm = ({ exam, refreshExams }) => {
  const [examData, setExamData] = useState({ examname: '', date: '', duration: '' });

  useEffect(() => {
    if (exam) {
      setExamData(exam);
    }
  }, [exam]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (examData.id) {
      await ExamService.updateExam(examData);
    } else {
      await ExamService.createExam(examData);
    }
    refreshExams();
    setExamData({ examname: '', date: '', duration: '' });
  };

  const handleChange = (e) => {
    setExamData({
      ...examData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name of Exam:</label>
        <input
          type="text"
          name="examname"
          value={examData.examname}
          onChange={handleChange}
        />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={examData.date}
          onChange={handleChange}
        />
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={examData.duration}
          onChange={handleChange}
        />
        <button type="submit">
          {examData.id ? 'Update Exam' : 'Create Exam'}
        </button>
      </form>
    </div>
  );
};

export default ExamForm;
