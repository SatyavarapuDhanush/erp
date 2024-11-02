import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExamService from '../../Service/ExamService';

const StudentAssignForm = ({ examId, refreshExams }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:8080/users/getusers');
        setStudents(response.data); 
      } catch (err) {
        setError("Error fetching students");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const handleStudentSelection = (e) => {
    setSelectedStudents([...e.target.selectedOptions].map(o => o.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ExamService.assignStudentsToExam(examId, selectedStudents);
      refreshExams();
    } catch (error) {
      console.error("Error assigning students:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading students...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <label>Select Students:</label>
          <select
           multiple 
           value={selectedStudents} 
           onChange={handleStudentSelection}>
            {students.map(student => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <button type='submit'>Assign Students</button>
        </form>
      )}
    </div>
  );
};

export default StudentAssignForm;
