import React from 'react';
import { connect } from 'react-redux';

const CalculatorDisplay = ({ calculator }) => {
  return (<div id="display-panel">
            <div id="display-operator">&nbsp;{ calculator.operator }</div>
            <div id="display-term">&nbsp;<span id="display">{ calculator.term2 ? calculator.term2 : calculator.term1 }</span></div>
          </div>)
}

export default connect(
  state => ({
    calculator: state.calculator
  }),
  {}
)(CalculatorDisplay);
