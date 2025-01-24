// function Button1({ text }) {
//   return (
//     // <button className="text-purple border-2 border-purple px-6 py-4 rounded-2xl mt-8 uppercase text-bold-20">
//     //   {text}
//     // </button>
//     <div className="bg-custom-gradient1 p-[3px] rounded-2xl w-fit inline-block drop-shadow-md">
//       <button className="bg-light-blue text-purple uppercase text-bold-20 py-3 px-5 rounded-2xl">
//         {text}
//       </button>
//     </div>
//     // <div className="flex items-center justify-center min-h-screen bg-gray-100">
//     //   <div className="gradient-border">
//     //     <button className="btn">Gradient Border Button</button>
//     //   </div>
//     // </div>
//   );
// }
// export default Button1;

function Button({ text, gradientClass, textColorClass }) {
    return (
      <div className={`p-[3px] rounded-2xl w-fit inline-block drop-shadow-md ${gradientClass}`}>
        <button className={`py-3 px-5 rounded-2xl ${textColorClass}`}>
          {text}
        </button>
      </div>
    );
  }
  
  export default Button;