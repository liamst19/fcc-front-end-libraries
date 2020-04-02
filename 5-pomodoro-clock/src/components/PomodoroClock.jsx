import React from 'react';
import { connect } from 'react-redux';

import {
  incrementSession, decrementSession,
  incrementBreak, decrementBreak,
  startSession, pauseSession,
  reset
} from '../reducers/timerReducer'

import TimeDisplay from './TimeDisplay';
import TimeControl from './TimeControl';

import './PomodoroClock.css'

const PomodoroClock = props => {

  return (<div id="pomodoro-clock">
            <div id="time-control">
              <TimeControl id="break"
                           label="Break"
                           time={props.timer.break}
                           onIncrement={props.incrementBreak}
                           onDecrement={props.decrementBreak} />
              <TimeControl id="session"
                           label="Session"
                           time={props.timer.session}
                           onIncrement={props.incrementSession}
                           onDecrement={props.decrementSession} />
            </div>
            <TimeDisplay />
            <div id="pomodoro-buttons">
              <button id="start_stop"
                      onClick={props.startSession}>Start</button>
              <button id="reset"
                      onClick={props.reset}>Reset</button>
            </div>
          </div>)
}

export default connect(
  state => ({
    timer: state.timer
  }),
  {
  incrementSession, decrementSession,
  incrementBreak, decrementBreak,
  startSession, pauseSession,
  reset
  }
)(PomodoroClock);
