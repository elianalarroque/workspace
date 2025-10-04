const leapyear = require('./copy-ejercicio1');

test('verifies if leap year is % 400 == 0', () => {
  expect(leapyear.isLeapYear('2000')).toBe(true);
});
test('verifies if leap year is % 100 == 0 && leap year is % 400 == 1', () => {
  expect(leapyear.isLeapYear('1900')).toBe(false);
});
test('verifies if leap year is % 4 == 0', () => {
  expect(leapyear.isLeapYear('2024')).toBe(true);
});

test('accepts string value and still works', () => {
  expect(leapyear.isLeapYear('2000')).toBe(true);
});

test('returns false for non-numeric input', () => {
  expect(leapyear.isLeapYear('abc')).toBe(false);
});

test('verifies a year that does not pass any conditionals', () => {
  expect(leapyear.isLeapYear('2001')).toBe(false);
});

test('verifies what happens when input is not on the range of years', () => {
  expect(leapyear.isLeapYear('1899') || leapyear.isLeapYear('100001')).toBe(false);
});

