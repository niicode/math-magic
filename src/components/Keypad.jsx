/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';

class Keypad extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    if (this.props.keypad.length === 4) {
      const [row1, row2, row3, row4] = this.props.keypad;
      return (
        <div className="row">
          <button type="button" className="calc-button" onClick={() => this.handleClick(row1)}>{row1}</button>
          <button type="button" className="calc-button" onClick={() => this.handleClick(row2)}>{row2}</button>
          <button type="button" className="calc-button" onClick={() => this.handleClick(row3)}>{row3}</button>
          <button type="button" className="calc-button sign" onClick={() => this.handleClick(row4)}>{row4}</button>
        </div>
      );
    }
    const [row1, row2, row3] = this.props.keypad;
    return (
      <div className="last-row">
        <button type="button" className="calc-button" onClick={() => this.handleClick(row1)}>{row1}</button>
        <button type="button" className="calc-button" onClick={() => this.handleClick(row2)}>{row2}</button>
        <button type="button" className="calc-button sign" onClick={() => this.handleClick(row3)}>{row3}</button>
      </div>
    );
  }
}

Keypad.propTypes = {
  keypad: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Keypad;
