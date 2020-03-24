import getRandomQuote, { getQuote } from  './quotes'

describe('displays a quote', () => {
  test('returned quote is not null', () => {
    const quote = getRandomQuote();
    expect(quote).not.toBeNull();
  })

  test('returns specified quote', () => {
    const quote = getQuote(1);
    expect(quote.author).toBe('Heraclitus')
    expect(quote.text).toBe("Although the account is shared, most men live as though their thinking were a private possession.")
  })
})
