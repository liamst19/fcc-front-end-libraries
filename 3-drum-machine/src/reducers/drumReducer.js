

const reducer = (state = [], action) => {
  const switcher = {
    'SET_PAD' : () => state.some(pad => pad.id === action.pad.id) ?
      state.map(pad => pad.id === action.pad.id ? action.pad : pad)
      : [...state, action.pad],
    'INIT_PADS' : () => action.pads
  }
  return switcher.hasOwnProperty(action.type) ?
    switcher[action.type]() : state;
}

export const updatePad = pad => dispatch => {
  return dispatch({
    type: 'SET_PAD',
    pad: pad
  });
}

export const initDrumPads = pads => dispatch => {
  return dispatch({
    type: 'INIT_PADS',
    pads: pads
  });
}

export default reducer;
