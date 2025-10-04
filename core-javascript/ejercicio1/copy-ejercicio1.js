// Escribe una función, llamada isLeapYear que:
// acepta un único argumento:
// -el argumento de entrada es de tipo str
// -el año puede tener un valor entre 1900  100000
// debe retornar un único valor de tipo booleano:
// -en caso de que el año sea bisiesto, el retorno será verdadero
// -si el año no es bisiesto, retornará falso.
// ejemplo:
// -input: 1990
// -output: False
// -1990 no es múltiplo de 4, así que no es un año bisiesto.
// No te olvides de realizar los tests necesarios para comprobar tu función
// Help Point: https://www.timeanddate.com/date/leapyear.html

function isLeapYear(year) {
  year = parseInt(year);
  let result;
  if (year < 1900 || year > 100000) {
    result = false;
  } else if (year % 400 == 0) {
    result = true;
  } else if (year % 100 == 0) {
    result = false;
  } else if (year % 4 == 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

module.exports = {
    isLeapYear,
};
