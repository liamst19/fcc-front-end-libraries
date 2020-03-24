
/* List of Quotes to be displayed
 *
 */
const QUOTES = [
  {
    id: 0,
    author: 'Heraclitus',
    text: 'The world of the waking is one and shared, but the sleeping turn aside each into his private world.'
  },
  {
    id: 1,
    author: 'Friedrich Nietzsche',
    text: 'What does nihilism mean? That the highest values devaluate themselves. The aim is lacking; "why?" finds no answer.'
  },
  {
    id: 2,
    author: 'Ludwig Wittgenstein',
    text: 'Our language can be regarded as an ancient city: a maze of little streets and squares, of old and new houses, of houses with extensions from various periods, and all this surrounded by a multitude of new suburbs with straight and regular streets and uniform houses.'
  },
  {
    id: 3,
    author: 'Protagoras',
    text: 'Man is the measure of all things.'
  },
  {
    id: 4,
    author: 'Socrates',
    text: 'The unexamined life is not worth living.'
  },
  {
    id: 5,
    author: 'Ludwig Wittgenstein',
    text: 'Whereof one cannot speak, thereof one must be silent'
  },
  {
    id: 6,
    author: 'Rene Descartes',
    text: 'I think therefore I am'
  },
  {
    id: 7,
    author: 'Voltaire',
    text: 'If God did not exist, it would be necessary to invent Him'
  },
  {
    id: 8,
    author: 'Aristotle',
    text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit'
  },
  {
    id: 9,
    author: 'Jean-Jacques Rousseau',
    text: 'Man is born free, but is everywhere in chains'
  },
]

/* getRandomQuote()
 * Fetches a random quote and author from list
 */
const getRandomQuote = (last = -1) => {
  let quote;

  // Making sure that the new quote is different
  do {
    quote = getQuote(randomIndex(0, QUOTES.length));
  } while(quote.id === last);

  return quote;
}

/* getQuote()
 * Fetches a quote from list with index
 */
export const getQuote = (i) =>  QUOTES[i];

/* randomIndex
 * Get a random integer between min and max
 */
export const randomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default getRandomQuote
