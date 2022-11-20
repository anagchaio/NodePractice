const express = require('express');
const app = express();
const fs = require('fs');

const port = 3000;
app.use(express.static('public'));

app.get("/", (request, response) => {
  const file = fs.readFileSync(__dirname + '/public/index.html');

  response.writeHead(200, {
    'content-Type': 'text/plain; charset=UFT-8'
  });
  response.end(file);
});

app.get("/personajes", (request, response) => {
  const personajesFile = fs.readFileSync(__dirname + '/src/data/personajes.json');
  response.send(JSON.parse(personajesFile));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});