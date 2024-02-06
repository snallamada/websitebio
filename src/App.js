import React from "react";
import ViewProjects from "./components/pages/ViewProjects";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <> <Router>
      <div>
          <Routes>
          <Route path="/" element={<Home />} /> 
            <Route path="/viewprojects" element={<ViewProjects />} /> 
          </Routes>
        </div>
      </Router></>

  );
}

export default App;
