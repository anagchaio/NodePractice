const express = require('express');
const ruta = require('./src/routes/personajesRoutes.js');

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


app.use('/', ruta);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});