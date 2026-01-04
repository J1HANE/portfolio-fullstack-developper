import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Snowfall from './components/Snowfall';
import Header from './components/Header';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import LiveDemo from './components/LiveDemo';

function App() {
  return (
    <Router>
      <div className="bg-neon-dark text-white selection:bg-neon-purple selection:text-white min-h-screen">
        <Header />
        <Snowfall />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/demo/:id" element={<LiveDemo />} />
          </Routes>
        </main>

        <footer className="py-10 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© 2026 Jihane Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
