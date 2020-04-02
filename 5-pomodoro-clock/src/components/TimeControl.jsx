import React from 'react';
import { connect } from 'react-redux';

const TimeControl = props => {

  return(<div id={props.id}>
           <div id={`${props.id}-label`}>{props.label}</div>
           <button id={`${props.id}-decrement`}
                   onClick={props.onDecrement}>
             <i>-</i>
           </button>
           <span id={`${props.id}-length`}>{props.time}</span>
           <button id={`${props.id}-increment`}
                   onClick={props.onIncrement}>
             <i>+</i>
           </button>
         </div>)
}

export default connect(
  null,
  {}
)(TimeControl);
