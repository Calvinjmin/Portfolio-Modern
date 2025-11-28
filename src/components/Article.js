import { useEffect, useState } from "react";
import {
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const Article = ({ title, excerpt, content, publicationDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const [readingLength, setReadingLength] = useState(0);

  const calculateReadingLength = (text) => {
    const words = text.trim().split(/\s+/).length;
    const readingSpeed = 150;
    return Math.ceil(words / readingSpeed);
  };

  useEffect(() => {
    fetch(content)
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
        setReadingLength(calculateReadingLength(text));
      });
  }, [content]);

  return (
    <>
      <article className="mb-6 bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[90%] max-w-[1000px] mx-auto h-auto">
        <div className="flex flex-col md:flex-row items-center text-gray-500 mt-2 sticky top-12 bg-white z-10 p-2">
          <h2 className="text-2xl font-semibold text-gray-800 pr-4">{title}</h2>
          <div className="flex items-center mt-2 md:mt-0">
            <CalendarIcon className="h-5 w-5 mr-1" />
            <p className="mr-2">{`${publicationDate}`}</p>
            <ClockIcon className="h-5 w-5 mr-1" />
            <p>{`${readingLength} min`}</p>
          </div>
        </div>

        <p className="text-gray-600 mt-2">{excerpt}</p>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center text-blue-500 hover:underline mt-4"
        >
          <ChevronRightIcon className="h-5 w-5 mr-2" />
          <span>Read More</span>
        </button>
      </article>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 w-full max-w-[1000px] h-auto relative mx-auto overflow-y-auto max-h-[80vh] transition-all transform scale-105">
            <div className="sticky top-0 bg-white z-20 border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pr-8">{title}</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center text-gray-500 mt-3 text-sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span className="mr-4">{publicationDate}</span>
                <ClockIcon className="h-4 w-4 mr-2" />
                <span>{readingLength} min read</span>
              </div>
            </div>

            <div className="markdown prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-6 prose-h2:text-xl prose-h2:mb-3 prose-h2:mt-5 prose-h3:text-lg prose-h3:mb-2 prose-h3:mt-4 prose-p:mb-4 prose-p:leading-relaxed prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-1">
              <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
