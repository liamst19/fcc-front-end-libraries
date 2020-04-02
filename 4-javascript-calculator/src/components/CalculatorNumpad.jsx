import React from 'react';

import CalculatorKey from './CalculatorKey';

const CalculatorNumpad = props => {
  return (<div id="calc-pad">
            <CalculatorKey id="clear" cKey={'C'} />
            <CalculatorKey id="equals" cKey={'='} />

            <CalculatorKey id="add" cKey={'+'} />
            <CalculatorKey id="subtract" cKey={'-'} />
            <CalculatorKey id="multiply" cKey={'*'} />
            <CalculatorKey id="divide" cKey={'/'} />

            <CalculatorKey id="decimal" cKey={'.'} />

            <CalculatorKey id="zero" cKey={'0'} />
            <CalculatorKey id="one" cKey={'1'} />
            <CalculatorKey id="two" cKey={'2'} />
            <CalculatorKey id="three" cKey={'3'} />
            <CalculatorKey id="four" cKey={'4'} />
            <CalculatorKey id="five" cKey={'5'} />
            <CalculatorKey id="six" cKey={'6'} />
            <CalculatorKey id="seven" cKey={'7'} />
            <CalculatorKey id="eight" cKey={'8'} />
            <CalculatorKey id="nine" cKey={'9'} />
          </div>)
}

export default CalculatorNumpad;
