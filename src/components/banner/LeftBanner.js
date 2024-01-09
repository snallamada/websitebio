import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact } from "react-icons/fa";
import { SiAngularjs,SiTailwindcss, SiJavascript, } from "react-icons/si";
import MySocialIcons from './MySocialIcons';


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Frontend Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shravan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Experienced Frontend Developer with 6+ years of exposure. Expertise in ReactJs & 3+years of working in France, Graduated from Ecole de Management Leonard De Vinci (EMLV).
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
<div><MySocialIcons/></div>  </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <SiJavascript />

            </span>
            <span className="bannerIcon">
            <FaReact />
            </span>
            <span className="bannerIcon">
            <SiAngularjs />
            </span>
            <span className="bannerIcon">
            <SiTailwindcss />
                        </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner