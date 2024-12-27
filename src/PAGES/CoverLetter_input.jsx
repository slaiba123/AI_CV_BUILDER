import React, { useState } from "react";

const CoverLetterInput = () => {
  // State for dynamic sections
  const [paragraphFields, setParagraphFields] = useState([]);
  const [highlightsFields, setHighlightsFields] = useState([]);
  const [paragraphCounter, setParagraphCounter] = useState(0);
  const [highlightCounter, setHighlightCounter] = useState(0);

  // Functions for managing paragraphs
  const addParagraph = () => {
    setParagraphCounter(paragraphCounter + 1);
    setParagraphFields([
      ...paragraphFields,
      { id: paragraphCounter + 1, text: "" },
    ]);
  };

  const deleteParagraph = (id) => {
    setParagraphFields(paragraphFields.filter((p) => p.id !== id));
  };

  // Functions for managing highlights
  const addHighlight = () => {
    setHighlightCounter(highlightCounter + 1);
    setHighlightsFields([
      ...highlightsFields,
      { id: highlightCounter + 1, highlight: "" },
    ]);
  };

  const deleteHighlight = (id) => {
    setHighlightsFields(highlightsFields.filter((h) => h.id !== id));
  };

  return (
    <>
      <div className="bg-[#7fb3d5] pt-20 pb-20">
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md">
          <form method="POST" action="cover-letter">
            {/* Personal Details */}
            <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="text"
              placeholder="First Name"
            />
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="tel"
              placeholder="Phone"
            />
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="text"
              placeholder="Country"
            />
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="text"
              placeholder="City"
            />
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              rows="4"
              placeholder="Professional Summary"
            ></textarea>

            {/* Job Information */}
            <h3 className="text-xl font-semibold mb-4">Job Information</h3>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="text"
              placeholder="Job Title"
            />
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              rows="4"
              placeholder="Why are you interested in this role?"
            ></textarea>

            {/* Cover Letter Paragraphs */}
            <div>
              <h3 className="text-xl font-semibold">Cover Letter Paragraphs</h3>
              <button
                type="button"
                onClick={addParagraph}
                className="mb-4 px-4 py-2 bg-[#2471a3] text-white rounded hover:bg-[#2e86c1]"
              >
                + Add Paragraph
              </button>
              {paragraphFields.map((para) => (
                <div key={para.id} className="space-y-2 mb-4">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                    placeholder="Paragraph Text"
                    value={para.text}
                    onChange={(e) => {
                      const updatedFields = paragraphFields.map((field) =>
                        field.id === para.id
                          ? { ...field, text: e.target.value }
                          : field
                      );
                      setParagraphFields(updatedFields);
                    }}
                  ></textarea>
                  <button
                    type="button"
                    onClick={() => deleteParagraph(para.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Highlights Section */}
            <div>
              <h3 className="text-xl font-semibold">Highlights</h3>
              <button
                type="button"
                onClick={addHighlight}
                className="mb-4 px-4 py-2 bg-[#2471a3] text-white rounded hover:bg-[#2e86c1]"
              >
                + Add Highlight
              </button>
              {highlightsFields.map((highlight) => (
                <div key={highlight.id} className="space-y-2 mb-4">
                  <input
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="Highlight"
                    value={highlight.highlight}
                    onChange={(e) => {
                      const updatedFields = highlightsFields.map((field) =>
                        field.id === highlight.id
                          ? { ...field, highlight: e.target.value }
                          : field
                      );
                      setHighlightsFields(updatedFields);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => deleteHighlight(highlight.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Generate Cover Letter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CoverLetterInput;
