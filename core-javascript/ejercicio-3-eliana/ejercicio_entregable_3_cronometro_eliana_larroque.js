let timerId = false;

function play() {
  let sec = document.getElementById('segundos');
  let min = document.getElementById('minutos');
  if (timerId === false) {
    let segundos = sec.textContent;
    let minutos = min.textContent;
    timerId = setInterval(() => {
      segundos++;

      if (segundos >= 60) {
        segundos = 0;
        minutos++;
      }

      if (segundos < 10) {
        sec.textContent = '0' + segundos;
      } else {
        sec.textContent = segundos;
      }

      min.textContent = minutos;
    }, 1000);
  } else {
    stop()
  }
}

function stop() {
  if (timerId !== false) {
    clearInterval(timerId);
    timerId = false;
  }
}
document.addEventListener('click', play);

module.exports = {
  play,
  stop
};
