const express = require('express');

const router = express.Router();
const fs = require('fs');
const path = require('path');

module.exports = router;

const personajesFile = fs.readFileSync(path.resolve(__dirname + '/../data/personajes.json'));
const personajes = JSON.parse(personajesFile);


router.get("/personajes", (request, response) => {
  response.send(personajes);
});

router.get("/personaje/:id", (request, response) => {
  const id = request.params.id;
  const personaje = personajes.filter(personaje => personaje.id == id);
  response.send(personaje);

});