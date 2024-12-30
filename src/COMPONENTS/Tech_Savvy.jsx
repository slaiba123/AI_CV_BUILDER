// import React, { useRef } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";

// const Tech = () => {
//   const resumeRef = useRef(null);

//   const downloadPDF = async () => {
//     const element = resumeRef.current;

//     // Adjust html2canvas options for better rendering
//     const canvas = await html2canvas(element, {
//       scrollX: 0,
//       scrollY: 0,
//       x: 0,
//       y: 0,
//       width: element.scrollWidth,
//       height: element.scrollHeight,
//       useCORS: true, // Ensure CORS is handled for any external resources
//     });

//     // Debugging: Check if everything is captured correctly
//     document.body.appendChild(canvas); // Append canvas to the body for debugging

//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");

//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     // Add the image to the PDF
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("resume.pdf");
//   };

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">
//       <div
//         ref={resumeRef}
//         className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10 pr-14 pl-14"
//       >
//         {/* Header */}
//         <header className="text-center border-b pb-6">
//           <h1 className="text-3xl font-bold">Jane Tech</h1>
//           <p className="text-lg italic">Full-Stack Developer</p>
//           <div className="flex flex-col md:flex-row justify-center mt-2 space-y-2 md:space-y-0 md:space-x-6">
//             <p>janedoe@example.com</p>
//             <p>+123-456-7890</p>
//             <a
//               href="https://www.linkedin.com/in/janetech"
//               className="text-blue-600 hover:underline"
//             >
//               linkedin.com/in/janetech
//             </a>
//           </div>
//         </header>

//         {/* Professional Summary */}
//         <section className="mt-8">
//           <h2 className="text-xl font-semibold border-b pb-2">
//             Professional Summary
//           </h2>
//           <p className="mt-4 text-gray-700">
//             Innovative full-stack developer with 5+ years of experience in
//             creating cutting-edge web applications. Skilled in JavaScript,
//             Python, and cloud infrastructure. Adept at designing and
//             implementing user-centric digital products using modern development
//             frameworks and tools. Passionate about continuous learning and
//             technology trends.
//           </p>
//         </section>

//         {/* Technical Skills */}
//         <section className="mt-8">
//           <h2 className="text-xl font-semibold border-b pb-2">
//             Technical Skills
//           </h2>
//           <div className="mt-4 grid grid-cols-2 gap-6">
//             <div>
//               <h3 className="font-semibold">Languages</h3>
//               <ul className="mt-2 space-y-4">
//                 <li>
//                   <p>Python</p>
//                   <div className="w-full bg-gray-200 h-2 rounded skill-bar">
//                     <div
//                       className="bg-blue-600 h-2 rounded"
//                       style={{ width: "80%" }}
//                     ></div>
//                   </div>
//                 </li>
//                 <li>
//                   <p>JavaScript</p>
//                   <div className="w-full bg-gray-200 h-2 rounded skill-bar">
//                     <div
//                       className="bg-blue-600 h-2 rounded"
//                       style={{ width: "75%" }}
//                     ></div>
//                   </div>
//                 </li>
//                 <li>
//                   <p>C++</p>
//                   <div className="w-full bg-gray-200 h-2 rounded skill-bar">
//                     <div
//                       className="bg-blue-600 h-2 rounded"
//                       style={{ width: "65%" }}
//                     ></div>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold">Tools and Frameworks</h3>
//               <ul className="mt-2 space-y-4">
//                 <li>
//                   <p>React</p>
//                   <div className="w-full bg-gray-200 h-2 rounded skill-bar">
//                     <div
//                       className="bg-blue-600 h-2 rounded"
//                       style={{ width: "70%" }}
//                     ></div>
//                   </div>
//                 </li>
//                 <li>
//                   <p>Node.js</p>
//                   <div className="w-full bg-gray-200 h-2 rounded skill-bar">
//                     <div
//                       className="bg-blue-600 h-2 rounded"
//                       style={{ width: "60%" }}
//                     ></div>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Work Experience */}
//         <section className="mt-8">
//           <h2 className="text-xl font-semibold border-b pb-2">
//             Work Experience
//           </h2>
//           <div className="mt-4">
//             <h3 className="font-semibold">Senior Developer, Tech Corp</h3>
//             <p className="text-gray-600 text-sm">Jan 2020 - Present</p>
//             <ul className="mt-2 text-gray-700 list-disc list-inside">
//               <li>
//                 Developed and maintained scalable web applications using React
//                 and Node.js.
//               </li>
//               <li>
//                 Implemented cloud solutions for data storage and processing.
//               </li>
//               <li>Mentored junior developers to improve code quality.</li>
//             </ul>
//           </div>
//         </section>

//         {/* Education */}
//         <section className="mt-8">
//           <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
//           <div className="mt-4">
//             <h3 className="font-semibold">Bachelor of Computer Science</h3>
//             <p className="text-gray-600 text-sm">XYZ University, 2015-2019</p>
//           </div>
//         </section>

//         {/* Projects */}
//         <section className="mt-8">
//           <h2 className="text-xl font-semibold border-b pb-2">Projects</h2>
//           <div className="mt-4">
//             <h3 className="font-semibold">Project Management Tool</h3>
//             <p className="text-gray-600 text-sm">May 2023 - Present</p>
//             <ul className="mt-2 text-gray-700 list-disc list-inside">
//               <li>
//                 Built a full-stack web application using React, Node.js, and
//                 MongoDB to manage tasks and track project progress.
//               </li>
//               <li>
//                 Implemented user authentication, real-time notifications, and
//                 collaboration features.
//               </li>
//             </ul>
//           </div>
//           <div className="mt-4">
//             <h3 className="font-semibold">E-Commerce Website</h3>
//             <p className="text-gray-600 text-sm">Jan 2022 - Dec 2022</p>
//             <ul className="mt-2 text-gray-700 list-disc list-inside">
//               <li>
//                 Developed a fully functional e-commerce website with a React
//                 frontend and Node.js backend.
//               </li>
//               <li>
//                 Integrated Stripe for payment processing and implemented a
//                 product recommendation system.
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Certifications */}
//         <section className="mt-8">
//           <h2 className="text-xl font-semibold border-b pb-2">Certifications</h2>
//           <div className="mt-4">
//             <h3 className="font-semibold">Certified Full-Stack Developer</h3>
//             <p className="text-gray-600 text-sm">Udemy, 2021</p>
//           </div>
//           <div className="mt-4">
//             <h3 className="font-semibold">AWS Certified Solutions Architect</h3>
//             <p className="text-gray-600 text-sm">Amazon Web Services, 2022</p>
//           </div>
//         </section>
//       </div>

//       {/* Download Button */}
//       <div className="text-center mt-10 mb-10">
//         <button
//           onClick={downloadPDF}
//           className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
//         >
//           Download as PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Tech;

import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import { useLocation } from "react-router-dom";
const Tech = () => {
  const resumeRef = useRef(null);
  const location = useLocation();
  const resumeData = location.state?.resumeData || {};
  console.log(resumeData);
  const downloadPDF = async () => {
    const element = resumeRef.current;

    const canvas = await html2canvas(element, {
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
      width: element.scrollWidth,
      height: element.scrollHeight,
      useCORS: true,
      scale:2,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };
  
  
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10"
      >
        {/* Header */}
        <header className="text-center border-b pb-6">
          <h1 className="text-3xl font-bold">{resumeData.name}</h1>
          <p className="text-lg italic">{resumeData.title}</p>
          <div className="flex flex-col md:flex-row justify-center mt-2 space-y-2 md:space-y-0 md:space-x-6">
            <p>{resumeData.email}</p>
            <p>{resumeData.phone}</p>
            <a
              href={resumeData.linkedin}
              className="text-blue-600 hover:underline"
            >
              {resumeData.linkedin}
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        {resumeData.summary && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold border-b pb-2">
              Professional Summary
            </h2>
            <p className="mt-4 text-gray-700">{resumeData.summary}</p>
          </section>
        )}

        {/* Technical Skills */}
        {resumeData.skills && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold border-b pb-2">
              Technical Skills
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-6">
              {resumeData.skills.map((skill, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{skill.category}</h3>
                  <ul className="mt-2 space-y-4">
                      <li key={skill.id}>
                        <p className="mb-4">{skill.skill}</p>
                        <div className="w-full bg-gray-200 h-2 rounded skill-bar">
                        <div
                          className="bg-blue-600 h-2 rounded"
                          style={{
                            width:
                              skill.level === "Beginner"
                                ? "25%"
                                : skill.level === "Intermediate"
                                ? "50%"
                                : skill.level === "Advanced"
                                ? "100%"
                                : "0%", // fallback in case skill.level is undefined
                          }}
                        ></div>
                      </div>

                      </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Work Experience */}
        {resumeData.experience && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold border-b pb-2">
              Work Experience
            </h2>
            {resumeData.experience.map((job, index) => (
              <div key={index} className="mt-4">
                <h3 className="font-semibold">{job.role}</h3>
                <p className="text-gray-600 text-sm">
                  {job.company} - {job.startDate}-{job.endDate}
                </p>
                <ul className="mt-2 text-gray-700 list-disc list-inside">
                    <li key={job.id}>{job.description}</li>
                  
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {resumeData.education && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mt-4">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">
                  {edu.institution}, {edu.dates}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {resumeData.projects && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold border-b pb-2">Projects</h2>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="mt-4">
                <h3 className="font-semibold">{project.projectName}</h3>
                <p className="text-gray-600 text-sm">{project.projectYear}</p>
                <ul className="mt-2 text-gray-700 list-disc list-inside">
                    <li key={project.id}>{project.projectDesc}</li>
                
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {resumeData.certifications && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold border-b pb-2">
              Certifications
            </h2>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="mt-4">
                <h3 className="font-semibold">{cert.course}</h3>
                <p className="text-gray-600 text-sm">{cert.institution}</p>
                <p className="text-gray-600 text-sm">{cert.year}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Download Button */}
      <div className="text-center mt-10 mb-10">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Tech;
