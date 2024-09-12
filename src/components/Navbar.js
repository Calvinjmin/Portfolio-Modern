import React, { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  DocumentTextIcon,
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

  const handleNavigation = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4 ml-auto">
          {/* Resume Link */}
          <button
            onClick={() =>
              handleNavigation(
                "https://drive.google.com/file/d/1v2zVegzTO8zcBphsCZh7oVsuAlzSkrQ_/view?usp=sharing"
              )
            }
            className="text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center"
          >
            Resume
            <DocumentTextIcon className="w-5 h-5 ml-2" />
          </button>

          {/* Projects Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("projects")}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center"
            >
              Projects
              <ChevronDownIcon className="w-5 h-5 ml-2" />
            </button>
            {openDropdown === "projects" && (
              <div className="absolute top-full mt-2 w-48 bg-gray-700 rounded-lg shadow-lg">
                <a
                  href="https://github.com/Calvinjmin/Advent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Advent of Code
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/HoopStats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Hoop Stats
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/Interview_Questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Interview Prep
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/MetaBS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Meta Brawl Stars
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/numerai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Numer.ai
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/Portfolio-Modern/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Personal Portfolio
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            )}
          </div>

          {/* Certifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("certifications")}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center"
            >
              Certifications
              <ChevronDownIcon className="w-5 h-5 ml-2" />
            </button>
            {openDropdown === "certifications" && (
              <div className="absolute top-full mt-2 w-48 bg-gray-700 rounded-lg shadow-lg">
                <a
                  href="https://www.credly.com/badges/d4683e3a-e78c-451e-91ac-1fdc21e42e64/linked_in?t=rhdsh3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  AWS Solutions Architect
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            )}
          </div>

          {/* Socials Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("socials")}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center"
            >
              Socials
              <ChevronDownIcon className="w-5 h-5 ml-2" />
            </button>
            {openDropdown === "socials" && (
              <div className="absolute top-full mt-2 w-48 bg-gray-700 rounded-lg shadow-lg">
                <a
                  href="https://www.linkedin.com/in/calvinjmin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  LinkedIn
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Github
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto: calvinjmin@gmail.com"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Email
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none ml-auto"
          onClick={toggleMobileMenu}
        >
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 absolute top-16 left-0 w-full z-50">
          {/* Resume Link */}
          <button
            onClick={() =>
              handleNavigation(
                "https://drive.google.com/file/d/1v2zVegzTO8zcBphsCZh7oVsuAlzSkrQ_/view?usp=sharing"
              )
            }
            className="text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center w-full mb-2"
          >
            Resume
            <DocumentTextIcon className="w-5 h-5 ml-2" />
          </button>

          {/* Projects Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("projects")}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center w-full"
            >
              Projects
            </button>
            {openDropdown === "projects" && (
              <div className="bg-gray-700 rounded-lg shadow-lg mt-2">
                <a
                  href="https://github.com/Calvinjmin/Advent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Advent of Code
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/HoopStats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Hoop Stats
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/Interview_Questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Interview Prep
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/MetaBS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Meta Brawl Stars
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/numerai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Numer.ai
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin/Portfolio-Modern/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Personal Portfolio
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            )}
          </div>

          {/* Certifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("certifications")}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center w-full"
            >
              Certifications
            </button>
            {openDropdown === "certifications" && (
              <div className="bg-gray-700 rounded-lg shadow-lg mt-2">
                <a
                  href="https://www.credly.com/badges/d4683e3a-e78c-451e-91ac-1fdc21e42e64/linked_in?t=rhdsh3"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  AWS Solutions Architect
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            )}
          </div>

          {/* Socials Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("socials")}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center w-full"
            >
              Socials
            </button>
            {openDropdown === "socials" && (
              <div className="bg-gray-700 rounded-lg shadow-lg mt-2">
                <a
                  href="https://www.linkedin.com/in/calvinjmin/"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  LinkedIn
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://github.com/Calvinjmin"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Github
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto: calvinjmin@gmail.com"
                  className="block px-4 py-2 text-white hover:bg-gray-600 flex items-center justify-between"
                >
                  Email
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
