import React from 'react';
import { connect } from 'react-redux';

import DrumPad from './DrumPad';
import './DrumMachine.css';

const DrumMachine = ({pads, display }) => {

  return (<div id="drum-machine">
            <p id="display">{ display }</p>
            <div id="drum-pads">
              { pads.map(pad => <DrumPad key={ pad.id }
                                         pad={ pad } />) }
            </div>
          </div>)
}

export default connect(
  state => ({ display: state.display }),
  {}
)(DrumMachine);
