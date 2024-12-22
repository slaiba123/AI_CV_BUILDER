import React from 'react';

const functionalities = () => {
  return (
    <div className="bg-[#3E5879] text-white py-12 px-4 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The only career toolbox you'll ever need.</h1>
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
        <button className="mt-9 bg-[#2471a3] text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-[#2e86c1]">
          Try ResumeCraft
        </button>
      </div>
    </div>
  );
};

const toolItems = [
  {
    icon: '📄',
    title: 'AI Resume Builder',
    description: 'Our GPT-4-powered resume builder will help you create an impressive professional resume in seconds. Simply pick a template and let AI do the rest.'
  },
  {
    icon: '📝',
    title: 'AI Cover Letter Builder',
    description: 'Try our AI Cover Letter Writer and produce a rock-solid cover letter in seconds. Let AI find the right words for your cover letter for you.'
  },
  {
    icon: '🎨',
    title: '5+ Professional Templates',
    description: 'All resume and cover letter templates are highly customizable and designed by a team of skilled typographers and recruiters.'
  },
  {
    icon: '📱',
    title: 'Resumecraft for free download',
    description: 'Access your resume and cover letters directly in your device by downloading it for free.'
  },
  {
    icon: '📚',
    title: '15+ Resume Examples',
    description: 'Get inspired by resume and cover letter examples that helped real people land jobs with the world’s top companies.'
  },
  {
    icon: '✅',
    title: 'ATS Resume Checker',
    description: 'Befriend the bots, optimize your resume for Applicant Tracking Systems (ATS), and get invited to more interviews.'
  },

  {
    icon: '🔍',
    title: 'Proofreading',
    description: 'Our advanced AI ensures your resume or cover letter has impeccable grammar and clarity.'
  },
  {
    icon: '✨',
    title: 'AI (Re)Writer',
    description: 'Let AI write the first draft of your document—or rewrite existing ones. It takes just seconds to go from a blank paper to download.'
  }
];

export default functionalities;
