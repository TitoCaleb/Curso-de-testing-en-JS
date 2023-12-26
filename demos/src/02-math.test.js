const {
  division, resta, multiply, sum,
} = require('./02-math');

describe('Should function all the math functions', () => {
  test('adds 1 + 3 should be 4', () => {
    const rta = sum(1, 3);
    expect(rta).toBe(4);
  });
  test('resta 4 - 1 should be 3', () => {
    const rta = resta(4, 1);
    expect(rta).toBe(3);
  });
  test('multi 3 * 3 should be 9', () => {
    const rta = multiply(3, 3);
    expect(rta).toBe(9);
  });
  test('adds 8 / 2 should be 4', () => {
    const rta = division(8, 2);
    expect(rta).toBe(4);
  });
});
