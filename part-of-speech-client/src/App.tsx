import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./views/LandingPage";
import Questionnaire from "./views/Questionnaire";
import NotFound from "./views/NotFound";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="Questionnaire" element={<Questionnaire />} />
          <Route path="score" element={<Score />} />
          {/* wild card */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
