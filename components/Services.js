// components
import ServiceSlider from './ServiceSlider';
import Bulb from './Bulb';
import Circles from './Circles'

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Services = () => {
  return (
  <div className=' min-h-screen bg-primary/30 py-24 
    pb-28 flex items-center relative'>
    <Circles />
    <div className='container mx-auto relative z-10'>
    <div className='flex flex-col xl:flex-row gap-x-8'>
      {/*text*/}
      <div className='text-center flex xl:w-[30vw] flex-col 
        lg:text-left mb-4 xl:mb-0 xl:mt-10'>
        <motion.h2 
          variants={fadeIn('up',0.2)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 xl:mt-8'>
          My Services <span className='text-accent'>.</span>
        </motion.h2>
        
        <motion.p variants={fadeIn('up',0.4)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-4 max-w-[400px] mx-auto lg:mx-0
          underline underline-offset-4 decoration-accent 
          text-2xl font-bold xl:text-center'> 
          What I do
        </motion.p>
       
      </div>
      {/*slider*/}
      <motion.div 
          variants={fadeIn('down',0.6)} 
          initial='hidden'
          animate='show'
          exit='hidden' 
          className='w-full xl:max-w-[65%] px-2
          md:px-4 xl:px-0'>

        <div className="relative z-10">
        <ServiceSlider />
        </div>

      </motion.div>
    </div>
    </div>
    
    <Bulb />
    
  </div>
  );
};

export default Services;
