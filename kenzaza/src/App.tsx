import './App.css';
import MainPage from './pages/MainPage';
import CheckboxPage from './pages/checkbox/CheckboxPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonPage from './pages/button/ButtonPage';
import TogglePage from './pages/toggle/TogglePage';
import RadioPage from './pages/radio/RadioPage';
import LoaderPage from './pages/loader/LoaderPage';
import SelectPage from './pages/select/SelectPage';
import TablePage from './pages/table/TablePage';
import CardPage from './pages/card/CardPage';
import BreadcrumbPage from './pages/breadcrumb/BreadcrumbPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/loader" element={<LoaderPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/toggle" element={<TogglePage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path='/card' element={<CardPage />} />
          <Route path='/breadcrumb' element={<BreadcrumbPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
