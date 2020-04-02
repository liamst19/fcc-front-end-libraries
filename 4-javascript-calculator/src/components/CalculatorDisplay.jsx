import React from 'react';
import { connect } from 'react-redux';

const CalculatorDisplay = ({ calculator }) => {
  return (<div id="display">
            { calculator.join('') || '0'}
          </div>)
}

export default connect(
  state => ({
    calculator: state.calculator
  }),
  {}
)(CalculatorDisplay);
