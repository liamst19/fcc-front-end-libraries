import getRandomQuote, { getQuote } from  '../../services/quotes'

describe('displays a quote', () => {
  test('returned quote is not null', () => {
    const quote = getRandomQuote();
    expect(quote).not.toBeNull();
  })

  test('returns specified quote', () => {
    const quote = getQuote(4);
    expect(quote.author).toBe('Socrates')
    expect(quote.text).toBe("The unexamined life is not worth living.")
  })
})
