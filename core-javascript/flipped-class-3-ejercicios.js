/* 
Ejercicios
-
Arrays
1. Cuando defines un array copiándolo con el método spread en otro array,
¿modificar el segundo modifica el primero? ¿modificar el primero modifica el
segundo?
*/
//no, el segundo no modifica el primero si es una copia. utilizar el spread hace que cada uno sea independiente.

let array_example = [1, 2, 3];
let array_to_be_copied = [4, 5, 6];

let joined_arrays = [...array_example, ...array_to_be_copied];

console.log(joined_arrays);

array_example[0] = 3;

array_to_be_copied[1] = 20;
joined_arrays[0] = 28;

console.log(array_example);
console.log(array_to_be_copied);
console.log(joined_arrays);

/*2. Cuando defines un array de tamaño 4, ¿puedes asignar un valor al índice 26?*/

array_tamaño_cuatro = [1, 2, 3, 4];
array_tamaño_cuatro[26] = 'pruebo si me deja';
console.log(array_tamaño_cuatro);

/*por poder, se puede, deja 21 items vacios, pero por poder si, se puede*/

/*4. Realiza la función reverse de un array sin utilizar “.reverse”.*/

reverse_array = [1, 2, 3, 4];
let backwards = new Array();

for (let i = 3; i >= 0; i--) {
  backwards.push(reverse_array[i]);
}

/*podria usar let i = reverse_array.lenght, de esa forma no tendría 
por qué saber el length del array y funcionaria igual*/

/*5. Crea una función/programa que borre todos los elementos no deseados de
un array (undefined, false, strings vacías y nulls)
▪ Al menos prueba con estas tres listas:
let list_test_1 = [5, 4, 3, null, 2, "", 1];
let list_test_2 = ["", false, undefined];
let list_test_3 = [5, 4, 1, undefined];*/

let list_test_1 = [5, 4, 3, null, 2, '', 1];
let list_test_2 = ['', false, undefined];
let list_test_3 = [5, 4, 1, undefined];

let list_test_1_copy = new Array();

function erase_empty(array) {
  let limpio = new Array();
  for (let i = 0; i < array.length; i++) {
    let elemento = array[i];
    if (
      elemento !== null &&
      elemento !== undefined &&
      elemento !== false &&
      elemento !== ''
    ) {
      limpio.push(elemento);
    }
  }
  return limpio;
}


/*con metodo filter

function erase_empty1(array) {
    return array.filter(element => element !== null && element !== undefined && element !== false && element !== '')
}

*/

/*6. Crea una función que comprueba si dos arrays son idénticos. Uno de los
argumentos de la función será si debe ser idéntica en cuanto a contenido o
también en cuanto a orden.*/

function areTheSame(array1,array2) {
    
}