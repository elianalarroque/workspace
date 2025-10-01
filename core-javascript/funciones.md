**¿Qué es una función en JavaScript?**

Las funciones son bloques de código que realizan una tarea específica cuando se llaman 

**¿Cuál es la sintaxis básica de una función en JavaScript?**


La sintaxis básica de una función en JavaScript es mediante la palabra clave "function", seguida del nombre de la función y un bloque de código entre llaves.

```
function nombreFuncion() { ... }
```

Por qué de las funciones.

No hace falta repetir el código para acciones que ya hemos definido

esas funciones las vamos a usar con otros argumentos o parametros.

DRY
DONT REPEAT YOURSELF

Deberia realizar UNA TAREA especifica.

```
function saludar() {
    console.log("Hola");
}

```

las funciones HACEN

Devolviendo un resultado:

**RETURN**

```

function sumar() {
    return 1+1
};

```

Math.random() devuelve un numero aleatorio entre 0 y 1, con decimales.
Math.floor() redondea el número hacia abajo
Math.round() redondea como típicamente lo hacemos

```
function getRandomNumber() {
  // recuperamos un número aleatorio entre 0 y 1
  const random = Math.random() // por ejemplo: 0.6803487380457318

  // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 10 // -> 6.803487380457318

  // redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied) // -> 6

  // le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1 // -> 7

  // devolvemos el resultado
  return result
}
```

**¿Qué devuelve una función declarada con function si no tiene una declaración de retorno explícita?**

Si no se especifica un valor de retorno, la función devuelve undefined.


**Parámetro y argumento**

```
function saludar(nombre) {
  console.log('Hola ' + nombre)
}
```

las funciones se pueden tratar como si fuesen variables.
podemos tener una funcion cuyo parametro o argumento sea otra funcion.

```
function saludar(nombre) {
  console.log('¡Hola, ' + nombre + '!')
}

function despedir(nombre) {
  console.log('¡Adiós, ' + nombre + '!')
}

// Función que recibe OTRA FUNCIÓN como parámetro
function procesarUsuario(nombre, accion) {
  accion(nombre) // Ejecutamos la función que nos pasaron
}

// Pasamos diferentes funciones como parámetros
procesarUsuario('Ana', saludar)   // ¡Hola, Ana!
procesarUsuario('Luis', despedir) // ¡Adiós, Luis!
```


otro ejemplo:

```

function sumar(a, b) {
  return a + b
}

function multiplicar(a, b) {
  return a * b
}

function restar(a, b) {
  return a - b
}

// Función que recibe una operación como parámetro
function calcular(num1, num2, operacion) {
  const resultado = operacion(num1, num2)
  console.log('El resultado es: ' + resultado)
  return resultado
}

// Usamos diferentes operaciones
calcular(5, 3, sumar)       // El resultado es: 8
calcular(5, 3, multiplicar) // El resultado es: 15
calcular(5, 3, restar)      // El resultado es: 2

```

si los parametros tiene un orden hay que llamarlos en ese orden

RECURSIVIDAD: Ejercicio típico de entrevista.!!!!!! (Serie de Fibonacci)
Una funcion se llama a si misma. 


**funciones flecha**

la estructura de la la funcion
```
const mifuncionflecha = () => {...}
```
la funcion flecha con retur implicito es mucho mas legible