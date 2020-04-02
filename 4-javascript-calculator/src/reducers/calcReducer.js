
const PAD = 10000000000000000;
export const arithOperation = {
  '+': (a, b) => ((PAD * a) + (PAD * b)) / PAD,
  '-': (a, b) => ((PAD * a) - (PAD * b)) / PAD,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

const OPRX = /^[-+*/]$/;
const CHAR_LIM = 17;
const PRECISION = 15;

const DEFAULT_STATE = {
  operator: '',
  term1: '0',
  term2: ''
}

const doArithmetic = ({operator, term1, term2}) => {
  return arithOperation[operator](term1, term2)
    .toPrecision(PRECISION)
    .replace(/(?:\.0+|(\.\d+?)0+)$/, "$1")
    .slice(0, CHAR_LIM);
}

const appendChar = (state, char) => {

  const appendToTerm = (term, char) => {
    return (
      char === '.' ? // ----- decimal
        term.length === 0 ? '0.'
        : term === '0' ? '0.'
        : term === '-' ? '-0.'
        : /\./.test(term) ? term : term.concat('.')
      // ---- numeric
      : term === '0' ? char : term.concat(char)
    ).slice(0, CHAR_LIM)
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
        : { term1: doArithmetic(state),
          term2: '',
          operator: char }
      // char is not subtraction ----------
      : state.term2 ?
        state.term2 === '-' ? { ...state, term2: '', operator: char }
        : { term1: doArithmetic(state),
                        term2: '',
                        operator: char }
      : state.term1 ? { ...state,
                        operator: char} // replace operator
      : state
    )
  }

  return (
    // ---- if char is operator
    OPRX.test(char) ? appendToOperator(state, char)
    // ---- if char is numeric or decimal
      : OPRX.test(state.operator) ? // does state have an operator?
      { ...state, term2: appendToTerm(state.term2, char)}
    : { ...state, term1: appendToTerm(state.term1, char)}
  );
}

const calculateState = (state) => {
  return (
    state.term1 && state.term2 && state.operator ?
      {...DEFAULT_STATE, term1: doArithmetic(state)}
    : {DEFAULT_STATE, ...state}
  );
}

// ------------------------------------------------------------
// ------------------------------------------------------------

const reducer = (state = DEFAULT_STATE, action) => {
  const switcher = {
    'CALC_CLEAR': () => DEFAULT_STATE,
    'CALC_APPEND': () => appendChar(state, action.char),
    'CALC_EVAL': () => calculateState(state)
  }
  return switcher.hasOwnProperty(action.type) ?
    switcher[action.type]() : state;
}

export const pushKey = key => {
  return key === 'C' ? clearCalculator()
    : key === '=' ? evalCalculator()
    : appendCalculator(key);
}

export const evalCalculator = () => dispatch => dispatch({
  type: 'CALC_EVAL'
});

export const clearCalculator = () => dispatch => dispatch({
  type: 'CALC_CLEAR'
});

export const appendCalculator = key => dispatch => dispatch({
  type: 'CALC_APPEND',
  char: key
});

export default reducer;
