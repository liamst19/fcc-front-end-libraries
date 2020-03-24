import React, { useState, useEffect } from 'react'
import getRandomQuote from '../services/quotes'

const QuoteBox = props => {
  const [ quote, setQuote ] = useState({
    text: 'text',
    author: 'author'
  });

  const handleClick = e => {
    console.log(quote.id)
    setQuote(getRandomQuote(quote.id));
  }

  useEffect(() => {
    setQuote(getRandomQuote())
  }, [])

  const cardStyle = {
    margin: '4em auto',
    fontSize: '20px'
  }

  return (<div id="quote-box" className="card w-75" style={ cardStyle } >
              <div id="quote-buttons" className="card-header">
                <div className="row">
                  <div className="col-md-4 text-left">
                    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}><i className="fa fa-twitter"></i></a>
                </div>
                  <div className="col-md-4 ml-md-auto text-right">
                    <button id="new-quote" className="btn-md" onClick={handleClick}>New Quote</button>
                </div>
                </div>
              </div>
              <div className="card-body">
                <div id="quote-text" className="card-text text-center display-4">
                  <span id="text">{quote.text}</span>
                </div>
                <div id="quote-author" className="card-text text-right">
                  <span id="author">&mdash; {quote.author}</span>
                </div>
              </div>
          </div>);
}

export default QuoteBox
