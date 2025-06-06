// import ContactForm from "./ContactForm";
// import ContactText from "./ContactText";

// const ContactMeLeft = () => {
//   return (
//     <div className="flex flex-col gap-8 w-full">
//       <ContactText />
//       <ContactForm />
//     </div>
//   );
// };

// export default ContactMeLeft;


// ContactMeLeft.js
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <motion.div 
      className="flex flex-col gap-8 w-full"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <ContactText />
      <ContactForm />
    </motion.div>
  );
};

export default ContactMeLeft;