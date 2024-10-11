import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb, { BreadcrumbItem } from './components/organisms/breadcrumb/Breadcrumb';
import MainPage from './pages/MainPage';
import CheckboxPage from './pages/checkbox/CheckboxPage';
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
import AccordionPage from './pages/accordion/AccordionPage';

const getBreadcrumbItems = (location: string): BreadcrumbItem[] => {
  const pathnames = location.split('/').filter((x) => x);
  const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Home', path: '/', color: 'primary' }];

  pathnames.forEach((path, index) => {
    const routePath = `/${pathnames.slice(0, index + 1).join('/')}`;
    breadcrumbItems.push({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: routePath,
      color: 'secondary', 
    });
  });

  return breadcrumbItems;
};

const Layout: React.FC = () => {
  const location = useLocation();
  const breadcrumbItems = getBreadcrumbItems(location.pathname);

  return (
    <div className="App">
      <div className="header">
        <Breadcrumb items={breadcrumbItems} />
      </div>
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
        <Route path="/card" element={<CardPage />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/accordion" element={<AccordionPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout /> 
    </Router>
  );
}

export default App;
