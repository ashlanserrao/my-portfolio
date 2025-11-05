import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,FaPython, FaDatabase, FaTable
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,SiC, SiCplusplus, SiR, 
  SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiPowerbi, SiTableau,SiGit
} from "react-icons/si";

import { TbBrandCpp } from 'react-icons/tb';
import { AiFillFileExcel } from 'react-icons/ai';
//for adobe
import { FaVideo, FaTools } from "react-icons/fa";
import { SiAdobepremierepro,SiAutodesk } from 'react-icons/si';


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [
          <FaPython />,
          <SiC />,
          <SiCplusplus />,
          <SiR />,
          <SiMysql />,
          
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          
        ],
      },
      {
        title: 'Frameworks & Libraries',
        icons: [
          < SiPandas />,
          < SiNumpy/>,
          < SiScikitlearn/>,
          
        ],
      },
      {
        title: 'Tools & Platforms',
        icons: [
          < SiPowerbi />,
          < SiTableau/>,
          < SiGit/>,
          <AiFillFileExcel />
          
        ],
      },
       
      {
        title: 'Design & Editing',
        icons: [
          <SiAdobephotoshop />,
          <SiAdobepremierepro />,
          <SiAutodesk />,
          
        ],
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'MSc in Data Science – St. Aloysius (Deemed to be University), Mangalore',
        stage: '2024 - Present | SGPA: 9.63 (Ongoing)',
      },
      {
        title: 'BSc in Physics and Mathematics – St. Aloysius (Deemed to be University), Mangalore ',
        stage: '2020 - 2023 | CGPA: 9.3',
      },
      {
        title: 'Pre-University, PCMC – Pompei PU College, Aikala ',
        stage: '2018 - 2020 | Grade: 95.33%',
      },
      
    ],
  },
  

  {
    title: 'experience',
    info: [
      {
        title: 'Artist - Freelance',
        stage: '2017 - Present',
      },
      {
        title: 'Youtuber',
        stage: '2017 - Present',
      },
      
    ],
  },
  
];

//components

import Avatar from "./Avatar";
import Circles from "./Circles";


// framer motion
import {motion} from 'framer-motion';

import {fadeIn} from '../variants';

//counter
import CountUp from "react-countup";

const About = () => {
  const [index,setIndex] = useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-20 text-center xl:text-left pb-24">
    <Circles />
    {/* avatar img */}
    <motion.div 
      variants={fadeIn('right',0.2)} 
      initial="hidden" 
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row
    gap-x-6 px-4">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center xl:mt-12">
        <motion.h2 variants={fadeIn('right',0.2)} 
        initial="hidden" 
        animate="show"
        exit="hidden" className="h2">
          Empowering <span className="text-accent">Ideas</span> Through Code, Design & Analysis
          </motion.h2>
        <motion.p 
          variants={fadeIn('right',0.4)} 
          initial="hidden" 
          animate="show"
          exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          I bridge the worlds of data and design—using code, statistics, and visual storytelling to uncover insights that inform and inspire. 
          With a foundation in tools like Python, R, SQL, and BI platforms, and a background in art, 
          I bring both precision and creativity to every project.
        </motion.p>
        {/* counter */}
        <motion.div 
          variants={fadeIn('right',0.6)} 
          initial="hidden" 
          animate="show"
          exit="hidden" className="hidden xl:flex flex-wrap 
            justify-center xl:justify-start gap-8 mb-10">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={5} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">
                years of experience
                </div>
            </div>
            {/*clients*/}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={100} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">
                Satisfied clients
              </div>
          </div>
          {/* projects*/}
          <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">
                Finished Projects
              </div>
          </div>
          {/*awards 
          <div className="relative flex-1 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={8} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">
                Winning awards
              </div>
          </div> */}
        </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div 
        variants={fadeIn('left',0.4)} 
        initial="hidden" 
        animate="show"
        exit="hidden" 
        className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px] pb-20 
        overflow-y-auto scrollbar-none xl:mt-10">
        <div className="flex flex-wrap gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4
         z-10 relative">
          {aboutData.map((item,itemIndex)=> {
            return (
            <div 
              key={itemIndex} 
              className={`${
                index === itemIndex && 
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white 
            after:absolute after:-bottom-1 after:left-0 `}
            onClick={()=> setIndex(itemIndex)} >
              {item.title}
              </div>
          );
          })}
        </div>
        <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
        items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex)=>{
            return (
            <div 
              key={itemIndex} 
              className="flex-1 flex-col md:flex-row
              max-w-max gap-x-2 items-center text-white/60">
              {/* title*/}
              <div className="font-light mb-2 md:mb-0">{item.title}</div>
              <div className="hidden md:flex"> </div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
              {/* icons */}
              {item.icons?.map((icon,itemIndex)=> {
                return <div className='text-2xl text-white'>{icon}</div>;
              })}
              </div>
            </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
