// import React from "react";

// const RecruitmentSteps = () => {
//   const steps = [
//     {
//       title: "Post Job Openings",
//       description:
//         "Easily share job openings with a clear job description and requirements to attract top talent.",
//     },
//     {
//       title: "Filter Applications",
//       description:
//         "Our system automatically organizes applications, allowing you to focus on qualified candidates.",
//     },
//     {
//       title: "Streamline Hiring",
//       description:
//         "Schedule interviews, manage tasks, and make data-driven decisions to hire the perfect candidate.",
//     },
//   ];

//   return (
//     <div className="bg-white py-16 px-4 flex gap-5 flex-col md:flex-row">
//       {/* Left side: Space for Image Upload */}
//       <div className="md:w-1/2 mb-8 md:mb-0">
//         {/* Placeholder for image upload */}
//         <div className="w-full h-full flex justify-center items-center">
//           <img src="recruiting.jpg" alt="recruiting" />
//         </div>
//       </div>

//       {/* Right side: Recruitment Steps (Vertical) */}
//       <div className="md:w-1/2">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">How Recruitment Works</h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Simplify the hiring process with these easy steps.
//           </p>
//         </div>

//         <div className="flex flex-col gap-8">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="text-center p-6 border rounded-lg shadow-sm transition-all hover:bg-blue-500 hover:text-white"
//             >
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecruitmentSteps;

import React from "react";

const RecruitmentSteps = () => {
  const steps = [
    {
      title: "Post Job Openings",
      description:
        "Easily share job openings with a clear job description and requirements to attract top talent.",
    },
    {
      title: "Filter Applications",
      description:
        "Our system automatically organizes applications, allowing you to focus on qualified candidates.",
    },
    {
      title: "Streamline Hiring",
      description:
        "Schedule interviews, manage tasks, and make data-driven decisions to hire the perfect candidate.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 flex gap-5 flex-col md:flex-row">
      {/* Left side: Space for Image Upload */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        {/* Image with adjusted height and rounded corners */}
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="recruiting.jpg"
            alt="recruiting"
            className="w-full h-auto md:h-[600px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right side: Recruitment Steps (Vertical) */}
      <div className="md:w-1/2">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Recruitment Works</h2>
          <p className="text-lg text-gray-600 mb-8">
            Simplify the hiring process with these easy steps.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg shadow-sm transition-all hover:bg-blue-500 hover:text-white"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentSteps;
