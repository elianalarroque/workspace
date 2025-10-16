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
};

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
};

/*con metodo filter segun ia cuando le mostre mi codigo
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!COMPLICADO PARA MI CEREBRO, REPASAR METODO Y FUNCIONES FLECHAS/ANONIMAS

function erase_empty1(array) {
    return array.filter(element => element !== null && element !== undefined && element !== false && element !== '')
}

*/

/*6. Crea una función que comprueba si dos arrays son idénticos. Uno de los
argumentos de la función será si debe ser idéntica en cuanto a contenido o
también en cuanto a orden.*/

function compareArrays(array1, array2) {
  let result;
  if (array1.length !== array2.length) {
    result = false;
  } else {
    function compareContent(element, index) {
      return element === array2[index];
    }
    result = array1.every(compareContent);
  }
  return result;
}

let arraytocompare1 = [1, 2, 3];
let arraytocompare2 = [1, 2, 3];
let arraytocompare3 = [1, 3, 2];

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!PREGUNTAR A DAVID SI SE PUEDE HACER DIFERENTE, Y PREGUNTAR POR MEMORY CARD GAME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

/* 7.Crea una función llamada “create_multiples” que tenga dos argumentos: por
un lado, un valor de tamaño de array y por otro el número del cuál se van a
obtener múltiplos. La función debe devolver un array con el tamaño puesto
de múltiplos de ese número. Por ejemplo: (2, 4) => [4, 8]*/

function create_multiples(arrayLength, multiplier) {
  let result = new Array();
  for (let i = 1; i <= arrayLength; i++) {
      result.push(i * multiplier)
  }
  return result;
}

/*8. Crea una función “convert_ararys_to_strings” a la cual le introduzcas dos
arrays: uno con nombres y otro con edades. La función debe sacar por
pantalla las frases con el nombre más los años que tiene, de tal manera que
para [Perico, Juan], [22, 33] se printee por pantalla:
Perico tiene 22 años.
Juan tiene 33 años.
*/
names = ["Juan", "Pedro", "Lucas"]
ages = [30, 31, 32]

function convert_arrays_to_strings(array_names,array_ages) { 
  for (let i = 0; i < array_names.length; i++) {
    console.log(`${array_names[i]} tiene ${array_ages[i]} años.`);
  }
};

convert_arrays_to_strings(names,ages);


// PREGUNTAR A DAVID!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
9. Crea un programa (en una página web o con un archivo .js) que te vaya
preguntando por input valores hasta que pongas un cero, después, tiene que
printear todos los valores por pantalla. Input: 2, 3, 4, hola, 0. Output: 2, 3, 4,
hola.
*/






/*17. Pedir que se introduzca un número de dni, después, calcular si el dni es
verdadero o no en función de su formato y el número de dígitos. Es decir,
habría que comprobar el número de dígitos y la letra.*/

function dniValidator(dni) {
  let result = true;
  for (let i = 0; i < dni.length; i++) {
    if (dni.length > 9) {
      result = false;
      break;
    } else if (dni.includes("string")) {
      result = false;
      break;
  } else if (dni)
return result;
} 

}


