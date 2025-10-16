class SuperArray extends Array {
  constructor(...args) {
    if (args.length === 1) { /*Para que al crear una superarray de solo 1 numero tome en cuenta el length y no me de mal el test de [1]1rx1c*/
      super();
      this.push(args[0]);
    } else {
      super(...args);
    }
  }

  snail(rowsCount, colsCount) {
    let matriz = [];

    if (rowsCount * colsCount !== this.length) {
      matriz;
    } else {
      let indice = 0;

      for (let i = 0; i < rowsCount; i++) {
        let fila = new Array(colsCount);
        matriz.push(fila);
      }
      for (let col = 0; col < colsCount; col++) {
        if (col % 2 === 0) {
          for (let fila = 0; fila < rowsCount; fila++) {
            matriz[fila][col] = this[indice++];
            
          }
        } else {
          for (let fila = rowsCount - 1; fila >= 0; fila--) {
            matriz[fila][col] = this[indice++];
          }
        }
      }
    }
    return matriz;
  }
}

module.exports = {
  SuperArray,
};
