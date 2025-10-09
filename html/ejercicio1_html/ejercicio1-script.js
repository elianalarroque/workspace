const submitButton = document.getElementById('botonEnviar');
const commentInput = document.getElementById('comentario');
const commentsContainer = document.getElementById('comments-container');

submitButton.addEventListener('click', function () {
  event.preventDefault();
  const comment = commentInput.value;
  const commentElement = document.createElement('div');
  commentElement.textContent = comment;
  commentsContainer.appendChild(commentElement);
  commentInput.value = '';
});
