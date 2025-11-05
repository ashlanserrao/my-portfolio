// import swiper react components
import { Swiper,SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { BiMoviePlay } from 'react-icons/bi';
import { FaPaintBrush, FaPencilAlt } from 'react-icons/fa';


//import required modules
import {FreeMode,Pagination} from 'swiper';


// data
export const serviceData = [
  {
    icon: <FaPaintBrush />,
    title: 'Graphic Design',
    description: 'Creative visuals for digital platforms',
  },
  {
    icon: <BiMoviePlay />,
    title: 'Video Editing',
    description: 'Professional and engaging video content',
  },
  {
    icon: <FaPencilAlt />,
    title: 'Portrait Art',
    description: 'Detailed hand-drawn custom portraits',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Words that connect and convert',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Boost traffic and online visibility',
  },
];



const ServiceSlider = () => {
  return (
  <Swiper 
    breakpoints={{
      320: {
        slidesPerView:1,
        spaceBetween:15,
      },
      640:{
        slidesPerView:3,
        spaceBetween:5,
      },
    }}
    freeMode={true}
    pagination={{
      clickable:true,
    }}
    modules={[FreeMode,Pagination]}
    className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item,index)=>{
          return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg
            px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/*icon*/}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title &desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                  </p>
              </div>
              {/*arrow*/}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent
                transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ServiceSlider;
