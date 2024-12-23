import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-10 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-white font-semibold mb-4">
              Connect with us on social media
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full transition-transform transform hover:scale-110 hover:opacity-100">
                <img src="linkedin.png" alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="#" className="p-2 rounded-full transition-transform transform hover:scale-110 hover:opacity-100">
                <img src="social.png" alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="#" className="p-2 rounded-full transition-transform transform hover:scale-110 hover:opacity-100">
                <img src="facebook.png" alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="#" className="p-2 rounded-full transition-transform transform hover:scale-110 hover:opacity-100">
                <img src="twitter.png" alt="TikTok" className="w-10 h-10" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-4">Job Seekers</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Create a resume</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Resume examples</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Resume templates</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Cover Letter Templates</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Job Search</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Career Resources</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Resume Help</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Job Interview</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Sponsorship Program</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Career Cover Letter</a>
                </li>
                <li>
                  <a href="#"className="hover:underline hover:text-blue-400">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Our Company</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Media Kit</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Affiliates</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">FAQ</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Privacy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-blue-400">Right of Withdrawal</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-sm text-gray-500">
          <p>Copyright 2024 - Resume.io</p>
          <p>More than a resume builder. Resume.io is part of the Career.io product ecosystem.</p>
        </div>
        <div className="mt-20">
          <div className="flex justify-center items-center space-x-6 overflow-hidden h-24">
            {/* This container hides the bottom half of the images */}
            <img
              src="template 1.png"
              alt="Resume Template 1"
              className="w-50 h-auto shadow-lg object-cover"
            />
            <img
              src="template 2.png"
              alt="Resume Template 2"
              className="w-50 h-auto shadow-lg object-cover"
            />
            <img
              src="template 6.png"
              alt="Resume Template 6"
              className="w-30 h-auto shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
