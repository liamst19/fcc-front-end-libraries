import React from 'react';

const Editor = props => {

  const handleChange = event => {
    props.onChange(event.target.value);
  }

  return (<div>
            <textarea id="editor" value={props.text} onChange={ handleChange } />
          </div>)
}

export default Editor;
