console.log('los tres mosqueteros en el area');
console.log(document.title);

const elementoDiv = document.getElementById('idDiv');

const titulo = document.getElementById('idH1');
const boton = document.getElementById('idBoton1');
let estadoBtn;
boton.addEventListener('click', () => {
  if (estadoBtn == true) {
    titulo.textContent = 'Esta cambiando el contenido en el DOM';
    estadoBtn = false;
  } else {
    titulo.textContent = "Aqui esta cambiando";
    estadoBtn = true;
  }
});
