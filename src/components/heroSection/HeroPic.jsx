// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import { PiHexagonThin } from "react-icons/pi";

// const HeroPic = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0 }}
//       className=" h-full flex items-center justify-center "
//     >
//       <img
//         src="../../public/images/mine.png"
//         alt="Awais Ahmad"
//         className="max-h-[450px] w-auto"
//       />

//       <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
//         <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      {/* Main circular image container */}
      <div className="relative">
        {/* Circular image with gradient border */}
        <div className="relative p-2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-orange-400 animate-pulse">
          <div className="relative rounded-full overflow-hidden bg-gray-900 p-1">
            <img
              src="/static/images/awais.png"
              alt="Awais Ahmad"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl"
            />
            {/* Overlay gradient for better blend */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Glowing ring effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-orange-400/30 blur-xl animate-pulse -z-10 scale-110"></div>
      </div>

      {/* Background hexagon animations */}
      <div className="absolute -z-20 flex justify-center items-center">
        <PiHexagonThin className="h-[500px] md:h-[600px] w-auto text-cyan/40 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
      <div className="absolute -z-20 flex justify-center items-center rotate-45">
        <PiHexagonThin className="h-[400px] md:h-[500px] w-auto text-orange/30 blur-sm animate-[spin_-15s_linear_infinite]" />
      </div>
      <div className="absolute -z-20 flex justify-center items-center rotate-90">
        <PiHexagonThin className="h-[350px] md:h-[450px] w-auto text-blue/20 animate-[spin_25s_linear_infinite]" />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute -z-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-8 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-16 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-8 right-12 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
      </div>
    </motion.div>
  );
};

export default HeroPic;