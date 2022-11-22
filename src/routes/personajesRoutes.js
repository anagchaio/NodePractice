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

router.post("/personajes/create", (request, response) => {
  const id = personajes.length;
  const nuevoPersonaje = {
    id: id + 1,
    ...request.body
  };
  personajes.push(nuevoPersonaje);
  fs.writeFileSync(path.resolve(__dirname, '../data/personajes.json'), JSON.stringify(personajes, null, ''));
  response.send('Personaje guardado con exito');
});

router.put("/personajes/:id/edit", (request, response) => {
  const id = request.params.id;
  const nuevaLista = personajes.map(personaje => {
    if (personaje.id == id) {
      return personaje = {
        id: personaje.id,
        ...request.body
      }
    }
    return personaje;
  });
  fs.writeFileSync(path.resolve(__dirname, '../data/personajes.json'), JSON.stringify(nuevaLista, null, ''));
  response.send('Personaje editado con exito');
});

router.delete("/personajes/:id/delete", (request, response) => {
  const id = request.params.id;
  const nuevaLista = personajes.filter(personaje => personaje.id != id);
  nuevaLista.forEach((personaje, i) => personaje.id = i + 1);

  fs.writeFileSync(path.resolve(__dirname, '../data/personajes.json'), JSON.stringify(nuevaLista, null, ''));
  response.send('Personaje eliminado con exito');
});