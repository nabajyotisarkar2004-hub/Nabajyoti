import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Public Domain Movies</h1>
        <p>Legally download and watch classic films in the public domain.</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
      <footer>
        <p>Disclaimer: All content is public domain. Downloads are for personal use only. Source: Internet Archive.</p>
      </footer>
    </div>
  );
}

export default App;
