import React from 'react'
import marked from 'marked'

import convertMarkdown from '../services/markdown';

const style = {
  border: "1px solid #ddd",
  padding: "0.5rem",
  marginBottom: "3rem"
}

const Preview = props => {
  return (<div id="preview" style={style} dangerouslySetInnerHTML={{ __html: convertMarkdown(props.text) }}>
         </div>);
}

export default Preview;
