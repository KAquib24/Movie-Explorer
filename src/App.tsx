import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import AllMovies from './pages/Allmovies';
import MoviesInfo from './pages/MoviesInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allmovies" element={<AllMovies />} />
        <Route path="/movieinfo" element={<MoviesInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
