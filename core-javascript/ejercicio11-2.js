// Preguntar un número de números a introducir, después, preguntar por
// esos números, por último, sacar por pantalla la suma de los mismos. Un
// ejemplo sería: “Dime un número” -> 3. Después, preguntar 3 veces: “uno
// de los sumandos es?” -> 4, 3, 2. Y por último, cuando se han conseguido
// todos los números, responder la suma -> 9.

alert("Hagamos una suma")
let total_numbers = parseInt(window.prompt("Cuántos números quieres sumar?"));
alert(`Perfecto, sumaremos ${total_numbers} números`)
let resultado = 0;

for (let count = 0; count < total_numbers; count++) {
    let number = parseInt(window.prompt(`Dime el número ${count + 1}`));
    
    resultado += number;
}

alert(`El resultado es: ${resultado}`)

