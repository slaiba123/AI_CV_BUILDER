// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const [isResumeDropdownOpen, setResumeDropdownOpen] = useState(false);
// //   const [isCoverLetterDropdownOpen, setCoverLetterDropdownOpen] = useState(false);

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-left">
// //         <a to="/" className="logo">
// //           <img src="logo.gif" alt="Logo" className="logo-image" />
// //           ResumeCraft
// //         </a>
// //       </div>
// //       <div className="navbar-right">
// //         <ul className="nav-links">
// //           <li
// //             className="dropdown"
// //             onMouseEnter={() => setResumeDropdownOpen(true)}
// //             onMouseLeave={() => setResumeDropdownOpen(false)}
// //           >
// //             <Link to="/resume">Resume</Link>
// //             {isResumeDropdownOpen && (
// //               <ul className="dropdown-menu">
// //                 <li>
// //                   <Link to="/resume_input">
// //                     <strong>Create Resume</strong>
// //                     <br />
// //                     Build resumes with intuitive editor
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/templates">
// //                     <strong>Resume Samples</strong>
// //                     <br />
// //                     Get inspiration from samples
// //                   </Link>
// //                 </li>
// //               </ul>
// //             )}
// //           </li>
// //           <li
// //             className="dropdown"
// //             onMouseEnter={() => setCoverLetterDropdownOpen(true)}
// //             onMouseLeave={() => setCoverLetterDropdownOpen(false)}
// //           >
// //             <Link to="/coverletter">Cover Letter</Link>
// //             {isCoverLetterDropdownOpen && (
// //               <ul className="dropdown-menu">
// //                 <li>
// //                   <Link to="#">
// //                     <strong>Cover Letter Builder</strong>
// //                     <br />
// //                     Build cover letters with intuitive editor
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="#">
// //                     <strong>Cover Letter Samples</strong>
// //                     <br />
// //                     Gain inspiration from samples
// //                   </Link>
// //                 </li>
// //               </ul>
// //             )}
// //           </li>
// //           <li>
// //             <Link to="/signin">Sign in</Link>
// //           </li>
// //           <li>
// //           <Link className="get-started" to="/Signup">
// //               Get Started
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleMouseEnter = (dropdown) => {
//     setActiveDropdown(dropdown);
//   };

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/" className="logo">
//           <img src="logo.gif" alt="Logo" className="logo-image" />
//           ResumeCraft
//         </Link>
//       </div>
//       <div className="navbar-right">
//         <ul className="nav-links">
//           {/* Resume Dropdown */}
//           <li
//             className="dropdown"
//             onMouseEnter={() => handleMouseEnter("resume")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to="/resume">Resume</Link>
//             {activeDropdown === "resume" && (
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link to="/resume_input">
//                     <strong>Create Resume</strong>
//                     <br />
//                     Build resumes with intuitive editor
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/templates">
//                     <strong>Resume Samples</strong>
//                     <br />
//                     Get inspiration from samples
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Cover Letter Dropdown */}
//           <li
//             className="dropdown"
//             onMouseEnter={() => handleMouseEnter("coverLetter")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to="/coverletter">Cover Letter</Link>
//             {activeDropdown === "coverLetter" && (
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link to="#">
//                     <strong>Cover Letter Builder</strong>
//                     <br />
//                     Build cover letters with intuitive editor
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <strong>Cover Letter Samples</strong>
//                     <br />
//                     Gain inspiration from samples
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Other Links */}
//           <li>
//             <Link to="/signin">Sign in</Link>
//           </li>
//           <li>
//             <Link className="get-started" to="/Signup">
//               Get Started
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// export default function Navbar() {
//   const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
//   const [coverLetterDropdownOpen, setCoverLetterDropdownOpen] = useState(false);

//   const resumeRef = useRef(null);
//   const coverLetterRef = useRef(null);
//   const navigate= useNavigate();

//   // Close dropdowns if clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         resumeRef.current &&
//         !resumeRef.current.contains(event.target) &&
//         coverLetterRef.current &&
//         !coverLetterRef.current.contains(event.target)
//       ) {
//         setResumeDropdownOpen(false);
//         setCoverLetterDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="bg-[#2471a3] text-white px-6 py-3 flex items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img src="logo.gif" alt="Logo" className="h-20 w-20 mr-2" />
//         <span className="text-3xl font-bold">ResumeCraft</span>
//       </div>

//       {/* Links */}
//       <div className="flex items-center space-x-4">
//         {/* Resume Dropdown */}
//         <div className="relative" ref={resumeRef}>
//           <button
//             className="hover:text-[#ADD8E6] focus:outline-none"
//             onClick={() => {
//               setResumeDropdownOpen(!resumeDropdownOpen);
//               setCoverLetterDropdownOpen(false); // Close other dropdown
//             }}
//           >
           
//             <Link to="/resume" className="text-lg">Resume</Link>
            
            
//           </button>
//           {resumeDropdownOpen && (
//             <div className="absolute bg-[#2471a3] text-white top-full mt-4 w-60 rounded shadow-lg p-4 translate-y-2 -translate-x-2 z-50">
//               <div className="mb-4">
//                 <Link to="/resume_input" className="block font-bold hover:text-[#ADD8E6]">
//                   Create Resume
//                 </Link>
//                 <p className="text-sm">Build resumes with an intuitive editor</p>
//               </div>
//               <div>
//                 <Link to="/templates" className="block font-bold hover:text-[#ADD8E6]">
//                   Resume Samples
//                 </Link>
//                 <p className="text-sm">Get inspiration from samples</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Cover Letter Dropdown */}
//         <div className="relative" ref={coverLetterRef}>
//           <button
//             className="hover:text-[#ADD8E6] focus:outline-none"
//             onClick={() => {
//               setCoverLetterDropdownOpen(!coverLetterDropdownOpen);
//               setResumeDropdownOpen(false); // Close other dropdown
//             }}
//           >
//             <Link to="/coverletter" className="text-lg">Cover Letter</Link>
            
//           </button>
//           {coverLetterDropdownOpen && (
//             <div className="absolute bg-[#2471a3] text-white top-full mt-4 w-60 rounded shadow-lg p-4 translate-y-2 -translate-x-2 z-50">
//               <div className="mb-4">
//                 < Link to="/CoverLetter_input" className="block font-bold hover:text-[#ADD8E6]">
//                   Create Cover Letter
//                 </Link>
//                 <p className="text-sm">Craft personalized cover letters</p>
//               </div>
//               <div>
//                 <Link to="/CoverLetter_input" className="block font-bold hover:text-[#ADD8E6]">
//                   Cover Letter Samples
//                 </Link>
//                 <p className="text-sm">Explore professionally written examples</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Other Links */}
//         <Link to="/signin" className="hover:text-[#ADD8E6] text-lg" >Sign in</Link>
          
//         <button className="bg-[#2471a3] text-white px-4 py-2 rounded hover:bg-[#2e86c1] border-2 border-solid border-[#2e86c1] hover:text-[#ADD8E6] text-xl" onClick={() => navigate("/Signup")}>
//           Get Started
//         </button>
//       </div>
//     </nav>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const [coverLetterDropdownOpen, setCoverLetterDropdownOpen] = useState(false);

  const resumeRef = useRef(null);
  const coverLetterRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdowns if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        resumeRef.current &&
        !resumeRef.current.contains(event.target) &&
        coverLetterRef.current &&
        !coverLetterRef.current.contains(event.target)
      ) {
        setResumeDropdownOpen(false);
        setCoverLetterDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the dropdowns when an option is clicked
  const handleLinkClick = () => {
    setResumeDropdownOpen(false); // Close Resume Dropdown
    setCoverLetterDropdownOpen(false); // Close Cover Letter Dropdown
  };

  return (
    <nav className="bg-[#2471a3] text-white px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="logo.gif" alt="Logo" className="h-20 w-20 mr-2" />
        <span className="text-3xl font-bold">ResumeCraft</span>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-4">
        {/* Resume Dropdown */}
        <div className="relative" ref={resumeRef}>
          <button
            className="hover:text-[#ADD8E6] focus:outline-none"
            onClick={() => {
              setResumeDropdownOpen(!resumeDropdownOpen);
              setCoverLetterDropdownOpen(false); // Close other dropdown
            }}
          >
            <Link to="/resume" className="text-lg">
              Resume
            </Link>
          </button>
          {resumeDropdownOpen && (
            <div className="absolute bg-[#2471a3] text-white top-full mt-4 w-60 rounded shadow-lg p-4 translate-y-2 -translate-x-2 z-50">
              <div className="mb-4">
                <Link
                  to="/resume_input"
                  className="block font-bold hover:text-[#ADD8E6]"
                  onClick={handleLinkClick} // Close dropdown when clicked
                >
                  Create Resume
                </Link>
                <p className="text-sm">Build resumes with an intuitive editor</p>
              </div>
              <div>
                <Link
                  to="/templates"
                  className="block font-bold hover:text-[#ADD8E6]"
                  onClick={handleLinkClick} // Close dropdown when clicked
                >
                  Resume Samples
                </Link>
                <p className="text-sm">Get inspiration from samples</p>
              </div>
            </div>
          )}
        </div>

        {/* Cover Letter Dropdown */}
        <div className="relative" ref={coverLetterRef}>
          <button
            className="hover:text-[#ADD8E6] focus:outline-none"
            onClick={() => {
              setCoverLetterDropdownOpen(!coverLetterDropdownOpen);
              setResumeDropdownOpen(false); // Close other dropdown
            }}
          >
            <Link to="/coverletter" className="text-lg">
              Cover Letter
            </Link>
          </button>
          {coverLetterDropdownOpen && (
            <div className="absolute bg-[#2471a3] text-white top-full mt-4 w-60 rounded shadow-lg p-4 translate-y-2 -translate-x-2 z-50">
              <div className="mb-4">
                <Link
                  to="/CoverLetter_input"
                  className="block font-bold hover:text-[#ADD8E6]"
                  onClick={handleLinkClick} // Close dropdown when clicked
                >
                  Create Cover Letter
                </Link>
                <p className="text-sm">Craft personalized cover letters</p>
              </div>
              <div>
                <Link
                  to="/CoverLetter_input"
                  className="block font-bold hover:text-[#ADD8E6]"
                  onClick={handleLinkClick} // Close dropdown when clicked
                >
                  Cover Letter Samples
                </Link>
                <p className="text-sm">Explore professionally written examples</p>
              </div>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          to="/signin"
          className="hover:text-[#ADD8E6] text-lg"
          onClick={handleLinkClick} // Close dropdown when clicked
        >
          Sign in
        </Link>

        <button
          className="bg-[#2471a3] text-white px-4 py-2 rounded hover:bg-[#2e86c1] border-2 border-solid border-[#2e86c1] hover:text-[#ADD8E6] text-xl"
          onClick={() => {
            navigate("/Signup");
            setResumeDropdownOpen(false); // Close dropdown when "Get Started" is clicked
            setCoverLetterDropdownOpen(false); // Close other dropdown
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
