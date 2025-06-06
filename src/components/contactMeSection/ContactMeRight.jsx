// import ContactInfo from "./ContactInfo";
// import ContactSocial from "./ContactSocial";

// const ContactMeRight = () => {
//   return (
//     <div className="flex flex-col items-center justify-center gap-12">
//       <img
//         src="../../public/images/email-image.png"
//         alt="email image"
//         className="max-w-[300px]"
//       />
//       <ContactInfo />
//       <ContactSocial />
//     </div>
//   );
// };

// export default ContactMeRight;



// ContactMeRight.js
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-12"
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.img
        src="../../public/images/email-image.png"
        alt="email image"
        className="max-w-[300px]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
      <ContactInfo />
      <ContactSocial />
    </motion.div>
  );
};

export default ContactMeRight;