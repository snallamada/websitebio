import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Employee Portal"
          des="The Employee Portal streamlines access to company information through secure logins, offering a centralized hub for updates and documents. It promotes efficiency, ensuring quick retrieval of essential information, and enhances communication in the workplace."
          src={projectOne}
          gitlink="https://github.com/snallamada/Employee-portal-app"
          weblink="https://portallogin.netlify.app/" 
          
        />
        <ProjectsCard
          title="Food search app"
          des="The Food Search App simplifies your culinary exploration, allowing you to discover a diverse range of dishes. From pizza and pasta to biryani and more, easily find your desired food items. Enjoy a seamless and delightful food discovery experience at your fingertips."
          src={projectTwo}
          gitlink="https://github.com/snallamada/food-search-app"
          weblink="https://shravan-food-search.netlify.app/" 
       />
        <ProjectsCard
          title="Task Tracker App"
          des="The Task Tracker App streamlines your productivity journey, offering a user-friendly platform to manage your tasks effortlessly. Organize, track, and accomplish your goals with ease. Enhance your efficiency and stay on top of your to-do list, making progress one task at a time."
          src={projectThree}
          gitlink="https://github.com/snallamada/Task-tracker-app"
          weblink="https://shravan-task-tracker-app-one.vercel.app/" 
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects