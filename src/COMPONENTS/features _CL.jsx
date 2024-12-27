import React from 'react';
import { useNavigate } from 'react-router-dom';
const functionalities = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#3E5879] text-white py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The ultimate career toolbox for your cover letters.</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {toolItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-[#213555] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="mt-9 bg-[#2471a3] text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-[#2e86c1]" onClick={() => navigate("/")}>
          Try Out!
        </button>
      </div>
    </div>
  );
};

const toolItems = [
  {
    icon: '📝',
    title: 'AI-Powered Cover Letter Builder',
    description: 'Generate tailored cover letters in seconds. Input job details and let AI craft a professional and impactful cover letter for you.',
  },
  {
    icon: '✨',
    title: 'AI Cover Letter Enhancer',
    description: 'Optimize your existing cover letter with grammar improvements, impactful statements, and a polished tone using advanced AI.',
  },
  {
    icon: '🔑',
    title: 'Job Description Matching',
    description: 'Align your cover letter with job descriptions. Highlight key skills and experiences that match job requirements effortlessly.',
  },
  {
    icon: '📋',
    title: 'Customizable Templates',
    description: 'Choose from professionally designed cover letter templates that are easy to customize to suit your style and preferences.',
  },
  {
    icon: '🔍',
    title: 'Cover Letter Proofreading',
    description: 'Ensure your cover letter is error-free and professional with AI-driven grammar and clarity checks.',
  },
  {
    icon: '📥',
    title: 'Free Download',
    description: 'Download your cover letter directly to your device without any extra charges.',
  },
  {
    icon: '🌟',
    title: 'LinkedIn Integration',
    description: 'Import key details from your LinkedIn profile to ensure consistency and save time crafting your cover letter.',
  },
  {
    icon: '💡',
    title: 'Personalization Options',
    description: 'Easily customize AI-generated cover letters to reflect your unique voice and specific job application details.',
  },
  {
    icon: '🧠',
    title: 'AI Rewrite Suggestions',
    description: 'Get AI-powered rewrite suggestions to fine-tune your cover letter and make it stand out to recruiters.',
  },
];

export default functionalities;
