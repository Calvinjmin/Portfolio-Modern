import React, { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  PencilIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const CERTIFICATIONS = [
  {
    name: "AWS Solutions Architect",
    url: "https://www.credly.com/badges/d4683e3a-e78c-451e-91ac-1fdc21e42e64/linked_in?t=rhdsh3",
  },
  {
    name: "AZ 104: Azure Administrator Associate",
    url: "https://learn.microsoft.com/en-us/users/calvinmin-9590/credentials/b2d5ffb310a884cc?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    url: "https://credentials.databricks.com/aaa149e1-d850-460f-92bd-ef0cbd6f6970#acc.6kp50ybA",
  },
  {
    name: "Databricks Certified Generative AI Engineer Associate",
    url: "https://credentials.databricks.com/c5c27a00-654d-4fbc-8d11-6c16f4a4d6e2#acc.1hcAQ902",
  },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/calvinjmin/",
  },
  {
    name: "Github",
    url: "https://github.com/Calvinjmin",
  },
  {
    name: "Email",
    url: "mailto: calvinjmin@gmail.com",
  },
];

const RESUME_URL = "https://drive.google.com/file/d/1vZW5sa05HoEc4KYwcVRCrRBw_HOHrK3i/view?usp=sharing";

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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const NavButton = ({ onClick, children, className = "" }) => (
    <button
      onClick={onClick}
      className={`text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );

  const DropdownLink = ({ href, children, isFirst = false, isLast = false, onClick }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block px-4 py-3 text-white hover:bg-gray-600 flex items-center justify-between transition-colors duration-200 ${
        isFirst ? "first:rounded-t-lg" : ""
      } ${isLast ? "last:rounded-b-lg" : ""}`}
      onClick={onClick}
    >
      <span className="text-sm">{children}</span>
      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
    </a>
  );

  const MobileNavButton = ({ onClick, icon: Icon, children }) => (
    <button
      onClick={onClick}
      className="w-full text-left text-white hover:bg-gray-700 px-4 py-3 rounded-md flex items-center text-base font-medium transition-colors"
    >
      <Icon className="w-5 h-5 mr-3" />
      {children}
    </button>
  );

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/avatar.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-600 shadow-md"
            />
            <a
              href="/"
              className="text-white text-xl sm:text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors"
            >
              Calvin Min
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavButton onClick={() => handleNavigation(`${window.location.origin}/scribbles`, false)}>
              Scribbles
              <PencilIcon className="w-4 h-4 ml-2" />
            </NavButton>

            <NavButton onClick={() => handleNavigation(RESUME_URL, true)}>
              Resume
              <DocumentTextIcon className="w-4 h-4 ml-2" />
            </NavButton>

            <NavButton onClick={() => handleNavigation(`${window.location.origin}/projects`, false)}>
              Projects
              <PuzzlePieceIcon className="w-4 h-4 ml-2" />
            </NavButton>

            {/* Certifications Dropdown */}
            <div className="relative">
              <NavButton onClick={() => toggleDropdown("certifications")}>
                Certifications
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </NavButton>
              {openDropdown === "certifications" && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-gray-700 rounded-lg shadow-xl border border-gray-600 z-50">
                  {CERTIFICATIONS.map((cert, index) => (
                    <DropdownLink
                      key={cert.name}
                      href={cert.url}
                      isFirst={index === 0}
                      isLast={index === CERTIFICATIONS.length - 1}
                    >
                      {cert.name}
                    </DropdownLink>
                  ))}
                </div>
              )}
            </div>

            {/* Socials Dropdown */}
            <div className="relative">
              <NavButton onClick={() => toggleDropdown("socials")}>
                Socials
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </NavButton>
              {openDropdown === "socials" && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-700 rounded-lg shadow-xl border border-gray-600 z-50">
                  {SOCIAL_LINKS.map((social, index) => (
                    <DropdownLink
                      key={social.name}
                      href={social.url}
                      isFirst={index === 0}
                      isLast={index === SOCIAL_LINKS.length - 1}
                    >
                      {social.name}
                    </DropdownLink>
                  ))}
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
            <MobileNavButton
              onClick={() => {
                handleNavigation(`${window.location.origin}/scribbles`, false);
                closeMobileMenu();
              }}
              icon={PencilIcon}
            >
              Scribbles
            </MobileNavButton>

            <MobileNavButton
              onClick={() => {
                handleNavigation(RESUME_URL, true);
                closeMobileMenu();
              }}
              icon={DocumentTextIcon}
            >
              Resume
            </MobileNavButton>

            <MobileNavButton
              onClick={() => {
                handleNavigation(`${window.location.origin}/projects`, false);
                closeMobileMenu();
              }}
              icon={PuzzlePieceIcon}
            >
              Projects
            </MobileNavButton>

            {/* Mobile Certifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("certifications")}
                className="w-full text-left text-white hover:bg-gray-700 px-4 py-3 rounded-md flex items-center justify-between text-base font-medium transition-colors"
              >
                <span>Certifications</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openDropdown === "certifications" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "certifications" && (
                <div className="bg-gray-700 rounded-lg shadow-lg mt-2 ml-4 space-y-1">
                  {CERTIFICATIONS.map((cert, index) => (
                    <DropdownLink
                      key={cert.name}
                      href={cert.url}
                      isFirst={index === 0}
                      isLast={index === CERTIFICATIONS.length - 1}
                      onClick={closeMobileMenu}
                    >
                      {cert.name}
                    </DropdownLink>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Socials Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("socials")}
                className="w-full text-left text-white hover:bg-gray-700 px-4 py-3 rounded-md flex items-center justify-between text-base font-medium transition-colors"
              >
                <span>Socials</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openDropdown === "socials" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "socials" && (
                <div className="bg-gray-700 rounded-lg shadow-lg mt-2 ml-4 space-y-1">
                  {SOCIAL_LINKS.map((social, index) => (
                    <DropdownLink
                      key={social.name}
                      href={social.url}
                      isFirst={index === 0}
                      isLast={index === SOCIAL_LINKS.length - 1}
                      onClick={closeMobileMenu}
                    >
                      {social.name}
                    </DropdownLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}