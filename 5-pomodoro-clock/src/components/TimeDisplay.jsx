import React from 'react';
import { connect } from 'react-redux';

const convertTime = (session, time) => {
  const timeElapsed = time ?
        time - Date.now()
        : 0;
  return new Date((session * 60000) - timeElapsed)
    .toISOString()
    .slice(14, 19)
}

const TimeDisplay = props => {

  return (<div id="time-display">
            <div id="timer-label">{props.timer.timerLabel}</div>
            <div id="time-left">
              {convertTime(props.timer.session,
                           props.timer.sessionTime)}
            </div>
          </div>)
}

export default connect(
  state => ({
    timer: state.timer
  }),
  {}
)(TimeDisplay)
