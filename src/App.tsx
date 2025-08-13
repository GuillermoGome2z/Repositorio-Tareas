// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Si tienes <Navbar />, colócalo aquí */}
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
