import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center">
        {/* Avatar and Site Name Container */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/avatar.jpg"
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-700"
          />
          <a href="/" className="text-white text-2xl font-bold">
            Calvin Min
          </a>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 ml-auto">
          <a
            href="/resume.pdf"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Resume
          </a>
          <a
            href="#services"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Certifications
          </a>
          <a
            href="#about"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Socials
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none ml-auto">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
