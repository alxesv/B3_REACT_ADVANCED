import './App.css';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonPage from './pages/button/ButtonPage';
import SelectPage from './pages/select/SelectPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/select" element={<SelectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
