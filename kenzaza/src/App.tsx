import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import CheckboxPage from './pages/CheckboxPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
