import React, { useEffect, useState } from 'react';
import ExamForm from './ExamForm';
import ExamList from './ExamList';
import ExamDetails from './ExamDetails';
import StudentAssignForm from './StudentAssignForm';
import ExamService from '../../Service/ExamService';

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExams = async () => {
    setLoading(true);
    setError(null);
    try {
      const examsData = await ExamService.getExams();
      setExams(examsData);
    } catch (err) {
      setError('Failed to fetch exams');
      console.error(err);
    } finally {
      setLoading(false);
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
      {loading && <p>Loading exams...</p>}
      {error && <p>{error}</p>}
      <ExamForm exam={selectedExam} refreshExams={fetchExams} />
      {selectedExam && (
        <StudentAssignForm examId={selectedExam.id} refreshExams={fetchExams} />
      )}
      <ExamList exams={exams} onEdit={handleEdit} onDelete={handleDelete} />
      <ExamDetails exam={selectedExam} />
    </div>
  );
};

export default Exams;
