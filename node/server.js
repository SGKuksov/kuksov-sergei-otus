const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const interval = 1000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({ status: 'ok', date: new Date() }));

  res.setTimeout(interval, () => {
    console.log(interval);
  });

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
