import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a resume/CV?",
      answer: `In the most simple terms, it's a document that you send to employers when you're looking for a job. The purpose of a resume is to introduce yourself to employers, present your skills and experience in a way that makes you stand out from other candidates, and get you invited to a job interview.

      With Resumecraft you can create a resume in a few clicks. Our resume templates are designed by typographers and seasoned recruiters to ensure your resume is visually appealing as well as functional and professional.

      And if you're nervous (or simply a bit lazy) to put together your resume from scratch, you can use Resumecraft’s AI resume writer which will write all resume sections (work experience, education, objective, skills, awards, etc.) for you from scratch, rewrite existing content, or tailor it for a specific job title.`,
    },
    {
      question: "What is a resume builder?",
      answer: `Resume builders are online tools that let you create a professionally designed resume without having to learn the ropes of graphic design.

      You simply add your information into each of the dedicated pre-designed resume sections, pick one of the many resume templates, and customize it to your liking.

      To save you even more time, with Resumecraft you can:

      - Use Resumecraft’s AI resume writer which will write all resume sections for you from scratch, rewrite existing content, or tailor it for a specific job title.
      - Use Resumecraft’s AI resume reviewer which takes your existing CV and gives it that extra polish, fixes any mistakes in your resume and even makes it sound more professional.

      Finally, you simply download your resume.`,
    },
    {
      question: "Do I need a resume builder?",
      answer: `Yes! It lets you create a pixel-perfect resume without having to learn the ropes of graphic design. Plus, it saves your valuable time since you can create a resume in a few simple clicks. Our resume builder also offers you content tips and suggestions to make sure you don’t forget anything important and that your resume is tailored to the job description.

      What’s more, it has already helped many job seekers create their resumes and score their dream jobs.`,
    },
    {
      question: "Where can I make a resume for free?",
      answer: `Resumecraft lets you create a resume for free as long as you stick to our free customization options. All paid customization options are clearly labeled inside the Resumecraft resume builder tool so you can easily avoid using them if you want to download your resume for free.`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Your frequently asked questions.
      </h1>
      <p className="text-center text-gray-600 mb-8">
        If you don't find answers to your questions here, don't hesitate to ask.
        Kick’s customer service team is always ready to help.
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
