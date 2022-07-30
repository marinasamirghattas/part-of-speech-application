import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import './App.css';
import LandingPage from './views/LandingPage';
import Questionnaire from './views/Questionnaire';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="Questionnaire" element={<Questionnaire />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
