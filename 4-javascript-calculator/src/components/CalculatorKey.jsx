import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { pushKey } from '../reducers/calcReducer';

const CalculatorKey = ({ cKey, id, cols, pushKey }) => {

  useEffect(() => {
    document.addEventListener('keypress', e => {
      if(e.keyCode === cKey.charCodeAt(0)) pushKey(cKey);
    });
  }, [id]);

  return (<button id={ id }
                  className="calc-key"
                  onClick={ () => pushKey(cKey) }>
            { cKey }
          </button>)
}

export default connect(
  null,
  { pushKey }
)(CalculatorKey);
