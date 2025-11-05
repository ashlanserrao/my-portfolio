// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div
      className="absolute top-[60px] left-1/2 -translate-x-1/2
        xl:fixed xl:top-4 xl:right-[100px] xl:left-auto xl:translate-x-0
        z-40 flex gap-x-4 text-lg"
    >
      <a
        href="https://www.youtube.com/@ashlanDraws"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </a>

      <a
        href="https://www.instagram.com/ashlanserrao?igsh=a2FpcWR0Y2R4eXgz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </a>

      <a
        href="https://github.com/ashlanserrao"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </a>

      <a
        href="https://www.linkedin.com/in/ashlanserrao/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </a>
    </div>
  );
};

export default Socials;

