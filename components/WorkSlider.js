// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'YouTube Video 1',
          path: 'https://img.youtube.com/vi/NxpbKxUgyso/hqdefault.jpg',
          link: 'https://youtu.be/NxpbKxUgyso',
        },
        {
          title: 'YouTube Video 2',
          path: 'https://img.youtube.com/vi/m_EenXVQL-8/hqdefault.jpg',
          link: 'https://youtu.be/m_EenXVQL-8',
        },
        {
          title: 'YouTube Video 3',
          path: 'https://img.youtube.com/vi/zwJh75Gf8w4/hqdefault.jpg',
          link: 'https://youtu.be/zwJh75Gf8w4',
        },
        {
          title: 'YouTube Video 4',
          path: 'https://img.youtube.com/vi/CasWbAHjzDc/hqdefault.jpg',
          link: 'https://youtu.be/CasWbAHjzDc',
        },
      ],
    },
    {
      images: [
        {
          title: 'YouTube Video 5',
          path: 'https://img.youtube.com/vi/tOeq6_rxvkg/hqdefault.jpg',
          link: 'https://youtu.be/tOeq6_rxvkg',
        },
        {
          title: 'YouTube Video 6',
          path: 'https://img.youtube.com/vi/23xxjuf_mDI/hqdefault.jpg',
          link: 'https://youtu.be/23xxjuf_mDI',
        },
        {
          title: 'YouTube Video 7',
          path: 'https://img.youtube.com/vi/Q4h4iiM4alw/hqdefault.jpg',
          link: 'https://youtu.be/Q4h4iiM4alw',
        },
        {
          title: 'YouTube Video 1',
          path: 'https://img.youtube.com/vi/NxpbKxUgyso/hqdefault.jpg',
          link: 'https://youtu.be/NxpbKxUgyso',
        },
      ],
    },
    {
      images: [
        {
          title: 'Air quality prediction',
          path: '/airq.png',
          link: 'https://github.com/ashlanserrao/air-quality-forecast',
        },
        {
          title: 'Student Performance Predictor',
          path: '/studentml.png',
          link: 'https://github.com/ashlanserrao/ml-project',
        },
        {
          title: 'YouTube Video 7',
          path: '/github.png',
          link: 'https://youtu.be/Q4h4iiM4alw',
        },
        {
          title: 'YouTube Video 1',
          path: '/github.png',
          link: 'https://youtu.be/NxpbKxUgyso',
        },
      ],
    },
  ],
};




// import swiper react components
import { Swiper,SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import {Pagination} from 'swiper';

// icons
import {BsArrowRight} from 'react-icons/bs';

//next image
import Image from 'next/image';


const WorkSlider = () => {
  return (
  <Swiper 
    spaceBetween={10}
    pagination={{
      clickable:true,
    }}
    modules={[Pagination]}
    className="h-[500px] sm:h-[600px] md:h-[650px] xl:h-[500px]"
    >
      {
        workSlider.slides.map((slide,index)=>{
          return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2  gap-x-2 gap-y-4 sm:gap-x-4 
            sm:gap-y-4 cursor-pointer">
              {slide.images.map((image,index)=>{
                return (
                <div className="relative rounded-2xl overflow-hidden flex items-center
                justify-center group" 
                  key={index}>
                    <a href={image.link} target="_blank" rel="noopener noreferrer"
                    className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] xl:h-[200px] rounded-2xl overflow-hidden flex items-center justify-center group"
                    key={index}>
                  <div className="flex items-center justify-center 
                  relative overflow-hidden group w-full h-full">
                    {/* image */}
                    
                    <Image src={image.path} width={500} height={300} alt=''
                     className="object-cover w-full h-full"/>
                     
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l
                    from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                    group-hover:opacity-80 transition-all duration-700"></div>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full
                    group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                    transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] 
                      tracking-[0.2em]">
                        {/*title part 1 */}
                        <div className="delay-100">LIVE</div>
                        {/*title part 2*/}
                        <div className="translate-y-[500%]
                        group-hover:translate-y-0 transition-all duration-300
                        delay-150">PROJECT</div>
                        {/*icon */}
                        <div className="text-xl translate-y-[500%]
                        group-hover:translate-y-0 transition-all
                        duration-300 delay-200"><BsArrowRight /></div>
                      </div>
                    </div>
                  </div>
                  </a>
                </div>
                
                );

              })}
            </div>
          </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default WorkSlider;
