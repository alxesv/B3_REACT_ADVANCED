import './App.css';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonPage from './pages/button/ButtonPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/button" element={<ButtonPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
