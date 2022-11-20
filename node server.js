const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const file = fs.readFileSync(__dirname + '/index.html');

  response.writeHead(200, {
    'content-Type': 'text/plain; charset=UFT-8'
  });
  response.end(file);
});

server.listen(3000, () => console.log('Servidor corriendo en puerto http://localhost:3000'));