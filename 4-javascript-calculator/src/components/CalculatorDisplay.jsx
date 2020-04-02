import React from 'react';
import { connect } from 'react-redux';

const CalculatorDisplay = ({ calculator }) => {
  return (<div id="display-panel">
            <div id="display-operator">&nbsp;{ calculator.operator }</div>
            <p id="display">
                { calculator.term2 ? calculator.term2
                  : calculator.term1 ? calculator.term1
                  : '0' }
            </p>
          </div>)
}

export default connect(
  state => ({
    calculator: state.calculator
  }),
  {}
)(CalculatorDisplay);
