import React from 'react'
import Navbar from '../../navbar/Navbar'
import Title from '../../layouts/Title'
import { useState } from 'react'
import Testimonial from '../../tesimonial/Testimonial'
import BmiCalculator from './BMI_Caluculetor_app/BmiCalculator'
import SinglePage from './single_page_app/SinglePage'
import './ViewProjects.css'


const ViewProjects = () => {

  const projects = {
    'Project 1': {content: <Testimonial/>},
    'BMI Calculator': { content: <BmiCalculator/> },
    'Single Page App': { content: <SinglePage/> },
    'Project 4': { content: 'Content for Project 4' },
    'Project 5': { content: 'Content for Project 5' },
  };

  // State to manage the selected project
  const [selectedProject, setSelectedProject] = useState(projects['Project 1']); // Default to Project 

  // Function to handle project selection
  const handleProjectSelect = (project) => {
    setSelectedProject(projects[project]);
  };


  return (

    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-10">
        <Navbar />
      </div>

      <section
      className="w-full py-20 bg-bodyColor" style={{height:"100%"}}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Explore my Projects Library" des="Portfolio sites" />
      </div>
      

      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <div className="w-full lgl:w-[25%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center ml-8">
      
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">ReactJs</h3>
        
        <ul className="divide-y divide-gray-300">
          {/* Loop through projects and create list items */}
          {Object.keys(projects).map((projectName) => (
            <li key={projectName} className="py-2">
              {/* Use button instead of link to handle click */}
              <button id='projects_List'  onClick={() => handleProjectSelect(projectName)} className="text-lightText hover:text-pink-700">{projectName}</button>
            </li>
          ))}
        </ul>



      </div>
          </div>
          <div className="w-full lgl:w-[70%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne mr-8">
                   {selectedProject && <div className='text-white'>{selectedProject.content}</div>}
         
           </div>
        </div>
      </div>





    </section>

     </>

  )
}

export default ViewProjects