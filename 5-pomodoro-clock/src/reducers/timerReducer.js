

const MAX_MINUTES = 60;
const TICK = 1;

const DEFAULT_STATE = {
  sessionLength: 25, // minutes
  breakLength: 5,    // minutes
  timeLeft: 25 * 60, // ms
  timerId: null, // used to clear timer
  timerLabel: 'Session',
  ticking: false,
}

const tickTime = (time, tick) => {
  const newTime = time + tick;
  return newTime > MAX_MINUTES ? MAX_MINUTES
    : newTime < 1 ? 1
    : newTime;
}

const reducer = (state = DEFAULT_STATE, action) => {
  const switcher = {
    'SESSION_INCREMENT': () => {
      const sessionLength = tickTime(state.sessionLength, TICK);
      return ({
      ...state,
        sessionLength,
        timeLeft: sessionLength * 60
      });
    },
    'SESSION_DECREMENT': () => {
      const sessionLength = tickTime(state.sessionLength, -1 * TICK);
      return ({
      ...state,
        sessionLength,
        timeLeft: sessionLength * 60
      });
    },
    'BREAK_INCREMENT': () => ({
      ...state,
      breakLength: tickTime(state.breakLength, TICK)
    }),
    'BREAK_DECREMENT': () => ({
      ...state,
      breakLength: tickTime(state.breakLength, -1 * TICK)
    }),
    'START_SESSION': () =>{
      return ({
        ...state,
        timerId: action.timer.id,
        timerLabel: 'Session',
        ticking: true
      })
    },
    'START_BREAK': () =>{
      return ({
        ...state,
        timerId: action.timer.id,
        timeLeft: state.breakLength,
        timerLabel: 'Break',
      })
    },
    'START_TIMER': () => {
      return {
        ...state,
        ticking: true
      }
    },
    'PAUSE_TIMER': () => ({
      ...state,
      ticking: false,
      timerId: null,
    }),
    'SWITCH_TIMER': () => {
      const timerVal = state.timerLabel === 'Session' ?
            {
              timerLabel: 'Break',
              timeLeft: state.breakLength * 60
            }
            : {
              timerLabel: 'Session',
              timeLeft: state.sessionLength * 60
            }
      return ({
        ...state,
        ...timerVal
      })
    },
    'TICK_TIMER': () => {
      const timeLeft = state.timeLeft - 1 < 0 ? -1
            : state.timeLeft - 1;
      return {
        ...state,
        timeLeft
      }
    },
    'RESET': () => {
      if(state.timerId) window.clearInterval(state.timerId);
      return {
        ...DEFAULT_STATE
      };
    }
  }

  return switcher.hasOwnProperty(action.type) ?
    switcher[action.type]() : state;
}


export const switchTimer = () => dispatch => {
  return dispatch({
    type: 'SWITCH_TIMER'
  });
}

export const tickTimer = () => dispatch => {
  return dispatch({
    type: 'TICK_TIMER'
  });
}

export const startTimer = () => dispatch => {
  return dispatch({
    type: 'START_TIMER'
  })
}

export const pauseTimer = () => dispatch => {
  console.log('pausing session');
  return dispatch({
    type: 'PAUSE_TIMER'
  })
}

export const startSession = tid => dispatch => {
  return dispatch({
    type: 'START_SESSION',
    timer: {
      id: tid
    }
  })
}

export const startBreak = timerId => dispatch => {
  console.log('starting break', timerId);
  return dispatch({
    type: 'START_BREAK',
    timer: {
      id: timerId
    }
  })
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
