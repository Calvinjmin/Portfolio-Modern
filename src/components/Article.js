import React, { useEffect, useState } from "react";
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
            <div className="sticky top-0 bg-white z-10 p-2">
              <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                ✖️
              </button>
            </div>

            <div className="flex items-center text-gray-500 mt-2 sticky top-12 bg-white z-10 p-2">
              <CalendarIcon className="h-5 w-5 mr-1" />
              <p className="mr-2">{`${publicationDate}`}</p>
              <ClockIcon className="h-5 w-5 mr-1" />
              <p>{`${readingLength} min`}</p>
            </div>

            <div className="markdown text-gray-600 mt-4">
              <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
