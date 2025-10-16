// desarrollar una nueva clase de arrays con funcion snail.
const { SuperArray } = require('./ejercicio_2_eliana_larroque.js');

test('defines snail() as a method', () => {
  let tester = new SuperArray();
  expect(typeof tester.snail).toBe('function');
});

test(`input not valid`, () => {
  let arr1 = new SuperArray(2, 6, 4);
  expect(arr1.snail(3, 5)).toEqual([]);
  let arr2 = new SuperArray(1, 2, 3, 4, 5);
  expect(arr2.snail(2, 3)).toEqual([]);
  let arr3 = new SuperArray(1, 2, 3, 4, 5, 7, 8);
  expect(arr3.snail(3, 2)).toEqual([]);
});

test(`input valid`, () => {
  let arr4 = new SuperArray(1, 2, 3, 4, 5, 6);
  expect(arr4.snail(2, 3)).toEqual([
    [1, 4, 5],
    [2, 3, 6],
  ]);
  let arr5 = new SuperArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
  expect(arr5.snail(3, 4)).toEqual([
    [1, 6, 7, 12],
    [2, 5, 8, 11],
    [3, 4, 9, 10],
  ]);
  let arr6 = new SuperArray(2, 4, 9, 8, 75, 18, 28, 63, 14, 52);
  expect(arr6.snail(5, 2)).toEqual([
    [2, 52],
    [4, 14],
    [9, 63],
    [8, 28],
    [75, 18],
  ]);
});

//Casos extremos-raros

test(`empty array as input`, () => {
  let arr7 = new SuperArray();
  expect(arr7.snail(1, 5)).toEqual([]);
});
test(`array of only one element, one column, one row`, () => {
  let arr8 = new SuperArray(1);
  expect(arr8.snail(1, 1)).toEqual([[1]]);
  let arr9 = new SuperArray(5);
  expect(arr9.snail(1, 1)).toEqual([[5]]);
});

test(`empty array as input`, () => {
  let arr10 = new SuperArray();
  expect(arr10.snail(1, 5)).toEqual([]);
});

test(`empty array as input, with parameters of 0 rows, 0 cols `, () => {
  let arr11 = new SuperArray([0]);
  expect(arr11.snail(0, 0)).toEqual([]);
});

test(`array of array as input`, () => {
  let arr12 = new SuperArray([1, 2, 23], [1, 5]);
  expect(arr12.snail(2, 2)).toEqual([]);
});

test(`array of two elements, two rows, one column`, () => {
  let arr13 = new SuperArray(1, 2);
  expect(arr13.snail(2, 1)).toEqual([[1], [2]]);
});

test(`array of two elements, one row, two columns`, () => {
  let arr14 = new SuperArray(1, 2);
  expect(arr14.snail(1, 2)).toEqual([[1, 2]]);
});
