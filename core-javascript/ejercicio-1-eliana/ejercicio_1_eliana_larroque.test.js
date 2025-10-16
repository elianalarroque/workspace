const leapyear = require('./ejercicio_1_eliana_larroque');

test('verifies if leap year is % 400 == 0', () => {
  expect(leapyear.isLeapYear('2000')).toBe(true);
  expect(leapyear.isLeapYear('2400')).toBe(true);
  expect(leapyear.isLeapYear('20000')).toBe(true);
  expect(leapyear.isLeapYear('40000')).toBe(true);
});
test('verifies that years divisible by 100 but not by 400 are not leap years', () => {
  expect(leapyear.isLeapYear('1900')).toBe(false);
  expect(leapyear.isLeapYear('2200')).toBe(false);
  expect(leapyear.isLeapYear('2300')).toBe(false);
  expect(leapyear.isLeapYear('3500')).toBe(false)
});
test('verifies if leap year is % 4 == 0', () => {
  expect(leapyear.isLeapYear('2024')).toBe(true);
  expect(leapyear.isLeapYear('1904')).toBe(true);
  expect(leapyear.isLeapYear('6004')).toBe(true);
  expect(leapyear.isLeapYear('4008')).toBe(true);
});

test('verifies a year that does not pass any conditionals (non-leap years)', () => {
  expect(leapyear.isLeapYear('2001')).toBe(false);
  expect(leapyear.isLeapYear('99999')).toBe(false);
  expect(leapyear.isLeapYear('3021')).toBe(false);
  expect(leapyear.isLeapYear('8006')).toBe(false);
});


