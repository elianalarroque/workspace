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

class SuperArray {
  constructor(array) {
    this.array = array;
  }

  snail(rowsCount, colsCount) {
    let result = [];
    if (rowsCount * colsCount !== this.array.length) {
      result = [];
    } else {
      for (let i = 0; i < rowsCount; i++) {
        result.push(new Array(colsCount));
        for (let j = 0; j < colsCount; j++) {
          if (j % 2 === 0) {
            result[i][j] = this.array[j];
          } else if (j % 2 === 1) {
            for (let x = rowsCount - 1; x >= 0; x--) {
              result[i][x] = this.array[x];
            }
          }
        }
      }
      return result;
    }
  }
}
