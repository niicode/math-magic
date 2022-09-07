import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Keypad from './Keypad';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  componentDidMount() {
    this.handleClick('AC');
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const data = calculate({ total, next, operation }, buttonName);
    this.setState(data);
  };

  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="num-input">{(this.state.next === null) ? this.state.total : this.state.next}</div>
          <Keypad keypad={['AC', '+/-', '%', '÷']} clickHandler={this.handleClick} />
          <Keypad keypad={['7', '8', '9', 'x']} clickHandler={this.handleClick} />
          <Keypad keypad={['4', '5', '6', '-']} clickHandler={this.handleClick} />
          <Keypad keypad={['1', '2', '3', '+']} clickHandler={this.handleClick} />
          <Keypad keypad={['0', '.', '=']} clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
