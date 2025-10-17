// 1. Crea un intervalo que vaya imprimiendo un 1 cada segundo por pantalla o por
// consola si es un programa que no utiliza web.
let delayTime = window.prompt("Introduce un numero")

function printOne() {
    window.document.writeln("1")
}

setInterval(printOne, delayTime * 1000);

// 2. Crea una función que cuando el usuario clique el ratón se imprima un 1 (en
// este caso sí que tendrás que utilizar web).


// 3. Crea una función que cuando el usuario clique el ratón espere un segundo e
// imprima un 1 (en este caso sí que tendrás que utilizar web)


//add event listener

function waitAndPrint() {
    setTimeout(() => {
        window.document.writeln("1")
    }, 1000)

}

window.document.addEventListener("click", waitAndPrint )

//add event listener windows on click
window.onclick = () => {
    waitAndPrint();
}
