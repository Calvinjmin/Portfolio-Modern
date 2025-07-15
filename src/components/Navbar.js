import React, { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  PencilIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (url, isResume = false) => {
    if (isResume) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Avatar and Site Name Container */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/avatar.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-600 shadow-md"
            />
            <a href="/" className="text-white text-xl sm:text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors">
              Calvin Min
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Scribbles */}
            <button
              onClick={() =>
                handleNavigation(`${window.location.origin}/scribbles`, false)
              }
              className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200"
            >
              Scribbles
              <PencilIcon className="w-4 h-4 ml-2" />
            </button>
            {/* Resume Link */}
            <button
              onClick={() =>
                handleNavigation(
                  "https://drive.google.com/file/d/1vZW5sa05HoEc4KYwcVRCrRBw_HOHrK3i/view?usp=sharing",
                  true
                )
              }
              className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200"
            >
              Resume
              <DocumentTextIcon className="w-4 h-4 ml-2" />
            </button>

            {/* Projects */}
            <button
              onClick={() =>
                handleNavigation(`${window.location.origin}/projects`, false)
              }
              className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200"
            >
              Projects
              <PuzzlePieceIcon className="w-4 h-4 ml-2" />
            </button>

            {/* Certifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("certifications")}
                className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200"
              >
                Certifications
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </button>
              {openDropdown === "certifications" && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-gray-700 rounded-lg shadow-xl border border-gray-600 z-50">
                  <a
                    href="https://www.credly.com/badges/d4683e3a-e78c-451e-91ac-1fdc21e42e64/linked_in?t=rhdsh3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    <span className="text-sm">AWS Solutions Architect</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Socials Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("socials")}
                className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200"
              >
                Socials
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </button>
              {openDropdown === "socials" && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-700 rounded-lg shadow-xl border border-gray-600 z-50">
                  <a
                    href="https://www.linkedin.com/in/calvinjmin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors duration-200 first:rounded-t-lg"
                  >
                    <span className="text-sm">LinkedIn</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/Calvinjmin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors duration-200"
                  >
                    <span className="text-sm">Github</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto: calvinjmin@gmail.com"
                    className="block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors duration-200 last:rounded-b-lg"
                  >
                    <span className="text-sm">Email</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 p-2 rounded-md transition-colors"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {/* Scribbles */}
            <button
              onClick={() => {
                handleNavigation(`${window.location.origin}/scribbles`, false);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left text-white hover:bg-gray-700 px-4 py-3 rounded-md flex items-center text-base font-medium transition-colors"
            >
              <PencilIcon className="w-5 h-5 mr-3" />
              Scribbles
            </button>
            
            {/* Resume Link */}
            <button
              onClick={() => {
                handleNavigation(
                  "https://drive.google.com/file/d/1vZW5sa05HoEc4KYwcVRCrRBw_HOHrK3i/view?usp=sharing",
                  true
                );
                setMobileMenuOpen(false);
              }}
              className="w-full text-left text-white hover:bg-gray-700 px-4 py-3 rounded-md flex items-center text-base font-medium transition-colors"
            >
              <DocumentTextIcon className="w-5 h-5 mr-3" />
              Resume
            </button>

            {/* Projects */}
            <button
              onClick={() => {
                handleNavigation(`${window.location.origin}/projects`, false);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left text-white hover:bg-gray-700 px-4 py-3 rounded-md flex items-center text-base font-medium transition-colors"
            >
              <PuzzlePieceIcon className="w-5 h-5 mr-3" />
              Projects
            </button>

            {/* Certifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("certifications")}
                className="w-full text-left text-white hover:bg-gray-700 px-4 py-3 rounded-md flex items-center justify-between text-base font-medium transition-colors"
              >
                <span>Certifications</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${openDropdown === "certifications" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "certifications" && (
                <div className="bg-gray-700 rounded-lg shadow-lg mt-2 ml-4">
                  <a
                    href="https://www.credly.com/badges/d4683e3a-e78c-451e-91ac-1fdc21e42e64/linked_in?t=rhdsh3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-sm">AWS Solutions Architect</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Socials Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("socials")}
                className="w-full text-left text-white hover:bg-gray-700 px-4 py-3 rounded-md flex items-center justify-between text-base font-medium transition-colors"
              >
                <span>Socials</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${openDropdown === "socials" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "socials" && (
                <div className="bg-gray-700 rounded-lg shadow-lg mt-2 ml-4 space-y-1">
                  <a
                    href="https://www.linkedin.com/in/calvinjmin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors first:rounded-t-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-sm">LinkedIn</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/Calvinjmin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-sm">Github</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto: calvinjmin@gmail.com"
                    className="block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors last:rounded-b-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-sm">Email</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
