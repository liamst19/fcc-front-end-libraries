import calculate, { arithOperation } from '../services/calculator'

const appendChar = (state, char) => {
      const OPRX = /[-+*/]/;
      const last = state[state.length - 1];
      return (
        char === '.' ? state
          : char === '0' && state[0] === '0' && state.length === 1 ? []
          : OPRX.test(last) && OPRX.test(char) ?
          char === '-' ? [...state, char]
          : [...state.slice(0, state.length - 1), char]
        : [...state, char]
      )
}

const reducer = (state = [], action) => {
  const switcher = {
    'CALC_CLEAR': () => [],
    'CALC_APPEND': () => appendChar(state, action.char),
    'CALC_CALCULATE': () => calculate(state).toString().split('')
  }
  return switcher.hasOwnProperty(action.type) ?
    switcher[action.type]() : state;
}

export const pushKey = key => {
  return key === '=' ? calculateStore()
    : key === 'C' ? clearCalculator()
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
