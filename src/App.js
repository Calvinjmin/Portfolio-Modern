import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Scribbles from "./pages/Scribbles";

import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col"> {/* Use min-h-screen for full height */}
        <Navbar />
        <div className="flex-grow flex flex-col items-center p-4"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scribbles" element={<Scribbles />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        {/* Bottom Text */}
        <div className="absolute bottom-4 right-4 text-right text-gray-600"> {/* Positioned at bottom right */}
          <p>Calvin Min | 2024</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
