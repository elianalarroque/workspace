const Multiplier = require('./ejercicio_0_eliana_larroque');

test('creates an array that is number1 long and are multiples of number2', () => {
    expect(Multiplier.createMultiples(4,2)).toContain(8);
    expect(Multiplier.createMultiples(4,2)).toHaveLength(4);
    expect(Multiplier.createMultiples(2,3)).toEqual([3,6]);
});