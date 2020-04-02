
const RX_OP = /^[/*+-]+$/;
const RX_DEC = /^-?([0-9]{1}|[1-9]{1}[0-9]+)?\.[0-9]+$/;
const RX_INT = /^-?[0-9]{1}|[1-9]{1}[0-9]+$/;
const PAD = 10000000000000000;

export const arithOperation = {
  '+': (a, b) => ((PAD * a) + (PAD * b)) / PAD,
  '-': (a, b) => ((PAD * a) - (PAD * b)) / PAD,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

/* decimalFn()
 *
 */
const decimalFn = (pre, last, idx) => {
  const d = '.';
  return (
    last[last.length - 1] === d ? [...pre, last]
      : RX_INT.test(last) ? [...pre, last.concat(d)]
      : RX_DEC.test(last) ? [...pre, last]
      : RX_OP.test(last) ?
      (last.length > 1 && last[last.length - 1] === '-') ?
      [...pre, last[last.length - 2], '-0.']
      : [...pre, last, '0.']
    : pre.length === 0 ? ['0.']
      : [...pre, last, '0.']
  );
}

/* operatorFn()
 *
 */
const operatorFn = (pre, last, operator, lastIdx) => {
  return (
    operator === '-' ?
      pre.length === 0 ? // beginning?
      !isNaN(last) && last !== '' ? [last, operator]
      : [operator]
    // if - and not beginning
      : RX_OP.test(last) ?
      [...pre, last[last.length - 1].concat('-')]
      : [...pre, Number(last), operator]

    // ------- Not subtraction
    :RX_OP.test(last) ? // is last an operator?
      pre.length === 0 ? [] // beginning?
      : lastIdx ? [...pre] // remove if last is operator
      : [...pre, operator] // replace last operator

    // -------- last is Numeric
    : !isNaN(last) && last !== '' ?
      pre.length === 0 ? [Number(last), operator]
      : lastIdx ? [...pre, Number(last)]
      : [...pre, Number(last), operator]
    : []
  );
}

/* numericFn
 *
 */
const numericFn = (pre, last, char) => {
  return(
    pre.length === 0 ?
       last === '' || last === '0' ? [char]
      : [last.concat(char)]
    : last === '0' ? [...pre, char]
      : RX_OP.test(last) ?
      /^[+-/*]-$/.test(last) ? [...pre, last[0], '-'.concat(char)]
      : [...pre, last, char]
      : [...pre, last.concat(char)]
  )
}
/* reduceArray(arr)
 */
const reduceArray = arr => {
  return arr.reduce((acc, c, i) => {
    const last = acc[acc.length - 1] || '';
    const pre = acc.slice(0, acc.length -1) || [];
    const lastIdx = arr.length - 1;
    return (
      c === '.' ? decimalFn(pre, last)
        : RX_OP.test(c) ? operatorFn(pre, last, c, i === lastIdx)
        : /[0-9]/.test(c) ? numericFn(pre, last, c)
        : [...pre, last] // Throw error on invalid character?
    );
  }, [])
}

/* calculate(chars)
 * Parses an array of characters and calculates
 */
const calculate = chars => {

  return reduceArray(chars).reduce((acc, c, i) => {
    return !isNaN(c) ?
      ['', arithOperation[acc[0]](Number(acc[1]), Number(c))]
      : [c, acc[1]];
  }, ['+', 0])[1].toPrecision(15).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
}

export default calculate;
