import marked from 'marked'
marked.setOptions({
  breaks: true
});

const convertMarkdown = text => {
  return marked(text, {sanitize: true});
}

export default convertMarkdown
