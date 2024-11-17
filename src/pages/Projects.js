import React from "react";
import { projectsMetadata } from "../content/ProjectsMetadata";

import "../App.css";

export default function Projects() {
  return (
    <div className="relative flex flex-col">
      <div className="flex-grow flex flex-col items-center p-4">
        {/* Header */}
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold text-gray-800">Project Gallery</h1>
          <p className="text-lg text-gray-600">
            Explore my various coding projects.
          </p>
        </header>

        {/* Gallery Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Gallery Items */}
          {projectsMetadata.map((project, index) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-64 lg:w-72 p-4 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                {/* Project Info */}
                <p className="text-xl font-semibold text-gray-800 hover:text-blue-500">
                  {project.title}
                </p>
                <p className="text-gray-600 mt-2">{project.description}</p>

                {/* Tags Section - Render pills for each tag */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end mt-4">
                  <span className="text-sm text-gray-500">&#8599;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
