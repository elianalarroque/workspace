//ejercicio api github.

async function getUserAvatar(username) {
  const response = await fetch(`https://api.github.com/users/elianalarroque`);
  let userInfo = await response.json();
  console.log(userInfo);
  console.log(userInfo.avatar_url);
  let userAvatarDiv = document.getElementById("userAvatar");
  userAvatarDiv.innerHTML += `<img src= ${userInfo.avatar_url}></img>`;
}