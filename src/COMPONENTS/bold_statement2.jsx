// import React from "react";
// import jsPDF from "jspdf";

// const Bold = () => {
//   const location = useLocation();
//     const resumeData = location.state?.resumeData || {};
//     console.log(resumeData);
  
//     if (!resumeData) {
//       return <div>No resume data available</div>;
//     }
  
//     const { personalDetails, educationFields, skillsFields, experienceFields } = resumeData;
  
//   const downloadPDF = () => {
//     const doc = new jsPDF("portrait", "pt", "a4");
//     const resume = document.getElementById("resume");

//     // Remove the border and margin styles before saving the PDF
//     resume.style.border = "none";  // Remove border
//     resume.style.margin = "0";  // Remove any margin
//     resume.style.padding = "0";  // Remove padding

//     doc.html(resume, {
//       callback: function (doc) {
//         doc.save("Sandra_Barnes_Resume.pdf");
//       },
//       x: 0, // No padding on the left
//       y: 0, // No padding on the top
//     });
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center">
//       {/* Resume */}
//       <div
//         className="bg-white shadow-lg rounded-lg w-[595px] h-[842px] p-6 flex border border-gray-300"
//         id="resume"
//       >
//         {/* Left Sidebar */}
//         <div className="w-1/3">
//           <div className="bg-gray-800 p-6 text-center">
//             <h1 className="text-2xl font-bold text-white uppercase">
//              {resumeData.name}
//             </h1>
//             <h2 className="text-sm text-gray-200 mt-2">{resumeData.jobTitle}</h2>
//           </div>
//           <div className="bg-gray-200 p-6">
//             <div className="mt-8">
//               <h3 className="text-md font-semibold text-gray-700">About Me</h3>
//               <p className="text-sm text-gray-600 mt-2">
//               {resumeData.summary}
//               </p>
//             </div>
//             <div className="mt-8">
//               <h3 className="text-md font-semibold text-gray-700">Contact</h3>
//               <p className="text-sm text-gray-600 mt-2">Phone: {resumeData.phone}</p>
//               <p className="text-sm text-gray-600">Email: {resumeData.email} </p>
//             </div>
//             <div className="mt-8">
//               <h3 className="text-md font-semibold text-gray-700">References</h3>
// {resumeData.reference.map((ref, index) => (
//   <p key={index}>
//     {ref.name}: {ref.contact}
//   </p>
// ))}
             
//              </div>
//            </div>
//          </div>

//        {/* Right Content */}
//         <div className="w-2/3 p-8">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 uppercase border-b border-gray-300 pb-2">          
//       Employment
//             </h3>
//             <div className="mt-4">
// {resumeData.experience.map((exp, index) => (
//   <div key={index}>
//     <h4 className="font-semibold text-gray-700">{exp.jobTitle}</h4>
//      <p className="text-sm text-gray-500">({exp.duration})</p>
//                <p className="text-sm text-gray-600 mt-2">
//                {exp.company} <br />
//                {exp.description}
//               </p>
//   </div>
// ))}

//   <div className="mt-8">
//     <h3 className="text-lg font-semibold text-gray-800 uppercase border-b border-gray-300 pb-2">
//       Education
//     </h3>
//     <div className="mt-4 space-y-4">
//       {resumeData.education.map((edu, index) => (
//         <div key={index} className="border-b border-gray-200 pb-4">
//           <p className="font-semibold text-gray-700">{edu.degree}</p>
//           <p className="text-sm text-gray-500">{edu.year}</p>
//           <p className="text-sm text-gray-600">{edu.institution}</p>
//         </div>
//       ))}
//     </div>
//   </div>

//  <div className="mt-8">
//     <h3 className="text-lg font-semibold text-gray-800 uppercase border-b border-gray-300 pb-2">
//       Skills
//     </h3>
//     <div className="mt-4 space-y-4">
//       {resumeData.skills.map((skill, index) => (
//         <div key={index} className="flex items-center justify-between text-sm text-gray-600">
//           <p className="font-medium text-gray-700">{skill.skill}</p>
//           <div className="bg-gray-300 w-2/3 h-2 rounded-full">
//             <div
//               className="bg-black h-full rounded-full"
//               style={{ width: `${skill.level}%` }} // Adjust progress bar width dynamically
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>


//       <button
//         onClick={downloadPDF}
//         className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//       >
//         Download as PDF
//       </button>
//     </div>
//   );
// };

// export default Bold;
import React from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";

const Bold = () => {
  const location = useLocation();
  const resumeData = location.state?.resumeData || {};
  console.log(resumeData);

  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    const resume = document.getElementById("resume");

    if (resume) {
      // Temporarily remove styles
      const originalBorder = resume.style.border;
      const originalMargin = resume.style.margin;
      const originalPadding = resume.style.padding;

      resume.style.border = "none";
      resume.style.margin = "0";
      resume.style.padding = "0";

      doc.html(resume, {
        callback: function (doc) {
          doc.save(`${resumeData.name || "Resume"}.pdf`);
          // Restore styles
          resume.style.border = originalBorder;
          resume.style.margin = originalMargin;
          resume.style.padding = originalPadding;
        },
        x: 0,
        y: 0,
      });
    }
  };

  const {
    name = "Your Name",
    jobTitle = "Your Job Title",
    summary = "",
    phone = "",
    email = "",
    reference = [],
    experience = [],
    education = [],
    skills = [],
  } = resumeData;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center">
      {/* Resume */}
      <div
        className="bg-white shadow-lg rounded-lg w-[595px] h-[842px] p-6 flex border border-gray-300"
        id="resume"
      >
        {/* Left Sidebar */}
        <div className="w-1/3">
          <div className="bg-gray-800 p-6 text-center">
            <h1 className="text-2xl font-bold text-white uppercase">{name}</h1>
            <h2 className="text-sm text-gray-200 mt-2">{jobTitle}</h2>
          </div>
          <div className="bg-gray-200 p-6">
            <div className="mt-8">
              <h3 className="text-md font-semibold text-gray-700">About Me</h3>
              <p className="text-sm text-gray-600 mt-2">{summary}</p>
            </div>
            <div className="mt-8">
              <h3 className="text-md font-semibold text-gray-700">Contact</h3>
              <p className="text-sm text-gray-600 mt-2">Phone: {phone}</p>
              <p className="text-sm text-gray-600">Email: {email}</p>
            </div>
            <div className="mt-8">
              <h3 className="text-md font-semibold text-gray-700">References</h3>
              {reference.length > 0 ? (
                reference.map((ref, index) => (
                  <p key={index}>
                    {ref.name}: {ref.contact}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-500">No references available</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 uppercase border-b border-gray-300 pb-2">
              Employment
            </h3>
            <div className="mt-4">
              {experience.length > 0 ? (
                experience.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-700">{exp.jobTitle}</h4>
                    <p className="text-sm text-gray-500">({exp.duration})</p>
                    <p className="text-sm text-gray-600 mt-2">
                      {exp.company}
                      <br />
                      {exp.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No experience available</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 uppercase border-b border-gray-300 pb-2">
              Education
            </h3>
            <div className="mt-4 space-y-4">
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <p className="font-semibold text-gray-700">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No education available</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 uppercase border-b border-gray-300 pb-2">
              Skills
            </h3>
            <div className="mt-4 space-y-4">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm text-gray-600"
                  >
                    <p className="font-medium text-gray-700">{skill.skill}</p>
                    <div className="bg-gray-300 w-2/3 h-2 rounded-full">
                      <div
                        className="bg-black h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No skills available</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default Bold;
