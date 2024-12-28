import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Modern = ({ resumeData }) => {
  const resumeRef = useRef(null); // Reference to the resume content

  const downloadPDF = async () => {
    const element = resumeRef.current; // Get the referenced element
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
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
            <p>{resumeData.email}</p>
            <p>{resumeData.phone}</p>
            <p>{resumeData.location}</p>
            <a
              href={resumeData.linkedin}
              className="text-blue-600 hover:underline"
            >
              {resumeData.linkedin}
            </a>
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
              <p className="italic text-sm">{job.company} | {job.location}</p>
              <p className="text-sm">{job.startDate} – {job.endDate}</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                {job.responsibilities.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
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
            {resumeData.expertise.map((skill, index) => (
              <p key={index}>● {skill}</p>
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
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mt-8 mb-10">
          <h2 className="text-lg font-semibold border-b pb-2">Education</h2>
          <p className="mt-4">
            <strong>{resumeData.education.degree}</strong> <br />
            <span className="text-gray-700">{resumeData.education.institution} | {resumeData.education.year}</span>
          </p>
        </section>
      </div>

      {/* Download Button */}
      <div className="text-center mt-6">
        <button
          onClick={downloadPDF}
          className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 mb-7"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Modern;
