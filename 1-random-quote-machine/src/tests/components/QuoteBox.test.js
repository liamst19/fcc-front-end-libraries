import React from 'react'
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from "react-dom"
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import QuoteBox from '../../components/QuoteBox'

describe('QuoteBox component', () => {

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render random quote', () => {
    // Render Component
    act(() => {
      ReactDOM.render(<QuoteBox />, container)
    })

    expect(container.querySelector('#text').textContent).not.toBe('')

  })

  it('should render new quote with button click', () => {
    // Render Component
    act(() => {
      ReactDOM.render(<QuoteBox />, container)
    })

    const btn = container.querySelector('button')
    const origText = container.querySelector('#text').textContent

    // Button Click
    act(() => {
      fireEvent.click(btn)
    })

    const newText = container.querySelector('#text').textContent

    expect(newText).not.toBe(origText)
  })

})
