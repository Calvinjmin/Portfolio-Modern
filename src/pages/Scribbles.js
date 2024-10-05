import React from "react";
import Article from "../components/Article";
import { scribblePosts } from "../scribbles/ScribblePosts";

import "../App.css";

const Scribbles = () => {
  return (
    <div className="relative flex flex-col">
      <div className="flex-grow flex flex-col items-center p-4">
        {/* Header */}
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold text-gray-800">Scribbles</h1>
          <p className="text-lg text-gray-600">
            Anything and everything about traveling, running, and eating.
          </p>
        </header>
        <div className="flex flex-wrap">
          {/* Main Content Area */}
          <main className="flex-1 flex flex-col justify-start p-4">
            {scribblePosts.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Scribbles;
