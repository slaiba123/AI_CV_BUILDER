import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isResumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const [isCoverLetterDropdownOpen, setCoverLetterDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="logo.gif" alt="Logo" className="logo-image" />
          ResumeCraft
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li
            className="dropdown"
            onMouseEnter={() => setResumeDropdownOpen(true)}
            onMouseLeave={() => setResumeDropdownOpen(false)}
          >
            <Link to="/resume">Resume</Link>
            {isResumeDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/resume_input">
                    <strong>Create Resume</strong>
                    <br />
                    Build resumes with intuitive editor
                  </Link>
                </li>
                <li>
                  <Link to="/templates">
                    <strong>Resume Samples</strong>
                    <br />
                    Get inspiration from samples
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setCoverLetterDropdownOpen(true)}
            onMouseLeave={() => setCoverLetterDropdownOpen(false)}
          >
            <Link to="/coverletter">Cover Letter</Link>
            {isCoverLetterDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="#">
                    <strong>Cover Letter Builder</strong>
                    <br />
                    Build cover letters with intuitive editor
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <strong>Cover Letter Samples</strong>
                    <br />
                    Gain inspiration from samples
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
          <Link className="get-started" to="/Signup">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
