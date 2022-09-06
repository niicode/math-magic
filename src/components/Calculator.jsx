import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <input className="num-input" type="number" />
        <div className="calc">
          <button type="button" className="calc-button">AC</button>
          <button type="button" className="calc-button">+/-</button>
          <button type="button" className="calc-button">%</button>
          <button type="button" className="calc-button sign">+</button>
          <button type="button" className="calc-button">7</button>
          <button type="button" className="calc-button">8</button>
          <button type="button" className="calc-button">9</button>
          <button type="button" className="calc-button sign">-</button>
          <button type="button" className="calc-button">4</button>
          <button type="button" className="calc-button">5</button>
          <button type="button" className="calc-button">6</button>
          <button type="button" className="calc-button sign">x</button>
          <button type="button" className="calc-button">1</button>
          <button type="button" className="calc-button">2</button>
          <button type="button" className="calc-button">3</button>
          <button type="button" className="calc-button sign">÷</button>
          <button type="button" className="calc-button">0</button>
          <button type="button" className="calc-button">.</button>
          <button type="button" className="calc-button sign">=</button>
        </div>
      </div>
    );
  }
}
