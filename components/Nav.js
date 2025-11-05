// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';


// nav data
export const navData = [
  { name: 'home', path: '#home', icon: <HiHome /> },
  { name: 'about', path: '#about', icon: <HiUser /> },
  { name: 'services', path: '#services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '#work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '#testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '#contact',
    icon: <HiEnvelope />,
  },
];

import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="fixed 
  bottom-4 
  left-1/2 
  -translate-x-1/2 
  w-[92%] 
  max-w-[500px] 
  xl:top-1/2
  xl:-translate-y-1/2
  xl:bottom-auto 
  xl:left-auto 
  xl:translate-x-0 
  xl:right-[2%] 
  xl:w-14 
  xl:h-[400px] 
  z-50">
      <div className="flex flex-row xl:flex-col items-center justify-between 
        xl:justify-center gap-y-10 px-6 xl:px-0 py-4 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl rounded-full h-[80px] xl:h-full">
        {navData.map((link, index) => (
          
          <a
            key={index}
            href={link.path}
            className="relative flex items-center group hover:text-accent transition-all duration-300 cursor-pointer"
          >
            {/* Tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white text-primary p-2 rounded shadow">
                <span className="text-xs font-semibold capitalize">
                  {link.name}
                </span>
                {/* Triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 top-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            {/* Icon */}
            <div>{link.icon}</div>
          </a>
          
        ))}
      </div>
    </nav>
  );
};

export default Nav;
