
// import React from "react";
// import jsPDF from "jspdf";

// const Creative = () => {
//   const downloadPDF = () => {
//     const doc = new jsPDF("portrait", "pt", "a4");
//     const resume = document.getElementById("resume");
//     doc.html(resume, {
//       callback: function (doc) {
//         doc.save("Maria_Rojos_Resume.pdf");
//       },
//       x: 20,
//       y: 20,
//     });
//   };

//   return (
//     <div className="bg-gray-100 mb-5" >
//     <div className="bg-gray-100 min-h-screen py-10 px-4 flex justify-center">
//       <div
//         id="resume"
//         className="bg-white p-14 pr-16 pl-16 w-[900px] shadow-lg rounded-lg border border-gray-300"
//       >
//         {/* Header Section */}
//         <div className="flex justify-between gap-2 items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">Maria Rojos</h1>
//             <h2 className="text-lg text-blue-600">Professional Graphic Designer</h2>
//             <p className="mt-2 text-gray-600">
//               Dynamic and innovative professional with 6+ years of invaluable
//               hands-on experience in handling several simultaneous creative
//               design projects, concept creation, graphic design, animation, and
//               visual conceptualization.
//             </p>
//           </div>
//           <div className="text-sm text-gray-600 space-y-1">
//             <p>Email: maria@novoresume.com</p>
//             <p>Phone: (123) 600 2019</p>
//             <p>Location: Toronto, Canada</p>
//             <p>Website: maria-rojos.com</p>
//             <p>Instagram: instagram.com/maria_rojos</p>
//           </div>
//         </div>

//         {/* Work Experience */}
//         <div className="mt-8">
//           <h3 className="text-lg font-semibold text-gray-800">Work Experience</h3>
//           <div className="mt-4">
//             <h4 className="font-semibold text-gray-800">
//               Professional Graphic Designer
//             </h4>
//             <p className="text-sm text-gray-500">
//               Freelance - Orange Media (08/2018 - Present)
//             </p>
//             <ul className="list-disc list-inside text-gray-600 mt-2">
//               <li>Established and managed a freelance graphic design business.</li>
//               <li>Spearheaded visual identity including brand positioning and promotions.</li>
//               <li>
//                 Developed creative advertising for various media (posters, t-shirts, etc.).
//               </li>
//             </ul>
//           </div>
//           <div className="mt-4">
//             <h4 className="font-semibold text-gray-800">Graphic Designer</h4>
//             <p className="text-sm text-gray-500">
//               Blue Lens Media Corp (05/2013 - 02/2015)
//             </p>
//             <ul className="list-disc list-inside text-gray-600 mt-2">
//               <li>Utilized After Effects for motion graphic animations.</li>
//               <li>Performed video and sound editing for diverse media ads.</li>
//               <li>Coordinated with clients to create prolific social media graphics.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Areas of Expertise */}
//         <div className="mt-8">
//           <h3 className="text-lg font-semibold text-gray-800">Areas of Expertise</h3>
//           <ul className="grid grid-cols-2 gap-2 list-disc list-inside text-gray-600 mt-2">
//             <li>Visual Design & Storytelling</li>
//             <li>Media Production</li>
//             <li>Advanced Graphic Design</li>
//             <li>Dynamic Visual Design</li>
//           </ul>
//         </div>

//         {/* Technical Skills */}
//         <div className="mt-8">
//           <h3 className="text-lg font-semibold text-gray-800">Technical Skills</h3>
//           <ul className="list-disc list-inside text-gray-600 mt-2">
//             <li>Adobe Suite: Photoshop, Illustrator, After Effects, InDesign</li>
//             <li>Coding: HTML, Java, CSS</li>
//           </ul>
//         </div>

//         {/* Education */}
//         <div className="mt-8">
//           <h3 className="text-lg font-semibold text-gray-800">Education</h3>
//           <p className="text-gray-600">
//             Bachelor of Fine Arts in Visual Arts, University of Toronto (2011 - 2014)
//           </p>
//         </div>

//         {/* Personal Projects */}
//         <div className="mt-8">
//           <h3 className="text-lg font-semibold text-gray-800">Personal Projects</h3>
//           <div className="mt-4">
//             <p className="text-gray-800 font-semibold">
//               Content Producer - Personal YouTube Channel (09/2018 - Present)
//             </p>
//             <p className="text-gray-600">
//               Developed and edited content for my YouTube channel, reaching
//               10,000 subscribers in the first year.
//             </p>
//           </div>
//           <div className="mt-4">
//             <p className="text-gray-800 font-semibold">
//               Graphic Artist @ 2017 Cancer Awareness Campaign
//             </p>
//             <p className="text-gray-600">
//               Led creative processes for infographic design for the Ontario
//               Cancer Awareness Foundation.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//     <div className="mt-4 text-center">
//     <button
//       onClick={downloadPDF}
//       className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700" >
//       Download as PDF
//     </button>
//   </div>
//   </div>
    
//   );
// };

// export default Creative;
import React from "react";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
const Creative = () => {
  const location = useLocation();
  const resumeData = location.state?.resumeData || {};
  console.log(resumeData);
  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    const resume = document.getElementById("resume");
    doc.html(resume, {
      callback: function (doc) {
        doc.save(`${resumeData.name}_Resume.pdf`);
      },
      x: 20,
      y: 20,
    });
  };

  if (!resumeData) {
    return <p>No resume data provided!</p>;
  }

  const {
    name,
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    instagram,
    country,
    city,
    summary,
    education = [],
    skills = [],
    projects = [],
    experience = [],
  } = resumeData;

  return (
    <div className="bg-gray-100 mb-5">
      <div className="bg-gray-100 min-h-screen py-10 px-4 flex justify-center">
        <div
          id="resume"
          className="bg-white p-14 pr-16 pl-16 w-[900px] shadow-lg rounded-lg border border-gray-300"
        >
          {/* Header Section */}
          <div className="flex justify-between gap-2 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {name || `${firstName} ${lastName}`}
              </h1>
              <h2 className="text-lg text-blue-600">{jobTitle}</h2>
              {summary && <p className="mt-2 text-gray-600">{summary}</p>}
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Location: {city}, {country}</p>
              {instagram && (
                <p>
                  Instagram: <a href={instagram} className="text-blue-500">{instagram}</a>
                </p>
              )}
            </div>
          </div>

          {/* Work Experience */}
          {experience.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">Work Experience</h3>
              {experience.map((exp, index) => (
                <div key={index} className="mt-4">
                  <h4 className="font-semibold text-gray-800">{exp.role}</h4>
                  <p className="text-sm text-gray-500">
                    {exp.company} ({exp.startDate} - {exp.endDate})
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    
                      <li key={exp.id}>{exp.description}</li>
                    
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Areas of Expertise */}
          {skills.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
              <ul className="grid grid-cols-2 gap-2 list-disc list-inside text-gray-600 mt-2">
                {skills.map((skill, index) => (
                  <li key={index}>{skill.skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">Education</h3>
              {education.map((edu, index) => (
                <div key={index}>
                  <p className="text-gray-600">
                    {edu.degree}, {edu.institution} ({edu.year})
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Personal Projects */}
          {projects.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">Personal Projects</h3>
              {projects.map((project, index) => (
                <div key={index} className="mt-4">
                  <p className="text-gray-800 font-semibold">{project.projectName}</p>
                  <p className="text-gray-600">{project.projectDesc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-4 text-center">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Creative;
