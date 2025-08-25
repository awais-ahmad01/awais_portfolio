
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Diverse Den",
    description: "An Ecommerce Platform designed to streamline online business operations with an all-in-one, user-friendly platform.",
    link: "#",
    align: "right"
  },
  {
    name: "MindMap",

    description: "A mental wellness journaling app that helps users track moods, write journals, and get AI-powered reflections. Features Google login, email verification, and a personalized dashboard.",
    link: "https://mind-map-puce-mu.vercel.app",
    align: "left"
  },
  {
    name: "PeerLink",

    description: "A real-time video chat platform that connects users in virtual rooms. Includes live video streaming, chat, and participant management with peer-to-peer connections.",
    link: "https://peerlink-phi.vercel.app",
    align: "right"
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      
      <div className="flex flex-col gap-8 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <SingleProject
              name={project.name}
              year={project.year}
              description={project.description}
              align={project.align}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;