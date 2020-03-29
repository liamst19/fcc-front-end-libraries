import convertMarkdown from '../../services/markdown'

describe('markdown', () => {

  it('returns something', () => {
    expect(convertMarkdown('test')).not.toBeNull();
  })

  it('renders text as html element', () => {
    const mdText = '# test';
    const newText = convertMarkdown(mdText);
    expect(newText).toMatch('<h1 id=\"test\">test</h1>')
  })

})
