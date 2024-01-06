import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"><b>2016 - Present</b></p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Publications Agora France"
            subTitle="Publications Agora France is one of the companies of AGORA"
            result="Success"
            des="Improvement of UI/UX for websites and web applications, ensuring updates, modifications, and compliance with security,GDPR, and cookie consent."
          />
          <ResumeCard
            title="Daylindo"
            subTitle="Competency based learning platform"
            result="Success"
            des="Revamped and maintained the company website, implementing authentication features for enhanced security."
          />
          <ResumeCard
            title="WI Group Private Limited"
            subTitle="IT Services and IT Consulting"
            result="Success"
            des="Implemented UI/UX design principles for web applications and websites, focusing on enhancing user experiences and resolving debugging issues"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"><b>2016 - Present</b></p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Roles and Responsibilities"
            subTitle="Live-Content Feature , client space, Live Stats"
            result="Success"
            des="Developed a live-content feature using ReactJs to deliver personalized content.Created dynamic event websites with new features for special events."
          />
          <ResumeCard
            title="Roles and Responsibilities"
            subTitle="Technological Expertise"
            result="Success"
            des="Demonstrated expertise in ReactJS, Redux, and AngularJS for developing responsive and dynamic applications."
          />
          <ResumeCard
            title="Roles and Responsibilities"
            subTitle="End-to-End Website Development"
            result="Success"
            des="Developed web applications with customized features tailored to meet client specifications.Worked on end-to-end website development, from landing pages to dynamic e-commerce sites."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
