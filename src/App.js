import React from "react";
import "./App.css"; // Ensure Tailwind CSS is included
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-200 flex-grow flex flex-col items-center justify-center p-4">
        {/* Container for content with max-width and centered alignment */}
        <div className="max-w-2xl w-full px-4">
          {/* Introduction */}
          <div className="text-center mb-4">
            {/* Rounded Rectangle Image */}
            <img
              className="rounded-xl"
              alt="Home Page"
              src="/images/home_image.jpg"
            />
            <p className="text-lg mt-4">
              Hi, I'm Calvin Min, a current Software Engineer at Capital One
              based in Boston, MA. I recently graduated from the{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://engineering.virginia.edu/"
              >
                University of Virginia
              </a>
              , and while coding is one of my passions, this website is a way
              for me to showcase who I am beyond my day job. Welcome to my
              personal space where I share my interests and projects!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="absolute bottom-4 right-4 text-gray-600">
        Calvin Min | 2024
      </p>
    </div>
  );
}

export default App;
