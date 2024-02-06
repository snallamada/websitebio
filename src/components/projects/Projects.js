import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree , projectFour, expensesapp} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { FaReact , FaAngular, FaVuejs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
          framework={<FaReact/>}
          gitlink="https://github.com/snallamada/Employee-portal-app"
          weblink="https://portallogin.netlify.app/" 
 
        />
        <ProjectsCard
          title="Food search app"
          des="The Food Search App simplifies your culinary exploration, allowing you to discover a diverse range of dishes. From pizza and pasta to biryani and more, easily find your desired food items. Enjoy a seamless and delightful food discovery experience at your fingertips."
          src={projectTwo}
          framework={<FaReact/>}
          gitlink="https://github.com/snallamada/food-search-app"
          weblink="https://shravan-food-search.netlify.app/" 
       />
        <ProjectsCard
          title="Task Tracker App"
          des="The Task Tracker App streamlines your productivity journey, offering a user-friendly platform to manage your tasks effortlessly. Organize, track, and accomplish your goals with ease. Enhance your efficiency and stay on top of your to-do list, making progress one task at a time."
          src={projectThree}
          framework={<FaReact/>}
          gitlink="https://github.com/snallamada/Task-tracker-app"
          weblink="https://shravan-task-tracker-app-one.vercel.app/" 
        />
       <ProjectsCard
          title="CURD Application"
          des="The Angular CURD App simplifies data management with easy Create, Update, Retrieve, and Delete functionalities. Seamlessly organize and control your records through an intuitive user interface. Effortlessly navigate and manipulate data for a smooth user experience."
          src={projectFour}
          framework={<FaAngular/>}
          gitlink="https://github.com/snallamada/anguler-curd-app"
          weblink="https://shravan-anguler-curd-app.vercel.app/" 
        />
          <ProjectsCard
          title="Expense's Track App"
          des="The Expense Tracker App streamlines your financial management, providing a user-friendly platform to effortlessly monitor and categorize your expenses. From groceries to utilities, track your spending with ease."
          src={expensesapp}
          framework={<FaVuejs />}
          gitlink="https://github.com/snallamada/Vue-expense-tracker-app"
          weblink="https://shravan-vue-expense-tracker.vercel.app/" 
 
        />
      {/*  <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
<div className="w-full" style={{ marginTop: '80px' }}><Link to="/viewprojects"><button className="w-full h-12 bg-[#141518] rounded-lg text-base text-red-400 tracking-wider hover:text-white duration-300 hover:border-[1px] hover:border-design color border-transparent">
   View All Projects   </button></Link></div>
    </section>
  );
}

export default Projects