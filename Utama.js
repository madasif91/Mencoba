const http = require('http');
var randomWords = require('random-words');
console.log(randomWords());

const hostname = '127.0.0.3';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(randomWords() + '\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});