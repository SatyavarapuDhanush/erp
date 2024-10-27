import React, { useEffect, useState } from 'react';
import ExamForm from './ExamForm';
import ExamList from './ExamList';
import ExamDetails from './ExamDetails';
import ExamService from '../../Service/ExamService';

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);

  const fetchExams = async () => {
    try {
      const examsData = await ExamService.getExams();
      setExams(examsData);
    } catch (error) {
      console.error('Failed to fetch exams', error);
    }
  };

  const handleEdit = (exam) => {
    setSelectedExam(exam);
  };

  const handleDelete = async (id) => {
    try {
      await ExamService.deleteExam(id);
      fetchExams();
    } catch (error) {
      console.error('Failed to delete exam', error);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <div>
      <ExamForm exam={selectedExam} refreshExams={fetchExams} />
      <ExamList exams={exams} onEdit={handleEdit} onDelete={handleDelete} />
      <ExamDetails exam={selectedExam} />
    </div>
  );
};

export default Exams;
