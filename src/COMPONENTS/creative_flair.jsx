import React from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

import { useLocation } from "react-router-dom";
const Creative = () => {
  const location = useLocation();
  const resumeData = location.state?.resumeData || {};
  console.log(resumeData);
  // const downloadPDF = () => {
  //   const doc = new jsPDF("portrait", "pt", "a4"); // A4 size in points
  //   const resume = document.getElementById("resume");
  //   doc.setFont("helvetica", "bold");
  //   // doc.text("Bold Heading", 10, 10);
  
  //   // Get the A4 dimensions in points
  //   const pageWidth = doc.internal.pageSize.getWidth();
  //   const pageHeight = doc.internal.pageSize.getHeight();
  
  //   // Scale the resume content to fit within the page dimensions
  //   doc.html(resume, {
  //     callback: function (doc) {
  //       doc.save(`${resumeData.name}_Resume.pdf`);
  //     },
  //     x: 20, // Add margins
  //     y: 20,
  //     width: pageWidth - 40, // Adjust width to fit the content
  //     windowWidth: resume.offsetWidth, // Ensure the original width is respected
  //   });
  // };
  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    const resume = document.getElementById("resume");
  
    // Use a higher scale to increase the image resolution
    const scale = 2; // Increase scale factor for better quality
  
    html2canvas(resume, { scale: scale }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
  
      // Adjust image to fit the PDF page with a zoom-out effect
      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const imgX = (pageWidth - imgWidth * ratio) / 2;
      const imgY = 10; // Top margin
  
      doc.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      doc.save(`${resumeData.name || "Resume"}.pdf`);
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
  <p><img src="email.png" alt="Email" className="inline-block mr-2 w-5 h-5" />Email: {email}</p>
  <p><img src="phone-receiver-silhouette.png" alt="" className="inline-block mr-2 w-5 h-5" />Phone: {phone}</p>
  <p><img src="location.png" alt="Location" className="inline-block mr-2 w-5 h-5" />Location: {city}, {country}</p>
  {instagram && (
    <p>
      <img src="instagram.png" alt="Instagram" className="inline-block mr-2 w-5 h-5" />Instagram: <a href={instagram} className="text-blue-500">{instagram}</a>
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
