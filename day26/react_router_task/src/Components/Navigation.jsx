import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  

  return (   
    <>
    <img className="poster" src="https://img.freepik.com/free-psd/landing-page-template-back-school-with-hand-drawn-elements_23-2149531747.jpg?w=740&t=st=1699533728~exp=1699534328~hmac=b6755f97cb8b6eaac89ede5be94b612786eb296bc391e3475f6d5d6ecb1a00b8" alt="education" />
 
    <nav>      
    <ul className="navbar">
      <li><NavLink to="/" activeClassName="active">
              ALL
            </NavLink></li>
            <li>
            <NavLink to="/courses/fullstack" activeClassName="active">
              FULL STACK DEVELOPMENT
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/datascience" activeClassName="active">
              DATA SCIENCE
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/cybersecurity" activeClassName="active">
              CYBER SECURITY
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses/career" activeClassName="active">
              CAREER
            </NavLink>
          </li>      
    </ul>
  </nav>
  </>
  );
};

export default Navigation;




