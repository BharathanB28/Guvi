import React from 'react';

const CourseContent = ({ course }) => {
  return (
    <div className='App'>
        <div className="card-div">       
            <img className="img" src={course.id.img} alt='Full_Stack'/>
            <h3>{course.id.title}</h3>
            <small>{course.id.description}</small>
       </div>
    </div>
  );
};

export default CourseContent;


