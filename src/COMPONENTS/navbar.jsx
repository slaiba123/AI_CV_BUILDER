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
        <Link
          to="/jobs"
          className="hover:text-[#ADD8E6] text-lg"
          onClick={handleLinkClick} // Close dropdown when clicked
        >
          Jobs
        </Link>

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
