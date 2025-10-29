const button1 = document.getElementById('boton1');
let button2 = document.getElementById('boton2');
let button3 = document.getElementById('boton3');
let selector = document.getElementById('all');
let dataContainer = document.getElementById('data-container');

//función para fetch general.
async function makeFetch(url) {
  let fetchPetition = await fetch(url);
  let responseResult = await fetchPetition.json();
  displayResponse(responseResult);
  console.log('Status:', fetchPetition.status);
}

//funcion para mostrar respuesta general.
function displayResponse(data) {
  dataContainer.innerHTML = '';
  let table = `<table border="1" cellpadding = 10px> <tr>
  <th>Title</th> 
  <th>Body</th>
  </tr>`;
    if (Array.isArray(data)) {
      data.forEach((item) => {
        table += `<tr><td>${item.title}</td><td>${item.body}</td></tr>`;
      });
    } else {
      table += `<tr><td>${data.title}</td><td>${data.body}</td></tr>`;
    }

    table += '</table>';
    dataContainer.innerHTML = table;
}

// funcion para mostrar en el selector:
async function fillSelector() {
  let fetchPetition = await fetch(
    'https://jsonplaceholder.typicode.com/posts/',
  );
  let response = await fetchPetition.json();
  let selectId = '';
  for (let i = 0; i < response.length; i++) {
    selectId += `<option value="${response[i].id}">${response[i].id}</option>`;
  }
  selector.innerHTML = selectId;
}
//lamar a fillSelector para que se cargue una vez al abrir la página

fillSelector();

//boton "Articulo 1"
button1.addEventListener('click', () => {
  makeFetch('https://jsonplaceholder.typicode.com/posts/1');
});
//boton "Articulo 2" con selector
button2.addEventListener('click', () => {
  event.preventDefault();
  let numeroDelInput = selector.value;
  makeFetch(`https://jsonplaceholder.typicode.com/posts/${numeroDelInput}`);
});

//boton "Todos los artículos" (tabla o lista)
button3.addEventListener('click', () => {
  makeFetch('https://jsonplaceholder.typicode.com/posts/');
});
