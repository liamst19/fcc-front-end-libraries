import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Preview from './components/Preview';
import Editor from './components/Editor';

// Reducers
import { initializeText, updateText } from './reducers/textReducer';

const SAMPLETEXT = `# Header 1
## Header 2
- [Link to Google](https://www.google.com/)
- \`inline code block\`
- ![image](myimage.jpg "image")
- **bold text**
- \`\`\`
Block Code
\`\`\`
- Blockquote
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

const App = ({ text, initializeText, updateText })  => {

  useEffect(() => {
    initializeText(SAMPLETEXT);
  }, [initializeText]);

  const handleChange = textValue => {
    updateText(textValue);
  }

  return (
    <div className="App container">
      <h1>Markdown Previewer</h1>
      <Editor text={text} onChange={ handleChange } />
      <Preview text={text} />
    </div>
  );
}

export default connect(
  state => ({ text: state.text }),
  { initializeText, updateText }
)(App);
