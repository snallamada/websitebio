import React from 'react'
import { navLinksdata } from '../../constants';
import {logo} from "../../assets/index"
import MySocialIcons from '../banner/MySocialIcons';
import { Link } from "react-scroll";



const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32 mx-auto" src={logo} alt="logo" />
        <MySocialIcons/>
            </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>     
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
        {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

             </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
         <a href="https://www.javascript.com/"> <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              JavaScript </span>
          </li></a>
          <a href='https://www.typescriptlang.org/'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Typescript</span>
          </li></a>
          <a href='https://react.dev/reference/react'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              ReactJs          </span>
          </li></a>
          <a href='https://docs.angularjs.org/guide'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              AngulerJS            </span>
          </li></a>
         <a href='https://vuejs.org/guide/introduction.html'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              VueJs           </span>
          </li></a>
          <a href='https://reactnative.dev/docs/getting-started'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                 ReactNative        </span>
          </li></a>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Documentation
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
         <a href='https://developer.mozilla.org/en-US/'>
           <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Mozilla Developer Network </span>
          </li></a>
          <a href='https://www.freecodecamp.org/'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            FreeCodeCamp       </span>
          </li></a>
          <a href='https://www.codecademy.com/resources/docs'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Codecademy           </span>
          </li></a>
          <a href="https://nodejs.org/docs/latest/api/">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            NodeJS           </span>
          </li></a>
          <a href='https://docs.github.com/en'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Github            </span>
          </li></a>
         <a href='https://bitbucket.org/'>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Bitbucket           </span>
          </li></a>
        
        </ul>
      </div>
    </div>
  );
}

export default Footer