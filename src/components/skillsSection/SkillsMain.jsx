// SkillsMain.jsx
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      {/* Removed overflow-hidden and adjusted padding */}
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative pt-16 pb-8">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;

// SkillsMain.jsx
// import AllSkills from "./AllSkills";
// import AllSkillsSM from "./AllSkillsSM";
// import SkillsText from "./SkillsText";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const SkillsMain = () => {
//   return (
//     <div id="skills">
//       <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative">
//         <motion.div
//           variants={fadeIn("down", 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.7 }}
//         >
//           <SkillsText />
//         </motion.div>
        
//         <div className="mt-16 sm:hidden lg:block">
//           <AllSkills />
//         </div>
        
//         <div className="sm:block lg:hidden mt-16">
//           <AllSkillsSM />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsMain;