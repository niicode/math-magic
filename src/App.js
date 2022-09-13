import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
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
}
