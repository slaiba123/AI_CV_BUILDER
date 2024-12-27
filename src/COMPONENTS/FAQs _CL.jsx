import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a cover letter?",
      answer: `A cover letter is a document you send along with your resume/CV when applying for a job. It serves as a personalized introduction to your potential employer, highlighting your skills, experiences, and enthusiasm for the role. The purpose of a cover letter is to complement your resume and demonstrate how your background aligns with the job requirements.`,
    },
    {
      question: "Why is a cover letter important?",
      answer: `A cover letter is your opportunity to make a great first impression. While your resume focuses on your qualifications, a cover letter allows you to explain why you are particularly interested in the role and how you can contribute to the company. It also showcases your communication skills and professionalism.`,
    },
    {
      question: "How do I write a good cover letter?",
      answer: `To write a compelling cover letter:

      - Start with a strong opening that grabs attention.
      - Address the hiring manager by name, if possible.
      - Clearly state why you're applying for the role and why you're a great fit.
      - Highlight key achievements and experiences relevant to the job.
      - Use a professional tone, but let your enthusiasm and personality shine through.
      - End with a call to action, expressing your interest in discussing the role further.
      
      Keep it concise, ideally one page long.`,
    },
    {
      question: "Do I need a cover letter for every job application?",
      answer: `While not every job application explicitly requires a cover letter, it’s often a good idea to include one. A tailored cover letter shows you’ve put effort into your application and can give you an edge over other candidates. However, if a job posting specifies that a cover letter is not needed, you can skip it.`,
    },
    {
      question: "Can I use the same cover letter for different jobs?",
      answer: `It's not recommended to use the same cover letter for multiple applications. Each cover letter should be tailored to the specific role and company you're applying to. Highlight the skills and experiences most relevant to the job description and demonstrate your knowledge of the company.`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
      Your frequently asked questions.
      </h1>
      <p className="text-center text-gray-600 mb-8 text-lg">
        If you don't find answers to your questions here, feel free to reach out.
        We're here to help you craft the perfect application.
      </p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-6 p-4 border rounded-lg shadow-sm bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
          <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
