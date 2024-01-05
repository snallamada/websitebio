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
                  <li>Maintain and improve UI/UX of websites, and web applications - updates, modifications, security, GDPR, cookie consent, etc.</li>
                  <li>Backend, Server setup/monitor, API integration, configuration & development of live projects.</li>
                  <li>Live-content Feature: developed by using ReactJs to fetch data and render personalized content.</li>
                  <li>Live stats Data web application developed with the language variables dashboard.</li>  
                  <li>Creating new websites for special events which includes Dynamic Features.</li>   
                  <li>Addition of new features, functionalities, and live content, maintain FTP, Cpanel & CMS platforms, Create a plugin with ReactJs, web application.</li>         
                </ul>
              } />
              <ResumeCard
                title="Web Developer - Intern"
                subTitle="Daylindo - (2020 - 6 months)"
                result="France, Paris"
                des={
                  <ul>
                    <li>Developed application with ReactJS , Redux, and AngularJS.</li>
                    <li>Technologies adopted: npm,git, jwt Tokens, Google Cloud, firebase</li>
                    <li>Revamped and maintained the company website including authentication.</li>
                   </ul>
                }  />
              <ResumeCard
                title="Web Developer"
                subTitle="WI - Group Private Limited - (2016 - 2019)"
                result="India, Guntur"
                des={
                  <ul>
                    <li>Worked on UI / UX design principles relating to Web applications and websites, debugging website issues.</li>
                    <li>Worked and developed web applications, adding customized features depending on the client.</li>
                    <li>Fix security issues and debugging vulnerabilities on both the front end and back end.</li>
                    <li>Developed websites from landing pages to e-commerce sites.</li>
                   </ul>
                }  />
            </div>
          </div>
        </motion.div>
  );
};

export default Experience;
