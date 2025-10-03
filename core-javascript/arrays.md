ARRAYS

Pueden almacenar cualquier tipo de datos. cero indexed. el primer elemento es el 0.

el indice es como accedemos al array.
si intentamos acceder a un indice que no existe, nos devuelve un undefined.

para recorrer o iterar en un array

bucles for. este me da dos datos, valor e indice (para objetos)
o 

```
let frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}
```
bucles for of.. me da solo el valor del array. eso lo uso cuando no me interesa en donde está ubicado porque utilizaré TODO el valor del array
(no es para objetos, es para arrays).

método .forEach()
lo unico que le permite es que haya una funcion dentro.

```
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta) // imprime el elemento en la posición i
})

```
tiene tres parametros pero podemos darle solo uno, dos o los tres

```
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach((fruta) => {
  console.log(fruta) // imprime el elemento en la posición i
})

```
droncal@veridas.com

