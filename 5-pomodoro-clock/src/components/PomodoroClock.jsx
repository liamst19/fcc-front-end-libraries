import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import {
  incrementSession, decrementSession,
  incrementBreak, decrementBreak,
  startSession, startBreak,
  startTimer, pauseTimer, switchTimer,
  reset, tickTimer
} from '../reducers/timerReducer'

import TimeControl from './TimeControl';

import './PomodoroClock.css'

const PomodoroClock = ({
  incrementSession, decrementSession,
  incrementBreak, decrementBreak,
  startSession, startBreak,
  startTimer, pauseTimer, switchTimer,
  reset, tickTimer,
  timer
}) => {
  const audioRef = useRef();

  useEffect(() => {
    if(timer.timeLeft === 0){
      audioRef.current.play();
      switchTimer();
    }
  }, [timer.timeLeft]);

  useEffect(() => {
    if(timer.ticking){
      const tid = window.setInterval(() => {
        tickTimer()
      }, 1000);
      startSession(tid);
    }
  }, [timer.ticking]);

  const handleStartStop = e => {
    if(timer.timerId){ // pause
      window.clearInterval(timer.timerId);
      pauseTimer();
    } else{ // start
      startTimer();
    }
  }

  const handleReset = e => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0.0;
    reset();
  }

  const formatTime = (time) => {
    const cZero = t => t < 10 ? '0' + t : t;
    const minutes = cZero((time - (time % 60)) / 60);
    const seconds = cZero(time % 60);
    return `${minutes}:${seconds}`;
    // const tMs = time > 0 ? time * 1000 : 0;
    // return new Date (tMs).toISOString().slice(14, 19);
  };

  return (<div id="pomodoro-clock">
            <div id="time-control">
              <TimeControl id="break"
                           label="Break"
                           time={timer.breakLength}
                           onIncrement={incrementBreak}
                           onDecrement={decrementBreak} />
              <TimeControl id="session"
                           label="Session"
                           time={timer.sessionLength}
                           onIncrement={incrementSession}
                           onDecrement={decrementSession} />
            </div>
            <div id="time-display">
              <div id="timer-label">{timer.timerLabel}</div>
              <div id="time-left">{
                formatTime(timer.timeLeft)
              }</div>
              <audio src={'./bell.mp3'}
                      ref={ audioRef }
                      id="beep"/>
            </div>
            <div id="pomodoro-buttons">
              <button id="start_stop"
                      onClick={handleStartStop}>{
                        timer.ticking ? 'Pause' : 'Start'
                      }</button>
              <button id="reset"
                      onClick={handleReset}>Reset</button>
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
    startSession, startBreak,
    startTimer, pauseTimer, switchTimer,
    reset, tickTimer
  }
)(PomodoroClock);
