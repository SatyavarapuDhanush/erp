import React from 'react';
import logo from '../Assests/logo.png';
import Homenav from '../Components/Homenav';
import Header from '../Components/Header';
import CoursesList from '../Pages/CoursesList';
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
    <div>
      <Header />
    <div className="courses-page">
      <Homenav />
      <div className="main-content">
        <CoursesList courses={course} />
      </div>
    </div>
    </div>
  );
};

export default Courses;
