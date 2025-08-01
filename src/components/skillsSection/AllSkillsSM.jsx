


import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiMongodb,  SiMantine } from "react-icons/si";
import { SiMui } from "react-icons/si";


import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
