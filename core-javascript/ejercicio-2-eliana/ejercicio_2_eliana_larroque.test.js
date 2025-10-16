/*Escribe un código que desarrolle una nueva clase de Arrays (SuperArray) de
manera que se pueda llamar al método snail(rowsCount, colsCount), el cual
transforma un array unidimensional (1D) en un array bidimensional (2D)
organizado en el patrón conocido como orden de recorrido en caracol.
- Los valores de entrada no válidos deben devolver un array vacío. Si
rowsCount * colsCount !== nums.length, la entrada se considera inválida.
El orden de recorrido en caracol comienza en la celda superior izquierda con
el primer valor del array original. A continuación, recorre toda la primera columna
de arriba hacia abajo, luego se mueve a la siguiente columna a la derecha y la
recorre de abajo hacia arriba. Este patrón continúa, alternando la dirección de
recorrido en cada columna, hasta cubrir por completo el array original.
Por ejemplo, dado el array de entrada
nums=[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
con rowsCount = 5 y colsCount = 4, la matriz de salida deseada se muestra a
continuación. Ten en cuenta que recorrer la matriz siguiendo las flechas
corresponde al orden de los números en el array original.
Notas sobre la entrada:
 0 <= nums.length <= 250
 1 <= nums[i] <= 1000
 1 <= rowsCount <= 250
 1 <= colsCount <= 250
RECUERDA: se deben hacer test para obtener el cien por cien de la nota */

// desarrollar una nueva clase de arrays con funcion snail.
//Si es un valor no valido ---> array vacio
//rowsCount * colsCount !== nums.length ---> array vacio
//  -input: [2,6,4] snail(3,5)
//  -input: [1,2,3,4,5] snail(2,3)
//  -input: [1, 2, 3, 4, 5, 7, 8] snail(3,2)
// Input válido normal
//  -input: [1, 2, 3, 4, 5, 6] snail(2,3)
//  -Input: [1,2,3,4,5,6,7,8,9,10,11,12] snail(3,4)
//  -input: [2,4,9,8,75,18,28,63,14,52] snail(5,2)
// Array vacío
//  -input: [] snail(1,5)
// Casos raros(1 fila, 1 columna,1 fila 3 columnas o 2 filas 1 columna)
//  -INPUT 0x0
//  -array de arrays input [[1,2,23][1,5]]
//  -input [1] snail(1,1)
//  -input [1,2] snail (1,2)
//  -input [1,2] snail (2,1)

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
  let arr5 = new SuperArray(1,2,3,4,5,6,7,8,9,10,11,12);
  expect(arr5.snail(3,4)).toEqual([
    [1, 6, 7, 12],
    [2, 5, 8, 11],
    [3, 4, 9, 10]
  ]);
  let arr6 = new SuperArray(2,4,9,8,75,18,28,63,14,52);
  expect(arr6.snail(5,2)).toEqual([
    [2, 52],
    [4, 14],
    [9, 63],
    [8, 28],
    [75, 18]
  ]);
});

test(`empty array as input`, () => {
  let arr7 = new SuperArray();
  expect(arr7.snail(1, 5)).toEqual([]);
});

