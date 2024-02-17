import React from 'react'
import Navbar from '../navbar/Navbar'
import ProjectsCard from '../projects/ProjectsCard'

const ViewProjects = () => {
  return (

    <div className="w-full h-auto bg-bodyColor text-lightText px-4 m-2">
    <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Employee Portal"
          des="The Employee Portal streamlines access to company information through secure logins, offering a centralized hub for updates and documents. It promotes efficiency, ensuring quick retrieval of essential information, and enhances communication in the workplace."
          
         
          gitlink="https://github.com/snallamada/Employee-portal-app"
          weblink="https://portallogin.netlify.app/" 
 
        /></div></div>
  )
}

export default ViewProjects