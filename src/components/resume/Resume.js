import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience"
import TechnicalSkills from './TechnicalSkills';
import ShravansResumePdf from './ShravansResumePdf';

const Resume = () => {
  const[technicalSkillsData, settechnicalSkillsData] = useState(true);
   const [educationData, setEducationData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="6 YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              settechnicalSkillsData(true)&
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              technicalSkillsData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Technical Skills
          </li>
          <li
            onClick={() =>
              settechnicalSkillsData(false)&
              setEducationData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
                        Experience 
          </li>
          <li
            onClick={() =>
              settechnicalSkillsData(false)&
              setEducationData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              settechnicalSkillsData(false)&
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
          
        </ul>
      </div>
      <div>
       {technicalSkillsData && <TechnicalSkills/>}
      {experienceData && <Experience />}
      {educationData && <Education />}
      {achievementData && <Achievement />}

      
      </div>
      <div className="w-full" style={{ marginTop: '80px' }}>

<ShravansResumePdf buttonText="Download Shravan's Resume"/></div>
      

    </section>
  );
}

export default Resume