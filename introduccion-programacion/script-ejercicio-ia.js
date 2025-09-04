const fs = require("fs");

// Leer archivo
const urls = fs.readFileSync("urls.txt", "utf-8").trim().split("\n");

// Contar ocurrencias
const counts = {};
urls.forEach(url => {
  counts[url] = (counts[url] || 0) + 1;
});

// Buscar la distinta
for (const [url, count] of Object.entries(counts)) {
  if (count === 1) {
    console.log("URL diferente:", url);
  }
}