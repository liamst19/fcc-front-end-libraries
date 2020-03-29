import React from 'react';

const Editor = props => {

  const handleChange = event => {
    props.onChange(event.target.value);
  }

  return (<div className="form-group">
            <textarea id="editor" className="form-control rounded-0" value={props.text} rows="10" onChange={ handleChange } />
          </div>)
}

export default Editor;
