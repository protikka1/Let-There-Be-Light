import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Radio from './pages/Radio';
import Donate from './pages/Donate';
import VideoChat from './pages/VideoChat';
import Workspace from './pages/Workspace';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/videochat" element={<VideoChat />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
