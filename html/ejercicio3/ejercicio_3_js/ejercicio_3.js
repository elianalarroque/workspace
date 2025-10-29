const lista = document.getElementById('list');
const input = document.getElementById('input-text');
const addBtn = document.getElementById('addBtn');

//Añadir tarea:

function addItem() {
  const texto = input.value;
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = texto;
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = 'x';
  btnEliminar.className = 'btn-eliminar';

  nuevoItem.innerHTML = `<span class="tarea-texto">${texto}   </span>`;
  nuevoItem.appendChild(btnEliminar);

  changesOnItems(nuevoItem);

  lista.appendChild(nuevoItem);

  input.value = '';
}

//añadir elementos a la lista con click
addBtn.addEventListener('click', addItem);

//añadir elementos a la lista con enter
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addItem();
  }
});

//tachar/destachar/eliminar elementos
function changesOnItems(item) {
  item.addEventListener('click', function () {
    this.classList.toggle('done');

    if (this.classList.contains('done')) {
      showNotification();
    }
  });
  const btnEliminar = item.querySelector('.btn-eliminar');
  btnEliminar.addEventListener('click', function (e) {
    e.stopPropagation(); 
    item.remove();
  });
}

//pedir permisos y mostrar notificacion
function showNotification() {
  Notification.requestPermission();

  if (Notification.permission === 'granted') {
    notifMsg();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      notifMsg();
    });
  }
}

//mensaje de notificacion
function notifMsg() {
  new Notification('To-Do List', {
    body: 'Perfecto, algo menos para hacer!',
    icon: 'https://marketplace.canva.com/4y2Vw/MAEvqo4y2Vw/1/tl/canva-checkmark-flat-icon-MAEvqo4y2Vw.png',
  });
}


//https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
//https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
//https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
//http://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
//https://developer.mozilla.org/es/docs/Web/API/Notification
//https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage ********