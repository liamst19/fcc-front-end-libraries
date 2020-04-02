

const MAX_MIN = 60;

const tickTime = (time, tick) => {
  const newTime = time + tick;
  return newTime > MAX_MIN ? MAX_MIN
    : newTime < 1 ? 1
    : newTime;
}

const DEFAULT_STATE = {
  session: 25,
  break: 5,
  sessionTime: null,
  breakTime: null,
  timerLabel: 'Session'
}

const reducer = (state = DEFAULT_STATE, action) => {
  const TICK = 1;
  const switcher = {
    'SESSION_INCREMENT': () => ({ ...state, session: tickTime(state.session, TICK) }),
    'SESSION_DECREMENT': () => ({ ...state, session: tickTime(state.session, -1 * TICK) }),
    'BREAK_INCREMENT': () => ({ ...state, break: tickTime(state.break, TICK) }),
    'BREAK_DECREMENT': () => ({ ...state, break: tickTime(state.break, -1 * TICK)}),
    'SET_BREAK_TIME': () => ({...state, time: action.time}),
    'SET_SESSION_TIME': () => ({...state, time: action.time}),
    'RESET': () => DEFAULT_STATE
  }

  return switcher.hasOwnProperty(action.type) ?
    switcher[action.type]() : state;
}

export const startSession = () => dispatch => {
  console.log('starting session');
}

export const pauseSession = () => dispatch => {
  console.log('pausing session');
}

export const startBreak = () => dispatch => {
  console.log('starting break');
}

export const pauseBreak = () => dispatch => {
  console.log('pausing break');
}

export const reset = () => dispatch => dispatch({
  type: 'RESET'
})

export const incrementSession = () => dispatch => dispatch({
  type: 'SESSION_INCREMENT'
});

export const decrementSession = () => dispatch => dispatch({
  type: 'SESSION_DECREMENT'
});

export const incrementBreak = () => dispatch => dispatch({
  type: 'BREAK_INCREMENT'
});

export const decrementBreak = () => dispatch => dispatch({
  type: 'BREAK_DECREMENT'
});

export default reducer;
