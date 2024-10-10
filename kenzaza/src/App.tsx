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
import InputPage from './pages/input/InputPage';
import CardPage from './pages/card/CardPage';
import CarouselPage from './pages/carousel/CarouselPage';
import AlertPage from './pages/alert/AlertPage';
import BreadcrumbPage from './pages/breadcrumb/BreadcrumbPage';
import ModalPage from './pages/modal/ModalPage';
import TabsPage from './pages/tabs/TabsPage';
import AccordionPage from './pages/accordion/AccordionPage';

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
          <Route path="/input" element={<InputPage />} />
          <Route path='/card' element={<CardPage />} />
          <Route path='/carousel' element={<CarouselPage />} />
          <Route path='/alert' element={<AlertPage />} />
          <Route path='/breadcrumb' element={<BreadcrumbPage />} />
          <Route path='/modal' element={<ModalPage />} />
          <Route path='/tabs' element={<TabsPage />} />
          <Route path='/accordion' element={<AccordionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
