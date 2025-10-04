 // /* 
 // 1. Ejercicios del siguiente enlace: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
 // */
 // /* 
 // a) Largest of Two Integers
 // Write a JavaScript program that displays the largest integer among two integers.
 // */
 let num1 = 10
 let num2 = 5
 if (num1 > num2) {
     console.log(`This is the largest integer num: ${num1}`);
 } else if (num2 > num1) {
     console.log(`This is the largest num: ${num2}`);
 } else {
     console.log(`The numbers are the same`)
 };
 // /* 
 // b) Sign of Product of Three Numbers
 // Write a JavaScript conditional statement to find the sign of the product of three numbers. 
 // Display an alert box with the specified sign.
 // Sample numbers : 3, -7, 2
 // Output : The sign is -
 // */
 let firstNumber = 3;
 let secondNumber = -7;
 let thirdNumber = 2;
 if (firstNumber * secondNumber * thirdNumber >= 0) {
     alert("The sign is +");
 } else {
     alert("The sign is -");
 };
 // /*
 // c. Sort Three Numbers
 // Write a JavaScript conditional statement to sort three numbers. 
 // Display an alert box to show the results.
 // Sample numbers : 0, -1, 4
 // Output : 4, 0, -1
 // */
 let first_number = 7;
 let second_number = 38;
 let third_number = 4;
 if (first_number >= second_number && first_number >= third_number) {
     if (second_number >= third_number) {
          alert(`${first_number}, ${second_number}, ${third_number}`);
     } else {
         alert(`${first_number}, ${third_number}, ${second_number}`);
     };
 } else if (second_number >= first_number && second_number >= third_number) {
     if (first_number >= third_number) {
         alert(`${second_number}, ${first_number}, ${third_number}`);
     } else {
         alert(`${second_number}, ${third_number}, ${first_number}`);
     }
 } else if (third_number >= first_number && third_number >= second_number) {
     if (first_number >= second_number) {
         alert(`${third_number}, ${first_number}, ${second_number}`);
     } else {
         alert(`${third_number}, ${second_number}, ${first_number}`);
     }
 }
 let numeros_menor_mayor = [first_number, second_number, third_number];
 numeros_menor_mayor.sort((a, b) => a - b);
 alert(numeros_menor_mayor);
 // /*
 // d. Largest of Five Numbers
 // Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
 // Sample numbers : -5, -2, -6, 0, -1
 // Output : 0
 // */
 let number1 = -5;
 let number2 = -6;
 let number3 = 0;
 let number4 = -1;
 let number5 = -2;
 if (number1 >= number2 && number1 >= number3 && number1 >= number4 && number1 >= number5) {
     alert(`The largest number is ${number1}`);
 } else if (number2 >= number1 && number2 >= number3 && number2 >= number4 && number2 >= number5) {
     alert(`The largest number is ${number2}`);
 } else if (number3 >= number1 && number3 >= number2 && number3 >= number4 && number3 >= number5) {
     alert(`The largest number is ${number3}`);
 } else if (number4 >= number1 && number4 >= number2 && number4 >= number3 && number4 >= number5) {
     alert(`The largest number is ${number4}`);
 } else if (number5 >= number1 && number5 >= number2 && number5 >= number3 && number5 >= number4) {
     alert(`The largest number is ${number5}`);
 };
 /*
 // e. Odd or Even Loop
 // Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen. Angular Vue course
 // Sample Output :
 // "0 is even"
 // "1 is odd"
 // "2 is even"
 // */
 for (let start_number = 0; start_number <= 15; start_number++) {
     if (start_number % 2 == 0) {
         alert(`${start_number} is even`);
     } else {
         alert(`${start_number} is odd`);
     }
 }
 // /* 
 // 2. Crea una página web que te haga dos preguntas por medio del prompt
 // y que en caso de que respondas bien a las dos, te lo haga saber. De la
 // misma manera, si fallas en alguna te contestará con un texto
 // informándote de tu error.
 // */
 let primeraPregunta = window.prompt("1. ¿Qué forma tiene el planeta tierra?\nplana\nesferica");
 let segundaPregunta = window.prompt("2. ¿Cuál es el satélite natural de nuestro planeta?\nLuna\nTitan")
 if (primeraPregunta.toLowerCase() == "esferica" && segundaPregunta.toLowerCase() == "luna") {
     alert("Muy bien! Has contestado correctamente ambas preguntas")
 } else if (primeraPregunta.toLowerCase() == "plana" || segundaPregunta.toLowerCase() == "titan") {
     alert("Lo siento, te haz equivocado en al menos una respuesta.");
 };
 // /*3. Realiza una historia interactiva, por medio de condicionales. Se trata de
 // plantear un guión en el que la página web te va haciendo una pregunta,
 // y puedes elegir entre varias respuestas. En función de la respuesta que
 // elijas, irá cambiando la historia. Este ejercicio lo haremos en clase.*/
 // //interactive-story.js
 // /* 
 // 4. Crea una página web que te pregunte de qué quieres saber el precio.
 // Puede ser una tienda de ropa, un supermercado, una ferretería… En
 // función de la contestación del cliente te responde con el precio.
 // ▪ Extra: ¿qué pasa con los idiomas, vas a escribir en castellano,
 // inglés?
 // ▪ Extra: ¿qué pasa con las mayúsculas, minúsculas?
 // */
 alert("Bienvenid@ a mi tienda!");
 let articulos_en_venta = window.prompt("¿De qué producto necesitas saber el precio?\nArroz\nLeche\nHuevos")
 if (articulos_en_venta.toLowerCase() == "leche") {
     let opciones_leche = window.prompt("¿Qué tipo de leche?\nentera\ndesnatada");
     if (opciones_leche.toLowerCase() == "desnatada") {
         alert("La leche desnatada cuesta €0,90");
     } else if (opciones_leche.toLowerCase() == "entera") {
         alert("La leche entera cuesta €0.75")
     } else {
         alert("Lo siento, no tengo ese tipo de leche.")
     };
 } else if (articulos_en_venta.toLowerCase() == "arroz") {
     let opciones_arroz = window.prompt("¿Qué tipo de arroz?\nintegral\nredondo");
     if (opciones_arroz.toLowerCase() == "integral") {
         alert("El precio del arroz integral es de €1,45");
     } else if (opciones_arroz.toLowerCase() == "redondo") {
         alert("El precio del arroz redondo es de €1,10")
     } else {
         alert("Lo siento, no tenemos ese tipo de arroz.")
     }
 } else if (articulos_en_venta.toLowerCase() == "huevos") {
     let opciones_huevos = window.prompt("¿Qué tipo de huevos?\ncamperos\necologicos");
     if (opciones_huevos.toLowerCase() == "camperos") {
         alert("El precio de los huevos camperos es de €2,50");
     } else if (opciones_huevos.toLowerCase() == "ecologicos") {
         alert("El precio de los huevos ecologicos es de €3,50");
     } else {
         alert("Lo siento, no tenemos ese tipo de huevos");
     }
 } else {
     alert("Lo siento, no tenemos ese artículo a la venta.")
 };
 /*
 5. Crea un script que pida al usuario el diámetro de una rueda y su grosor
 (en metros) y a través de condicionales if realice las siguientes
 operaciones:
 -
 ▪Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La
 rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero
 mayor que 0.8 debe mostrarse el mensaje “La rueda es para un
 vehículo mediano”. Si no se cumplen ninguna de las condiciones
 anteriores debe mostrarse por pantalla el mensaje “La rueda es
 para un vehículo pequeño”. Este mensaje tiene que aparecer
 siempre, independientemente de las siguientes condiciones.
 ▪Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si
 el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un
 grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor
 para esta rueda es inferior al recomendado”
 */




 
 /*
 6. Imprimir los números del 1 al 100 de uno en uno como alerta o por
 pantalla.
 */
 for (let num1_100 = 1; num1_100 <= 100; num1_100++) {
     document.write(num1_100 + "<br>");
 };
 // /*
 // 7. Imprimir sólo los números pares del 1 al 100 en log de consola o por
 // pantalla.
 // */
 for (let numero_par = 1; numero_par <= 100; numero_par++) {
     if (numero_par % 2 == 0) {
         document.write(numero_par + "<br>");
     };
 };
 // /*
 // 8. Imprimir sólo los números múltiplos de 20 del 1 al 1000 por pantalla.
 // */
 for (let multiplo_20 = 1; multiplo_20 <= 1000; multiplo_20++) {
     if (multiplo_20 % 20 == 0) {
         document.write(multiplo_20 + "<br>");
     };
 };

 // /* tambien puedo resolverlo haciendo multiplos pero cumplo con la consigna?*/
 // for (let multiplo_20 = 1; multiplo_20 <= 50; multiplo_20++) {
 //     document.write((multiplo_20 * 20) + "<br>");
 // };
 /*
 9. Imprimir por pantalla las tablas de multiplicar del 0 al 9
 */
 for (let tablas_multiplicar = 0; tablas_multiplicar <= 9; tablas_multiplicar++) {
     document.write(`<h1> Tabla del ${tablas_multiplicar} </h1>`)
     for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
          document.write(`${tablas_multiplicar} x ${multiplicador} = ${tablas_multiplicar * multiplicador} <br>`)
     };
 };

/* otra forma es la que vimos en la clase del viernes 26/10:

const first_item = 0;
const last_item = 9;

for (let table_value = first_item; table_value <= last_item; table_value++) {
    document.write(`<h3>Tabla del ${table_value}</h3>`);
    for (let i = first_item; i <= last_item; i++) {
            const resultado = table_value * i;
            document.write(`${table_value} x ${i} = ${resultado}<br>`)}
}

*/

/*
10. Preguntar un número por input, después, imprimir todos los números
impares hasta él. Un ejemplo sería: “Dime un número entero”. Le
respondemos 22. Nos saca por pantalla: 1, 3, 5, 7, …, 21.
*/

let numero_entero = parseInt(window.prompt("Dime un numero entero"));

for(let numero_impar = 1; numero_impar <= numero_entero; numero_impar++) {
    if(numero_impar % 2 == 1) {
    document.write(`${numero_impar}, `)
    };
};


// /*!!!!!!!!!!!!!!!!!!!!!!!PREGUNTAR AL PROFESOR SOBRE LA , AL FINAL*/


// /*
// 11. Preguntar un número de números a introducir, después, preguntar por
// esos números, por último, sacar por pantalla la suma de los mismos. Un
// ejemplo sería: “Dime un número” -> 3. Después, preguntar 3 veces: “uno
// de los sumandos es?” -> 4, 3, 2. Y por último, cuando se han conseguido
// todos los números, responder la suma -> 9.
// */

//EJERCICIO HECHO EN CLASE EL VIERNES 26/10 ./ejercicio11-2.js

/*
12. Preguntar por pantalla un número entero y que se imprima por pantalla
un triángulo tipo, siendo el número entero el número de líneas que se
imprimen. Un ejemplo sería con el número 5:

1
31
531
7531
97531


*/

let triangle_lines = parseInt(window.prompt("Dime un numero entero"))

for(let i = 1; i <= triangle_lines; i++) {
    let numbers_line = 2 * i - 1;
    let line = " ";

    for (let j = 0; j < i; j++) {
        line += numbers_line - 2 * j + " ";

        }
    document.write(line + '<br>');
}

