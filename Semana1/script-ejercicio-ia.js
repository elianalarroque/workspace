// diferente.js
const fs = require("fs");

// 1) Leemos el archivo completo y lo dividimos en líneas
const urls = fs.readFileSync("urls.txt", "utf-8")
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(Boolean); // quitamos líneas vacías

// 2) Contamos cuántas veces aparece cada URL y guardamos sus posiciones
const counts = new Map(); // URL -> número de apariciones
const positions = new Map(); // URL -> array de líneas donde aparece

urls.forEach((url, index) => {
  counts.set(url, (counts.get(url) || 0) + 1);
  if (!positions.has(url)) {
    positions.set(url, []);
  }
  positions.get(url).push(index + 1); // guardamos la línea (index+1)
});

// 3) Buscamos cuál es la URL que aparece solo una vez
for (const [url, count] of counts.entries()) {
  if (count === 1) {
    const line = positions.get(url)[0];
    console.log(`URL diferente encontrada: ${url}`);
    console.log(`Línea en el archivo: ${line}`);
    break;
  }
}