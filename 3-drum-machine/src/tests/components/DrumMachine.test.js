import React from 'react'
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

import DrumMachine from '../../components/DrumMachine'

describe('DrumMachine component', () => {

  let container;

  let testPads = [
    { id: 'Q', src: './sound/q.wav'},
    { id: 'W', src: './sound/w.wav'},
    { id: 'E', src: './sound/e.wav'},
    { id: 'A', src: './sound/a.wav'},
    { id: 'S', src: './sound/s.wav'},
    { id: 'D', src: './sound/d.wav'},
    { id: 'Z', src: './sound/z.wav'},
    { id: 'X', src: './sound/x.wav'},
    { id: 'C', src: './sound/c.wav'}
  ];

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  })

  it('should render component', () => {

    act(() => {
      ReactDOM.render(<DrumMachine pads={ testPads } />, container)
    })

    expect(container.querySelector('#display').children.length).toBe(testPads.length)

  })


})
