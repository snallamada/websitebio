import React from 'react'
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import {siJavascript} from "react-icons/si"
const TechnicalSkills = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
          {/* part one */}
          <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]"><b>2010 - 2016 || 2016 - 2019</b></p>
              <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Front End"
                subTitle="Core technologies for Develop Website, Web Application"
                result="Presentation"
                // des="Html, CSS, Javascript, Typescript, ReactJs, VueJs, AngulerJS,UX Design & Architecture"
                des={
                <ul>
                  <li>Html, CSS</li>
                  <li>JavaScript, Typescript</li>
                  <li>React, AngulerJS, VueJs</li>
                 </ul>
                }
              />
              <ResumeCard
                title="Libraries"
                subTitle="Reusable code libraries"
                result="UI design"
                des="Bootstrap , React Bootstrap, ANT, Tailwind"
              />
              <ResumeCard
                title="Back End"
                subTitle="Server-side technologies"
                result="API"
                des="Strapi, NodeJS,ExpressJs,API's, GraphQL."
              />
              <ResumeCard
                title="Database"
                subTitle="Systems for storing, managing, and retrieving data"
                result="Data Storage"
                des="MongoDB, Mysql, PostgreSQL, FireBase."
              />
               <ResumeCard
                title="Mobile Application"
                subTitle="Applications for Mobile Devices"
                result="iOS or Android."
                des="React Native (Android, ios ),Expo(view)"
              />
            </div>
          </div>
          
          {/* part Two*/}
    
          <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]"><b>2021 - Present</b></p>
              <h2 className="text-3xl md:text-4xl font-bold">Expertise</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Cloud Services"
                subTitle="Web-based services"
                result="Web Housting"
                des="WPserveur, AWS, Azure, DigitalOcean"
              />
              <ResumeCard
                title="CMS"
                subTitle="Content Management Systems"
                result="Websites"
                des="WordPress, JQuery, web hosting servers, Cpanel,Payment gateways and theme customizations."
              />
              <ResumeCard
                title="Tools"
                subTitle="Web-based platforms"
                result="Version Control"
                des="Github, Bitbucket,postman,Docker, kubernetes"
              />
                <ResumeCard
                title="Management Tools"
                subTitle="collaboration"
                result="Communication"
                des="Slack, Miro, MS office 365, Zoom,Agile,Scrum"
              />
                 <ResumeCard
                title="Design"
                subTitle="Principles, tools, and processes"
                result="creating visually appealing"
                des="Figma, Adobe"
              />
            </div>
          </div> 
        </motion.div>
      );
    };
    

export default TechnicalSkills