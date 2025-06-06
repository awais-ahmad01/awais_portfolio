// const SingleSkill = ({ imgSvg, text }) => {
//   return (
//     <div className="hover:-translate-y-10 transition-all duration-500">
//       <div className="flex flex-col items-center gap-2 relative">
//         <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
//           {imgSvg}
//         </div>
//         <p className="text-white font-bold">{text}</p>
//       </div>
//       <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
//     </div>
//   );
// };

// export default SingleSkill;


// // SingleSkill.jsx
// const SingleSkill = ({ imgSvg, text }) => {
//   return (
//     <div className="hover:-translate-y-3 transition-all duration-500 mx-2">
//       <div className="flex flex-col items-center gap-2 relative">
//         <div className="bg-white text-cyan h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-4xl md:text-6xl border-4 border-orange">
//           {imgSvg}
//         </div>
//         <p className="text-white font-bold text-sm md:text-base">{text}</p>
//       </div>
//     </div>
//   );
// };

// export default SingleSkill;

// Updated SingleSkill component to fix the orange background positioning
const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500 relative">
      <div className="flex flex-col items-center gap-2 relative z-10">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] left-1/2 transform -translate-x-1/2 -z-10"></div>
    </div>
  );
};

export default SingleSkill;
