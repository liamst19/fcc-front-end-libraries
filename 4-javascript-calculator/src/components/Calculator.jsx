import React from 'react';

import CalculatorNumpad from './CalculatorNumpad';
import CalculatorDisplay from './CalculatorDisplay';

import './Calculator.css'

const Calculator = props => {

  return (<div id="calculator">
            <CalculatorDisplay />
            <CalculatorNumpad />
          </div>)
}

export default Calculator;
