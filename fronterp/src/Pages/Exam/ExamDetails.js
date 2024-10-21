import React from 'react'

const ExamDetails = ({exam}) => {
  return (
    <div>
        <h3>Exam Details</h3>
      {exam? (
        <div>
      <h3><strong>Name of exam:</strong> {exam.name}</h3>
      <h3><strong>Date:</strong> {exam.date}</h3>
      <h3><strong>Duration:</strong>{exam.duration}</h3>
      </div>
      ):(
        <p>select an exam to view details</p>
      )
    }
    </div>
  )
}

export default ExamDetails
