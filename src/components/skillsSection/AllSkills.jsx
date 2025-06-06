// import SingleSkill from "./SingleSkill";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";
// import { SiNextdotjs } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const skills = [
//   {
//     skill: "HTML",
//     icon: FaHtml5,
//   },
//   {
//     skill: "CSS",
//     icon: FaCss3Alt,
//   },
//   {
//     skill: "JavaScript",
//     icon: IoLogoJavascript,
//   },
//   // {
//   //   skill: "TypeScript",
//   //   icon: SiTypescript,
//   // },
//   {
//     skill: "ReactJS",
//     icon: FaReact,
//   },
//   {
//     skill: "Redux",
//     icon: SiRedux,
//   },
//   // {
//   //   skill: "NextJS",
//   //   icon: SiNextdotjs,
//   // },
//   {
//     skill: "TailwindCSS",
//     icon: RiTailwindCssFill,
//   },
// ];

// const AllSkills = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
//         {skills.map((item, index) => {
//           return (
//             <motion.div
//               variants={fadeIn("up", `0.${index}`)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0 }}
//               key={index}
//             >
//               <SingleSkill
//                 key={index}
//                 text={item.skill}
//                 imgSvg={<item.icon />}
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AllSkills;



// import SingleSkill from "./SingleSkill";
// import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaGithub, FaNodeJs } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiRedux, SiMongodb, SiMantine } from "react-icons/si";
// import { SiMui } from "react-icons/si";


// import { RiTailwindCssFill } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const skills = [
//   { skill: "HTML", icon: FaHtml5 },
//   { skill: "CSS", icon: FaCss3Alt },
//   { skill: "JavaScript", icon: IoLogoJavascript },
//   { skill: "ReactJS", icon: FaReact },
//   { skill: "Redux", icon: SiRedux },
//   { skill: "TailwindCSS", icon: RiTailwindCssFill },
//   { skill: "Node.js", icon: FaNodeJs },
//   { skill: "MongoDB", icon: SiMongodb },
//   { skill: "Material UI", icon: SiMui },
//   { skill: "Mantine", icon: SiMantine },
//   { skill: "Figma", icon: FaFigma },
//   { skill: "GitHub", icon: FaGithub },
// ];

// const AllSkills = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
//         {skills.map((item, index) => (
//           <motion.div
//             variants={fadeIn("up", `0.${index}`)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0 }}
//             key={index}
//           >
//             <SingleSkill text={item.skill} imgSvg={<item.icon />} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllSkills;

import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiMongodb, SiMantine } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useRef } from "react";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "Material UI", icon: SiMui },
  { skill: "Mantine", icon: SiMantine },
  { skill: "Figma", icon: FaFigma },
  { skill: "GitHub", icon: FaGithub },
];

const AllSkills = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto pt-16 pb-8 group">
      {/* Left Navigation Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-orange text-white p-3 rounded-full hover:bg-cyan transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
        aria-label="Scroll left"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      {/* Skills Container - Added overflow-x-hidden only for horizontal scrolling */}
      <div 
        ref={scrollRef}
        className="flex items-end gap-4 overflow-x-auto scrollbar-hide px-16 py-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflowY: 'visible', // Explicitly allow vertical overflow
        }}
      >
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
            className="flex-shrink-0"
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        ))}
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-orange text-white p-3 rounded-full hover:bg-cyan transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
        aria-label="Scroll right"
      >
        <FaChevronRight className="text-xl" />
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AllSkills;