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
              <p className="text-sm text-designColor tracking-[4px]"><b>2010 - 2016 || 2016 - 2019</b></p>
              <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Front End & FrameWorks"
                subTitle=""
                result="Frontend"
                des="Html, CSS, Javascript, Typescript, ReactJs, VueJs, AngulerJS,UX Design&Architecture"
              />
              <ResumeCard
                title=" Bachelor's in Cumputer Science Engineering"
                subTitle="Jawaharlal Nehru Technological University Hyderabad (2014 - 2016)"
                result="Hyderabad,India"
                des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
              />
              <ResumeCard
                title="Intermidiate +2"
                subTitle="Vidwan Junior College(2010 - 2012)"
                result="Nalgonda,India"
                des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
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
                title="Front-end Developer"
                subTitle="Publication Agora France - (2021 - Present)"
                result="France, Paris"
                des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
              />
              <ResumeCard
                title="Web Developer - Intern"
                subTitle="Daylindo - (2020 - 6 months)"
                result="France, Paris"
                des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
              />
              <ResumeCard
                title="Web Developer"
                subTitle="WI - Group Private Limited - (2016 - 2019)"
                result="India, Guntur"
                des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
              />
            </div>
          </div> 
        </motion.div>
      );
    };
    

export default TechnicalSkills