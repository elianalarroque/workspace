// 2. Mocking functions: mapWithCb
// The mapwithCb function accepts an array and a callback. It maps over the array with the callback, so we can expect the callback function to be called multiple times.

// Your task is to write tests for mapWithCb, which will involve writing a mock function (aka a spy) for the callback function. The test cases have been provided for you.

const maps = require('./clase-4.js');
const mockedFunction = jest.fn(() => 'mocked return value')


test('throws an error if first argument is not an array', () => {
  expect(() => maps.mapWithCb(1, () => {})).toThrow(Error)

  });
  
test('throws an error if second argument is not a function', () => {
  expect(() => maps.mapWithCb([], "hola")).toThrow(Error);

  });
  
test('calls the given function at least once', () => {
expect(maps.mapWithCb([1], mockedFunction)).toEqual([2]);
expect(mockedfunction).toHaveBeenCalled()
  });

test('calls the given function a number of times equal to the length of the given array', () => {

  expect(maps.mapWithCb)
  });

test('calls the given function with any one item from the given array', () => {
expect(maps.mapWithCb)
  });

test('calls the given function a second time with the second item in the given array', () => {
expect(maps.mapWithCb)
  });

test('calls the given function a final time with the final item in the given array', () => {
expect(maps.mapWithCb)
  });