// import React, { useState } from 'react';

// const Jobsearch = () => {
//   const [jobTitle, setJobTitle] = useState('');
//   const [location, setLocation] = useState('');
//   const [jobs, setJobs] = useState([]); // Placeholder for job list

//   const handleSearch = () => {
//     // Dummy data simulating job search results
//     const sampleJobs = [
//       { title: 'Software Developer', location: 'Karachi, Pakistan' },
//       { title: 'Full Stack Developer', location: 'Karachi, Pakistan' },
//       { title: 'Junior Software Engineer', location: 'Karachi, Pakistan'  },
//       { title: 'React Developer', location: 'Karachi, Pakistan'  },
//     ];

//     // Filter jobs based on user input (job title and location)
//     const filteredJobs = sampleJobs.filter(
//       (job) =>
//         job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
//         job.location.toLowerCase().includes(location.toLowerCase())
//     );
//     setJobs(filteredJobs);
//   };

//   return (
//     <div className="min-h-screen bg-blue-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
//           Find Your Dream Job
//         </h1>

//         <div className="mb-4">
//           <label htmlFor="job-title" className="block text-lg text-gray-700 mb-2">
//             Job Title
//           </label>
//           <input
//             id="job-title"
//             type="text"
//             value={jobTitle}
//             onChange={(e) => setJobTitle(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter job title"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="location" className="block text-lg text-gray-700 mb-2">
//             Location
//           </label>
//           <input
//             id="location"
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter location"
//           />
//         </div>

//         <button
//           onClick={handleSearch}
//           className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//         >
//           Search Jobs
//         </button>

//         {/* Display Search Results */}
//         {jobs.length > 0 && (
//           <div className="mt-6">
//             <h2 className="text-2xl font-semibold text-blue-600 mb-4">Job Listings</h2>
//             <ul className="space-y-4">
//               {jobs.map((job, index) => (
//                 <li key={index} className="bg-blue-50 p-4 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
//                   <p className="text-gray-700">{job.location}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Display No Results Message */}
//         {jobs.length === 0 && jobTitle && location && (
//           <div className="mt-6 text-center text-gray-700">
//             <p>No jobs found for "{jobTitle}" in "{location}".</p>
//           </div>
//         )}

//         {/* Dummy Job Listings for "Software Developer" */}
//         {jobTitle.toLowerCase() === "software developer" && !jobs.length && (
//           <div className="mt-6">
//             <h2 className="text-2xl font-semibold text-blue-600 mb-4">Dummy Job Listings for Software Developer</h2>
//             <div className="space-y-4">
//               <div className="bg-blue-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-blue-600">Software Developer</h3>
//                 <p className="text-gray-700">New York, NY</p>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-blue-600">Full Stack Developer</h3>
//                 <p className="text-gray-700">San Francisco, CA</p>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-blue-600">Junior Software Engineer</h3>
//                 <p className="text-gray-700">Los Angeles, CA</p>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-blue-600">React Developer</h3>
//                 <p className="text-gray-700">Austin, TX</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Jobsearch;
import React, { useState } from 'react';

const Jobsearch = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]); // Placeholder for job list

  const handleSearch = () => {
    // Dummy data simulating job search results
    const sampleJobs = [
      { title: 'Software Developer', location: 'Karachi, Pakistan' },
      { title: 'Full Stack Developer', location: 'Karachi, Pakistan' },
      { title: 'Junior Software Engineer', location: 'Karachi, Pakistan' },
      { title: 'React Developer', location: 'Karachi, Pakistan' },
    ];

    // Filter jobs based on user input (job title and location)
    const filteredJobs = sampleJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mt-12 mb-12"> {/* Outer div with margin */}
        <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
          Find Your Dream Job
        </h1>

        <div className="mb-4">
          <label htmlFor="job-title" className="block text-lg text-gray-700 mb-2">
            Job Title
          </label>
          <input
            id="job-title"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job title"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="location" className="block text-lg text-gray-700 mb-2">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Search Jobs
        </button>

        {/* Display Search Results */}
        {jobs.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Job Listings</h2>
            <div className="max-h-64 overflow-y-auto space-y-4"> {/* Scrollable container */}
              <ul>
                {jobs.map((job, index) => (
                  <li key={index} className="bg-blue-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
                    <p className="text-gray-700">{job.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Display No Results Message */}
        {jobs.length === 0 && jobTitle && location && (
          <div className="mt-6 text-center text-gray-700">
            <p>No jobs found for "{jobTitle}" in "{location}".</p>
          </div>
        )}

        {/* Dummy Job Listings for "Software Developer" */}
        {jobTitle.toLowerCase() === "software developer" && !jobs.length && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Dummy Job Listings for Software Developer</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">Software Developer</h3>
                <p className="text-gray-700">Karachi, Pakistan</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">Full Stack Developer</h3>
                <p className="text-gray-700">Karachi, Pakistan</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">Junior Software Engineer</h3>
                <p className="text-gray-700">Karachi, Pakistan</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">React Developer</h3>
                <p className="text-gray-700">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobsearch;


