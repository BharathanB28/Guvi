import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import CourseContent from './Components/CourseContent';
import './App.css';
import courses from './Components/CoursesData';


const App = () => {
  return (
    <Router>
      <Navigation courses={courses} />
      <Routes>
        
        <Route path="/" element={<CourseContent course={courses[0]} />} />

        {courses.map((course) => (
          <Route key={course.id} path={`/courses/${course.id}`} element={<CourseContent course={course} />} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;

