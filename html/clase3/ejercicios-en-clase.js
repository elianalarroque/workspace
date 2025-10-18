
/* Creamos nodos HTML */
let miEtiqueta = document.createElement("p");
let miTexto = document.createTextNode("Soy capaz de insertar elementos en el DOM");
/* Buscamos nodo padre existente*/
let element = document.getElementsByTagName("body")[0];
/* Añadimos nodos; Usamos orden correcto */
miEtiqueta.appendChild(miTexto);
element.appendChild(miEtiqueta);

function myFunc() {
 alert('js executed externally 💎') 
 document.getElementById("resultado").innerHTML = '💃💃' ;
}
document.getElementById("xx").onclick = myFunc;