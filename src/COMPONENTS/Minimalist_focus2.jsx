// import React, { useRef } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const Minamilist_focus = () => {
//   const resumeRef = useRef(); // Reference to the resume container

//   const handleDownloadPDF = async () => {
//     const element = resumeRef.current;
//     const canvas = await html2canvas(element, { scale: 2 });
//     const imageData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("Resume.pdf");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-md text-gray-800 mt-6 mb-10">
//       {/* Download Button */}
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={handleDownloadPDF}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Download PDF
//         </button>
//       </div>

//       {/* Resume Content */}
//       <div ref={resumeRef} className="bg-white p-4 rounded">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold">John Doe</h1>
//           <p className="text-sm">
//             123 Main Street, City, Country — Phone: +123-456-7890 — Email:
//             john.doe@example.com
//           </p>
//         </div>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1 mb-3">
//             Professional Summary
//           </h2>
//           <p>
//             Motivated software engineer with over 3 years of experience in
//             developing efficient web applications. Proven ability to lead
//             projects from inception to completion, with strong expertise in
//             JavaScript, Python, and full-stack development. Seeking to leverage
//             skills in a dynamic team environment.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1 mb-3">
//             Professional Experience
//           </h2>
//           <div className="mb-4">
//             <h3 className="font-bold">Software Engineer, XYZ Company</h3>
//             <p className="text-sm italic">June 2021 - Present</p>
//             <ul className="list-disc ml-5">
//               <li>
//                 Built and optimized web applications using JavaScript, React,
//                 and Python.
//               </li>
//               <li>
//                 Increased system performance by 20% through code refactoring
//                 and database optimizations.
//               </li>
//               <li>
//                 Led a team of 5 engineers to deliver a client-facing dashboard
//                 within deadlines.
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold">Junior Developer, ABC Tech</h3>
//             <p className="text-sm italic">May 2019 - May 2021</p>
//             <ul className="list-disc ml-5">
//               <li>
//                 Assisted in the development of automation tools to streamline
//                 internal processes.
//               </li>
//               <li>
//                 Collaborated with senior developers to troubleshoot and fix
//                 bugs.
//               </li>
//             </ul>
//           </div>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1 mb-3">
//             Education
//           </h2>
//           <p>
//             <strong>Bachelor of Science in Computer Science</strong>
//             <br />
//             University of XYZ <br />
//             Graduated with Honors, GPA: 3.8/4.0{" "}
//             <span className="italic">(Sept 2015 - May 2019)</span>
//           </p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1 mb-3">Skills</h2>
//           <ul className="list-disc ml-5">
//             <li>Programming Languages: Python, JavaScript, C++</li>
//             <li>Web Development: HTML, CSS, React, Node.js</li>
//             <li>Databases: MySQL, PostgreSQL</li>
//             <li>Version Control: Git, GitHub</li>
//             <li>Agile Methodologies, Test-Driven Development</li>
//           </ul>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1 mb-3">
//             Certifications
//           </h2>
//           <ul className="list-disc ml-5">
//             <li>Certified JavaScript Developer (2021)</li>
//             <li>AWS Certified Solutions Architect (2020)</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-xl font-semibold border-b pb-1 mb-3">Projects</h2>
//           <div className="mb-4">
//             <strong>Task Management Web App</strong> (2023)
//             <p>
//               Built a full-stack web application to manage and prioritize tasks.
//               Implemented features like user authentication, task
//               categorization, and local storage for persistence using React and
//               Node.js.
//             </p>
//           </div>
//           <div>
//             <strong>Resume Analyzer Tool</strong> (2023)
//             <p>
//               Developed an AI-based resume analyzer to automate resume
//               evaluations, featuring keyword matching, scoring, and feedback
//               generation using Python and machine learning algorithms.
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Minamilist_focus;


// import React, { useRef } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const Minamilist_focus = ({ resumeData }) => {
//   const resumeRef = useRef();

//   const handleDownloadPDF = async () => {
//     const element = resumeRef.current;
//     const canvas = await html2canvas(element, { scale: 2 });
//     const imageData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("Resume.pdf");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-md text-gray-800 mt-6 mb-10">
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={handleDownloadPDF}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Download PDF
//         </button>
//       </div>

//       <div ref={resumeRef} className="bg-white p-4 rounded">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold">{resumeData.name}</h1>
//           <p className="text-sm">
//             {resumeData.phone} — {resumeData.email}
//           </p>
//         </div>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1 mb-3">
//             Professional Summary
//           </h2>
//           <p>{resumeData.summary}</p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1 mb-3">
//             Professional Experience
//           </h2>
//           <p>{resumeData.experience}</p>
//         </section>

//         {/* Add other sections like Education, Skills, etc., using resumeData */}
//       </div>
//     </div>
//   );
// };

// export default Minamilist_focus;

import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";

const Minamilist_focus = () => {
  const location = useLocation();

  // Default resume data if none is provided via location.state
  const defaultResumeData = {
    name: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    summary: "An experienced professional with a proven track record...",
    experience: [
      { company: "TechCorp", role: "Software Engineer", startDate: "2020", endDate: "2022" },
    ],
    education: [
      { degree: "Bachelor of Science in Computer Science", institution: "University of Technology", year: "2020" },
    ],
    skills: [
      { skill: "JavaScript" },
      { skill: "React" },
      { skill: "Node.js" },
    ],
    certifications: [
      { course: "Certified Scrum Master", institution: "NEDUET", year: "2020" },
      { course: "AWS Certified Solutions Architect", institution: "Amazon", year: "2019" },
    ],
    projects: [
      { title: "E-commerce Website", description: "Built a scalable e-commerce platform." },
      { title: "Portfolio Website", description: "Developed a personal portfolio website." },
    ],
  };

  // Use resumeData from location.state or fallback to default data
  const resumeData = location.state?.resumeData || defaultResumeData;
  console.log(resumeData);
  const resumeRef = useRef();

  // Function to handle PDF download
  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Resume.pdf");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md text-gray-800 mt-6 mb-10">
      {/* Download Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div ref={resumeRef} className="bg-white p-4 rounded">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">{resumeData.name}</h1>
          <p className="text-sm">
            {resumeData.phone} — {resumeData.email}
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Professional Summary</h2>
          <p>{resumeData.summary}</p>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Professional Experience</h2>
          <ul className="list-disc ml-5">
            {resumeData.experience.map((item, index) => (
              <li key={index}>
                <strong>{item.role}</strong> at <em>{item.company}</em> ({item.startDate} - {item.endDate})
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Education</h2>
          <ul className="list-disc ml-5">
            {resumeData.education.map((edu, index) => (
              <li key={index}>
                {edu.degree} - {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Skills</h2>
          <ul className="list-disc ml-5">
            {resumeData.skills.map((skillObj, index) => (
              <li key={index}>{skillObj.skill}</li>
            ))}
          </ul>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Certifications</h2>
          <ul className="list-disc ml-5">
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>
                {cert.course} - {cert.institution} ({cert.year})
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Projects</h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <strong>{project.projectName}</strong>
              <p>{project.projectDesc}</p>
              <p>{project.projectYear}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Minamilist_focus;
