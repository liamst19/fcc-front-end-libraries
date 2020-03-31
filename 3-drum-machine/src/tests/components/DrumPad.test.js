import React from 'react'
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from "react-dom"
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

import DrumPad from '../../components/DrumPad.jsx'

describe('DrumPad component', () => {

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  })

  it('should render container with audio element and a button', () => {

    const pad = {
      id: 'W',
      src: 'http://www.google.com/'
    }

    act(() => {
      ReactDOM.render(<DrumPad pad={ pad } />, container)
    })

    const audio = container.querySelector('audio');
    const btn = container.querySelector('button');

    console.log('audio', audio);

    expect(audio.src).toBe('http://www.google.com/')
    expect(btn.textContent).toBe('W')
  })

})
