// import { HiOutlineMail } from "react-icons/hi";
// import { FiPhone } from "react-icons/fi";
// import { IoLocationOutline } from "react-icons/io5";
// import SingleInfo from "./SingleInfo";

// const ContactInfo = () => {
//   return (
//     <div className="flex flex-col gap-4">
//       <SingleInfo text="abdelrahman.qassem@gmail.com" Image={HiOutlineMail} />
//       <SingleInfo text="+2 01000 66 24 55" Image={FiPhone} />
//       <SingleInfo text="Alexandria, Egypt" Image={IoLocationOutline} />
//     </div>
//   );
// };

// export default ContactInfo;




// ContactInfo.js
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <motion.div 
      className="flex flex-col gap-4"
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <SingleInfo text="awaissahmad016@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="(+92) 314 9467803" Image={FiPhone} />
      <SingleInfo text="Islamabad, Pakistan" Image={IoLocationOutline} />
    </motion.div>
  );
};

export default ContactInfo;