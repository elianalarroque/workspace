// Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.

// Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
function getKeysOfBooleanValues(obj) {
  let result = [];
  for (let property in obj) {
    if (typeof obj[property] === 'boolean') {
      result.push(property);
    }
  }
  return result;
}

/*1.9 Crea una clase llamada Circle que tenga como entrada el radio en el
constructor. Debería tener dos métodos, uno para calcular el perímetro
(get_perimeter) y otro para calcular el área (get_area). También debería
poder calcular el volumen del cilindro que quedaría dada una altura
(get_volume_by_height).*/

class Circle {
  constructor(radio) {
    this.radio = radio;
  }
  get_perimeter() {
    return 2 * Math.PI * this.radio;
  }
  get_area() {
    return Math.PIT * Math.pow(this.radio, 2);
  }
  get_volume_by_height(height) {
    return this.get_area * height;
  }
}


module.exports = {
  Circle
}


describe("Circle Class")
test("")