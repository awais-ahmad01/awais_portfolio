// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const SingleProject = ({ name, year, align, image, link }) => {
//   return (
//     <motion.div
//       variants={fadeIn("top", 0)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.1 }}
//       className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
//         align === "left" ? "md:flex-row" : "md:flex-row-reverse"
//       } justify-end sm:flex-col`}
//     >
//       <div>
//         <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
//         <h2
//           className={`text-xl font-thin text-white font-special sm:text-center ${
//             align === "left" ? "md:text-right" : "md:text-left"
//           }`}
//         >
//           {year}
//         </h2>
//         <a
//           href={link}
//           className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
//             align === "left" ? "md:justify-self-end" : "md:justify-self-start"
//           }`}
//         >
//           View <BsFillArrowUpRightCircleFill />
//         </a>
//       </div>
//       <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
//         <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
//         <img src={image} alt="website image" className="w-full h-full" />
//       </div>
//     </motion.div>
//   );
// };


// export default SingleProject;


// SingleProject.js
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, description, align, link, index }) => {
  return (
    <motion.div
      variants={fadeIn(align === "left" ? "right" : "left", index * 0.2)}
      className={`w-full border-2 border-orange border-dashed rounded-2xl p-6 hover:bg-darkBrown/50 transition-all duration-500 ${
        align === "left" ? "text-left" : "text-right"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex flex-col gap-2"
      >
        <motion.h2 
          className="text-3xl text-orange"
          whileHover={{ x: align === "left" ? 5 : -5 }}
        >
          {name}
        </motion.h2>
        
        <motion.p 
          className="text-xl font-thin text-white font-special"
          initial={{ opacity: 0.7 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {year}
        </motion.p>
        
        <motion.p 
          className="text-lightGrey my-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {description}
        </motion.p>
        
        <motion.a
          href={link}
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View <BsFillArrowUpRightCircleFill />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;