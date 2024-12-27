import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does AI help in shortlisting resumes?",
      answer: `Our AI-powered platform analyzes resumes and compares them to the job description to automatically shortlist candidates who best match the job's requirements. The AI looks at keywords, skills, experience, and other relevant data to make an informed decision, saving recruiters time and ensuring they don't miss the best talent.`,
    },
    {
      question: "How do I post a job on the platform?",
      answer: `To post a job, simply log in to your recruiter dashboard, click on the "Post a Job" button, and fill out the job details including the job title, description, skills required, and location. Once submitted, the job will be available for candidates to view and apply.`,
    },
    {
      question: "Can I customize the AI to match specific job requirements?",
      answer: `Yes! The AI is flexible and can be customized to align with the specific job requirements you're looking for. You can input specific skills, qualifications, or keywords that are critical for the role, and the AI will focus on matching resumes that meet these criteria.`,
    },
    {
      question: "How accurate is the AI in selecting the right resumes?",
      answer: `Our AI uses advanced algorithms and machine learning to evaluate resumes against the job description. It continuously improves over time by learning from real-world data. While it's highly accurate, we recommend reviewing the AI's suggestions to ensure the best fit for your needs.`,
    },
    {
      question: "Can I view and edit shortlisted resumes before making a final decision?",
      answer: `Yes! Once the AI has shortlisted candidates, you can view the resumes and make any necessary edits or updates. You can also manually adjust the shortlist by including or excluding specific resumes based on your preferences.`,
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Your frequently asked questions.
      </h1>
      <p className="text-center text-gray-600 mb-8 text-lg">
        If you don't find answers to your questions here, don't hesitate to ask.
        Our customer service team is always ready to help.
      </p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 p-4 border rounded-lg shadow-sm bg-white"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {openIndex === index && (
            <p className="text-gray-700 mt-2 whitespace-pre-line">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
