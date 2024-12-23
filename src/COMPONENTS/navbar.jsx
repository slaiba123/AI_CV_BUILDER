import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isResumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const [isCoverLetterDropdownOpen, setCoverLetterDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="logo">
          <img src="logo.gif" alt="Logo" className="logo-image" />
          ResumeCraft
        </a>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li
            className="dropdown"
            onMouseEnter={() => setResumeDropdownOpen(true)}
            onMouseLeave={() => setResumeDropdownOpen(false)}
          >
            <a href="#">Resume</a>
            {isResumeDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <strong>Create Resume</strong>
                    <br />
                    Build resumes with intuitive editor
                  </a>
                </li>
                <li>
                  <a href="#">
                    <strong>Resume Samples</strong>
                    <br />
                    Get inspiration from samples
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setCoverLetterDropdownOpen(true)}
            onMouseLeave={() => setCoverLetterDropdownOpen(false)}
          >
            <a href="#">Cover Letter</a>
            {isCoverLetterDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <strong>Cover Letter Builder</strong>
                    <br />
                    Build cover letters with intuitive editor
                  </a>
                </li>
                <li>
                  <a href="#">
                    <strong>Cover Letter Samples</strong>
                    <br />
                    Gain inspiration from samples
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <div className="get-started">
              Get Started
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
