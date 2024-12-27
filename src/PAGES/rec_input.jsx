// import React, { useState } from "react";

// function Rec_input() {
//   const [companyName, setCompanyName] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [uploadedResumes, setUploadedResumes] = useState([]);
//   const [aiReport, setAiReport] = useState(null);

//   const handleResumeUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedResumes((prev) => [...prev, ...files]);
//   };

//   const handleShortlist = () => {
//     // Mock AI report generation logic
//     const shortlisted = uploadedResumes.slice(0, Math.ceil(uploadedResumes.length / 2));
//     const report = {
//       total: uploadedResumes.length,
//       accepted: shortlisted.length,
//       rejected: uploadedResumes.length - shortlisted.length,
//     };
//     setAiReport(report);
//   };

//   return (
//     <div className="min-h-screen bg-[#7fb3d5]  p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-2xl font-bold text-center mb-6">Recruiter Job Page</h1>
        
//         {/* Company Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Company Name</label>
//           <input
//             type="text"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your company name"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//           />
//         </div>
        
//         {/* Job Description */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Job Description</label>
//           <textarea
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter the job description"
//             rows="5"
//             value={jobDescription}
//             onChange={(e) => setJobDescription(e.target.value)}
//           ></textarea>
//         </div>

//         {/* Resume Upload */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">Upload Resumes</label>
//           <input
//             type="file"
//             multiple
//             className="w-full"
//             onChange={handleResumeUpload}
//           />
//           <div className="mt-2 text-sm text-gray-500">
//             {uploadedResumes.length} resumes uploaded
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex justify-between">
//           <button
//             onClick={handleShortlist}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             Process Resumes
//           </button>
//         </div>

//         {/* AI Report */}
//         {aiReport && (
//           <div className="mt-8 bg-gray-50 border rounded-lg p-4">
//             <h2 className="text-xl font-bold mb-4">AI Report</h2>
//             <p className="text-gray-700">Total Resumes: {aiReport.total}</p>
//             <p className="text-gray-700">Accepted Resumes: {aiReport.accepted}</p>
//             <p className="text-gray-700">Rejected Resumes: {aiReport.rejected}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Rec_input;
import React, { useState } from "react";

function Rec_input() {
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [uploadedResumes, setUploadedResumes] = useState([]);
  const [aiReport, setAiReport] = useState(null);

  const handleResumeUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedResumes((prev) => [...prev, ...files]);
  };

  const handleShortlist = () => {
    // Mock AI report generation logic
    const shortlisted = uploadedResumes.slice(0, Math.ceil(uploadedResumes.length / 2));
    const report = {
      total: uploadedResumes.length,
      accepted: shortlisted.length,
      rejected: uploadedResumes.length - shortlisted.length,
    };
    setAiReport(report);
  };

  return (
    <div className="min-h-screen bg-[#7fb3d5]  p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Recruiter Job Page</h1>
        
        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Company Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        
        {/* Job Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Job Description</label>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the job description"
            rows="5"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Upload Resumes</label>
          <label
            htmlFor="file-upload"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
          >
            Choose Files
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            className="hidden"
            onChange={handleResumeUpload}
          />
          <div className="mt-2 text-sm text-gray-500">
            {uploadedResumes.length} resumes uploaded
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          <button
            onClick={handleShortlist}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Process Resumes
          </button>
        </div>

        {/* AI Report */}
        {aiReport && (
          <div className="mt-8 bg-gray-50 border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">AI Report</h2>
            <p className="text-gray-700">Total Resumes: {aiReport.total}</p>
            <p className="text-gray-700">Accepted Resumes: {aiReport.accepted}</p>
            <p className="text-gray-700">Rejected Resumes: {aiReport.rejected}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rec_input;
