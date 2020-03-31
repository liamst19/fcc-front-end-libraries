import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateDisplay } from '../reducers/displayReducer';

const DrumPad = ({ pad, updateDisplay }) => {

  const audioRef = useRef(null);
  const playPad = () => {
    const sound = audioRef.current;
    sound.currentTime = 0;
    sound.play();
    updateDisplay(pad.name);
  };

  // Add keydown event listener when document is loaded
  useEffect(() => {
    document.addEventListener('keydown', e => {
      if(e.keyCode === pad.id.charCodeAt(0)) playPad();
    });
  }, [pad.id]); // not too confident about this

  const handleClick = event => {
    playPad();
  }
  
  return (<div id={ `drum-pad-${pad.id}` } onClick={ handleClick } className="drum-pad">
            <audio src={ pad.src }
                   id={ pad.id }
                   className="clip"
                   ref={ audioRef } ></audio>
            { pad.id }
          </div>)
}

export default connect(
  null,
  { updateDisplay }
)(DrumPad);
