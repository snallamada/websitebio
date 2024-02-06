import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="I specialize in planning and creating user-friendly website designs, turning ideas into smooth and Best-performing online experiences."
         
        />
         <Card
          title="UI / UX Design"
          des="I focus on crafting intuitive designs, transforming concepts into polished and Dynamic online interactions."
          icon={<SiAntdesign />}
        />
        <Card
          title="App Development"
          des="I excel in developing and optimizing web applications, transforming concepts into seamless and Efficient-performing digital solutions"
          icon={<AiFillAppstore />}
        />
       
        <Card
          title="Mobile Development"
          des="I specialize in crafting intuitive mobile applications, transforming concepts into Unified and high-performing digital experiences."
          icon={<FaMobile />}
        />
       
        <Card
          title="Hosting Websites"
          des="I adeptly manage hosting websites, transforming concepts into Synchronized, Quick online platforms."
          icon={<FaGlobe />}
        />
         <Card
          title="SEO Optimisation"
          des="I specialize in optimizing websites for search engines, refining user experiences and performance to achieve online excellence."
          icon={<SiProgress />}
        />
      </div>
    </section>
  );
}

export default Features