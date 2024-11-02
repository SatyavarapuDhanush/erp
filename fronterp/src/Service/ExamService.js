import axios from 'axios';

const base_URL = 'http://localhost:8080/api/exams';

const getExams = async () => {
    try {
        const response = await axios.get(`${base_URL}/getexams`);
        return response.data;
    } catch (error) {
        console.error('Error fetching exams:', error);
        throw error;
    }
};

const getExam = async (id) => {
    try {
        const response = await axios.get(`${base_URL}/getexams/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching exam:', error);
        throw error;
    }
};

const createExam = async (examData) => {
    try {
        const response = await axios.post(`${base_URL}/create`, examData);
        return response.data;
    } catch (error) {
        console.error('Error creating exam:', error);
        throw error;
    }
};

const updateExam = async (examData) => {
    try {
        const response = await axios.put(`${base_URL}/update/${examData.id}`, examData);
        return response.data;
    } catch (error) {
        console.error('Error updating exam:', error);
        throw error;
    }
};

const deleteExam = async (id) => {
    try {
        await axios.delete(`${base_URL}/delete/${id}`);
        return { message: 'Exam deleted successfully' };
    } catch (error) {
        console.error('Error deleting exam:', error);
        throw error;
    }
};

const assignStudentsToExam=async(examId,studentIds)=>{
    try{
    const response=await axios.post(`${base_URL}/assignedstudents/${examId}`,studentIds);
    return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
};


export default {
    getExams,
    getExam,
    createExam,
    updateExam,
    deleteExam,
    assignStudentsToExam,
};
