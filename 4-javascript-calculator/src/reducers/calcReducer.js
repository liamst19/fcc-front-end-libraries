import { arithOperation } from '../services/calculator'

const DEFAULT_STATE = {
  operator: '',
  term1: '0',
  term2: ''
}

const appendChar = (state, char) => {

  const OPRX = /^[-+*/]$/;

  const doArith = ({operator, term1, term2}) => {
    console.log('doing arith');
    return arithOperation[operator](term1, term2)
      .toPrecision(15).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
  }

  const appendToTerm = (term, char) => {
    return (
      char === '.' ? // ----- decimal
        term.length === 0 ? '0.'
        : term === '0' ? '0.'
        : term === '-' ? '-0.'
        : /\./.test(term) ? term : term.concat('.')
      // ---- numeric
      : term === '0' ? char : term.concat(char)
    )
  }

  const appendToOperator = (state, char) => {
    return (
      char === '-' ? // subtraction or minus ----------
        state.term2.length === 0 ? // if there's no term2
        // --- set term1
      (/^0?\.?$/.test(state.term1)) ? // if term1 empty or zero
        { ...state, term1: '-'.concat(state.term1) }
      // if term1 has term
      : state.operator ? // -- * if there is already an operator
        {...state, term2: '-' } // -- second term will be negative
      : {...state, operator: '-' } // replace operator
      // -- if there is term 2
      : state.term2 === '-' ? { ...state, term2: '' }
        : { term1: doArith(state),
          term2: '',
          operator: char }
      // char is not subtraction ----------
      : state.term2 ?
        state.term2 === '-' ? { ...state, term2: '', operator: char }
        : { term1: doArith(state),
                        term2: '',
                        operator: char }
      : state.term1 ? { ...state,
                        operator: char} // replace operator
      : state
    )
  }

  const newState =
        // if equal sign calculate and reset
        char === '=' ?
        state.term1 && state.term2 && state.operator ?
        {...DEFAULT_STATE, term1: doArith(state)}
        : {DEFAULT_STATE, ...state}
  // ---- if char is operator
        : OPRX.test(char) ? appendToOperator(state, char)
  // ---- if char is numeric or decimal
        : OPRX.test(state.operator) ? // does state have an operator?
        { ...state, term2: appendToTerm(state.term2, char)}
        : { ...state, term1: appendToTerm(state.term1, char)};
  return newState;
}

const reducer = (state = DEFAULT_STATE, action) => {
  const switcher = {
    'CALC_CLEAR': () => DEFAULT_STATE,
    'CALC_APPEND': () => appendChar(state, action.char),
    'CALC_CALCULATE': () => state.term1
  }
  return switcher.hasOwnProperty(action.type) ?
    switcher[action.type]() : state;
}

export const pushKey = key => {
  return key === 'C' ? clearCalculator()
    : appendCalculator(key);
}

export const calculateStore = () => dispatch => dispatch({
  type: 'CALC_CALCULATE'
});

export const clearCalculator = () => dispatch => dispatch({
  type: 'CALC_CLEAR'
});

export const appendCalculator = key => dispatch => dispatch({
  type: 'CALC_APPEND',
  char: key
});

export default reducer;
