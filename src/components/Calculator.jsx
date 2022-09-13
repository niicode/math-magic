/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Keypad from './Keypad';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };

  return (
    <div className="container">
      <h2>Lets do some math!</h2>
      <div className="main">
        <div className="num-input">{(state.next === null) ? state.total : state.next}</div>
        <Keypad keypad={['AC', '+/-', '%', '÷']} clickHandler={handleClick} />
        <Keypad keypad={['7', '8', '9', 'x']} clickHandler={handleClick} />
        <Keypad keypad={['4', '5', '6', '-']} clickHandler={handleClick} />
        <Keypad keypad={['1', '2', '3', '+']} clickHandler={handleClick} />
        <Keypad keypad={['0', '.', '=']} clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
