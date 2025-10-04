const Multiplier = require('./ejercicio_0_eliana_larroque');

test('verifies that an array is number1 long and are multiples of number2', () => {
  expect(Multiplier.createMultiples(3, 2)).toEqual([2, 4, 6]);
  expect(Multiplier.createMultiples(4, 5)).toEqual([5, 10, 15, 20]);
});
