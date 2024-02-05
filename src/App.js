import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import ViewProjects from "./components/pages/ViewProjects";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <><div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div><Router>
      <div>
          <Routes>
            <Route path="/viewprojects" element={<ViewProjects />} /> 
          </Routes>
        </div>
      </Router></>

  );
}

export default App;
