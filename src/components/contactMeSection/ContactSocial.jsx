// import SingleContactSocial from "./SingleContactSocial";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";

// const ContactSocial = () => {
//   return (
//     <div className="flex gap-4">
//       <SingleContactSocial link="#" Icon={FaLinkedinIn} />
//       <SingleContactSocial link="#" Icon={FiGithub} />
//       <SingleContactSocial link="#" Icon={FaInstagram} />
//     </div>
//   );
// };

// export default ContactSocial;



// ContactSocial.js
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <motion.div 
      className="flex gap-4"
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <SingleContactSocial link="https://www.linkedin.com/in/awais-ahmad01/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/awais-ahmad01" Icon={FiGithub} />
      <SingleContactSocial link="#" Icon={FaInstagram} />
    </motion.div>
  );
};

export default ContactSocial;