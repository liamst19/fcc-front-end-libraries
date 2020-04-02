
import calc from '../../services/calculator'

describe('calculator service', () => {

  it('should return a number', () => {
    expect(calc([])).not.toBeNaN();
  });

  test('integer arithmetic', () => {
    expect(calc('1+1'.split(''))).toEqual('2');
    expect(calc('1++1'.split(''))).toEqual('2');
    expect(calc('1+-1'.split(''))).toEqual('0');
    expect(calc('1+-1+12*4'.split(''))).toEqual('48');
    expect(calc('5*-5'.split(''))).toEqual('-25');
    expect(calc('3+5*6-2/4'.split(''))).toEqual('11.5');
    expect(calc('1/3'.split(''))).toEqual('0.3333333');
  });

  test('decimal arithmetic', () => {
    expect(calc('1+1.1'.split(''))).toEqual('2.1');
    expect(calc('1.1+1.1'.split(''))).toEqual('2.2');
    expect(calc('1.1*2/3.3'.split(''))).toEqual('0.6666667')
    expect(calc('1.111+2/3.3*-5'.split(''))).toEqual('-4.713636')
  })

});
