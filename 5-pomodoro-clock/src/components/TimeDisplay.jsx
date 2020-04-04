import React from 'react';
import { connect } from 'react-redux';

const TimeDisplay = ({timer}) => {

  const time = new Date (timer.timeLeft ? timer.timeLeft
                         : timer.sessionLength * 1000)
        .toISOString().slice(14, 19);

  return (<div id="time-display">
            <div id="timer-label">{timer.timerLabel}</div>
            <div id="time-left">{ time }</div>
          </div>)
}

export default connect(
  state => ({
    timer: state.timer
  }),
  {}
)(TimeDisplay)
