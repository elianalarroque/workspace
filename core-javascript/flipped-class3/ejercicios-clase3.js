/*15. Crea una función que convierta de Farenheit a Celsius. Define otra que
convierta de Celsius a Farenheit. Define una tercera que haga las dos cosas
dependiendo el input, es decir, se añadirá un argumento para decidir cómo
tiene que ser la conversión.*/


function farenheitToCelsius(farenheit_value) {
    let celsius_value = (farenheit_value - 32) / 1.8;
    return celsius_value;
}

console.log(farenheitToCelsius(338) == 170);

function celsiusToFarenheit(celsius_value) {
    let farenheit_value = (celsius_value * 1.8) + 32;
    return farenheit_value;
};

console.log(celsiusToFarenheit(10) == 50);

const convertTemperature = (value, isCelsius) => {
    let result;
    if (isCelsius) {
        result = celsiusToFarenheit(value);
    } else {
        result = farenheitToCelsius(value)
    }
    return result;
}

/*
esto podriamos hacer para que por defecto tenga un valor 
si el usuario no pone si celcius es true o false.

const convertTemperature = (value, isCelsius = true) => {
    let result;
    if (isCelsius) {
        result = celsiusToFarenheit(value);
    } else {
        result = farenheitToCelsius(value)
    }
    return result;
}

*/

/* para usar una funcion dentro de otra funcion


const convertTemperature_ = (value, function_to_convert) => {
    return function_to_convert(value);
}

*/