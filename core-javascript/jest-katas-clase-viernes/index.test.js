const utils = require('./fizzbuzz.js');

test('return "fizz" if number is divisible by 3', () => {
    expect(utils.fizzBuzz(3)).toMatch("fizz");
    expect(utils.fizzBuzz(6)).toMatch("fizz");
    expect(utils.fizzBuzz(99)).toMatch("fizz");
    expect(utils.fizzBuzz(-3)).toMatch("fizz");
});

test('return "buzz" if number is divisible by 5', () => {
    expect(utils.fizzBuzz(5)).toMatch("buzz");
    expect(utils.fizzBuzz(10)).toMatch("buzz");
    expect(utils.fizzBuzz(100)).toMatch("buzz");
});

test('return "fizzbuzz" if number is divisible by 3 and 5', () => {
    expect(utils.fizzBuzz(15)).toMatch("fizzbuzz");
    expect(utils.fizzBuzz(30)).toMatch("fizzbuzz");
    expect(utils.fizzBuzz(90)).toMatch("fizzbuzz");
    expect(utils.fizzBuzz(0)).toMatch("fizzbuzz");
});

test('return "{number}" if number is not divisible by 3 neither 5', () => {
    expect(utils.fizzBuzz(8)).toMatch("8");
    expect(utils.fizzBuzz(4)).toMatch("4");
    expect(utils.fizzBuzz(-2)).toMatch("-2");
});

test('return input is not a number', () => {
    expect(utils.fizzBuzz("2")).toMatch("error");
    expect(utils.fizzBuzz("okay")).toMatch("error");
    expect(utils.fizzBuzz("2b")).toMatch("error");
});