import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  );
}
