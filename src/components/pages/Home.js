import React from 'react'
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import FooterBottom from "../footer/FooterBottom";
import Navbar from "../navbar/Navbar";
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";
import Testimonial from "../tesimonial/Testimonial";

const Home = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
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
  </div>
  )
}

export default Home