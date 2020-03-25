import React, { useState, useEffect } from 'react'
import getRandomQuote from '../services/quotes'

// Stylesheet
import './QuoteBox.css'

const QuoteBox = props => {

  const [ quote, setQuote ] = useState({
    text: '',
    author: ''
  });

  useEffect(() => {
    setQuote(getRandomQuote())
  }, []);

  const handleClick = e => {
    setQuote(getRandomQuote(quote.id));
  }

  return (<div id="quote-box" className="jumbotron">
            <div className="container">
              <div id="quote-buttons">
                <div className="row">
                  <div className="col-md-6 text-left">
                    <a id="tweet-quote"
                       href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}>
          <i className="fa fa-twitter"></i>
                    </a>
                </div>
                  <div className="col-md-6 ml-md-auto text-right">
                    <button id="new-quote" className="btn btn-primary" onClick={handleClick}>New Quote</button>
                </div>
                </div>
              </div>
              <div>
                <div id="quote-text" className="text-center display-4">
                  <q id="text">{quote.text}</q>
                </div>
                <div id="quote-author" className="text-right">
                  <span id="author">&mdash; {quote.author}</span>
                </div>
              </div>
            </div>
          </div>);
}

export default QuoteBox
