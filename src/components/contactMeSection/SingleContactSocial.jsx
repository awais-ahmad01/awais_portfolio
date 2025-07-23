// const SingleContactSocial = ({ Icon, link }) => {
//   return (
//     <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
//       <a href={link} className="cursor-pointer">
//         <Icon />
//       </a>
//     </div>
//   );
// };

// export default SingleContactSocial;



// SingleContactSocial.js
import { motion } from "framer-motion";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <motion.div 
      className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center"
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "rgba(234, 88, 12, 0.1)" 
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </motion.div>
  );
};

export default SingleContactSocial;