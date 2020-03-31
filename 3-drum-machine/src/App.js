import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import DrumMachine from './components/DrumMachine';

// Drum Presets
import { drumPreset1 } from './services/drumConfig';

// Reducers
import { initDrumPads } from './reducers/drumReducer.js'

const App = ({ initDrumPads }) => {

  useEffect(() => {
    initDrumPads(drumPreset1);
  }, [initDrumPads]);

  return (
    <div className="App container">
      <DrumMachine pads={ drumPreset1 } />
    </div>
  );
}

export default connect(
  state => ({ pads: state.pads }),
  { initDrumPads }
)(App);
