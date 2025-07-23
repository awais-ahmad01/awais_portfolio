// import ProjectsText from "./ProjectsText";
// import SingleProject from "./SingleProject";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const projects = [
//   {
//     name: "Vacation of Africa",
//     year: "Mar2022",
//     align: "right",
//     image: "../../public/images/website-img-1.jpg",
//     link: "#",
//   },
//   {
//     name: "Moola App",
//     year: "Sept2022",
//     align: "left",
//     image: "../../public/images/website-img-2.webp",
//     link: "#",
//   },
//   {
//     name: "Tourzania",
//     year: "Jan2023",
//     align: "right",
//     image: "../../public/images/website-img-3.jpg",
//     link: "#",
//   },
//   {
//     name: "Bank of Luck",
//     year: "May2024",
//     align: "left",
//     image: "../../public/images/website-img-4.jpg",
//     link: "#",
//   },
// ];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {projects.map((project, index) => {
//           return (
//             <SingleProject
//               key={index}
//               name={project.name}
//               year={project.year}
//               align={project.align}
//               image={project.image}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProjectsMain;




// // ProjectsMain.js
// import ProjectsText from "./ProjectsText";
// import SingleProject from "./SingleProject";
// import { motion } from "framer-motion";
// import { fadeIn, staggerContainer } from "../../framerMotion/variants";

// const projects = [
//   {
//     name: "Diverse Den Platform",
//     year: "2023",
//     description: "An Ecommerce Platform designed to streamline online business operations with an all-in-one, user-friendly platform.",
//     link: "#",
//     align: "right"
//   },
//   {
//     name: "FlickBase",
//     year: "2023",
//     description: "React-based app to search and view movie details.",
//     link: "#",
//     align: "left"
//   },
//   {
//     name: "Personal Portfolio Website",
//     year: "2024",
//     description: "Fully responsive portfolio using React, TailwindCSS, and Framer Motion.",
//     link: "#",
//     align: "right"
//   }
// ];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("down", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
      
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.2 }}
//         className="flex flex-col gap-8 max-w-[900px] mx-auto mt-12"
//       >
//         {projects.map((project, index) => (
//           <SingleProject
//             key={index}
//             index={index}
//             name={project.name}
//             year={project.year}
//             description={project.description}
//             align={project.align}
//             link={project.link}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectsMain;




// ProjectsMain.js (updated)
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Diverse Den Platform",
    year: "2023",
    description: "An Ecommerce Platform designed to streamline online business operations with an all-in-one, user-friendly platform.",
    link: "#",
    align: "right"
  },
  {
    name: "FlickBase",
    year: "2023",
    description: "React-based app to search and view movie details.",
    link: "#",
    align: "left"
  },
  {
    name: "Personal Portfolio Website",
    year: "2024",
    description: "Fully responsive portfolio using React, TailwindCSS, and Framer Motion.",
    link: "#",
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