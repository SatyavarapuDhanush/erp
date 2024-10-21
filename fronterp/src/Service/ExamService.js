import React from 'react'
import axis from 'axios';
import axios from 'axios';

const base_URL='http://localhost:8080/api/exams';

const getExams=async()=>{
    try{
        const response=await axis.get(base_URL);
        return response.data;
    }
    catch(error){
        console.error('Error fetching exam:',error);
        throw error;
    }
};

const getExam=async(id)=>{
    try{
    const response = await axis.get(`${base_URL}/${id}`);
    return response.data;
    }
    catch(error){
        console.error('Error fetching exam:',error);
        throw error;
    }
}

const createExam=async(examData)=>{
    try{
    const response=await axis.post(base_URL,examData);
    return response.data;
    }
    catch(error){
        console.error('Error fetching exam:',error);
        throw error;
    }
}

const updateExam=async(examData)=>{
    try{
        const response = await axios.put(`${base_URL}/${examData.id}`, examData);
        return response.data;
    }
    catch(error){
        console.error('Error fetching exam:',error);
        throw error;
    }

}

const deleteExam=async(id)=>{
    try{
        await axis.delete(`${base_URL}/${id}`);
        return { message: 'Exam deleted successfully' };
    }
    catch(error){
        console.log('Error deleting exam:',error);
        throw error;
    }
}

export default {
    getExams,
    getExam,
    createExam,
    updateExam,
    deleteExam,
  };
