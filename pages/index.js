// next image
import Image from "next/image";

import { TypeAnimation } from 'react-type-animation'

import Head from 'next/head';
import ParticleContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function HomePage() {
  return (
    <div className="bg-primary/60 ">
      <Head>
        <title>Ashlan's Portfolio</title>
      </Head>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left min-h-[70vh] container mx-auto px-4 pt-24'>
          <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 text-center xl:text-left mb-4"
            >
              Hey there, I'm Ashlan <br />
              
                <span className="text-accent inline-block">
                  <TypeAnimation
                    sequence={[
                      'Data Scientist',
                      2000,
                      'Artist',
                      2000,
                      'Tech Explorer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                   
                  />
                </span>
              
            </motion.h1>

            <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I’m a curious mind with a love for data, design, and discovery. 
            As I dive deeper into the world of data science,
             I’m learning to turn numbers into narratives and
              patterns into purpose. This space is where I share my journey — 
              from building smart solutions to uncovering stories hidden in data. Thanks for stopping by.
            </motion.p>
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className='hidden xl:flex'>
              <ProjectsBtn />
            </motion.div>
            {/*mobile avatar*/}
            <div className="block lg:hidden mt-10 mb-4">
              <div className="bg-white rounded-xl p-1 shadow-md hover:shadow-black 
                transition-all duration-300 w-[280px] mx-auto">
                <div className="w-full h-auto rounded-lg overflow-hidden">
                  <Image
                    src="/profileweb.png"
                    alt="Profile"
                    width={180}
                    height={180}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
        
          <div className='bg-none xl:bg-explosion xl:bg-contain xl:bg-right 
            xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
           
           <ParticleContainer />
          
          <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            transition={{ duration: 1, ease: 'easeInOut' }} 
            className='hidden lg:block w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] z-20'>
            <Avatar />
          </motion.div>
          </div>
        
      </section>

      {/* Other Sections */}
      <section id="about" className="py-16 xl:py-20 scroll-mt-[-80px] overflow-hidden ">
        <About />
      </section>

      <section id="services" className="py-16 xl:py-20 scroll-mt-[-80px] ">
        <Services />
      </section>

      <section id="work" className="py-16 xl:py-20 scroll-mt-[-160px]">
        <Work />
      </section>

      <section id="testimonials" className="py-16 xl:py-20 scroll-mt-[-140px]">
        <Testimonials />
      </section>

      <section id="contact" className="py-16 xl:py-20 scroll-mt-[-150px]">
        <Contact />
      </section>
    </div>
  );
}
