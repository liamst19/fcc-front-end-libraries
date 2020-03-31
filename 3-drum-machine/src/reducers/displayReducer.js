
const reducer = (state = '', action) => {
  const switcher = {
    'UPDATE': () => action.text,
    'CLEAR': () => ''
  }
  return switcher.hasOwnProperty(action.type) ?
    switcher[action.type]() : state;
}

export const updateDisplay = text => dispatch => {
  return dispatch({
    type: 'UPDATE',
    text: text
  });
}

export const clearDisplay = () => dispatch => {
  return dispatch({
    type: 'CLEAR'
  });
}

export default reducer;
