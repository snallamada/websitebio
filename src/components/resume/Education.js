import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"><b>2010 - 2016 || 2019 - 2020</b></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master's in Digital Marketing Strategy (Bac+5)"
            subTitle="Ecole de Management Léonard De Vinci.(2019 - 2020)"
            result="France,Paris"
            des={<ul>
              <li>Assisted in research projects related to emerging trends in web development, gaining exposure to the latest technologies and frameworks.</li>
              <li>Collaborated with faculty on website optimization initiatives, implementing responsive design and accessibility features.</li>
              <li>Led a team in the development of a dynamic website for a local business, integrating e-commerce functionalities and ensuring optimal user experience.
</li>
            </ul>

            } />
          <ResumeCard
            title=" Bachelor's in Cumputer Science Engineering."
            subTitle="Jawaharlal Nehru Technological University Hyderabad (2014 - 2016)"
            result="Hyderabad,India"
            des={
            <ul>
              <li>Contributed to the development of web applications, focusing on front-end and back-end technologies.</li>
              <li>Enhanced proficiency in HTML, CSS, and JavaScript for creating responsive and visually appealing user interfaces.</li>
              <li>Worked with Node.js and Express for server-side development, implementing RESTful APIs.</li>
              <li>Designed and developed a personal portfolio website showcasing projects and skills using HTML, CSS, and JavaScript.</li>
              </ul>
            }
            />
          <ResumeCard
            title="Intermidiate +2"
            subTitle="Vidwan Junior College(2010 - 2012)"
            result="Nalgonda,India"
            des={
              <ul>
                <li>Embraced challenges, learned from failures, and developed a resilient mindset for future pursuits.</li>
                <li>In summary, my +2 education was a well-rounded experience, marked by academic achievements, extracurricular engagement, and personal growth, providing a strong foundation for future endeavors.</li>
                </ul>
              }/>
        </div>
      </div>
      
      {/* part Two

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"><b>2016 - Present</b></p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
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
      </div> */}
    </motion.div>
  );
};

export default Education;
