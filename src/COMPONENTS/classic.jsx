import React from "react";
import jsPDF from "jspdf";

const BusinessResume = () => {
  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    const resume = document.getElementById("resume");
    doc.html(resume, {
      callback: function (doc) {
        doc.save("Sebastian_Hurst_Resume.pdf");
      },
      x: 20,
      y: 20,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center">
      {/* Resume */}
      <div
        className="bg-white p-14 pl-20 pr-20 max-w-4xl w-full shadow-lg rounded-lg border border-gray-300"
        id="resume"
      >
        {/* Header */}
        <div className="text-center border-b border-gray-300 pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Sebastian Hurst</h1>
          <h2 className="text-lg text-blue-600">Business Data Analyst</h2>
          <div className="flex justify-center items-center gap-4 mt-2 text-sm text-gray-600">
            <p>📞 +1-709-375-8132</p>
            <p>✉️ name@gmail.com</p>
            <p>🔗 linkedin.com/in/sebastianhurst</p>
          </div>
          <p className="text-gray-600">Raleigh-Durham, NC</p>
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
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">
                  Advanced Services Data Analyst Intern
                </h4>
                <p className="text-sm text-gray-500">Harvey, Raleigh-Durham, NC | 2018 - Present</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Saved $50,000 in gas storage costs.</li>
                  <li>Created forecast models for election surveys using Azure ML.</li>
                  <li>Increased 25% time deposit balance in campaigns.</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">Junior Data Analyst</h4>
                <p className="text-sm text-gray-500">Reilly Group, Raleigh-Durham, NC | 2015 - 2018</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Worked with Excel to map accounts for over 1000 clients.</li>
                  <li>Saved $1M in paper print yearly.</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">
                  Backend Developer / Data Analyst
                </h4>
                <p className="text-sm text-gray-500">Koepp Inc, Raleigh-Durham, NC | 2013 - 2015</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Maintained 95% quality level for a year.</li>
                  <li>Directed a team of 8 interns.</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">Data Analyst Intern</h4>
                <p className="text-sm text-gray-500">Drouin S.A.R.L., Raleigh-Durham, NC | 2011 - 2013</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Implemented Scrum Methodology, boosting productivity by 10%.</li>
                  <li>Assisted in audits using 100% sampling.</li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Education
              </h3>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">
                  BBA, International Business & Logistics
                </p>
                <p className="text-sm text-gray-500">
                  Metropolia University of Applied Sciences, 2007 - Present
                </p>
                <p className="mt-2 text-gray-600">
                  Master - Économie des Entreprises et des Marchés <br />
                  Paris 1 - Panthéon Sorbonne, 2003 - 2007 <br />
                  GPA 4.75 / 5.00
                </p>
              </div>
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
                <li>✔️ Stakeholder Engagement</li>
                <li>✔️ Strategic Focus</li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Achievements
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>🏆 Rescued $1.5M in project funds</li>
                <li>🚀 Launched Data Governance</li>
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Skills
              </h3>
              <p className="mt-2 text-gray-600">
                Data Reporting/Analysis <br />
                Spotfire, Tableau, Informatica, R, Cognos, SSRS <br />
                Project Management <br />
                JIRA, HP ALM, Sharepoint
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Languages
              </h3>
              <p className="text-gray-600">
                English: Native <br />
                French: Proficient
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2">
                Certifications
              </h3>
              <p className="text-gray-600">
                Certificate IV - Microcomputer Technology (2001)
              </p>
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

export default BusinessResume;


