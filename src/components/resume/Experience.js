import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-m text-designColor tracking-[4px]"><b>2016 - Present</b></p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Frontend Developer"
                subTitle="Publication Agora France - (2021 - Present)"
                result="France, Paris"
                des={
                <ul>
                  <li>- Actively participate in team-oriented hiring processes.</li>
                  <li>Demonstrate a commitment to fostering a positive workplace environment.</li>
                  <li>Collaborate effectively with cross-functional teams.</li>
                </ul>
              } />
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

export default Experience;
