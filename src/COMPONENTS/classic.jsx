// import React from "react";
// import { useLocation } from "react-router-dom";
// import jsPDF from "jspdf";

// const Classic = () => {
//     const location = useLocation();
//       const resumeData = location.state?.resumeData || {};
//       console.log(resumeData);
    
//   const downloadPDF = () => {
//     const doc = new jsPDF("portrait", "pt", "a4");
//     const resume = document.getElementById("resume");
//     doc.html(resume, {
//       callback: function (doc) {
//         doc.save(`${resumeData.name || "Resume"}.pdf`);
//       },
//       x: 20,
//       y: 20,
//     });
//   };
//   const {
//     name = "Your Name",
//     jobTitle = "Your Job Title",
//     phone = "",
//     email = "",
//     country= "",
//     city= "",
//     linkedin= "",
//     experience = [],
//     education = [],
//     skills = [],
//     strength=[],
//     achievement=[],
//     languages=[],
//     certifications=[],
//   } = resumeData;

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center">
//       {/* Resume */}
//       <div
//         className="bg-white p-14 pl-20 pr-20 max-w-4xl w-full shadow-lg rounded-lg border border-gray-300"
//         id="resume"
//       >
//         {/* Header */}
//         <div className="text-center border-b border-gray-300 pb-4">
//           <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
//           <h2 className="text-lg text-blue-600">{jobTitle}</h2>
//           <div className="flex justify-center items-center gap-4 mt-2 text-sm text-gray-600">
//             <p>📞 {phone}</p>
//             <p>✉️ {email}</p>
//             <p>🔗 {linkedin}</p>
//           </div>
//           <p className="text-gray-600">{city}, {country}</p>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-3 gap-8 mt-6">
//           {/* Left Column */}
//           <div className="col-span-2">
//             {/* Experience Section */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
//                 Experience
//               </h3>
//               <div className="mt-4">
//                {experience.length > 0 ? (
//                 experience.map((exp, index) => (
//                   <div key={index}>
//                 <h4 className="font-semibold text-gray-800">
//                 {exp.jobTitle}
//                 </h4>
//                 <p className="text-sm text-gray-500"> {exp.company} | {exp.duration}</p>
//                 <ul className="list-disc list-inside text-gray-600 mt-2">
//                   <li>{exp.description}</li>
//                 </ul>
//                 </div>
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-500">No experience available</p>
//               )}
//             </div>
//             </div>
              
//             {/* Education Section */}
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
//                 Education
//               </h3>
//               <div className="mt-4">
//               {education.length > 0 ? (
//                 education.map((edu, index) => (
//                   <div key={index}>
//                      <p className="font-semibold text-gray-800">
//                 {edu.degree}<br />{edu.institution}
//                 </p>
//                 <p className="text-sm text-gray-500">{edu.year}</p>
//                 <p className="text-sm text-gray-500">
//                 {edu.grade}
//                 </p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-500">No education available</p>
//               )}
//             </div>
            

//           {/* Right Column */}
//           <div>
//             {/* Strengths */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
//                 Strengths
//               </h3>
//               <ul className="list-disc list-inside text-gray-600 mt-2">
//               {strength.map((stren, index) => (
//                   <li key={index}>✔️ {stren.strength}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Achievements */}
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
//                 Achievements
//               </h3>
//               <ul className="list-disc list-inside text-gray-600 mt-2">
//                 {achievement.map((achievement, index) => (
//                   <li key={index}>🏆 {achievement.achievement}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Skills */}
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
//                 Skills
//               </h3>
//                {skills.length > 0 ? (
//                 skills.map((skill, index) => (
//                   <div
//                     key={index}
//                   >
//               <p className="mt-2 text-gray-600">
//               {skill.skill}
//               </p>
//             </div>
//              ))
//             ) : (
//               <p className="text-sm text-gray-500">No skills available</p>
//             )}
//           </div>

//             {/* Languages */}
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
//                 Languages
//               </h3>
//               <div className="mt-4 space-y-4">
//               {languages.length > 0 ? (
//                 skills.map((lang, index) => (
//                   <div
//                     key={index} >
//                     <p className="text-gray-600">
//                 {lang.language}: {lang.proficiency}
//               </p>
//             </div>
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-500">No skills available</p>
//               )}
//             </div>
//               <p className="text-gray-600">
//                 {lang.language}: {lang.proficiency}
//               </p>
//             </div>

//             <div className="mt-8">
//   <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
//     Certifications
//   </h3>
//   {resumeData.certifications && resumeData.certifications.length > 0 ? (
//     resumeData.certifications.map((cert, index) => (
//       <div key={cert.id || index} className="mt-2 text-gray-600">
//         <p>
//           {cert.course} - {cert.institution} ({cert.year})
//         </p>
//       </div>
//     ))
//   ) : (
//     <p className="text-gray-600">No certifications available.</p>
//   )}
// </div>
//           </div>
//         </div>
//       </div>

//       {/* Download Button */}
//       <button
//         onClick={downloadPDF}
//         className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//       >
//         Download as PDF
//       </button>
//     </div>
//   );
// };

// export default Classic;
import React from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Classic = () => {
  const location = useLocation();
  const resumeData = location.state?.resumeData || {};
  console.log(resumeData);

  // const downloadPDF = () => {
  //   const doc = new jsPDF("portrait", "pt", "a4");
  //   const resume = document.getElementById("resume");
  //   doc.html(resume, {
  //     callback: function (doc) {
  //       doc.save(`${resumeData.name || "Resume"}.pdf`);
  //     },
  //     x: 20,
  //     y: 20,
  //   });
  // };
  const downloadPDF = () => {
    const resume = document.getElementById("resume");
    html2canvas(resume, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("portrait", "pt", "a4");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
  
      const canvasWidth = imgWidth * ratio;
      const canvasHeight = imgHeight * ratio;
  
      doc.addImage(imgData, "PNG", 0, 0, canvasWidth, canvasHeight);
      doc.save(`${resumeData.name || "Resume"}.pdf`);
    });
  };
  

  const {
    name = "Your Name",
    jobTitle = "Your Job Title",
    phone = "",
    email = "",
    country = "",
    city = "",
    linkedin = "",
    experience = [],
    education = [],
    skills = [],
    strength = [],
    achievement = [],
    languages = [],
    certifications = [],
  } = resumeData;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center">
      {/* Resume */}
      <div
        className="bg-white p-14 pl-20 pr-20 max-w-4xl w-full shadow-lg rounded-lg border border-gray-300"
        id="resume"
      >
        {/* Header */}
        <div className="text-center border-b border-gray-300 pb-4">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <h2 className="text-lg text-blue-600">{jobTitle}</h2>
          <div className="flex justify-center items-center gap-4 mt-2 text-sm text-gray-600">
            <p>📞 {phone}</p>
            <p>✉️ {email}</p>
            <p>🔗 {linkedin}</p>
          </div>
          <p className="text-gray-600">{city}, {country}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8 mt-6">
          {/* Left Column */}
          <div className="col-span-2">
            {/* Experience Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Experience
              </h3>
              {experience.length > 0 ? (
                experience.map((exp, index) => (
                  <div key={index} className="mt-4">
                    <h4 className="font-semibold text-gray-800">{exp.jobTitle}</h4>
                    <p className="text-sm text-gray-500">
                      {exp.company} | {exp.startDate}-{exp.endDate}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>{exp.description}</li>
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No experience available</p>
              )}
            </div>

            {/* Education Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Education
              </h3>
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <div key={index} className="mt-4">
                    <p className="font-semibold text-gray-800">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                    <p className="text-sm text-gray-500">{edu.grade}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No education available</p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Strengths */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Strengths
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {strength.length > 0 ? (
                  strength.map((stren, index) => (
                    <li key={index}>✔️ {stren.strength}</li>
                  ))
                ) : (
                  <li>No strengths available</li>
                )}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Achievements
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {achievement.length > 0 ? (
                  achievement.map((ach, index) => (
                    <li key={index}>🏆 {ach.achievement}</li>
                  ))
                ) : (
                  <li>No achievements available</li>
                )}
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Skills
              </h3>
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <p key={index} className="mt-2 text-gray-600">
                    {skill.skill}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-500">No skills available</p>
              )}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Languages
              </h3>
              {languages.length > 0 ? (
                languages.map((lang, index) => (
                  <p key={index} className="mt-2 text-gray-600">
                    {lang.language}: {lang.proficiency}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-500">No languages available</p>
              )}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Certifications
              </h3>
              {certifications.length > 0 ? (
                certifications.map((cert, index) => (
                  <p key={index} className="mt-2 text-gray-600">
                    {cert.course} - {cert.institution} ({cert.year})
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-500">No certifications available</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadPDF}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default Classic;
