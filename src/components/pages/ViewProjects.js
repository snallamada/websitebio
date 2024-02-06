import React from 'react'
import Projects from '../projects/Projects'
import Navbar from '../navbar/Navbar'
const ViewProjects = () => {
  return (

    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
    <Navbar />
    <div className="max-w-screen-xl mx-auto">
    <Projects/></div></div>
  )
}

export default ViewProjects