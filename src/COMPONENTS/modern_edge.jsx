import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
const Modern = () => {
  const location = useLocation();
  const resumeData = location.state?.resumeData || {};
  console.log(resumeData);
  const resumeRef = useRef(null); // Reference to the resume content
  
  // const downloadPDF = async () => {
  //   const element = resumeRef.current; // Get the referenced element
  //   const canvas = await html2canvas(element);
  //   const imgData = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF("p", "mm", "a4");
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("resume.pdf");
  // };
  const downloadPDF = async () => {
    const element = resumeRef.current; // Get the referenced element
  
    // Apply scale transform to the element
    element.style.transform = "scale(2)"; // Scale by 2x
    element.style.transformOrigin = "top left"; // Ensure scaling from the top-left corner
    element.style.width = `${element.offsetWidth * 2}px`; // Adjust width for scaling
  
    // Render the scaled element into a canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Improves canvas resolution
    });
  
    // Reset element styles after rendering
    element.style.transform = "scale(1)";
    element.style.width = "";
  
    // Convert canvas to image
    const imgData = canvas.toDataURL("image/png");
  
    // Create PDF and calculate dimensions
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
    // Add image to PDF and save
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };
  
  return (
    <div className="mb-5">
      {/* Resume Content */}
      <div ref={resumeRef} className="max-w-4xl mx-auto bg-white mt-5 p-10 pl-14 pr-14 shadow-lg">
        {/* Header */}
        <header className="flex flex-col items-center text-center border-b pb-6">
          <h1 className="text-2xl font-bold">{resumeData.name}</h1>
          <p className="text-lg italic">{resumeData.jobTitle}</p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-2 space-y-2 md:space-y-0 md:space-x-6">
          <div class="space-y-2">
              <a href={`mailto:${resumeData.email}`} class="hover:text-blue-500 hover:underline">{resumeData.email}</a>
              <p>{resumeData.phone}</p>
              <p>{resumeData.location}</p>
              <a
              href={resumeData.linkedin}
              className="hover:text-blue-600 hover:underline"
              >
                {resumeData.linkedin}
              </a>
</div>


           
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="mt-2 text-gray-700">
            {resumeData.summary}
          </p>
        </section>

        {/* Work Experience */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-2">Work Experience</h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-bold">{job.role}</h3>
              <p className="italic text-sm">{job.company} | {job.Location}</p>
              <p className="text-sm">{job.startDate} – {job.endDate}</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li key={job.id}>{job.description}</li>
               
              </ul>
            </div>
          ))}
        </section>

        {/* Areas of Expertise */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-2">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-gray-700">
            {resumeData.experties.map((exp, index) => (
              <p key={exp.id}>● {exp.experties}</p>
            ))}
          </div>
        </section>

        {/* Training and Certifications */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-2">
            Training and Certifications
          </h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700">
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>{cert.course} ({cert.year})</li>
              
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mt-8 mb-10">
          <h2 className="text-lg font-semibold border-b pb-2">Education</h2>
          {resumeData.education.map((edu, index) => (
            <p className="mt-4">
            <strong>{edu.degree}</strong> <br />
            <span className="text-gray-700">{edu.institution} | {edu.year}</span>
          </p>
          ))}
        </section>
      </div>

      {/* Download Button */}
      <div className="text-center mt-6">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-500 mb-7"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Modern;
