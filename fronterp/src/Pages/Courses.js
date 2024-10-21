import React from 'react';
import logo from '../Assests/logo.png';
import Homenav from '../Components/Homenav';
import Header from '../Components/Header';
import CoursesList from '../Pages/CoursesList';
import Footer from '../Components/Footer'; 
import './Courses.css';

const Courses = () => {
  const course = [
    { id: 1, name: 'DBMS', branch: 'CSE', image: logo },
    { id: 2, name: 'JAVA', branch: 'CSE', image: logo },
    { id: 3, name: 'PHYSICS', branch: 'CSE', image: logo },
    { id: 4, name: 'DBMS', branch: 'CSE', image: logo },
    { id: 5, name: 'JAVA', branch: 'CSE', image: logo },
    { id: 6, name: 'PHYSICS', branch: 'CSE', image: logo },
  ];

  return (
    <div className="courses-page">
      <Header />
      <div className="main-content">
        <div className="sidebar">
          <Homenav /> 
        </div>
        <CoursesList courses={course} />
      </div>
      <Footer /> 
    </div>
  );
};

export default Courses;
