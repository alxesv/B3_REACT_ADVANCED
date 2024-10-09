import './App.css';
import MainPage from './pages/MainPage';
import CheckboxPage from './pages/checkbox/CheckboxPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonPage from './pages/button/ButtonPage';
import TogglePage from './pages/toggle/TogglePage';
import RadioPage from './pages/radio/RadioPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/toggle" element={<TogglePage />} />
          <Route path="/radio" element={<RadioPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
