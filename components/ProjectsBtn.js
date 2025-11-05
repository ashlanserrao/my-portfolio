// next image
import Image from "next/image";

//next link


//icons
import {HiArrowRight} from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
  <div className="mx-auto xl:mx-0 -mt-4 xl:-mt-8">
    <a
        href="#work" // section ID
        className="relative w-[120px] h-[120px] flex justify-center 
          items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer"
      >
    <Image 
      src={'/rounded-text.png'} 
      width={120} 
      height={120} 
      alt='' 
      className="animate-spin-slow w-full h-full 
        max-w-[100px] max-h-[100px] 
        md:max-w-[90px] md:max-h-[90px] 
        xl:max-w-[100px] xl:max-h-[100px]"/>
      <HiArrowRight className="absolute 
      text-2xl 
      md:text-xl 
      xl:text-3xl 
      group-hover:translate-x-2 transition-all duration-300 z-20"/>
    </a>
  </div>
  );
};

export default ProjectsBtn;
