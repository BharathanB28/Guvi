import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import './App.css';
import All from './Components/All'
import FullStack from './Components/FullStack';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';


const App = () => {
  return (
    <Router>
      <Navigation/>
        <Routes>
          <Route index path="/" element={<All />} />
          <Route path="/courses/fullstack" element={<FullStack />} />
          <Route path="/courses/datascience" element={<DataScience />} />
          <Route path="/courses/cybersecurity" element={<CyberSecurity />} />
          <Route path="/courses/career" element={<Career />} />        
        </Routes>
    </Router>
  );
};

export default App;

