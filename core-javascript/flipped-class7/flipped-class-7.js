// Escriba una función printNumbers(from, to) que genere un número cada segundo, comenzando desde from y terminando con to.

// Haz dos variantes de la solución.

// Usando setInterval.
// Usando setTimeout anidado.

function printNumbers(from, to) {
  let result = '';
  for (let i = from; i <= to; i++) {
    alert(result);
  }
  return result;
}

let segundero = setInterval(printNumbers, [0], [1], [5]);

//https://es.javascript.info/settimeout-setinterval