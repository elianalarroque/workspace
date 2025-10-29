let chrono = require('./ejercicio_entregable_3_cronometro_eliana_larroque');
let min;
let seg;

beforeEach(() => {
  document.body.innerHTML = `
    <div id="minutos">00</div>
    <div id="segundos">00</div>
  `;

  min = document.getElementById('minutos');
  seg = document.getElementById('segundos');
  chrono.stop()
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

test('timer counts 4 seconds', () => {
  chrono.play();
  jest.advanceTimersByTime(4000);
  expect(seg.textContent).toBe('04');
});

test('timer goes from 59 sec to 1 min', () => {
  chrono.play();

  jest.advanceTimersByTime(59000);
  jest.advanceTimersByTime(1000);

  expect(min.textContent).toBe('1');
  expect(seg.textContent).toBe('00');
});

test('timer pauses when play is called again', () => {
  chrono.play(); //empieza a contar
  jest.advanceTimersByTime(5000); //avanza al segundo 5

  expect(seg.textContent).toBe('05'); //chequea que esté en 5

  chrono.play(); // pausa
  jest.advanceTimersByTime(3000); // "avanza" o sea pasan 3 segundos

  expect(seg.textContent).toBe('05'); // sigue en 5
});

test('timer starts counting again from where it was paused', () => {
  chrono.play(); //empieza a contar
  jest.advanceTimersByTime(7000);

  chrono.play(); // pausa a los 7 segundos
  chrono.play(); // cuenta de nuevo

  jest.advanceTimersByTime(3000);
  expect(seg.textContent).toBe('10'); // empieza en el 7, pasan 3 seg asi q deberia llegar a 10
});

test('timer counts seconds and minutes', () => {
  chrono.play();

  jest.advanceTimersByTime(70000); //avanza hasta superar el minuto

  expect(min.textContent).toBe('1');
  expect(seg.textContent).toBe('10');
});