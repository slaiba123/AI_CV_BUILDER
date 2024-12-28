import React from "react";
import jsPDF from "jspdf";

const Bold = () => {
  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    const resume = document.getElementById("resume");

    // Remove the border and margin styles before saving the PDF
    resume.style.border = "none";  // Remove border
    resume.style.margin = "0";  // Remove any margin
    resume.style.padding = "0";  // Remove padding

    doc.html(resume, {
      callback: function (doc) {
        doc.save("Sandra_Barnes_Resume.pdf");
      },
      x: 0, // No padding on the left
      y: 0, // No padding on the top
    });
  };

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
            <h1 className="text-2xl font-bold text-white uppercase">
              Sandra Barnes
            </h1>
            <h2 className="text-sm text-gray-200 mt-2">Graphic Designer</h2>
          </div>
          <div className="bg-gray-200 p-6">
            <div className="mt-8">
              <h3 className="text-md font-semibold text-gray-700">About Me</h3>
              <p className="text-sm text-gray-600 mt-2">
                Show your passion. Don’t be afraid to get personal, especially
                in your bio. After all, they’ve expressed an interest in you as
                a person.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-md font-semibold text-gray-700">Contact</h3>
              <p className="text-sm text-gray-600 mt-2">Phone: 555-555-5555</p>
              <p className="text-sm text-gray-600">Email: email@myemail.com</p>
            </div>
            <div className="mt-8">
              <h3 className="text-md font-semibold text-gray-700">References</h3>
              <p className="text-sm text-gray-600 mt-2">
                Ryan Hauser: 555-555-5555
              </p>
              <p className="text-sm text-gray-600">
                Doris Flemming: 555-555-5555
              </p>
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
              <h4 className="font-semibold text-gray-700">Position</h4>
              <p className="text-sm text-gray-500">2016 - Present</p>
              <p className="text-sm text-gray-600 mt-2">
                Place of Employment <br />
                A job description is a document that describes the general tasks
                and responsibilities of a position. It may specify the
                functionary to whom the position reports.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Position</h4>
              <p className="text-sm text-gray-500">2014 - 2016</p>
              <p className="text-sm text-gray-600 mt-2">
                Place of Employment <br />
                A job description is a document that describes the general tasks
                and responsibilities of a position. It may specify the
                functionary to whom the position reports.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 uppercase border-b border-gray-300 pb-2">
              Education
            </h3>
            <div className="mt-4">
              <p className="font-semibold text-gray-700">Master of Design</p>
              <p className="text-sm text-gray-500">2013 - 2016</p>
              <p className="text-sm text-gray-600">
                OCAD University, Toronto ON
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 uppercase border-b border-gray-300 pb-2">
              Skills
            </h3>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p>Photoshop</p>
                <div className="bg-gray-300 w-2/3 h-2 rounded-full">
                  <div className="bg-black w-5/6 h-full rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                <p>Illustrator</p>
                <div className="bg-gray-300 w-2/3 h-2 rounded-full">
                  <div className="bg-black w-4/5 h-full rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                <p>Creativity</p>
                <div className="bg-gray-300 w-2/3 h-2 rounded-full">
                  <div className="bg-black w-3/4 h-full rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                <p>Leadership</p>
                <div className="bg-gray-300 w-2/3 h-2 rounded-full">
                  <div className="bg-black w-3/5 h-full rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                <p>Management</p>
                <div className="bg-gray-300 w-2/3 h-2 rounded-full">
                  <div className="bg-black w-full h-full rounded-full"></div>
                </div>
              </div>
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

export default Bold;
