import React from 'react'
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
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
              <p className="text-sm text-designColor tracking-[4px]"><b>2010 - 2016 || 2016 - 2019 || Present</b></p>
              <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Front End"
                subTitle="Core technologies for Creating UI of Website, Web Application."
                result="Presentation"
                des={
                <ul>
                  <li>Html, CSS,JavaScript</li>
                  <li>Typescript, ReactNative</li>
                  <li>React, AngulerJS, VueJs</li>
                 </ul>
                }
              />
              <ResumeCard
                title="Libraries"
                subTitle="Reusable code libraries"
                result="UI design"
                des={
                <ul>
                  <li>Bootstrap</li>
                  <li>React Bootstrap</li>
                  <li>ANT, Tailwind</li>
                 </ul>
                }
                />
              <ResumeCard
                title="Back End"
                subTitle="Server-side technologies"
                result="Logic"
                des={
                <ul>
                  <li> NodeJS,ExpressJs</li>
                  <li>Strapi, Postman</li>
                  <li>Rest API's, GraphQL.</li>
                 </ul>
                }
                />
              <ResumeCard
                title="Database"
                subTitle="Systems for storing, managing, retrieving data"
                result="Storage"
                des={
                  <ul>
                    <li>MongoDB, Mysql</li>
                    <li> PostgreSQL</li>
                    <li>FireBase</li>
                   </ul>
                  }
                  />
            </div>
          </div>
          
          {/* part Two*/}
    
          <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]"><b>Hands on..</b></p>
              <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Cloud Services"
                subTitle="Web-based services"
                result="Scalability"
                des={
                  <ul>
                    <li>WPserveur</li>
                    <li>AWS, Azure</li>
                    <li>DigitalOcean</li>
                   </ul>
                  }
                  />
              <ResumeCard
                title="CMS Platforms"
                subTitle="Content Management Systems"
                result="Websites"
                des={
                  <ul>
                    <li>WordPress, JQuery</li>
                    <li>web hosting servers,Cpanel </li>
                     <li>Payment gateways and theme customizations.</li>
                   </ul>
                  }
                  />
              <ResumeCard
                title="Tools"
                subTitle="Web-based platforms - collaborative software development."
                result="Version Control"
                des={
                  <ul>
                    <li>Github, Bitbucket</li>
                    <li>Docker(Containerization)</li>
                    <li>kubernetes(Orchestration)</li>
                   </ul>
                  }
                  />
                <ResumeCard
                title="Management Tools"
                subTitle="collaboration"
                result="Communication"
                des={
                  <ul>
                    <li>Slack, Miro,MS office 365</li>
                    <li>Zoom, Figma, Adobe</li>
                    <li>Agile,Scrum</li>
                   </ul>
                  }
                  />
              
            </div>
          </div> 
        </motion.div>
      );
    };
    

export default TechnicalSkills