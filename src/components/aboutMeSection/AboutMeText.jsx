import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Awais Ahmad, MERN Stack Developer specializing in React, Node.js, MongoDB, and JavaScript, with 
expertise in crafting fast, responsive, and user-friendly web applications. Passionate about 
building seamless digital experiences using modern tools like Tailwind CSS and Mantine UI 
for sleek, intuitive interfaces. I thrive on solving technical challenges and transforming ideas 
into efficient, scalable solutions. My focus is on clean code, smooth performance, and 
delivering impactful web apps that users love.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
