import React from 'react'
import marked from 'marked'

import convertMarkdown from '../services/markdown';

const Preview = props => {
  return (<div id="preview" dangerouslySetInnerHTML={{ __html: convertMarkdown(props.text) }}>
         </div>);
}

export default Preview;
