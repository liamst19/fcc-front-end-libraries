
const reducer = (state = '', action) => {
  const dispatcher = {
    'INIT': () => action.text,
    'UPDATE': () => action.text
  }
  return dispatcher.hasOwnProperty(action.type) ?
    dispatcher[action.type]() : state;
}

export const initializeText = text =>  dispatch => {
  return dispatch({
    type: 'INIT',
    text: text
  });
}

export const updateText = text => dispatch => {
  return dispatch({
    type: 'UPDATE',
    text: text
  })
}

export default reducer
