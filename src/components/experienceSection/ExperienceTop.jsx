// import ExperienceTopLeft from "./ExperienceTopLeft";
// import ExperienceTopMiddle from "./ExperienceTopMiddle";
// import ExperienceTopRight from "./ExperienceTopRight";

// const ExperienceTop = () => {
//   return (
//     <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
//       <ExperienceTopLeft />
//       <ExperienceTopMiddle />
//       <ExperienceTopRight />
//     </div>
//   );
// };

// export default ExperienceTop;

// ExperienceTop.js
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experience = {
  job: "Frontend Developer",
  company: "Complixen",
  date: "May 2025 - Present"
};

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-8 items-center justify-center mt-8">
      <ExperienceTopMiddle />
      
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="border-2 border-orange border-dashed rounded-2xl p-6 flex flex-col justify-center"
        style={{ minHeight: '200px', minWidth: '250px' }}
      >
        <p className="font-bold text-cyan text-xl text-center">{experience.job}</p>
        <p className="text-orange text-lg text-center mt-2">{experience.company}</p>
        <p className="text-lightGrey text-center mt-2">{experience.date}</p>
      </motion.div>
    </div>
  );
};

export default ExperienceTop;