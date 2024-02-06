import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const SocialIcons = ({ linkedin, github, twitter }) => (
  <div className="flex gap-4">
    {linkedin && (
      <span className="bannerIcon">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </span>
    )}
    {github && (
      <span className="bannerIcon">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </span>
    )}
    {twitter && (
      <span className="bannerIcon">
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </span>
    )}
  </div>
);

// Example usage
const MySocialIcons = () => (
  <SocialIcons
    linkedin="https://www.linkedin.com/in/shravan-kumar-reddy-nallamada/"
    github="https://github.com/snallamada"
    twitter="https://twitter.com/ts_shra1_reddy"
  />
);

export default MySocialIcons;
